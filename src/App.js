import "./App.css";
import { useState, useEffect } from "react";
const axios = require("axios");

function App() {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const loadContacts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setContacts(response.data);
    };
    loadContacts();
  }, []);
  return (
    <div>
      {contacts && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item, id) => (
              <tr>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  {item.address.suite +
                    ", " +
                    item.address.street +
                    ", " +
                    item.address.city +
                    ", " +
                    item.address.zipcode}
                </td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
