import React, { useState } from 'react';
import Navbar from './NavBar';
import PG from './images/PG.jpg';
import TE from './images/TE.jpg';
import cuab from './images/cuab.jpg';
import dog from './images/dog.jpg';

const projectsData = [
  {
    id: 1,
    name: 'Developer Efficacy Dashboard',
    company: 'Procter & Gamble',
    photo: PG,
    dates: 'May 2024 - Aug 2024',
    blurb: 'I developed UI components that reflected various statistics regarding developer efficacy using Python, PostgreSQL, React, Node.js, and Airflow.',
    description:
      'The goal of this project was to provide statistics regarding external software developers’ efficacy and productivity across multiple GitHub repositories in order for P&G to make cost effective decisions that optimize budgeting. After pulling and processing the raw data pulled from GitHub API using Python and PostgreSQL, I built UI components that visualized these statistics using React and Node.js. As the final step of my project, I automated the process using Apache Airflow.',
    skills: ['Python', 'PostgreSQL', 'React', 'Node.js', 'Apache Airflow'],
    gallery: [], // Replace with actual paths
  },
  {
    id: 2,
    name: 'Work Center Optimization',
    company: 'TE Connectivity',
    photo: TE, 
    dates: 'May 2023 - Aug 2023',
    blurb: 'I identified underutilized work centers across production plants and used data analytics to prioritize the obsoletion of high priority work centers, which would increase the automotive business by over 33%.',
    description:
      'The goal of this project was to identify work centers across the Americas production plants that were underutilized and could be obsoleted to increase the automotive business by over 33%. On the product level, I conducted analysis of revenues, standard margins, and volumes across multiple automotive programs and identified key programs and products for expedited End of Life (EOL) status to prioritize focus and growth on more profitable programs and initiatives. On the commercial level, evaluated work center data to identify the impact of each work center and its likelihood of being obsoleted. I then used data analytics to prioritize the obsoletion of high priority work centers.',
    skills: ['Microsoft Excel'],
    gallery: [], // Replace with actual paths
  },
  {
    id: 3,
    name: 'Path Planning Algorithm',
    company: 'Cornell AutoBoat Project Team',
    photo: cuab, 
    dates: 'Jan 2022 - Present',
    blurb: 'I developed complex path planning and autonomous decision making algorithm for the RoboBoat 2023 competition using the inputs received from the ZED2i camera and our computer vision model.',
    description:
      'For the RoboBoat 2023 competition, I was in charge of developing code from scratch for the Speed Challenge course. Using global states of our boat, positional information, and computer vision data, I developed a path planning algorithm that would allow our boat to navigate through the course autonomously. I also developed a decision making algorithm that would allow our boat to make decisions based on the data it received from the ZED2i camera and our computer vision model. The algorithm was able to make decisions in real-time and adjust the boat’s path accordingly.',
    skills: ['Python'],
    gallery: [], // Replace with actual paths
  },
  {
    id: 4,
    name: 'Dog Leg Prediction Model',
    company: null,
    photo: dog, 
    dates: 'May 2023',
    blurb: 'I cleaned data from the Vet School and used it to generate a model for predicting whether a dog\'s legs are able or not.',
    description:
      'One of my projects for CS 4780, Machine Learning, was to develop a model to predict whether a dog\'s legs were able or not from force gauge data. The data was not complete, so patterns in the data were used to fill out any gaps. After cleaning the data, an Adaboost classifier was used. In order to increase the accuracy of the model, a grid search was conducted to find the best hyperparameters. At the end, the model was able to predict whether a dog\'s legs were able or not with 83% accuracy.',
    skills: ['Python', 'SkLearn', 'Numpy', 'Pandas'],
    gallery: [], // Replace with actual paths
  },
  // Add more projects as needed
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
    return (
    <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-left p-6 w-full">
            <h1 className="text-4xl font-semibold text-center mb-12 mt-12">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
                <div
                key={project.id}
                className="bg-white border border-gray-200 shadow-md p-4 rounded-lg hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
                >
                {project.photo && (
                    <img
                    src={project.photo}
                    alt={`${project.name} preview`}
                    className="h-48 w-full object-cover rounded-md mb-4"
                    />
                )}
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                {project.company && <p className="text-gray-600 italic">{project.company}</p>}
                <p className="text-gray-500 text-sm">{project.dates}</p>
                <p className="text-gray-700 mt-2">{project.blurb}</p>
                </div>
            ))}
            </div>
    
            {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    onClick={() => setSelectedProject(null)}
                >
                    ✖
                </button>
    
                {/* Render Gallery or Single Image */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                    <div className="flex flex-wrap gap-4 mb-6">
                    {selectedProject.gallery.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="h-32 w-32 object-cover rounded-md"
                        />
                    ))}
                    </div>
                ) : (
                    selectedProject.photo && (
                    <img
                        src={selectedProject.photo}
                        alt={`${selectedProject.name} preview`}
                        className="h-48 w-full object-cover rounded-md mb-6"
                    />
                    )
                )}
    
                {/* Project Details */}
                <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
                {selectedProject.company && (
                    <p className="text-gray-600 italic mb-2">{selectedProject.company}</p>
                )}
                <p className="text-gray-500 mb-6">{selectedProject.dates}</p>
                <p className="text-gray-800 mb-6">{selectedProject.description}</p>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            )}
        </div>
    </>
      
    );
  };
  
  export default Projects;