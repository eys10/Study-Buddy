import Link from "next/link"
import Logo from "./Logo"

export default function Header(){
    return(
        <>
        <div className="flex justify-between mx-10 sticky top-0 h-20 items-center border-[0px_0px_1px_0px] border-[#D1D5DC] bg-white">
            
            <Logo/>
            
            {/* action buttons */}
            <div className="flex gap-8">

                <div className="button button--default">
                    <Link href="/login">Login</Link>
                </div>

                <div className="button button--primary">
                    <Link href="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
        </>
    )

}