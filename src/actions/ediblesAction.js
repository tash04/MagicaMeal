import axios from "axios";
//imp ort swal from "sweetalert";

export const getAllEdibles = () => async (dispatch) => {
  
  dispatch({ type: "GET_EDIBLES_REQUEST" });
  
  try {
    const response = await axios.get("/api/edibles/getalledibles");
    console.log(response);
    dispatch({ type: "GET_EDIBLES_SUCCESS", payload: response.data })
  } catch (error) {
    dispatch({ type: "GET_EDIBLES_FAILED", payload: error})
  }
};
