import apiClient from "connection/api";

const sendRequest = async() => {
    const response = await apiClient.get(`/api/notes`);
    
    return response.data.allNotes;
};

export default sendRequest;