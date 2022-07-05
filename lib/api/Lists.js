import { deleteJSON, getJSON, postJSON, putJSON, BASE_URL } from "."

const readAllURL = "https://crudvbackendfunctionapp.azurewebsites.net/api/readAll?code=yCPzy0HKY-anazOd25CoK1HFZEl_USK4hnevk6Y5MnWeAzFuzlPm0w=="
const deleteURL = "https://crudvbackendfunctionapp.azurewebsites.net/api/delete-a-list-item?code=doLDDwsv6kjR57j3wShzV6E4tRlatEhccwfaRg-ARmpHAzFuAK19mA=="
const createURL = "https://crudvbackendfunctionapp.azurewebsites.net/api/create-a-list-item"



const ListsAPI = {
    create(order) {
        // const data = postJSON(`${createURL}`, { body: order}, true)
        // return data
        return postJSON(createURL, {body: order})
    },
    readAll() {
        return getJSON(readAllURL)
    },
    delete(id) {
        const data = getJSON(`${deleteURL}&id=${id}`)
        return data
    },
}

export default ListsAPI
