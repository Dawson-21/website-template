export default function About() {
    return (
        <>
            <div className="bg-[url(/bg-1.jpg)]  bg-bottom bg-no-repeat bg-cover bg-fixed">
                <div className="bg-black/50 flex flex-col items-center justify-center h-[60vh]">
                    <h1 className="text-6xl font-bold text-white">Real change begins with today's vision</h1>
                    <p className="my-4 text-2xl text-white">Together, we create the opportunities of the future</p>
                    <div className="flex flex-row space-x-4">
                        <button className="bg-cyan-700 text-white px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white">Inquire About Availablity</button>
                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white">How Can We Help</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">About Me</h1>
                <p className="mb-4">
                    Welcome to my portfolio website! I am a passionate web developer with a love for creating beautiful and functional websites. 
                    My journey in web development started a few years ago, and since then, I have honed my skills in various technologies.
                </p>
                <p>
                    In my free time, I enjoy exploring new frameworks, contributing to open-source projects, and learning about the latest trends in web development.
                    Thank you for visiting my portfolio!
                </p>
            </div>
        </>
    );
}