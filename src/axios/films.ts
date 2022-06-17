import axios from "axios";
import { getfilms, headers, host } from ".";

export function getFilms(){
    return axios.get(`${host}${getfilms}`, {headers})
}