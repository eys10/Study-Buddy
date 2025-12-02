import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Default from "./templates/Default";
import FormChat from "./components/forms/FormChat";

export default function Home() {
  return (
    <>

         <Default>
          <div className="flex items-center justify-center flex-col gap-8">
            
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold">Welcome to Aces Study Buddy!</h1>
              <p>Upload a file and ask a question!</p>
            </div>

            <FormChat/>
            
          </div>
         </Default>
    </>
  );
}
