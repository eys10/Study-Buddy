import Link from "next/link"
import Logo from "./Logo"

export default function Header(){
    return(
        <>
        <div className="flex justify-between mx-10 my-5">
            
            <Logo/>
            
            {/* action buttons */}
            <div className="flex gap-8">

                <div className="button button--default">
                    <Link href="/login">Login</Link>
                </div>

                <div className="button button--default">
                    <Link href="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
        </>
    )

}