import { convertToJson } from "./utils";

const accomadation_api_url = import.meta.ACCOMADATION_API_ENDPOINT_URL;

export default class HotelData {
    constructor(){
        accomadation_api_url;
    }

    async queryData(){
        const response = await fetch("https://tourism.api.opendatahub.com/v1/Accommodation");
        const data = await convertToJson(response);

        if(data != null){
            return data;
        }
        else{
            console.log("ERROR");
            return ["ERROR"];
        }

    }
}