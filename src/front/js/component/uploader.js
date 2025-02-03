import React, {useState} from "react"; 

export const Uploader = ({body, title}) => {

const [file, setFile] = useState(null);
const [uploadedUrl, setUploadedUrl] = useState('');

const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

const handleUpload = async () => {
  const token = localStorage.getItem("token")
  const formData = new FormData();
  formData.append('file', file);
  formData.append('body', body);
  formData.append('title', title);

  const response = await fetch(process.env.BACKEND_URL+'api/upload', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();
  if (data.secure_url) {
    setUploadedUrl(data.secure_url);
  }
};

return (
  <div className="post-viaje-container">
    <h1></h1>
    <input type="file" onChange={handleFileChange} />
    <button onClick={handleUpload}>Upload</button>
    {uploadedUrl && (
      <div>
        <h3>Uploaded Image:</h3>
        <img src={uploadedUrl} alt="Uploaded" style={{ width: '300px' }} />
      </div>
    )}
  </div>
);
}