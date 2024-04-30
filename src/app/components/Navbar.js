import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <div>Navbar</div>
      <Link href="/">Home</Link>
      <Link href="/film">Film</Link>
      <Link href="/contact">Contact Me</Link>
    </nav>
  );
}

export default Navbar;
