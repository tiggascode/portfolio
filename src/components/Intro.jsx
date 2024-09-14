import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Tigran</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm an Laravel full-stack developer. All coding projects
                are built from the ground up, from planning and designing all the way
                to solving real-life problems with code or simple having fun.
                <br/>
                This is My X page where i every day write about my young programmer experience
                {' '}
                <a
                    href="https://x.com/y0UNGcOd3Rlife"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                >
                    Young Coder Life
                </a>
            </p>
        </div>
    )
}

export default Intro;