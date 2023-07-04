import axios from "axios";
const serverCategory = {
    getCategories: () => {
        const url = "https://api.storerestapi.com/categories";
        let res = axios.get(url)
                .then((Response) => {
                    if(Response){
                        console.log(Response.data);
                        return Response.data;
                    }
                    else{
                        console.error("Something went wrong");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        return res;
    },

    addCategory: async (token) => {
        try {
            console.log(token)
            const authResponse = await fetch(process.env.REACT_APP_API_HOST + ':8000/logout/', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token
                },
            })
            let json_data = await authResponse.json()
            return [authResponse.status, json_data]
        } catch (error) {
            console.log("Something went wrong due to:  ", error)
        }
    },

    updateCategory: (form_data) => {
        
        const url = "https://api.storerestapi.com/auth/register";
        let response = axios.post(url, form_data)
                .then((Response) => {
                    console.log(Response)
                    if(Response){
                        console.log(Response);
                        return Response.data;
                    }
                    else{
                        return(Response);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        return response;        // try {
    }

}

export default serverCategory;