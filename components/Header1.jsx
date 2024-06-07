
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
    
    } else {
      setAuth(false);
    }
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className="h-12 flex items-center justify-between border-b-2 border-gray-300 px-5">
      <Image src="/logo.png" alt="logo" width={80} height={48} className="h-full w-20 rounded" />
      <div className="flex h-full">
        <Block title="become a member" para="additional 10% off" />
        <Block title="oyo for business" para="trusted by 5000 corporates" />
        <Block title="list your property" para="starting earning in 30 min" />
        <Block title="238748378" para="call us to book now" />
        <div className="flex p-3">
          <Image src="/demo.svg" alt="demo" width={20} height={20} className="w-5 h-5 rounded-full" />
          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href="/Login">
              <span className="font-bold">Login / Signup</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
