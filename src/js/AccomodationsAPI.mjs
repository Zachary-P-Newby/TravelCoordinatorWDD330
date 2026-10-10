import apiQueryFactory from "./APIQuery.mjs";

const accomadation_api_url = import.meta.env.VITE_ACCOMODATION_API_ENDPOINT_URL;

/**
 * Object used to query Accomodations API
 */
export default class AccomodationsAPI {
    constructor(){
        this.apiQuery = apiQueryFactory(accomadation_api_url);
    }

    async searchByName(name){
        return await this.apiQuery([`pagesize=40`,`searchfilter=${name}`]);
    }

    /**
     * Returns the details of a single hotel
     * @param {*} id 
     * @returns data object containing hotel data
     */
    async getHotelDetails(id){
        return await this.apiQuery([id]);
    }


}