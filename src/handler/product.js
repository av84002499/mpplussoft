import axios from "axios";
const serverProduct = {
  getAllProduct: () => {
    const url = "https://api.storerestapi.com/products";
    let res = axios
      .get(url)
      .then((Response) => {
        if (Response) {
          console.log(Response.data);
          return Response.data;
        } else {
          console.error("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return res;
  },

  GetProductbySlug: async (token) => {
    try {
      console.log(token);
      const authResponse = await fetch(
        process.env.REACT_APP_API_HOST + ":8000/logout/",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      let json_data = await authResponse.json();
      return [authResponse.status, json_data];
    } catch (error) {
      console.log("Something went wrong due to:  ", error);
    }
  },
};

export default serverProduct;
