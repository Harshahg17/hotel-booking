
import Image from "next/image";
import Block from "./Block";
const Header1=()=>{
  return(
    <div className=" h-12 flex items-center justify-between border-b-2 border-gray-300  px-5 ">

      <img src="/logo.png" alt=""  width={20} height={20}
       className="h-full w-20 rounded"/>
        <div className="flex h-full">
        <Block title={'become a member '} para={'additional 10% off'}/>
        <Block title={'oyo for bussiness '} para={'trusted by 5000 corporates'}/>
        <Block title={'list your property '} para={'starting earning in 30 min'}/>
        <Block title={'238748378 '} para={'call us to book now '}/>
          <div className="flex p-3">
          <img src="demo.svg" alt="demo" width={200} height={200} className="w-5 h-5 rounded-full" />
             <h3 className=" ml-2 font-bold">sign up|login</h3>
          </div>
        </div>
    </div>
    
  )
}  

export default Header1