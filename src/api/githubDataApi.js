import axios from "axios";

const BASE_URL = process.env.REACT_APP_URI;



export const getGithubData = async () => {
    const { data } = await axios.get(BASE_URL);
    return data
}



const REPO_URL = process.env.REACT_APP_URL_REPO; 

export const getRepo = async () => {
    const { data } = await axios.get(REPO_URL)
    return data
}



