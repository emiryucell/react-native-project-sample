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

    },
    put:async(url,data,itemId)=>{
        let resultdata;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        await fetch('https://northwind.vercel.app/api/categories/'+itemId, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        
    }

}

export default manager;