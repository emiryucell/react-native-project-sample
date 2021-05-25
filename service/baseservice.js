import config from "../environment/config";

const manager = {
    
    get: async (url) => {

        let responsedata;

        await fetch(config.BASE_URL + url)
        .then((res) => res.json())
        .then((data) => {
            responsedata = data;
        });
        return responsedata; 
    },

    post: async(url, data) => {

        let resultdata;
        let requestOptions = {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }

        await fetch(config.BASE_URL + url, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            resultdata = data;
        });

        return resultdata;

    }

}

export default manager;