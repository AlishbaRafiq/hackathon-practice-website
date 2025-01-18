import Link from "next/link";
import React from "react";

const Upperheader = () => {
  return (
    <div className="flex items-center justify-center h-[48px] w-full bg-[#000000] pt-3 pb-3 gap-48" >
      <span className="text-white">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a className="mx-7 underline" href="/home">ShopNow </a></span>
        <select className="bg-[#000000] text-white mx-7 " name="English" >
            <option value="english">English</option>
        </select>
    </div>
  );
};

export default Upperheader ;


export const Header = () => {
  return (
    <div>
      <Link href=""/>
    </div>
  )
}

