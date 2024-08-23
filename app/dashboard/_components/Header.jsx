"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
 
  return (
    <div>
      <div className="flex p-4 items-center justify-between bg-secondary shadow-sm bg-neutral-200">
        <Image src={"/logo.svg"} width={60} height={100} alt="logo" />
        <ul className="hidden md:flex gap-6">
          <Link href={"/dashboard"}>
            <li
              className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/dashboard" && "text-primary font-bold"}
            `}
            >
              Dashboard
            </li>
          </Link>
          <Link href="/dashboard/questions">
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/dashboard/questions" && "text-primary font-bold"}
            `}
          >
            Questions
          </li>
          </Link>
          <Link href="/dashboard/how">
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/dashboard/how" && "text-primary font-bold"}
            `}
          >
            How it Works?
          </li>
          </Link>
        </ul>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
