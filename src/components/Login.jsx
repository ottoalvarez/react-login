import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { validateLogin } from "../hooks/ValidateLogin";

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')

  const MySwal = withReactContent(Swal);
  
  const onSubmit = async (e)=>{
    e.preventDefault();
    if(await verifyUndefined(username) && await verifyUndefined(password) && await verifyUndefined(fullname) && await verifyUndefined(email)){
      const {token} = await validateLogin({username,password,fullname,email});
      
      MySwal.fire({
        title: <p>Registro completo</p>,
        html: <p>{token}</p>
      })
    }else{
      MySwal.fire({
        title: <p>Validación de datos</p>,
        html: <p>No se validaron los campos o venian vacios</p>
      })
    }
  }

  async function verifyUndefined(value) {
    if (value == "" || value == undefined) return false
    return true
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Register Form</h4>
              </div>
              <div className="card-body">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username <small className="text-danger">*</small>:</label>
                    <input type="text" 
                      className="form-control" 
                      id="username" 
                      value={username} 
                      placeholder="Tell us your username"
                      onChange={ (e)=>{ setUsername(e.target.value) } }
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password <small className="text-danger">*</small>:</label>
                    <input type="password" 
                      className="form-control" 
                      id="password" 
                      value={password} 
                      placeholder="Tell us your password"
                      onChange={ (e)=>{setPassword(e.target.value)} }
                      ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fullname">Fullname <small className="text-danger">*</small>:</label>
                    <input type="text" 
                      className="form-control" 
                      id="fullname" 
                      value={fullname} 
                      placeholder="Tell us your fullname"
                      onChange={ (e)=>{setFullname(e.target.value)} }
                      ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <small className="text-danger">*</small>:</label>
                    <input type="email" 
                      className="form-control" 
                      id="email" 
                      value={email} 
                      placeholder="Tell us your email"
                      onChange={ (e)=>{setEmail(e.target.value)} }
                      ></input>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary">Register</button>
                  <button type="button" className="btn btn-link mx-1">¿Already register?</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
