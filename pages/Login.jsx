'use client'
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const Login=()=>{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [login,setLogin]=useState(false);
const router=useRouter();
  const handlesignUp= async()=>{
    try {
      // Ensure email and password are defined
      if (!email || !password|| !name) {
        console.error('Email and password must be provided');
        return;
      }
  
      // Make the POST request
      const res = await axios.post("/api/user/register", {
        name,
        email,
        password,
      });
  
    if(res?.data)
      { 
        Cookies.set('user',res.data.token);
        alert(res.data.msg);
        router.push('/');
      }
    } catch (error) {
      // Handle and log errors
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response from server:', error.response);
        console.error('Status code:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // An error occurred in setting up the request
        console.error('Error in request setup:', error.message);
      }
    }
  } 
  const handlelogin = async () => {
    try {
      // Ensure email and password are defined
      if (!email || !password) {
        console.error('Email and password must be provided');
        return;
      }
  
      // Make the POST request
      const res = await axios.post("/api/user/login", {
        name,
        email,
        password,
      });
  
    if(res?.data)
      { 
        Cookies.set('user',res.data.token);
        alert(res.data.msg);
        router.push('/');
      }
    } catch (error) {
      // Handle and log errors
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response from server:', error.response);
        console.error('Status code:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // An error occurred in setting up the request
        console.error('Error in request setup:', error.message);
      }
    }
  };
  
 const handetoggle=()=>{
  setLogin(!login)
 }
  return (
      <div>
         <Head>
        <title>Login</title>
      </Head>  
          <div  className="flex justify-center items-center h-screen relative bg-login-background">
            <div className=" text-white absolute top-5 px-10 flex items-center text-2xl font-bold w-full ">
              <p> <span className="text-4xl text-gray-950"> OYO</span> Hotels and homes across 800 cities, 24+ countries</p>
            </div>
            <div className=" justify-center flex mx-20 w-9/12 mt-20 ">

              <div>
                <p className="text-4xl font-bold mt-2 text-justify text-white" >  There’s a smarter way to OYO around</p>
                <p className="text-white">Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>

              </div>  
              <div className=" ml-10 w-11/12 border-2 border-red-500 h-96 pb-40 bg-white ">
                  <p className="h-8 px-10 text-lg font-bold text-white bg-gradient-to-r from-red-300 to bg-orange-500">
                   Sign up & Get ₹500 OYO Money
                  </p>  
                  <div className="">
                    <h3 className="px-3 text-3xl font-bold my-5"> login/sign up</h3>
                    <p className="px-3 font-bold">please enter your phone number to continue </p>
                  {
                    login ? " ":(
                      <input type="text" placeholder="enter your name..." 
                      className="px-3 mx-3 my-3   outline-none border border-black w-80 "
                      onChange={(e)=>{
                        setName(e.target.value)
                      }} />)
                  }
                    
                  


                    <input type="email" placeholder="enter your email..." className="px-3 mx-3 my-3   outline-none border border-black w-80 "
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }} />
                    <input type="password " placeholder="enter your password..." className="px-3 mx-3 my-3   outline-none border border-black w-80 "
                    onChange={(e)=>{
                      setPassword(e.target.value)  }} />
                     <button type="submit " className="w-80 text-lg  font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white mx-3 rounded-lg h-10" onClick={login ? handlelogin:handlesignUp}>{login ? "login" : "sign up"}</button>

                    <div className="my-3">
                    <span className="mx-3  ">{login ? "Dont have an account ":"already have an account "}  </span>
                     <span className="mx-2 border-b-2  border-red-500 text-red-600 pb-1 hover:cursor-pointer " onClick={handetoggle}>{login ? "sign up" : "login"}</span>

                    </div>
                  </div>
              </div>
            </div>

          </div>
      </div>    

      
  )  
  
}  
export default Login;