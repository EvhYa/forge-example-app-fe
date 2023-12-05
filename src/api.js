import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

export const getAccessToken = async (callback) => {
   try {
      const resp = await axios.get("/api/auth/token");
      console.log(resp);
      if (resp.status !== 200) {
         throw new Error(await resp.text());
      }
      const { access_token, expires_in } = resp.data;
      callback(access_token, expires_in);
   } catch (err) {
      alert("Could not obtain access token. See the console for more details.");
      console.error(err);
   }
};
