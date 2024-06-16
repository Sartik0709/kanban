import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({userName:"", email: "", password: "",roles:""});
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister =async()=>{
   try {
         await axios
        .post("https://kanban-board-ycjv.onrender.com/user/register", user)
        .then((res) => {
            if(res){
                // const token = res.data.token;
                // localStorage.setItem('token' , JSON.stringify(token));
                console.log(res);
                navigate('/login');
                setError("");
            }
        });     
   } catch (error) {
    setError("error while registering new user")
    console.log(error.message);
   }
  }


  return (
    <>
       <div>
            Register page
        </div>
    <div>
        

        <input
        type="text"
        placeholder="enter userName"
        name="userName"
        onChange={onChangeHandler}
      />{" "}
      <br />  
      <input
        type="email"
        placeholder="enter your email"
        name="email"
        onChange={onChangeHandler}
      />{" "}
      <br />
      <input
        type="text"
        name="password"
        placeholder="enter your password"
        onChange={onChangeHandler}
      />{" "}
      <br />
      <input
        type="text"
        name="roles"
        placeholder="enter your role"
        onChange={onChangeHandler}
      />{" "}
      <br />
      <br />
      <button
        onClick={handleRegister}
      >
        {" "}
        Register
      </button>

      {error && <p>{error}</p>}

    </div>
    </>
  );
};
