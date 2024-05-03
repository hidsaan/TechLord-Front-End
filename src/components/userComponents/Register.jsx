import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/Register.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import defaultimg from '../../images/defaultUser.png'

const Register = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(defaultimg);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confpassword, setConfpassword] = useState("")

    const handleImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result);
            }
            // else{
            //     setImage(defaultimg)
            // }
        };
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const formData = new FormData();

            formData.append("image", image);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("password", password);
            formData.append("confpassword", confpassword);

            const response = await axios.post("http://localhost:4000/user/register", formData)

            if (response.data.message === "Registration Successful") {

                setName(""),
                    setEmail(""),
                    setPhone(""),
                    setPassword(""),
                    setConfpassword(""),
                    setImage(defaultimg)

                //toast.success(response.data.message)

                navigate('/Login')

            }
            else {
                toast.error(response.data.message)
                //console.log(response.data.message)
            }
        }
        catch (error) {
            setLoading(false)
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>

            <ToastContainer />

            <div className='register'>
                <div>
                    <form>

                        <div className="addprofilepic">
                            <img src={image} className='profilepicture' alt="nothing" />
                            <label> <span className="plus">+</span>
                                <input type='file' id="fileinput" accept="image/*" onChange={handleImage} />
                            </label>
                        </div>

                        <label>Name
                            <input type='text' placeholder='Enter your Name' name="name" value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }} />
                        </label>

                        <label>Email
                            <input type='email' placeholder='Enter your Email' name='email' value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </label>

                        <label>Phone
                            <input type='tel' placeholder='10 digit phone number' name='phone' value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }} />
                        </label>

                        <label>Password
                            <input type='password' placeholder='Password should be more than 6 characters long' name='password' value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                        </label>

                        <label> Confirm Password
                            <input type='password' placeholder='Should match the Password above' name='confpassword' value={confpassword}
                                onChange={(e) => {
                                    setConfpassword(e.target.value);
                                }} />
                        </label>

                        <label className="checkboxlabel" >
                            {/* <input className="checkbox" type="checkbox" required></input> */}
                            By submitting, I agree to the <Link to={"/TermsAndConditions"}> terms and conditions</Link>
                        </label>

                        <button onClick={onSubmit} disabled={loading}>Submit</button>
                        <p className='loginlink'>Already have an account? <Link to={"/Login"}>Login Here</Link></p>


                    </form>
                </div>

                <div className="imagediv">

                </div>

            </div>
        </>

    )
}

export default Register