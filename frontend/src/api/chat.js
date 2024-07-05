import axios from "axios";

export const postData = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/aiassistent/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;
  } catch (err) {
    console.error("Error uploading file and asking AI:", err);
    setError("Error uploading file and asking AI. Please try again.");
  }
};
