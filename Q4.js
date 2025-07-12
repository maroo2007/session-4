function uploadFile(filename) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!filename) {
        reject(new Error("Filename is required"));
      } else {
        resolve(`File ${filename} uploaded successfully`);
      }
    }, 1500);
  });
}

async function handleUpload(filename) {
  try {
    console.log("Uploading file...");
    const result = await uploadFile(filename);
    console.log(result);
  } catch (error) {
    console.error("Upload failed:", error.message);
  }
}


handleUpload("document.pdf"); // sha8al
handleUpload(""); // haytala3 error
