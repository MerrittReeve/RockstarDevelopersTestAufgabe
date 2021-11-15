function fetchData(API) {
	return fetch(API)
		.then(response => response.json())
		.then(response => response)
		.catch(error => console.warn(error))
}

export default fetchData