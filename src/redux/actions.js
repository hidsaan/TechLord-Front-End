import axios from "axios";

export const getAllProducts = () => async (action) => {
  try {
    action({
      type: "request",
    });

    const { data } = await axios.get("http://localhost:4000/user/getAllProducts");

    action({
      type: "success",
      message: data.message,
      Payload: data.products,
    });
    
  } catch (error) {
    action({
      type: "error",
      message: error.message,
    });
  }
};

export const addProduct = (formData) => async (action) => {
  try {
    action({
      type: "Request",
    });

    const { data } = await axios.post("http://localhost:4000/admin/addProduct", formData);

    action({
      type: "Success",
      message: data.message,
      dataPayload: data.product,
    });
  } catch (error) {
    action({
      type: "error",
      message: error.message,
    });
  }
};

export default addProduct;
