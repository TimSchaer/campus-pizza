function createFetchFunction(method) {
    return async (url, params, getFullResponse=false) => {

        const _params = {
            method,
            headers: {
                "content-type": "application/json",
            },
            ...params
        }

        if (_params.body !== undefined) {
            _params.body = JSON.stringify(_params.body)
        }

        if (_params.token !== undefined) {
            _params.headers["Authorization"] = `Bearer ${_params.token}`
        }

        console.log("before fetch")

        const response = await fetch(url, _params)
        console.log(response)
        console.log(_params.body)

        if (!response.ok) {

            if(response.status == 401) {
                const text = await response.text()
                if(text.includes("expired")) {
                    localStorage.clear()
                    window.location.href = "/login"
                }
            }

            const error = new Error("Request failed with status " + response.status)
            error.response = response
            throw error
        }


        if (getFullResponse){ // if backend return an empty response body
            return response
        }
        let data;
        try {
            data = await response.json()
        } catch {}

        console.log("response-data: ")
        console.log(data)

        return data
    }
}



export const getJSON = createFetchFunction("GET")
export const postJSON = createFetchFunction("POST")
export const putJSON = createFetchFunction("PUT")
export const deleteJSON = createFetchFunction("DELETE")

