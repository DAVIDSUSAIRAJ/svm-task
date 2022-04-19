import "./App.css";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import mockData from "./components/data";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
function App() {
  const [contacts, setContacts] = useState(mockData);
  const [search, setSearch] = useState("");
  // Start Select Editing row
  const [editContactId, setEditContactId] = useState(null);
  const [isNew, setIsNew] = useState(false);
  // End Select Editing row

  // console.log(contacts);

  // Start add form Data
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // ADD FORM VALUE IN TABLE
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    // setAddFormData((preData)=>({...preData,[fieldName]:fieldValue}))
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // END ADD FORM  VALUE IN TABLE
  // EDTI FORM VALUE IN TABLE
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  // START SUBMIT BEFORE CANCEL ROW
  const handleCancelNewRow = () => {
    setIsNew(false);
    setAddFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  };

  // END SUBMIT BEFORE CANCEL ROW

  // END EDIT FORM VLAUE IN TABLE

  const handleSaveNewRow = () => {
    if (
      addFormData.fullName === "" ||
      addFormData.address === "" ||
      addFormData.phoneNumber === "" ||
      addFormData.email === ""
    )
      return alert("Fill all fields");

    // setData((prev) => [{ ...newRow, id: uuidv4() }, ...prev]);

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [newContact, ...contacts];
    setContacts(newContacts);
    setIsNew(false);
    setAddFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });

    // handleCancelNewRow();
  };

  // ADD FORM SUBMIT
  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();
  //   const newContact = {
  //     id: nanoid(),
  //     fullName: addFormData.fullName,
  //     address: addFormData.address,
  //     phoneNumber: addFormData.phoneNumber,
  //     email: addFormData.email,
  //   };
  //   const newContacts = [newContact, ...contacts];
  //   setContacts(newContacts);
  //   setAddFormData({
  //     fullName: "",
  //     address: "",
  //     phoneNumber: "",
  //     email: "",
  //   });
  // };
  // END ADD FORM SUBMIT
  // EDIT FORM SUBMIT

  // END EDIT FORM SUBMIT
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  // START WHEN EDIT BUTTON ONCLICK

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };
  // END WHEN EDIT BUTTN ONCLICK
  //START WHEN CANCEL BUTTON ONCLICK
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  // END WHEN CANCEL BUTTTON ONCLICK

  // START WHEN DELETE BUTTON ONCLICK
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  // END WHEN DELETE BUTTON ONCLICK

  return (
    <div className="App">
      <div className="app-container">
        <div>
          <input
            type="text"
            className="search"
            placeholder="Name search here.."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <form onSubmit={handleEditFormSubmit}>
          <button className="new" type="button" onClick={() => setIsNew(true)}>
            New
          </button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Addrees</th>
                <th>phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {isNew && (
                <tr>
                  <td>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter an name.."
                      value={addFormData.fullName}
                      required
                      onChange={handleAddFormChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter an address..."
                      value={addFormData.address}
                      required
                      onChange={handleAddFormChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter a phoneNumber..."
                      value={addFormData.phoneNumber}
                      required
                      onChange={handleAddFormChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter a mail.."
                      value={addFormData.email}
                      required
                      onChange={handleAddFormChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleSaveNewRow}>Save</button>
                    <button onClick={handleCancelNewRow}>Cancel</button>
                  </td>
                </tr>
              )}

              {contacts
                .filter((contact) => {
                  if (search == "") {
                    return contact;
                  } else if (
                    contact.fullName
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return contact;
                  }
                })

                .map((contact) => (
                  <Fragment key={contact.id}>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClicks={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
            </tbody>
          </table>
        </form>

        {/* <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter an name.."
            value={addFormData.fullName}
            required
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter an address..."
            value={addFormData.address}
            required
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter a phoneNumber..."
            value={addFormData.phoneNumber}
            required
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter a mail.."
            value={addFormData.email}
            required
            onChange={handleAddFormChange}
          />
          <button type="sumbit">Add</button>
        </form> */}
      </div>
    </div>
  );
}

export default App;
