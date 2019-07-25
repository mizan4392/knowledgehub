import React, { Component } from 'react'
import './Signup.css';
import Particles from 'react-particles-js';


const params={
     particles: {
       number:{
         value:40,
         density:{
           enable:true,
           value_area:200
         }
       }
     }
}


class Signup extends Component {
    render() {
        return (
            <div className="bg">
               <Particles params={params} className='particales'/>
            <div className=" container-fluid">
               <form className="form-group form-container container">
                    <h1 className="text-center Label">User SignUp</h1>
                   <div className="row">
                       <div className="col-md-6">
                            <label htmlFor="firstName" className="Label">First Name</label>
                            <input className="form-control" type="text" placeholder="First Name" />
                       </div>
                       <div className="col-md-6">
                            <label htmlFor="lastName" className="Label">Last Name</label>
                            <input className="form-control" type="text" placeholder="Last Name" />
                       </div>
                       <div className="col-md-6">
                            <label htmlFor="email" className="Label">Email</label>
                            <input className="form-control" type="email" placeholder="Email" />
                       </div>
                       <div className="col-md-6 mt-4">
                            <label htmlFor="gender" className="Label"> Gender</label>
                            <div className="input-group ">
                            <label htmlFor="radio" className="Label"><input type="radio" name="gender" className=""/>Male</label>
                            <label htmlFor="radio" className="Label"><input type="radio" name="gender" className=""/>Male</label>
                            </div>
                       </div>
                       <div className="col-md-6">
                            <label htmlFor="password" className="Label">Password</label>
                            <input className="form-control" type="password" placeholder="Password" />
                       </div>
                       <div className="col-md-6">
                            <label htmlFor="confirmPassword" className="Label">Conform Password</label>
                            <input className="form-control" type="password" placeholder="Confirm Password" />
                       </div>
                   </div>
                   <button type="submit" className="btn btn-dark btn-secondary btn-outline-dark">SignUp</button>
                   
               </form>
               </div> 
            </div>
        )
    }
}
export default Signup;
