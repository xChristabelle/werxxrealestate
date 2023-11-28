import React, { useState } from "react";
import { Box } from "@mui/material";
import * as XLSX from "xlsx";
import Header from "@/components/Header";

const ImportProperties = () => {
 
  const [file, setFile] = useState(null);
  const [users, setUsers] = useState([]);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const dataArr = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Assuming your Excel sheet has a header row.
      if (dataArr.length > 1) {
        dataArr.shift(); // Remove the header row.
      }

      setUsers(dataArr);
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  const handleSubmitUsers = () => {
    // You can submit all the users to your backend or perform any other action here.
    // For demonstration purposes, we're just logging all the users.
    console.log("Submitting all users:", users);
  };

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="IMPORT PROPERTIES"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <Box sx={{ paddingBottom: "64px" }}>
      
          <div>
            <input type="file" accept=".xlsx" onChange={handleFileUpload} />
            <br />
            {file && (
              <div>
                <h3>Users to Submit:</h3>
                <ul>
                  {users.map((user, index) => (
                    <li key={index}>{user.join(", ")}</li>
                  ))}
                </ul>
                <button onClick={handleSubmitUsers}>Submit All Users</button>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ImportProperties;
