import Header from "./components/Header";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useEffect, useState } from "react";
import ContactDetails from "./components/ContactDetails";
import Contacts from "./components/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

export default function App(props) {
  const url = "https://ml3klv-5001.csb.app/api/";
  const [contacts, updateContact] = useState([]);
  const [edit, updateEdit] = useState([]);
  const [personal, setpersonal] = useState();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(url);
      if (!response) {
        console.log("err");
      } else {
        console.log(contacts);
        updateContact(response.data);
      }
    }
    fetchData();
  }, []);

  function editContact(contact) {
    updateEdit(contact);
    console.log(edit);
  }

  function deleteContact(id) {
    console.log("id value  : " + id);

    axios.delete(url + id);
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
          <Route path="/add" element={<AddContact url={url} />} />
          <Route
            path="/edit"
            element={<EditContact url={url} contact={edit} />}
          />
          <Route path="/display" element={<Contacts contact={personal} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
