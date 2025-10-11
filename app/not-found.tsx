import Link from "next/link";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

export default function NotFound() {
    return (
        <>

            <main className="min-h-[70vh] flex items-center justify-center py-24">
                <div className="flex flex-col items-center text-center px-4 mt-32">
                    <div className="w-full max-w-xs md:max-w-md mt-4">
                        <img src="/404.svg" alt="404 illustration" className="w-full h-auto mx-auto" />
                    </div>
                    <p className="mt-6 text-2xl font-semibold">Page not found</p>
                    <p className="mt-2 text-slate-600">Sorry, we couldn’t find the page you were looking for.</p>

                    <div className="mt-6 flex justify-center ">
                        <Link href="/" className="px-6 py-2 bg-[#cc1f23] text-white rounded-md">
                            Go to homepage
                        </Link>
                    </div>
                </div>
            </main>

        </>
    );
}
