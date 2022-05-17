import apiClient from "connection/api";

const sendRequest = async(path) => {
    try{
        const response = await apiClient.get(path);
        
        return response.data;
    }catch(error){
    }
};

export default sendRequest;
