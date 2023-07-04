import man from "./pictures/man.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContactDetails(props) {
  let contacts = props.contacts;
  const [flag, setflag] = useState(false);
  const [flagall, setflagall] = useState(false);
  function handleSelect() {
    setflag(!flag);
  }
  function handleSelectAll() {
    setflagall(!flagall);
  }
  return (
    <div className="ContactDetails">
      <div className="right">
        <button>
          <Link to="/add" className="link">
            AddContact
          </Link>
        </button>
        <button onClick={handleSelect}>select</button>
        <button onClick={handleSelectAll}>select All</button>
      </div>
      {contacts.map((contact) => {
        return (
          <div className="Contact">
            {flag ? (
              <input
                type="checkbox"
                checked={flagall ? "checked" : ""}
                name={contact.name}
                value={contact.name}
                className="chk"
              />
            ) : (
              ""
            )}{" "}
            <img src={man} alt="pic" className="pic" />
            <div onClick={() => props.oneContact(contact)} className="detail">
              <Link to="/display" className="link1">
                <h2>{contact.name}</h2>
                <span>{contact.email}</span>
              </Link>
            </div>
            <div className="buttondisplay">
              <button onClick={() => props.deleteContact(contact._id)}>
                Delete
              </button>
              <button onClick={() => props.editContact(contact)}>
                <Link to="/edit" className="link">
                  Edit
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
