import apiQueryFactory from "./APIQuery.mjs";
const aviationstackEndpoint = import.meta.env.VITE_AVIATIONSTACK_ENDPOINT_URL;
const API_Key = import.meta.env.VITE_APILAYER_DOTCOM_API_KEY;
export default class AviationStackAPI {
    constructor(){
        this.apiQuery = apiQueryFactory(aviationstackEndpoint);
        this.key = `access_key=${API_Key}`;
    }

    async queryFlightData(flightParams = null){
        //place access key in query
        if (flightParams != null){
            let queryParams = [this.key];
            console.log(queryParams);
            flightParams.forEach(element => {
                queryParams.push(element);
            });
            console.log(queryParams);
            return await this.apiQuery(queryParams);
        }
        else{
            return await this.apiQuery(`?${this.key}`);
        }
        
        
    }
}