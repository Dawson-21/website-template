export default function Nav() {
    return (
        <nav className="bg-gray-800/30 backdrop-blur-lg text-white p-4 fixed top-0 w-full z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center max-w-7xl">
                <img src="/Logo.png" alt="Your Logo Here" className="h-12"/>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/portfolio" className="hover:text-gray-400">Portfolio</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}