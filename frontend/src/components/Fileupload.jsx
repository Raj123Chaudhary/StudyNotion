import React from "react";
import { useState } from "react";
import { apiConnector } from "../services/apiConnector";
import { courseEndpoints } from "../services/apis";

function Fileupload() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const handleSUbmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Dataa is : ", name, file);

      const formData = new FormData();
      formData.append("file", file);
      const response = await apiConnector(
        "POST",
        courseEndpoints.CREATE_COURCE,
        formData
      );
      console.log("response : ", response);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const handleImageChnage = (e) => {
    console.log("File is : ", e.target.files[0]);
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="file" onChange={handleImageChnage} />
      <button onClick={handleSUbmit}>Submit</button>
    </div>
  );
}

export default Fileupload;
