import React from "react";
import Logo from "../image/logo.png";
import "./Form.css";
const Form = () => {
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
          <input type="text" name="user_name" id="user_name" />
        </div>
        <div>
          <label htmlFor="">LastName</label>
          <input type="text" name="last_name" id="last_name" />
        </div>
      </div>
      <div className="email">
      <label htmlFor="email">Email</label>

        <input type="text"  name="email" id="email" />
      </div>
    </div>
  );
};

export default Form;
