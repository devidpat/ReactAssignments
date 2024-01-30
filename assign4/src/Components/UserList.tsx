import React, { useEffect, useState } from 'react';
import '../styles/UserList.css';

type userType = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    zipcode: string;
    city: string;
  };
  phone: string;
};
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      setUsers(data);
    };

    fetchUsers();
  }, []);
  return (
    <div className="users">
      <ol>
        {users.map((user: userType) => (
          <li
            key={user.id}
            className="list"
          >
            <span>
              <b>Name:</b>
              <i>{user.name}</i>
            </span>
            <br />
            <span>
              <b>Email:</b> <i>{user.email}</i>
            </span>
            <br />
            <span>
              <b>Address</b>
              <i>
                {user.address.street}, {user.address.city},{' '}
                {user.address.zipcode}
              </i>
            </span>
            <br />
            <span>
              <b>Phone</b> <i>{user.phone}</i>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
