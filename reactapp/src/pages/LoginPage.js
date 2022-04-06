import react,{useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../redux/authActions';
import './login.css';
import {userLogin} from '../api/authenticationService';
import {Alert,Spinner} from 'react-bootstrap';
import { Link } from "react-router-dom";

const LoginPage=({loading,error,...props})=>{

    const [values, setValues] = useState({
        userName: '',
        password: ''
        });

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();

        userLogin(values).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                props.setUser(response.data);
                props.history.push('/dashboard');
            }
            else{
               props.loginFailure('Something Wrong!Please Try Again'); 
            }


        }).catch((err)=>{
            if(err && err.response){
            switch(err.response.status){
                case 401:
                    console.log("401 status");
                    props.loginFailure("Authentication Failed.Bad Credentials");
                    break;
                default:
                    props.loginFailure('Something Wrong!Please Try Again'); 
            }
            }
            else{
                props.loginFailure('Something Wrong!Please Try Again');
            }
        });
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ",loading);

    return (
        <div className="myStyle">
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "45%",
          }}
        >
          <p className="">
            <h1 style={{ color: "white", fontSize: "60px" }}>
              <strong>Tariff Manager</strong>
            </h1>
          </p>
        </div>
        <center
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <div
            className="colors"
          >
            <h2 style={{ color: "black", fontSize: "35px" }}>Login</h2>
            <br></br>

            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
              
              <div class="txt_field" id="email">
              <input id="email" type="text" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />
                  
                                    <div className="invalid-feedback">
                                        UserId is invalid
                                    </div>
                
                <label>Email or username</label>
              </div>
              <div class="txt_field" id="password">
              <input id="password" type="password" minLength={8} value={values.password} onChange={handleChange} name="password" required/>
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>                <span></span>
                <label>Password</label>
              </div>

               <div className="form-group m-0">
                                    <button type="submit" value = "Login" classname="login" className="btn btn-primary">
                                        Login
                                        {loading && (
                                            <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                          />
                                        )}
                                    </button>
                                </div> 

              {/* <input type="submit" value="Login" classname="login"></input>  */}
                
             
              <div class="signup_link">
                New here?
                <a>
                  <Link to="/signup">Click to signup</Link>
                </a>
              </div>
            </form>

             { error &&
                            <Alert style={{marginTop:'20px'}} variant="danger">
                                    {error}
                                </Alert>
                            } 

          </div>
        </center>
      </div>
    </div>
    );


    
}

const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);