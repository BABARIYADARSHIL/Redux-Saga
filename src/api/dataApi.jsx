import axios from "axios";
import { New_url } from "../api/index";


export function dataApi() {
    return axios.get(New_url)
}