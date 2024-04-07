import React, { useState } from 'react';
import Sidebar from '../sidebar';

function App() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (uploadedFiles) => {
    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div>
      <Sidebar /> 
    </div>
  );
}

export default App;
