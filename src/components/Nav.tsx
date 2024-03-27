import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <header className="py-6">
      <nav className="max-w-screen-xl m-auto flex justify-between items-center">
        <a href="/">Logo</a>

        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <UserButton />
        </div>
      </nav>
    </header>
  );
}
