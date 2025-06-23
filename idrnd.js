async function idrnd(endpoint, secret, image, calibration) {
	const url = endpoint + "/check_liveness";
	const cal = !calibration ? "REGULAR" : calibration.toUpperCase();
	const body = {
		"image" : image,
		"pipelines": [
			{pipeline_name: "default-sr", calibration: cal},
			{pipeline_name: "default-pc", calibration: cal},
			{pipeline_name: "default-ps", calibration: cal},
			{pipeline_name: "default-dm", calibration: cal},
		],
		"errors_to_ignore": ["DOCUMENT_CROPPED"]
	};
	
	try {				
		const response = await fetch(url, {
			method : "POST",
			mode : "cors",
			cache : "no-cache",
			credentials : "omit",
			headers : {
				"Content-Type" : "application/json",
				"Accept" : "application/json",
				"X-API-KEY": secret,
			},
			redirect : "follow",
			referrerPolicy : "no-referrer",
			body : JSON.stringify(body)
		});
		if (response.ok) {
			const data = await response.json();
			if (!data || !data.pipeline_results) {
				console.log("No data from: " + url);
				return null;
			}			
			return data;
		} else {
			console.log("Invalid response from " + url + ". Status was: " + response.status);
			return handleStatus(response.status);
		}
	} catch (err) {
		safeAlert("Cannot connect: " + err);
		return null;
	}
}

async function idrndFace(endpoint, secret, imageJpeg, calibration, pipeline) {
	
	const cal = !calibration ? "REGULAR" : calibration.toUpperCase();
	const url = endpoint + "/check_liveness?pipeline=" + pipeline;		
	try {				
		const res = await fetch('data:image/jpeg;base64,' + imageJpeg);
		const blob = await res.blob();
		const formData = new FormData();
		formData.append('image', blob);
		const response = await fetch(url, {
			method : "POST",
			mode : "cors",
			cache : "no-cache",
			credentials : "omit",
			headers : {				
				'Accept': '*/*',
				"X-API-KEY": secret,
				"Meta": '{"OS": "UNKNOWN", "CALIBRATION": "' + cal + '"}'
			},
			redirect : "follow",
			referrerPolicy : "no-referrer",
			body : formData
		});
		if (response.ok) {
			const data = await response.json();
			if (!data || !data.probability) {
				console.log("No data from: " + url);
				return null;
			}			
			return data;
		} else {
			console.log("Invalid response from " + url + ". Status was: " + response.status);
			return handleStatus(response.status);
		}
	} catch (err) {
		safeAlert("Cannot connect: " + err);
		return null;
	}	
}