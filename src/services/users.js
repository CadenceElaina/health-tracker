import axios from "axios";

const baseUrl = "/api/users";

const createUser = async (userData) => {
    try {
        const response = await axios.post(baseUrl, userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export default { createUser };
