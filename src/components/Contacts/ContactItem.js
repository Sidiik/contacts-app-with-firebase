import React from "react";
import { db } from "../firebase";

const ContactItem = ({ user }) => {
  console.log(user);
  function deleteContact() {
    db.collection("contacts").doc(user.id).delete();
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="action d-flex justify-content-between align-items-center c-pointer">
          <h3>{user.info.name}</h3>
          <h3>
            <i
              className="text-danger bi bi-trash-fill"
              onClick={deleteContact}
            ></i>
          </h3>
        </div>
        <div className="addres">
          <i className="bi bi-geo-alt text-primary"></i> {user.info.address}
        </div>
        <div className="phone">
          <i className="bi bi-phone text-primary "></i> {user.info.phone}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
