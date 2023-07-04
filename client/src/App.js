import Header from "./components/Header";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useEffect, useState } from "react";
import ContactDetails from "./components/ContactDetails";
import Contacts from "./components/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

export default function App(props) {
  const [contacts, updateContact] = useState([]);
  const [edit, updateEdit] = useState([]);
  const [personal, setpersonal] = useState();
  const addContact = async (NewContact) => {
    console.log(NewContact);
    const { name, email } = NewContact;
    try {
      const response = await axios.post("https://gcf5ck-5000.csb.app/api/add", {
        name: name,
        email: email,
      });
      console.log(response);
      console.log("fff");
    } catch (err) {
      console.log("error in insert");
    }
  };
  
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(
        "https://gcf5ck-5000.csb.app/api/display"
      );
      if (!response) {
        console.log("err");
      } else {
        console.log(response);
        updateContact(response.data);
      }
    }
    fetchData();
  }, []);

  function editContact(contact) {
    updateEdit(contact);
    console.log(edit);
  }

  function editedContact(c) {
    const id = c._id;
    console.log("c", id);
    const { name, email } = c;
    axios
      .put("https://gcf5ck-5000.csb.app/api/edit/" + id, {
        name,
        email,
      })
      .then((response) => {
        console.log("nnn");
        console.log(response);
      })
      .catch((err) => {
        console.log("error in get");
      });
  }
  function deleteContact(id) {
    axios.delete("https://gcf5ck-5000.csb.app/api/delete/${id}");
    console.log("jjj");
  }

  function oneContact(c) {
    console.log("personal " + c);
    setpersonal(c);
  }
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ContactDetails
                contacts={contacts}
                deleteContact={deleteContact}
                editContact={editContact}
                oneContact={oneContact}
              />
            }
          />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
          <Route
            path="/edit"
            element={
              <EditContact editedContact={editedContact} contact={edit} />
            }
          />
          <Route path="/display" element={<Contacts contact={personal} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
