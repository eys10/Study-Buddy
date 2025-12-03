import Link from "next/link";
import Default from "../templates/Default";

export default function Login(){
    return(
        <section>
            <Default>
                <div className="flex flex-col gap-3 justify-center items-center w-full p-5 rounded-2xl">
                    <h1 className="font-bold text-2xl">LOGIN</h1>
                    <form className="flex flex-col gap-3 w-1/3 shadow-md p-6 rounded-2xl">
                        <h1>First Name</h1>
                        <input type="text" placeholder="Juan"/>

                        <h1>Last Name</h1>
                        <input type="text" placeholder="Dela Cruz"/>

                        <h1>Email</h1>
                        <input type="text" placeholder="juandelacruz@example.com"/>

                        <div className="flex justify-center">
                            <button className="button button--primary">Login</button>
                        </div>
                    </form>
                </div>
            </Default>
        </section>
    )
}