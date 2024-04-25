import axios from "axios";

// Define API instance with base URL pointing to the server
const api = axios.create({
  baseURL: "http://localhost:3100", // Replace with your server URL
});

// Define functions to make API requests
export const getAllPptFiles = async () => {
  try {
    const response = await api.get("/ppt_files");
    return response.data;
  } catch (error) {
    console.error("Error fetching PPT files:", error);
    throw error;
  }
};

export const getAllPptFilesByCategory = async (category_id) => {
  try {
    const response = await api.get(`/ppt_files/${category_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching PPT files by category:", error);
    throw error;
  }
};

export const getAllCategories= async () => {
    try {
      const response = await api.get("/category");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };

export const addPptFile = async (fileData) => {
  try {
    const response = await api.post("/ppt_files", fileData);
    return response.data;
  } catch (error) {
    console.error("Error adding PPT file:", error);
    throw error;
  }
};

export default api;
