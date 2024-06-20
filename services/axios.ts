import Axios from "axios";
import { token } from "./user";
import { watch } from "vue";

export const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 10000,
});

axios.defaults.headers.common["X-Requested-With"] = "XMLHttprequest";
axios.defaults.headers.common["Authorization"] = "bearer" + token.value;

watch(token, (newVal)=> {
    axios.defaults.headers.common["Authorization"] = "bearer" + token.value;
    console.log({ "New token" : "Bearer" +token.value})
});