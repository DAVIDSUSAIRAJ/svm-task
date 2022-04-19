import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";

export default function App() {
  const [data, setData] = useState([
    {
      id: uuidv4(),
      code: "1234",
      name: "first",
    },
  ]);

  const [isNew, setIsNew] = useState(false);

  const [newRow, setNewRow] = useState({
    code: "",
    name: "",
  });

  const handleCancelNewRow = () => {
    setIsNew(false);
    setNewRow({ code: "", name: "" });
  };

  const handleChangeNewRowValues = (e) => {
    setNewRow((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSaveNewRow = () => {
    if (newRow.code === "" || newRow.name === "")
      return alert("Fill all fields");

    setData((prev) => [{ ...newRow, id: uuidv4() }, ...prev]);
    handleCancelNewRow();
  };

  const handleEditRow = (id) => {
    //
  };

  const handleDeleteRow = (id) => {
    //
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setIsNew(true)}>New</button>
      </div>
      <div className="table">
        <div className="header">
          <div className="cell">
            <h1>service code</h1>
          </div>
          <div className="cell">
            <h1>service name</h1>
          </div>
          <div className="cell">
            <h1>actions</h1>
          </div>
        </div>

        {isNew && (
          <div className="row">
            <div className="cell">
              <input
                type="text"
                name="code"
                value={newRow.code}
                onChange={handleChangeNewRowValues}
              />
            </div>
            <div className="cell">
              <input
                type="text"
                name="name"
                value={newRow.name}
                onChange={handleChangeNewRowValues}
              />
            </div>
            <div className="cell">
              <button onClick={handleSaveNewRow}>Save</button>
              <button onClick={handleCancelNewRow}>Cancel</button>
            </div>
          </div>
        )}

        {data.map((row) => {
          return (
            <div className="row" key={row.id}>
              <div className="cell">
                <p>{row.code}</p>
              </div>
              <div className="cell">
                <p>{row.name}</p>
              </div>
              <div className="cell">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          );
        })}

        <div className="row">
          <div className="cell">
            <p>service code</p>
          </div>
          <div className="cell">
            <p>service name</p>
          </div>
          <div className="cell">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
// RAAVANAN DEVELOPER GUIDE

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// END RAAVANAN DEVELOPRE GUIDE
