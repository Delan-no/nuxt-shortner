import axios, { AxiosError, type AxiosResponse } from "axios";



export default defineNuxtPlugin(async (nuxtApp) => {

    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.headers.common['Content-Type'] = "application/json"; // on attend du serveur du json
    axios.defaults.headers.common['Accept'] = "application/json"; // on attend du serveur du json
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    
    await axios.get("/sanctum/csrf-cookie");
})




