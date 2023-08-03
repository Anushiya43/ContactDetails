import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function EditContact(props) {
  const [formData, setFormData] = useState({
    photo: props.contact.photo,
    name: props.contact.name,
    email: props.contact.email,
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
        .put(props.url + props.contact._id, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {});
      setFormData({
        name: "",
        email: "",
        photo: null,
      });
      console.log("33");
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="post">
        <img
          src={"https://ml3klv-5001.csb.app/images/" + formData.photo}
          alt="pic"
        />
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
        <button>Back</button>
      </Link>
    </div>
  );
}
