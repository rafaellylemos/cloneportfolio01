import React from "react";
import Link from "next/link";

export function Portfolios() {
  return(
    <>
    <div className="pl-5 text-xs lowercase">
      <Link href="/photographer">
        <p className="hover:cursor-pointer hover:font-light hover:uppercase">photographer</p>
      </Link>
      <Link href="/developer">
        <p className="hover:cursor-pointer hover:font-light hover:uppercase">developer</p>
      </Link>
    </div>
    </>
  )
}