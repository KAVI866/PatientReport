import axios from "axios";

export const fetchPatients = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users?limit=20");
    return response.data.users;
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
};
