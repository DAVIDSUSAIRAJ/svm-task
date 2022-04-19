import React from "react";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          placeholder="Enter an name.."
          value={editFormData.fullName}
          onChange={handleEditFormChange}
          pattern="^[A-Za-z ]*"
          title="fg"
          readOnly
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          placeholder="Enter an address.."
          value={editFormData.address}
          onChange={handleEditFormChange}
          required
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter an phoneNumber.."
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
          required
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          placeholder="Enter an email.."
          value={editFormData.email}
          onChange={handleEditFormChange}
          required
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
