import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Nayla Tanisha Zulfa" });
  }, 2000);
};

export const registerUserAPI = (data) => async (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", value: true });
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;
    console.log("Sukses :", user);
    dispatch({ type: "CHANGE_LOADING", value: false });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error :", errorCode, errorMessage);
    dispatch({ type: "CHANGE_LOADING", value: false });
  }
};
