async function acuantUpload(endpoint, auth, createJson, imageBinary, doMetrics, doVerification, getImage) {
    let url = endpoint + "/AssureIDService/Document/Instance";
    try {
        const createRes = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + auth,
                "Accept": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(createJson)
        });
        if (!createRes.ok) {
            console.log("Invalid response from " + url + ". Status was: " + createRes.status);
            return handleStatus(createRes.status);
        }
        const id = await createRes.json();
        if (!id) {
            console.log("No Instance ID. Response from " + url);
            return null;
        }
        url = endpoint + "/AssureIDService/Document/" + id + "/Image?side=0&light=0&metrics=" + doMetrics;
        const uploadRes = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "image/jpeg",
                "Authorization": "Basic " + auth,
                "Accept": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: imageBinary
        });
        if (!uploadRes.ok) {
            console.log("Invalid response from " + url + ". Status was: " + uploadRes.status);
            return handleStatus(uploadRes.status);
        }		
        url = endpoint + "/AssureIDService/Document/" + id + "/Classification";
        finalRes = {};
        const classRes = await fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Authorization": "Basic " + auth,
                "Accept": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer"
        });
        if (!classRes.ok) {
            console.log("Invalid response from " + url + ". Status was: " + classRes.status);
            return handleStatus(classRes.status);
        }
        let docClass = await classRes.json();
        if (!docClass) {
            console.log("No Classification. Response from " + url);
            return null;
        }
		let metrics = null;
		let verif = null;
		let img = null;
		if (doMetrics) {
			url = endpoint + "/AssureIDService/Document/" + id + "/Image/Metrics?side=0&light=0";
			const imageRes = await fetch(url, {
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				credentials: "omit",
				headers: {
					"Authorization": "Basic " + auth,
					"Accept": "application/json"
				},
				redirect: "follow",
				referrerPolicy: "no-referrer"
			});
			if (!imageRes.ok) {
				console.log("Invalid response from " + url + ". Status was: " + imageRes.status);
				return handleStatus(imageRes.status);			
			}
			metrics = await imageRes.json();
			if (!metrics) {
				console.log("No metrics. Response from " + url);
				return null;			
			}
		}		
		if (getImage) {
			url = endpoint + "/AssureIDService/Document/" + id + "/Image?side=0&light=0&quality=100";
			const imgRes = await fetch(url, {
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				credentials: "omit",
				headers: {
					"Content-Type": "application/octet-stream",
					"Authorization": "Basic " + auth,
				},
				redirect: "follow",
				referrerPolicy: "no-referrer",
			});
			if (!imgRes.ok) {
				console.log("Invalid response from " + url + ". Status was: " + imgRes.status);
				return handleStatus(imgRes.status);			
			}
			img = await imgRes.blob();
			img = await img.arrayBuffer();
		}	
		if (doVerification && docClass.Type && !docClass.Type.IsGeneric) {
			url = endpoint + "/AssureIDService/Document/" + id;
			const verifRes = await fetch(url, {
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				credentials: "omit",
				headers: {
					"Authorization": "Basic " + auth,
					"Accept": "application/json"
				},
				redirect: "follow",
				referrerPolicy: "no-referrer"
			});
			if (!verifRes.ok) {
				console.log("Invalid response from " + url + ". Status was: " + verifRes.status);
				return handleStatus(verifRes.status);			
			}
			verif = await verifRes.json();
			if (!verif) {
				console.log("No verification. Response from " + url);
				return null;			
			}
			if (verif.Classification) {
				docClass = verif.Classification;
			}

			const del = await fetch(url, {
				method: "DELETE",
				mode: "cors",
				cache: "no-cache",
				credentials: "omit",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Basic " + auth,
					"Accept": "application/json"
				},
				redirect: "follow",
				referrerPolicy: "no-referrer",
			});
			if (!del.ok) {
				console.log("!!! INSTANCE NOT DELETED !!!");
			} else {
				console.log("Instance deleted");
			}
		}	
		return {
			verif : verif,
			docClass : docClass,
			metrics : metrics,
			image : img,
		}
    } catch (error) {
        safeAlert("Cannot connect to: " + url + ":" + error);
        return null;
    }
}

async function acuantRecordReport(endpoint, auth, subId, report, callback) {
	try {
		let url = endpoint + "/AssureIDService/Document/Instance";	
		const record1 = await fetch(url, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "omit",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Basic " + auth,
				"Accept": "application/json"
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify({
				AuthenticationSensitivity: 0,
				ClassificationMode: 0,
				Device: {
					HasContactlessChipReader: false,
					HasMagneticStripeReader: false,
					SerialNumber: btoa(JSON.stringify(report)),
					Type: {
						Manufacturer: "xxx",
						Model: "xxx",
						SensorType: 3
					}
				},
				ImageCroppingMode: 0,
				ManualDocumentType: null,
				ProcessMode: 0,
				SubscriptionId: subId
			}),
		});
		if (!record1.ok) {
			callback(false);
			return;
		}
		const recordId = await record1.json();
		if (!recordId) {
			callback(false);
			return;			
		}
		url = endpoint + "/AssureIDService/Document/" + recordId;
		let record2 = await fetch(url, {
			method: "GET",
			mode: "cors",
			cache: "no-cache",
			credentials: "omit",
			headers: {
				"Authorization": "Basic " + auth,
				"Accept": "application/json"
			},
			redirect: "follow",
			referrerPolicy: "no-referrer"
		});
		//Requires double get...
		record2 = await fetch(url, {
			method: "GET",
			mode: "cors",
			cache: "no-cache",
			credentials: "omit",
			headers: {
				"Authorization": "Basic " + auth,
				"Accept": "application/json"
			},
			redirect: "follow",
			referrerPolicy: "no-referrer"
		});		
		callback(record2.ok);		
    } catch (error) {
        callback(false);
    }
}

async function acuantFrm(endpoint, auth, subId, image1, image2) {
    let url = endpoint + "/api/v1/FaceMatch";
    try {
        const frmRes = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + auth,
                "Accept": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
				Data: {
					ImageOne: image1,
					ImageTwo: image2,
				},
				Settings: { SubscriptionId : subId }, 
			})
        });
        if (!frmRes.ok) {
            console.log("Invalid response from " + url + ". Status was: " + frmRes.status);
            return handleStatus(frmRes.status);
        }
        const res = await frmRes.json();
        if (!res) {
            console.log("No FRM Results. Response from " + url);
            return null;
        }
		if (res.IsMatch !== undefined) {
			return {
				Error: null,
				IsMatch: res.IsMatch,
				Score: res.Score,
			}
		}
		return {
			Error: res,
			IsMatch: null,
			Score: null,
		}
    } catch (error) {
        safeAlert("Cannot connect to: " + url + ":" + error);
        return null;
    }
}

async function acuantFrmV2(endpoint, username, password, subId, encryptedFile, anchorImage) {
    let url = endpoint + "/api/v2/face/enhanced";
    try {
		const auth = btoa((subId ? subId + ";" : "") + username + ":" + password);
        const frmRes = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + auth,
                "Accept": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
				SelfieImage: encryptedFile,			
				TrustedAnchorImage: anchorImage	
			})
        });
        if (!frmRes.ok) {
            console.log("Invalid response from " + url + ". Status was: " + frmRes.status);
            return handleStatus(frmRes.status);
        }
        const res = await frmRes.json();
        if (!res) {
            console.log("No FRM Results. Response from " + url);
            return null;
        }
		return res;
    } catch (error) {
        safeAlert("Cannot connect to: " + url + ":" + error);
        return null;
    }
}

async function acuantPld(endpoint, username, password, subId, image) {
    let url = endpoint + "/api/v1/liveness";
    try {
		const auth = btoa((subId ? subId + ";" : "") + username + ":" + password);
        const frmRes = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + auth,
                "Accept": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
				Image: image,			
				Settings: { AdditionalSettings: { OS: "UNKNOWN"}}	
			})
        });
        if (!frmRes.ok) {
            console.log("Invalid response from " + url + ". Status was: " + frmRes.status);
            return handleStatus(frmRes.status);
        }
        const res = await frmRes.json();
        if (!res) {
            console.log("No FRM Results. Response from " + url);
            return null;
        }
		return res;
    } catch (error) {
        safeAlert("Cannot connect to: " + url + ":" + error);
        return null;
    }
}

function handleStatus(status) {
    if (status === 0) {
        safeAlert("CORS is required to be disabled on the browser");
        return null;
    } else if (status === 401) {
        safeAlert("Authentication failed. Ensure you credentials are still valid!");
        return null;
    } else if (status === 403) {
        //Add a special error response as 403 can mean IdCloud has a temporary error
        return "ERROR";
    }
    return null;
}

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

}

function safeAlert(msg) {
	if (typeof alert === 'function') {
		alert(msg);
	} else {
		console.error(msg);
	}
}