// hooks/uploadImage.js
import axios from 'axios';

const uploadImage = async (image) => {
  if (!image) {
    alert("Select an image first");
    return null;
  }

  const formData = new FormData();
  formData.append('image', image);

  try {
    const res = await axios.post('http://localhost:3000/upload', formData);
    return res.data.url;
  } catch (err) {
    console.error(err);
    alert('Upload failed');
    return null;
  }
};

export default uploadImage;
