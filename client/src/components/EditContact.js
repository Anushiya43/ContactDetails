import "./styles.css";
import man from "./pictures/man.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function EditContact(props) {
  const [data, updateData] = useState({
    name: "",
    email: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    updateData(function (prev) {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick() {
    console.log("data", data);
    props.editedContact({ id: props.contact.id, ...data });
  }
  return (
    <div className="Contact_Form">
      <h1>Add Contact</h1>
      <img src={man} alt="pic" />
      <label>Name</label>
      <input
        type="text"
        placeholder={props.contact.name}
        value={data.name}
        onChange={handleChange}
        name="name"
      />

      <label>Email</label>
      <input
        type="text"
        placeholder={props.contact.email}
        value={data.email}
        onChange={handleChange}
        name="email"
      />

      <button onClick={handleClick}>
        <Link to="/" className="Link">
          Submit
        </Link>
      </button>
    </div>
  );
}
