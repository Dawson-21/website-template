export default function Portfolio() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
            <p className="mb-4">Welcome to my portfolio! Here are some of my projects:</p>
            <ul className="list-disc pl-5">
                <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Project 1</a></li>
                <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Project 2</a></li>
                <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Project 3</a></li>
            </ul>
        </div>
    );
}