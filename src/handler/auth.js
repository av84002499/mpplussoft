import axios from "axios";
const serverAuth = {
    logIn: (form_data) => {
        const url = "https://api.storerestapi.com/auth/login";
        let res = axios.post(url, form_data)
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
        // try {
        //     console.log("https://api.storerestapi.com/auth/login")
        //     console.log(form_data)
        //     let authResponse = fetch("https://api.storerestapi.com/auth/login",{
        //         mode:'cors',
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json; charset=UTF-8',
        //         },
        //         credentials: "include",
        //         body: JSON.stringify(form_data)
        //     }).then(response => response.json()).then(json => console.log(json))
        //     return authResponse
        // } catch {
        //     console.error("Something Went wrong. Please try again after some time.")
        // }
    },

    logOut: async (token) => {
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

    register: (form_data) => {
        
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
        //     const response = fetch('https://api.storerestapi.com/auth/register',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(form_data),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //     .then(response => response.json())
        //     return response
        // } catch (error) {
        //     console.error(`Failed with Error: ${error}`)
        // }
    }

}

export default serverAuth;