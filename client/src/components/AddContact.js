import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function AddContact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("add form");
    console.log(formData);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("photo", formData.photo);
    console.log("2");
    for (const [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }
    try {
      axios
        .post("https://gcf5ck-5001.csb.app/api/", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => console.log(response.data));

      console.log("33");
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="post">
        {formData.photo ? (
          <img
            className="picture"
            src={"https://gcf5ck-5001.csb.app/images/" + formData.photo}
            alt="Profile Picture"
          />
        ) : (
          <img
            className="picture"
            src="data:image/jpeg;base64,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"
            alt="Profile Picture"
          />
        )}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handlePictureChange}
        />
        <div style={{ display: "flex", gap: ".2cm" }}>
          <input type="submit" />
          <input type="reset" />
        </div>
      </form>
      <Link to="/">
        <button> Back </button>
      </Link>
    </div>
  );
}
