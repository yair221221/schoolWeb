import React, { useState } from 'react';
import FileUpload from './FileUpload';

function App() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (uploadedFiles) => {
    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div>
      <h1>File Upload</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
