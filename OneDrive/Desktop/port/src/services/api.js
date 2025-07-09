import axios from "axios"
import { toast } from "react-toastify";
export const fetchResponse = async (question)=>{
  const API_URL ="http://localhost:8080/api/qna/ask";

  try {
    const response = await axios.post(API_URL,{question});
    return response.data
  } catch (error) {
    toast.error("Error Occured")
  }
}


export const fetchHistory = async () => {
  const res = await fetch("http://localhost:8080/api/qna/history");
  if (!res.ok) throw new Error("Failed to load history");
  return await res.json();
};
