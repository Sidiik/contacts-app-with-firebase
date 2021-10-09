import React, { useState } from "react";

import { db } from "../firebase";

const NewContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      address,
    };
    db.collection("contacts").add(newContact);
    setPhone(0);
    setAddress("");
    setName("");
  };
  return (
    <div className="container-fluid w-50" style={{ margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control shadow-none mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control shadow-none mb-2"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="number"
          className="form-control shadow-none mb-2"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="btn btn-primary">Add one</button>
      </form>
    </div>
  );
};

export default NewContact;
