async function idcPost(endpoint, user, secret, scenario, version, userAgent, inputJson) {
	const url = endpoint + "/scs/v1/scenarios";
	
	body = {};
	body.name = scenario;
	body.version = !!version ? version : 1;
	if (inputJson) {
		body.input = inputJson;
	}
	
	try {				
		const response = await fetch(url, {
			method : "POST",
			mode : "cors",
			cache : "no-cache",
			credentials : "omit",
			headers : {
				"Content-Type" : "application/json",
				"Authorization" : secret.length > 100 ? "Bearer " + secret : "Basic " + btoa(user + ':' + secret),
				"Accept" : "application/json",
				"User-Agent" : userAgent || "W",
				"X-API-KEY": user,
			},
			redirect : "follow",
			referrerPolicy : "no-referrer",
			body : JSON.stringify(body)
		});
		if (response.ok) {
			const data = await response.json();
			if (!data || !data.id) {
				console.log("No Scenario ID. Response from " + url);
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

async function idcPatch(scenariodId, endpoint, user, secret, scenario, step, inputJson) {	
	body = {};
	body.name = scenario;
	if (inputJson) {
		body.input = inputJson;
	}
	const url = endpoint + "/scs/v1/scenarios/" + scenariodId + "/state/steps/" + step;	
	try {
		const response = await fetch(url, {
			method : "PATCH",
			mode : "cors",
			cache : "no-cache",
			credentials : "omit",
			headers : {
				"Content-Type" : "application/json",
				"Authorization" : secret.length > 100 ? "Bearer " + secret : "Basic " + btoa(user + ':' + secret),
				"Accept" : "application/json",
				"X-API-KEY" : user,
			},
			redirect : "follow",
			referrerPolicy : "no-referrer",
			body : JSON.stringify(body)
		});
		if (response.ok) {
			const data = await response.json();
			if (!data || !data.status) {
				console.log("Invalid Response from " + url);
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

async function idcGetStatus(scenarioId, endpoint, user, secret) {
	const url = endpoint + "/scs/v1/scenarios/" + scenarioId;	
	try {
		const response = await fetch(url, {
			method : "GET",
			mode : "cors",
			cache : "no-cache",
			credentials : "omit",
			headers : {
				"Content-Type" : "application/json",
				"Authorization" : secret.length > 100 ? "Bearer " + secret : "Basic " + btoa(user + ':' + secret),
				"Accept" : "application/json",
				"X-API-KEY" : user,
			},
			redirect : "follow",
			referrerPolicy : "no-referrer"
		});
		if (response.ok) {
			const data = await response.json();
			if (!data || !data.status) {
				console.log("Invalid Response from " + url);
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

function safeAlert(msg) {
	if (typeof alert === 'function') {
		alert(msg);
	} else {
		console.error(msg);
	}
}