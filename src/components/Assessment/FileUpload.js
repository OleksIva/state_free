import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload, label }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onFileUpload(acceptedFiles); // Передаем загруженные файлы в родительский компонент
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '20px' }}>
      <input {...getInputProps()} />
      <p>{label}</p>
    </div>
  );
};

export default FileUpload;



// // components/FileUpload.js
// import React from 'react';
// import { useDropzone } from 'react-dropzone';

// const FileUpload = ({ onFileUpload, label }) => {
//   const { getRootProps, getInputProps, fileRejections, acceptedFiles } = useDropzone({
//     accept: {
//       'application/pdf': ['.pdf'],
//     },
//     maxSize: 5 * 1024 * 1024, // 5 MB
//     onDrop: (acceptedFiles) => {
//       onFileUpload(acceptedFiles);
//     },
//   });

//   return (
//     <div className="file-upload">
//       <div {...getRootProps({ className: 'dropzone' })}>
//         <input {...getInputProps()} />
//         <p>{label}</p>
//         <p>Ziehen Sie die Dateien hierher oder klicken Sie, um Dateien auszuwählen</p>
//       </div>
//       {fileRejections.length > 0 && (
//         <div className="error">
//           <p>Die Datei muss im PDF-Format sein und darf 5 MB nicht überschreiten.</p>
//         </div>
//       )}
//       <div className="accepted-files">
//         {acceptedFiles.map(file => (
//           <p key={file.path}>{file.path} - {(file.size / 1024 / 1024).toFixed(2)} MB</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FileUpload;
