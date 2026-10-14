import { convertToJson } from "./utils";
    /**
     * Queries accomodations API and returns the response after converting it to a JSON
     * @param {Array} parameters - An optional array of query parameters that can be appended to the endpoint URL
     * @returns data - json object containing results or an error if the query fails
     */
export default function apiQueryFactory(url) {
        return async function(parameters, isRouteParam = false){
            let query = url;

            try{

                if(parameters.length > 1){
                    query = query + "?";
                    parameters.forEach(param=>{
                        query = query + param +"&";
                    })
                }
                else if (parameters.length == 1){

                    if(isRouteParam == true){
                        query = query + `/${parameters[0]}`;
                    }
                    else{
                        query = query + `?${parameters[0]}`;
                    }
                    
                }

                console.log("Query: "+ query);
                const response = await fetch(query);
                const data = await convertToJson(response);

                if(data != null){
                    return data;
                }else{
                    throw new error("QUERY RESULT IS NULL");
                }
            }catch(error){
                return error.message;
            }
        }
        

}