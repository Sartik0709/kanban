import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin =async()=>{
   try {
         await axios
        .post("https://kanban-board-ycjv.onrender.com/user/login", user)
        .then((res) => {
            if(res){
                const token = res.data.token;
                const userId = res.data.user.id;
                const roles = res.data.user.roles;
                localStorage.setItem('token' , JSON.stringify(token));
                localStorage.setItem('userId' , JSON.stringify(userId));
                localStorage.setItem('roles' , JSON.stringify(roles));
                console.log(res.data.user.roles);
                navigate('/home');
                setError("");
            }
        });     
   } catch (error) {
    setError("user credential are incorrect or user not register")
    console.log(error.message);
   }
  }

  //Register navigation
  const navigateToRegister = ()=>{
    navigate("/register")
  }

  return (
    <div>
        <div>
            Login page
        </div>
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
      <br />
      <button
        onClick={handleLogin}
      >
        {" "}
        Login
      </button>
      <button
      onClick={navigateToRegister}>
      {" "}
      Please Register
      </button>

      {error && <p>{error}</p>}

    </div>
    
  );
};
