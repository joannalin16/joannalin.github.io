import React from 'react';
import Navbar from './NavBar';
import museum from './images/museum.jpg';
import coding from './images/coding.jpg';
import alpaca from './images/alpaca.jpg';
import roboboat from './images/roboboat.jpg';


function AboutMe() {
    return (
    <>
        <Navbar />
        <div className="pt-16">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-left p-6 w-full">

        <div className="flex flex-col lg:flex-row p-8">
        <div className="flex-1 pr-8">
        <div className="flex flex-row gap-4 items-center pt-10"> 
            <div className="flex flex-col justify-start gap-4">
                <img src={museum} alt="Photo 1" className="w-full h-80 object-cover rounded-md" />
                <img src={coding} alt="Photo 2" className="w-full h-auto object-cover rounded-md" />
            </div>
            <div className='flex flex-col gap-4'>
                <img src={roboboat} alt="Photo 3" className="w-full h-auto object-cover rounded-md" />
                <img src={alpaca} alt="Photo 4" className="w-full h-80 object-cover rounded-md" />
            </div>
        </div> 
        </div>

        <div className="flex-1 flex-col lg:flex-row p-8">
            <h1 className="text-4xl font-semibold mb-4">A little bit about me:</h1>
            <p className="text-gray-700 mb-4">
            I am currently a senior at Cornell University’s College of Engineering studying Computer Science with minors 
            in Data Science and Operations Research. When I’m not in class, you can catch me working with my project 
            team, 
            <a href="https://cornellautoboat.com" target="_blank" class="text-blue-800 hover:text-blue-900"> Cornell AutoBoat</a>
            , where I am now full-team lead (prev. software AI lead and 
            business lead). 
            </p>
            <p className="text-gray-700 mb-4">
            In the summer of 2023, I interned at TE Connectivity as a Product Management Intern, which helped me explore the field 
            of product management while working on a project that optimized business growth. In the summer of 2024, I interned at Procter & Gamble as a Software 
            Engineer Intern where I analyzed developer data and created a UI to reflect different metrics. Both internships were
            incredibly beneficial for my growth and allowed me to find my interest in both product management and software engineering. (Learn more about the projects I worked on in the Projects tab!)
            </p>
            <p className="text-gray-700 mb-4">
            I love learning and working with like-minded individuals who support and encourage growth. 
            I like working on projects that I am passionate about because I believe the best work is produced 
            when you’re interested and invested in it.
            </p>
            <p className="text-gray-700 mb-4">
            When I'm not locked in, you can find me playing pickleball (my current favorite sport), cooking, and making memories with those I care about. 
            I am a big foodie and love trying new things. I also love to travel and explore new places. 
            </p>
            <p className="text-gray-700 mb-4">
            I know I have a lot of learn so I would love to explore any opportunities that will push me to do this so feel free to contact me 
            using the Contact button above.
            </p>
        </div>
    </div>
    </div>
    </div>
    </>
    );
}

export default AboutMe;