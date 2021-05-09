import React, { useEffect } from "react";
import {useDispatch} from "react-redux";

function Logout(props) {
  
  const dispatch = useDispatch()

  const updateUserState = (payload) => {
      dispatch({
          type: "UPDATE_USER",
          payload: payload
      })
  }

  useEffect(() => {
    sessionStorage.clear();
    updateUserState(null)
    props.history.push("/sign-in");
    },[]);

  return <div></div>;
}

export default Logout;