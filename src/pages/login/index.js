// import React, { useState } from "react"
// import axios from "axios"
// import logo from "../image/logo.png"

// const Login = () => {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

//     const handleLogin = event => {
//         event.preventDefault()
//         let payload = { username, password }

//         let url = `http://localhost:8080/auth`

//         axios.post(url, payload)
//             .then(response => {
//                 if (response.data.status == true) {
//                     /** login success */
//                     /** grab token */
//                     let token = response.data.token
//                     /** grab data user */
//                     let user = response.data.data

//                     /** store to local storage */
//                     localStorage.setItem('token', token)
//                     localStorage.setItem('user', JSON.stringify(user)
//                     )
//                     window.alert(`Login Berhasil`)
//                     window.location.href = "/menu"
//                 } else {
//                     /** wrong username / password */
//                     window.alert(`Username or password maybe wrong`)
//                 }
//             })
//             .catch(error => {
//                 window.alert(error)
//             })
//     }

//     return (
//         <div className="vw-100 d-flex m-4 
//         justify-content-center align-items-center">
//             <div className="col-md-5 rounded-4">
//       <img src={logo}/>
//                 <form onSubmit={handleLogin} className="mt-4">
//                     <input type="text"
//                         className="form-control mb-2"
//                         required={true}
//                         placeholder="Username"
//                         value={username}
//                         onChange={e => setUsername(e.target.value)}
//                     />

//                     <input type="password"
//                         className="form-control mb-2"
//                         required={true}
//                         placeholder="Password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                     />

//                     <button type="submit"
//                         className="btn btn-primary w-100 mb-2">
//                         LOGIN
//                     </button>
//                 </form>
//              </div>
//           </div>
//     )
// }

// export default Login

import React from "react";
import "../styles/tailwind.css";
import Logo from "../image/logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const loginProcess = (ev) => {
    ev.preventDefault();
    /** akses ke backend untuk proses login */
    /** method : POST
     *  endpoint : http://localhost:8080/user/auth
     *  request : username, password and role
     *  response : logged and token
     */
    const request = {
      username: username,
      password: password,
      role: role,
    };

    const endpoint = `http://localhost:8080/user/auth`;

    /** sending data */
    axios
      .post(endpoint, request)
      .then((response) => {
        if (response.data.logged === true) {
          let token = response.data.token;
          /** store token to local storage browser */
          localStorage.setItem(`token-cafe`, token);
          let dataUser = JSON.stringify(response.data.dataUser)
          localStorage.setItem(`user-kafe`, dataUser);
          const loginProcess = (ev) => {
    ev.preventDefault();
    /** ]akses ke backend untuk proses login */
    /** method : POST
     *  endpoint : http://localhost:8080/user/auth
     *  request : username, password and role
     *  response : logged and token
     */
    const request = {
      username: username,
      password: password,
      role: role,
    };

    const endpoint = `http://localhost:8080/user/auth`;

    /** sending data */
    axios
      .post(endpoint, request)
      .then((response) => {
        if (response.data.logged === true) {
          let token = response.data.token;
          /** store token to local storage browser */
          localStorage.setItem(`token-cafe`, token);
          let dataUser = JSON.stringify(response.data.dataUser)
          localStorage.setItem(`user-kafe`, dataUser);
          localStorage.setItem('user_id', response.data.id_user);
          alert(`Login Success`);
            if (role === "admin") {
              navigate("/admin");
            } else if (role === "manajer") {
              navigate("/manajer");
            } else {
              navigate("/kasir");
            }
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
      // console.log(username, password, role);
  };
          alert(`Login Success`);
            if (role === "admin") {
              navigate("/admin");
            } else if (role === "manajer") {
              navigate("/manajer");
            } else {
              navigate("/kasir");
            }
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
      // console.log(username, password, role);
  };
  return (
    <div>
      <div className="right">
      <div
        style={{ backgroundColor: "white", width: "100%", maxWidth: "30rem" }}
        className="absolute left-0 top-0 h-screen flex flex-col"
      ></div>
      <div class="login-container py-20 px-6 h-full">
        <div class="flex justify-center items-center flex-wrap">
          <div class="login-form xl:w-10/12 z-20">
            <div class="md:p-12 md:mx-6">
              <div className="logo flex items-center">
                <img
                  src={Logo}
                  alt="Cafe Logo"
                  style={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    top: "15%",
                  }}
                />
              </div>
                {/* <div class="text-center">
                  <h3 class="login-title text-2xl font-semibold">Log In</h3>
                </div> */}
                <form onSubmit={(ev) => loginProcess(ev)}>
                  <div className="form-group my-3 md:ml-40">
                    <label
                      for="username"
                      className="form-label inline-block text-black-700"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control mt-1 border border-gray-400 rounded px-3 py-2 max-w-md transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none"
                      placeholder="Enter Username"
                      id="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>
                  <div className="form-group my-3 md:ml-40">
                    <label
                      for="password"
                      className="form-label inline-block text-black-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control mt-1 border border-gray-400 rounded px-3 py-2 max-w-md transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none"
                      placeholder="Enter password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="form-group my-3 md:ml-40">
                    <label
                      for="role"
                      className="form-label inline-block text-black-700"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={role}
                      onChange={(event) => setRole(event.target.value)}
                      className="border border-gray-400 rounded px-3 py-2 max-w-md transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none"
                    >
                      <option value="admin">Admin</option>
                      <option value="manajer">Manajer</option>
                      <option value="kasir">Kasir</option>
                    </select>
                  </div>
                  <div className="form-group ml-40 max-w-md">
                    <input
                      type="submit"
                      value={"Log In"}
                      className="bg-gray-800 text-white py-3 px-5 mt-5 rounded-md hover:bg-gray-700 cursor-pointer font-bold"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}