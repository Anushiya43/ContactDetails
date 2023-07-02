import Header from "./components/Header";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useState } from "react";
import ContactDetails from "./components/ContactDetails";
import Contacts from "./components/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(props) {
  const [contacts, updateContact] = useState([]);
  const [edit, updateEdit] = useState([]);
  const [personal, setpersonal] = useState();

  function addContact(NewContact) {
    console.log(NewContact);
    console.log(contacts);

    updateContact((prevContacts) => [
      ...prevContacts,
      { id: contacts.length + 1, ...NewContact },
    ]);
    console.log(contacts);
  }

  function editContact(contact) {
    updateEdit(contact);
    console.log(edit);
  }

  function editedContact(c) {
    console.log("c" + c.id);
    updateContact(
      contacts.map((contact) => (contact.id === c.id ? c : contact))
    );
  }
  function deleteContact(id) {
    updateContact(contacts.filter((contact) => contact.id !== id));
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
