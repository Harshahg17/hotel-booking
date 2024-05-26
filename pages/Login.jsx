import Head from "next/head";
const Login=()=>{
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
                    <input type="text" placeholder="enter your name..." className="px-3 mx-3 my-3   outline-none border border-black w-80 " />


                    <input type="email" placeholder="enter your email..." className="px-3 mx-3 my-3   outline-none border border-black w-80 " />
                    <input type="password " placeholder="enter your password..." className="px-3 mx-3 my-3   outline-none border border-black w-80 " />
                     <button type="submit " className="w-80 text-lg  font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white mx-3 rounded-lg h-10">Sign up=</button>
                    <div className="my-3">
                    <span className="mx-3  ">already have an account?  </span>
                     <span className="mx-2 border-b-2  border-red-500 text-red-600 pb-1 hover:cursor-pointer ">login</span>
                    </div>
                  </div>
              </div>
            </div>

          </div>
      </div>    

      
  )  
  
}  
export default Login;