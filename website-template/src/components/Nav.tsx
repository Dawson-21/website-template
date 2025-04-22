export default function Nav() {
    return (
        <nav className="bg-gray-800/30 backdrop-blur-lg text-white p-4 fixed top-0 w-full z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center max-w-7xl">
                <img src="/Logo.png" alt="Your Logo Here" className="h-12"/>
                <ul className="flex space-x-10 text-lg font-[Helvetica] font-semibold items-center">
                    <li><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transform transition duration-800 ease-in-out">Schedule Appointment</button>
                </ul>
            </div>
        </nav>
    );
}