import HotelData from "./HotelData.mjs";


export default class APIQuery{
    constructor(){
        this.hotelData = new HotelData();
    }


    async getHotelData(){
        
        console.log("begin query");
        const hotelData = await this.hotelData.queryData();
        
        return hotelData;
    }
    
}