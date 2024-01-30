import React, { ChangeEvent, useRef, useState } from 'react';
type empObjType = {
  id: number;
  name: string;
  positon: string | undefined;
  salary: number;
};
const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({
    id: 1,
    name: 'Devid',
    position: 'SE',
    salary: 100000,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <ul>
        <li>
          <span>{employee.name}</span>
          <br />
          <br />
          <span>{employee.position}</span>
          <br />
          <br />
          <span>{employee.salary}</span>
          <br />
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmployee({ ...employee, position: inputRef.current?.value });
            }}
          >
            <input
              type="text"
              placeholder="Change Position to"
              value={employee.position}
              ref={inputRef}
            />
            <button type="submit">Change Position</button>
          </form>
          <button
            onClick={() =>
              setEmployee({ ...employee, salary: employee.salary + 1000 })
            }
          >
            Increase salary by 1000
          </button>
        </li>
      </ul>
    </div>
  );
};

export default EmployeeDetails;
