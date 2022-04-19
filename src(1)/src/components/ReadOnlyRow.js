import React from "react";
const ReadOnlyRow = ({ contact ,handleEditClicks, handleDeleteClick}) => {
  return (
    <tr key={contact.id}>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
          <button type="button" onClick={(event)=>handleEditClicks(event,contact)}>Edit</button>
          <button type="button" onClick={()=> handleDeleteClick(contact.id)}>Delete</button>
      </td>
    </tr>
  );
}; 

export default ReadOnlyRow;
