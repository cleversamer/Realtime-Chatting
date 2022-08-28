/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import config from "config.json";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    error: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (!isValid) {
      return;
    }

    alert("Registers successfully.");
    // Calling the server...
    clearForm();
  };

  const clearForm = () =>
    setValues({
      username: "",
      email: "",
      password1: "",
      password2: "",
      error: "",
    });

  const handleValidation = () => {
    const { username, email, password1, password2 } = values;
    if (!username || !email || !password1 || !password2) {
      setError("Invalid user registration info.");
      return false;
    }

    if (password1 !== password2) {
      setError("Passwords should be equal.");
      return false;
    }

    if (password1.length < 8 || password1.length > 32) {
      setError("Password should be (8 ~ 32) characters length.");
      return false;
    }

    if (username.length < 3 || username.length > 32) {
      setError("Username should be (3 ~ 32) characters length.");
      return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Invalid email address.");
      return false;
    }

    return true;
  };

  const setError = (error) => setValues({ ...values, error });

  const handleFieldChange = (key) => (e) =>
    setValues({ ...values, [key]: e.currentTarget.value, error: "" });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Brand>
          <Image src="/assets/icons/logo.svg" alt="chattie's logo" />
          <Heading>Chattie</Heading>
        </Brand>

        <Input
          onChange={handleFieldChange("username")}
          placeholder="Username"
          type="text"
          value={values.username}
        />

        <Input
          onChange={handleFieldChange("email")}
          placeholder="Email"
          type="text"
          value={values.email}
        />

        <Input
          onChange={handleFieldChange("password1")}
          placeholder="Password"
          type="password"
          value={values.password1}
        />

        <InputContainer>
          <Input
            onChange={handleFieldChange("password2")}
            placeholder="Confirm password"
            type="password"
            value={values.password2}
          />

          {values.error && <Error>{values.error}</Error>}
        </InputContainer>

        <BtnSubmit type="submit">Register</BtnSubmit>

        <NavigationText>
          Already have an account?{" "}
          <Link to={config.routes.client.login}>Login.</Link>
        </NavigationText>
      </Form>

      <Copyrights>
        &copy; 2022{" "}
        <a href="https://cleversamer.web.app/" target="_blank">
          Samer Al-Sa'dawi.
        </a>{" "}
        All rights reserved.
      </Copyrights>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: #131324;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  justify-content: center;
`;

const InputContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.463);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 50px;
  /* max-width: 350px; */
`;

const Brand = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  height: 42px;
`;

const Heading = styled.h1`
  color: #fff;
  text-transform: capitalize;
`;

const Input = styled.input`
  background-color: transparent;
  border-radius: 5px;
  border: 1.3px solid #4e0eff;
  color: #fff;
  font-size: 14px;
  padding: 10px 15px;
  transition-duration: 176ms;
  width: 100%;

  ::placeholder {
    font-size: 14px;
    font-weight: 600;
  }

  :focus {
    border-color: #997af0;
  }
`;

const BtnSubmit = styled.button`
  background-color: #997af0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 38px;
  text-transform: uppercase;
  transition-duration: 176ms;

  :hover {
    background-color: #4e0eff;
  }

  :active {
    transform: scale(0.96);
  }
`;

const NavigationText = styled.span`
  color: #fff;
  font-size: 15px;
  margin-top: 15px;

  > a {
    color: #997af0;
    transition-duration: 176ms;

    :hover {
      color: #4e0eff;
    }
  }
`;

const Copyrights = styled.span`
  color: #eee;
  font-size: 15px;
  text-transform: capitalize;

  a {
    color: #997af0;
    text-decoration: underline;
    transition-duration: 176ms;

    :hover {
      color: #4e0eff;
    }
  }
`;

const Error = styled.span`
  color: #f00;
  font-size: 13px;
  text-align: center;
`;

export default Register;
