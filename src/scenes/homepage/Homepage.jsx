import React, { useState } from "react";
import mainheader from"../../mainhader.png";
import Icons from "../../components/Icons";
import laptop from"../../laptop.png";
import bicycle from"../../bicycle.png";
import camera from"../../camera.png";
import console from"../../console.png";
import headphones from"../../headphones.png";
import wristwatch from"../../wristwatch.png";
import tshirt from"../../tshirt.png";
import books from"../../books.png";
import smartphone from"../../smartphone.png";
import film from"../../video.png";
import teddy from"../../teddy.png";

export default function Homepage() {
  const [user,setuser] = useState(null)
const handleclick = async ()=>{
  await fetch("http://localhost:6001/upload",{
      method: "GET",
    }).then((gg)=>{setuser(gg)})
}
  
  return (
    <>
      <div className="pl-3 bg-grey-bg w-full h-screen">
        <img src={mainheader} alt="" />
        <h3 className="font-bold mb-5 text-2xl">Popular categories</h3>
        <div className="icons flex gap-6 ">
        <Icons link={laptop}/>
        <Icons link={console}/>
        <Icons link={camera}/>
        <Icons link={headphones}/>
        <Icons link={bicycle}/>
        <Icons link={wristwatch}/>
        <Icons link={tshirt}/>
        <Icons link={smartphone}/>
        <Icons link={books}/>
        <Icons link={film}/>
        <Icons link={teddy}/>
        </div>
        <div><h3 className="font-bold mt-5 text-2xl">Hot Deals</h3></div>
        <button onClick={handleclick}>dfd </button>
        <img src={user} alt="" />
      </div>
    </>
  );
}
