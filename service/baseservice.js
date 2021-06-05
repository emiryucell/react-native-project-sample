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
    put:async(url,itemId,data)=>{
        let resultdata;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        await fetch(config.BASE_URL+ url +itemId, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        
    },

    delete:async(url,id) => {
        let requestoptions = {
            method: 'DELETE',
            body: JSON.stringify({ id: id })
          };
          await  fetch(config.BASE_URL+ url + id, requestoptions)
          .then((res) => res.json())
          .then((data) => {

          })
    }

}

export default manager;