export default function Home() {
    return (
        <>
            <div className="bg-[url(/bg-1.jpg)]  bg-center bg-no-repeat bg-cover bg-fixed">
                <div className="bg-black/50 flex flex-col items-center justify-center h-screen font-[Garamond]">
                    <h1 className="text-6xl font-bold text-white">Real Change Begins With Today's Vision</h1>
                    <p className="my-4 text-2xl text-white">Together, We Create the Opportunities of the Future</p>
                    <div className="flex flex-row space-x-4 font-[Helvetica]">
                        <button className="bg-cyan-700 text-white px-5 py-2 rounded-full text-md hover:bg-black hover:text-white transform transition duration-800 ease-in-out">Inquire About Availablity</button>
                        <button className="bg-white text-black px-5 py-2 rounded-full text-md hover:bg-black hover:text-white transform transition duration-800 ease-in-out">How Can We Help</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Welcome to Professional Business Name</h1>
                    <p className="mb-4">
                        We are a leading company in our industry, dedicated to providing top-notch services to our clients. 
                        Our team of experts is committed to delivering innovative solutions that meet your needs and exceed your expectations.
                    </p>
                </div>
            </div>
        </>
    );
}