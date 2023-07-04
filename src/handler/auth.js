const serverAuth = {
    logIn: async (form_data) => {
        try {
            console.log("Login URL: ", process.env.REACT_APP_API_HOST + ':8000/auth/')
            let authResponse = await fetch("https://api.storerestapi.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(form_data)
            })
            let json_data = await authResponse.json()
            return [authResponse.status, json_data]
        } catch {
            console.error("Something Went wrong. Please try again after some time.")
        }
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
        try {
            const response = fetch('https://api.storerestapi.com/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(form_data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            return response
        } catch (error) {
            console.error(`Failed with Error: ${error}`)
        }
    }

}

export default serverAuth;