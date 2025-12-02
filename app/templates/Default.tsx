import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Default({children, className}: {children: React.ReactNode, className?: string}){
    
    return(
        <div className="flex flex-col justify-between min-h-dvh">
            <Header/>
            <main className={`container mx-auto p-5 flex-1${className}`}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}