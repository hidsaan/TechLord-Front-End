import React, { useState } from 'react'
import './styles/Sell.scss'
import IsAuthenticated from '../authorization/auth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import plusimg from '../../images/imagePlus.PNG'

const Sell = () => {
  
  IsAuthenticated();

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(plusimg);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [usedfor, setUsedfor] = useState("");
  const [condition, setCondition] = useState("");
  //const [isClicked, setIsClicked] = useState(false);

  const token = localStorage.getItem("token");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  // const handlePoor = () => {
  //   setCondition("Poor")
  //   setIsClicked(true);
  // }
  // const handleAverage = () => {
  //   setCondition("Average")
  //   setIsClicked(true);
  // }
  // const handleGood = () => {
  //   setCondition("Good")
  //   setIsClicked(true);
  // }
  // const handleVGood = () => {
  //   setCondition("Very Good")
  //   setIsClicked(true);
  // }
  // const handleExcellent = () => {
  //   setCondition("Excellent")
  //   setIsClicked(true);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const formData = new FormData();

      formData.append("image", image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("usedfor", usedfor);
      formData.append("condition", condition);
      //console.log(name, description, price, usedfor, condition )

      const response = await axios.post("http://localhost:4000/user/sellProduct", formData)

      // console.log()

      if (response.data.message === "Product Saved!") {

        setName(""),
          setDescription(""),
          setPrice(""),
          setUsedfor(""),
          setCondition(""),
          setImage(plusimg)

        toast.success(response.data.message)

      }

      else {
        toast.error(response.data.message)
      }
    }
    catch (error) {
      setLoading(false)
      console.log(error)
    }
    finally {
      setLoading(false)
    }

  };

  return (
    <div className='sell'>
      <ToastContainer />
      <div className="productform">
        <h1>Add Your Device to Sell</h1>
        <form>
          <div className="addpicture">
            
            <label> <span className=""><img src={image} className='picture' alt="nothing" /></span>
              <input type='file' id="fileinput" accept="image/*" onChange={handleImage} />
            </label>
          </div>

          <div className="form">
            <label> Name
              <input type='text' placeholder='Add the Name Of Your Device' name="name" value={name} onChange={(e) => {
                setName(e.target.value);
              }}>
              </input>
            </label>
            <label> Description
              <input type='text' placeholder='Describe Your Device' name="description" value={description} onChange={(e) => {
                setDescription(e.target.value);
              }}>
              </input>
            </label>
            <label> Price
              <input type='text' placeholder='Add a Suitable Price' name="price" value={price} onChange={(e) => {
                setPrice(e.target.value);
              }}>
              </input>
            </label>
            <label> Used For
              <input type='text' placeholder='How Long Has Your Device Been Used For?' name="usedfor" value={usedfor} onChange={(e) => {
                setUsedfor(e.target.value);
              }}>
              </input>
            </label>
            <label> Condition
              <input type='text' placeholder='Write the condition "Poor", "Average", "Good", "Very Good" or "Excellent" ' name="condition" value={condition} onChange={(e) => {
                setCondition(e.target.value);
              }}>
              </input>
            </label>
            {/* <label> Condition
            <button onClick={handlePoor} className={`button ${isClicked ? 'clicked' : ''}`}>Poor</button>
            <button onClick={handleAverage} className={`button ${isClicked ? 'clicked' : ''}`}>Average</button>
            <button onClick={handleGood} className={`button ${isClicked ? 'clicked' : ''}`}>Good</button>
            <button onClick={handleVGood} className={`button ${isClicked ? 'clicked' : ''}`}>Very Good</button>
            <button onClick={handleExcellent} className={`button ${isClicked ? 'clicked' : ''}`}>Excellent</button>
          </label> */}
            <button type='submit' onClick={handleSubmit} disabled={loading}>Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Sell