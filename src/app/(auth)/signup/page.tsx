import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

export default function SignUp() {
    return (
        <div className="flex flex-col h-screen justify-between items-center font-bold">
            <Header />
            <main className="w-full flex flex-col items-center justify-center h-full px-8 gap-8">
                <div className="flex flex-col gap-2 items-end">
                    <h1 className="text-6xl inline-block">Welcome</h1>
                    <p className="flex gap-1 items-center text-lg">
                        <span className="bg-purple-300 p-1 rounded-md text-purple-950">
                            the best
                        </span>
                        sporting goods store
                    </p>
                </div>
                <div className="flex flex-col items-center justify-start w-full rounded-2xl bg-purple-100 px-10 py-10 text-black  text-purple-950 min-h-1/2">
                    <Form />
                </div>
            </main>
            <Footer />
        </div>
    )
}
