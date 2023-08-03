import "./styles.css";
import man from "./pictures/man.jpg";
import { Link } from "react-router-dom";

export default function contacts(props) {
  let contact = props.contact;
  return (
    <div className="Person">
      <img
        src={"https://ml3klv-5001.csb.app/images/" + contact.photo}
        alt="pic"
      />
      <h2>{contact.name}</h2>
      <span>{contact.email}</span>
      <button>
        <Link to="/" className="link">
          Ok
        </Link>
      </button>
    </div>
  );
}
