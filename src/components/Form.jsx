import React, { useState } from "react";
import Logo from "../image/logo.png";
import "./Form.css";
import { message } from "antd";
const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [department, setDepartment] = useState("");
  const [number, setNumber] = useState("");

  const sendHandler = () => {
    if (name.length === 0) {
      message.error("please enter your name");
    } else if (lastName.length === 0) {
      message.error("please enter your lastName");
    } else if (email.length === 0) {
      message.error("please enter your email");
    } else if (number.length === 0) {
      message.error("please enter your number");
    } else {
      message.success("send successfull");
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <img style={{ width: 50, height: 50 }} src={Logo} alt="" />
        <div className="name">
          <h1>My Form</h1>
        </div>
      </div>

      <div className="user_name">
        <div>
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last_name">LastName</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="email">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="department">
        <div>
          <label htmlFor="Department">Department</label>
          <select>
            <option value="0">Department</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
          </select>
        </div>
        <div>
          <label htmlFor="number">No. of Employees</label>
          <input
            name="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="submit" onClick={sendHandler}>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Form;
