import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const IsAuthenticated = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      toast.error("Please Login First")

      navigate("/Login");
    }
  }, [token, navigate]);

  return (<ToastContainer />)
};


export default IsAuthenticated
