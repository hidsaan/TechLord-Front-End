import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/Login.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
// import Cookies from 'js-cookie';

const Login = () => {

  const navigate = useNavigate()

  const [formData, SetFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData((input) => ({
      ...input, [name]: value,
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/user/login", formData)
      if (response.data.message === "Logged in Successfully") {
        const token = response.data.token
        localStorage.setItem('token' , token)

        SetFormData({
          email: "",
          password: ""

        })

        //toast.success(response.data.message)

        navigate('/Dashboard')

      } else {

        toast.error(response.data.message)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ToastContainer />

      <div className='login'>
        <div>
          <form>

            <label>Email</label>
            <input type='email' placeholder='Enter your Email' name='email' value={formData.email} onChange={handleChange} />

            <label>Password</label>
            <input type='password' placeholder='Enter your Password' name='password' value={formData.password} onChange={handleChange} />

            <button onClick={onSubmit}>Submit</button>
            <p className='registerlink'>New to TechLord? <Link to={"/Register"}>SignUp Here</Link> </p>

          </form>
        </div>

        <div className="imagediv">

        </div>

      </div>
    </>

  )
}

export default Login;