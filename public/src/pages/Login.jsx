import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../Assets/logo.svg"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { loginRoute } from "../utils/Api"

function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: "",
    password: "",
  })
  const toastoptions = {
    autoClose: 2000,
    draggabl: true,
    position: "top-right",
    theme: "dark",
  }
  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/")
    }
  }, [])
  const HandleSubmit = async (e) => {
    e.preventDefault()
    if (HandleValidation()) {
      const { password, username } = values
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      })
      if (data.status === false) {
        toast.error(data.msg, toastoptions)
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user))
        navigate("/")
      }
    }
  }
  const HandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const HandleValidation = () => {
    const { password, username } = values
    if (password === "" || username.length === "") {
      toast.error("Email and Password are required", toastoptions)
      return false
    }
    return true
  }
  return (
    <>
      <FormContainer>
        <form
          onSubmit={(e) => {
            HandleSubmit(e)
          }}
        >
          <div className="brand">
            <img src={logo} alt="logo" />
            <h1>Flik</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => {
              HandleChange(e)
            }}
            min="3"
          ></input>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              HandleChange(e)
            }}
          ></input>
          <button type="submit">Login</button>
          <span>
            Dont have an Account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-direction: column;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      font-size: 1rem;
      border-radius: 0.4rem;
      text-transform: uppercase;
      &:hover {
        background-color: #4e0eff;
        transition: 0.5s ease-in-out;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`
export default Login
