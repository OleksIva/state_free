import React, {useState} from "react";

const DocumentUpload = () =>
{
    const [file, setFile] = useState<File | null>(null);
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };
    
    const handleUpload=()=>{
        if (file) {
            console.log("Uploading file:", file.name);
            // You can perform additional actions like sending the file to a server here
          } else {
            console.log("No file selected");
          }
        };
    return(
        <>
        <input type="file" onChange={handleChange}/>
        <button onClick={handleUpload}>Upload a file</button>
        <h1>hello</h1>
        {file && <p>Selected File: {file.name}</p>}
        </>
    );
}



export default DocumentUpload;