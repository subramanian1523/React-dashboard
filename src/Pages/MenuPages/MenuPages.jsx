import { Button } from "antd";
import Password from "antd/es/input/Password";
import React, { useState } from "react";

export const MenuPages = () => {
  const [login, setLogin] = useState({
    user: "",
    Password: "",
  });
  const [validate, setValidate] = useState({
    user: "",
    Password: "",
  });

  const onhandleValidate = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${name} is required`;
    }

    setValidate((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    onhandleValidate(name, value);
  };

  const onHandleSignIn = () => {
    let error = "";
    Object.keys(login).forEach((key) => {
      if (!login[key].trim()) {
        error = `${key} is required`;
      }
    });

    setValidate(error)
 
    if(Object.keys(validate).length > 0 || !login.user || !login.Password) return alert("please enter the details")

    localStorage.setItem('userdata',JSON.stringify(login))
    alert("login sucessfull")

    setLogin({
      user:"",
      Password:""
    })
  };

  const isDisabled = validate.user?.trim() || validate?.Password?.trim();

  return (
    <div>
      <div>
        <label>user Name</label>
        <input
          type="text"
          name="user"
          value={login.user}
          onChange={(e) => onHandleChange(e)}
        />
      </div>
      {validate.user && <div className="text-[red]">{validate.user}</div>}
      <div>
        <label>Password</label>
        <input
          value={login.Password}
          type="password"
          name="Password"
          onChange={(e) => onHandleChange(e)}
        />
      </div>
      {validate.Password && (
        <div className="text-[red]">{validate.Password}</div>
      )}
      <div>
        <Button
          className="p-4 bg-[red]"
          onClick={() => onHandleSignIn()}
        >
          login
        </Button>
      </div>
    </div>
  );
};
