import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const ContactsList = () => {
  const [contactInfo, setContactInfo] = useState([]);
  useEffect(() => {
    db.collection("contacts").onSnapshot((snapshot) => {
      setContactInfo(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          info: doc.data(),
        }))
      );
    });
  }, []);
  console.log(contactInfo);
  return (
    <div className="contaner-fluid mt-3">
      <h3 className="text-center text-primary">Contacts List</h3>
    </div>
  );
};

export default ContactsList;
