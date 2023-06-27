import axios from "axios";

// fetch("url")
// .then(response => response.json())
// .then(data => console.log(data))
// SHOW ALL 
const baseURL = 'http://localhost:3001/battlechips';
// port to our express app 
// defining it here makes things easier
// the slash is for everything comming from the default route

export const getChips = () =>{
    const URL = baseURL;// base URL
    const response = axios.get(URL);
    return response;
};

export const getChip = (id) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
};

export const editChip = (id, updatedChip) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedChip);
    return response;
};

export const createChip = (Chip) => {
    const URL = baseURL;
    const response = axios.post(URL, Chip);
    return response;
};

export const deleteChip = (id) =>
{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
};