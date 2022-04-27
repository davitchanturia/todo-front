import apiClient from "connection/api";

const sendRequest = async(path) => {
    const response = await apiClient.get(path);
    
    return response.data;
};

export default sendRequest;