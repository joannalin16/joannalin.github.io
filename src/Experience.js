import React from 'react';
import Navbar from './NavBar';

function Experience() {
  const work = [
    {
      title: 'Software Engineering Intern',
      company: 'Procter & Gamble',
      duration: 'May. 2024 – Aug. 2024',
      description: 'Provided statistics regarding external software developers’ efficacy and productivity across multiple GitHub repositories based on GitHub API data using Python, PostgreSQL, and React JavaScript',},
    {
      title: 'Product Management Intern',
      company: 'TE Connectivity',
      duration: 'May. 2023 – Aug. 2023',
      description: 'Conducted analysis of revenues, standard margins, and volumes across multiple automotive programs and identified key programs and products for expedited End of Life (EOL) status to prioritize focus and growth on more profitable programs and initiatives.',
    },
  ];

  const relevant = [
    {
      name: 'Full Team Lead',
      organization: 'Cornell University AutoBoat Project Team',
      duration: 'Jan. 2022 - Present',
      description: 'Built and developed an autonomous robotic boat capable of complex path planning and decision making through custom algorithms and the use of computer vision for the annual international RoboBoat competition (previously placed as RoboBoat 2023 and RoboBoat 2024 competition finalist)',
    },
    {
      name: 'Lead Researcher',
      organization: 'Final Exam Scheduling Research Team',
      description: 'Collaborated with a team of 30 undergraduate student researchers under the guidance of Professor David Shmoys to aid the university’s registrar with optimizing and scheduling the final exams every semester',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-16 px-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 pt-10">Experience</h1>
        
        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 ">Work Experience</h2>
          <ul className="space-y-4">
            {work.map((work, index) => (
              <li key={index} className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600">{work.title}</h3>
                <p className="text-gray-700">{work.company} &bull; {work.duration}</p>
                <p className="text-gray-600 mt-2">{work.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Relevant Work Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Relevant Experience</h2>
          <ul className="space-y-4">
            {relevant.map((relevant, index) => (
              <li key={index} className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600">{relevant.name}</h3>
                <p className="text-gray-700">{relevant.organization}</p>
                <p className="text-gray-600 mt-2">{relevant.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Experience;
