
// import React, { useState } from 'react';
// import axios from 'axios'
// import { Route, Routes ,useNavigate} from 'react-router-dom'
// import './Signup.css'

// const Signup = () => {

//   let navigate=  useNavigate()

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     passWord: ''
 
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit =   async(e) => {
//     e.preventDefault();
//     // Add your signup logic here
//     let res=  await  axios.post('http://localhost:7000/api/users',formData)
//            if(res){
//             navigate('/login')
//            }
//     console.log(res);
//   };



//   return (
//     <>
//     <div class="main">
//       <h1>Sign up</h1>
      

//       <div class="box">
//         <input type="text" placeholder="name" />
//       </div>
//       <br />
//       <div class="box">
//         <input type="text" placeholder="Email" />
//       </div>
//       <div class="box">
//         <input type="text" placeholder="password" />
//       </div>

//       <input id="checkbox" type="checkbox" />

//       <div class="check">
//         <p>
//           I agree to Zomato's
//           <span class="red">Terms of Service,Privacy Policy</span>
//           and
//           <span class="red">Content Policies</span>
//         </p>
//       </div>

//       <div class="boxpass">
//         <span>Create account</span>
//       </div>
//       <p>or</p>
     
//       <div class="box">
//         <span
//           ><svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             class="bi bi-google"
//             viewBox="0 0 16 16"
//           >
//             <path
//               d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"
//             />
//           </svg>
//           Sign in with Google</span
//         >
//       </div>
//       <p font-size="1.8rem" class="text">
//         Already have an account? <span class="account">Log in</span>
//       </p>
//     </div>
//     </>
//   )
// }

// export default Signup






import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSignup = () => { 
        const { name, email, password } = user;
        if (name && email && password) {
            axios.post("http://localhost:7000/signup", user)
                .then(res => {
                    alert(res.data.message);
                    navigate("/login");
                })
                .catch(err => {
                    console.error("Error signing up:", err);
                });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="register">
            <h1>Signup</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <div className="button" onClick={handleSignup}>Signup</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    );
};

export default Signup;









