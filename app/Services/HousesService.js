import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"




class HousesService {


async getHouses() {
    const response = await sandboxApi.get('/houses')
    console.log('[get houses]', response.data)
    const newArray = response.data.map(house => new House(house))
    appState.houses = newArray
    console.log(appState.houses)
}
}

export const housesService = new HousesService()