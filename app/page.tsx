import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Default from "./templates/Default";
import FormChat from "./components/forms/FormChat";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>

         <Default>
          <div className="flex items-center justify-center flex-col gap-8">
            
            <div className="flex flex-col justify-center items-center w-300">
              <h1 className="text-2xl font-bold">Hello, User! Welcome to MainitUlo Study Buddy!</h1>
              <p>MainitUlo is your own study buddy! Upload a pdf, create a quiz, and ask questions about your uploaded file.</p>
            </div>

            <FormChat/>
            
          </div>
         </Default>
    </>
  );

}
