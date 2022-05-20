import apiClient from "connection/api";

const sendRequest = async(path) => {
    try{
        const response = await apiClient.get(path);
        
        return response.data;
    }catch(error){
    }
};

export default sendRequest;

export const postRequest = async(path, data) => {
    try{
        const response = await apiClient.post(path, data);
        
        console.log(response);
        // return response;
    }catch(error){
    }
};