import apiQueryFactory from "./APIQuery.mjs";

const accomadation_api_url = import.meta.env.VITE_ACCOMODATION_API_ENDPOINT_URL;
const accomadationType_api_url = import.meta.env.VITE_ACCOMODATION_API_ACCO_TYPE_URL;


/**
 * Object used to query Accomodations API
 */
export default class AccomodationsAPI {
    constructor(){
        this.apiQuery = apiQueryFactory(accomadation_api_url);
        this.accoTypeApiQuery = apiQueryFactory(accomadationType_api_url);
    }

    async searchByName(name){
        return await this.apiQuery([`pagesize=40`,`searchfilter=${name}`]);
    }

    async getHotels(){
        return await this.apiQuery([`pagesize=40`]);
    }

    /**
     * Returns the details of a single hotel
     * @param {*} id 
     * @returns data object containing hotel data
     */
    async getHotelByID(id){
        return await this.apiQuery([id], true);
    }

    async getAccomadationType(id){
        const result = await this.accoTypeApiQuery([id], true);
        return result.TypeDesc.en;
    }
}