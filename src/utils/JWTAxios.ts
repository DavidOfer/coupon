import axios from "axios";
import store from "../store";
import { authActions } from "../store/authSlice";


const jwtAxios = axios.create();

jwtAxios.interceptors.request.use((request) => {
  const token = store.getState().auth.token;
  request.headers = {
    Authorization: token,
    "Content-Type": "application/json",
  };
  return request;
});
jwtAxios.interceptors.response.use(
  (response) => {
    const token = response.headers.authorization;
    store.dispatch(authActions.login(token));
    localStorage.setItem("token", token);
    // store.dispatch(authActions.login(response.headers.authorization))
    // sessionStorage.setItem("Authorization", response.headers.authorization);
    return response;
  },
  (error) => {
    const token = error.response.headers.authorization;

    if(error.response.status===403){
      console.log(error);
      store.dispatch(authActions.logOut());
    }
    else if (token) {
      store.dispatch(authActions.login(token));
      localStorage.setItem("token", token);
    }
    throw error;
    // if(error.request)
    // {
    //   console.log("request error in interceptor")
    //   store.dispatch(authActions.logOut());
    //   throw new Error("request error in interceptor");
    // }
    // switch (error.response.status) {

    //   case 403:
    //     store.dispatch(authActions.logOut());
    //     console.log("error")
    //     throw new Error("Login time expired");

    //   default:
    //     console.log("regular error in interceptor: ")
    //     console.log(error)
    //     const token = error.response.headers.authorization;
    //     if(token){
    //       store.dispatch(authActions.login(token));
    //       localStorage.setItem("token", token);
    //     }
    //     throw error;
    // }
  }
);

export default jwtAxios;
