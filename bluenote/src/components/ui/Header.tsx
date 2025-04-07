import { shadow } from "@/app/styles/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./button";
import { DarkModeToggle } from "./DarkModeToggle";

function Header() {
  const user = null;

  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8" style={{boxShadow: shadow}}>
        <Link className="flex items-center gap-2" href='/'>
            <Image src='./note.svg' height={60} width={60} alt="logo" priority/>

            <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">Bluenote</h1>
        </Link>

        <div className="flex gap-4">
        {user ? (
          "Logout"
        ) : (
          <>
           <Button asChild variant="default" className="hidden sm:block">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          </>
        )}
        <DarkModeToggle />
        </div>
    </header>
  )
}

export default Header