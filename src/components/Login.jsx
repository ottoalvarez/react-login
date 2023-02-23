import { useState } from "react";
import { validateLogin } from "../hooks/ValidateLogin";

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const onSubmit = async (e)=>{
    e.preventDefault();
    if(await verifyUndefined(username) && await verifyUndefined(password)){
      await validateLogin({username,password});
    }
  }

  async function verifyUndefined(value) {
    if (value == "" && value == undefined) return false
    return true
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Login Form</h4>
              </div>
              <div className="card-body">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" 
                      className="form-control" 
                      id="username" 
                      value={username} 
                      placeholder="Tell us your username"
                      onChange={ (e)=>{ setUsername(e.target.value) } }
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                      className="form-control" 
                      id="password" 
                      value={password} 
                      placeholder="Tell us your password"
                      onChange={ (e)=>{setPassword(e.target.value)} }
                      ></input>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary mx-1">Login</button>
                  <button type="button" className="btn btn-secondary">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
