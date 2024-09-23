import React from 'react';
import TimelineItem from './TimelineItem';

const AboutContent: React.FC = () => {
  return (
    <div className="space-y-24 lg:p-6 text-white">
      <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <h2 className="text-xl font-bold lg:w-1/4">✨ The Drive, Passion, and Vision Behind My Work</h2>
        <p className="text-sm text-gray-400 lg:w-3/4">
        I worked with Angular from 2021 to 2024, improving application performance and navigating both legacy and modern codebases. 
        I am passionate about technology and continuously enhancing my skills. My commitment to quality and teamwork drives me to deliver reliable solutions and exceed expectations.
        I also dedicate time to personal projects with React.js and Ruby on Rails, applying what I learn to create impactful, real-world applications.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <h2 className="text-xl font-bold lg:w-1/4">🌞 Unleashing My Skills</h2>
        <div className="lg:w-2/4 flex flex-wrap gap-4">
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Front-End Development</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Back-End Development</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Responsive Design</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">UI/UX Design</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Prototyping</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Agile Methodologies</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <h2 className="text-xl font-bold lg:w-1/4">🛠 Technical Skills</h2>
        <div className="lg:w-3/4 space-y-8">
          <div className="bg-purple-700 bg-opacity-25 p-4 rounded-lg space-y-2">
            <h3 className="text-lg font-semibold text-purple-200">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Java</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Ruby</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">SQL</span>
            </div>
          </div>

          <div className="bg-purple-700 bg-opacity-25 p-4 rounded-lg space-y-2">
            <h3 className="text-lg font-semibold text-purple-200">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Angular</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">React</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Next.js</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Ruby on Rails</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Spring Boot</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Bootstrap</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">TailwindCSS</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">NgRx</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Redux</span>
            </div>
          </div>

          <div className="bg-purple-700 bg-opacity-25 p-4 rounded-lg space-y-2">
            <h3 className="text-lg font-semibold text-purple-200">Tools & Software</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">VS Code</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Figma</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Git</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Jenkins</span>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <h2 className="text-xl font-bold lg:w-2/4">🌟 My Professional Experiences</h2>
        <div>
          <TimelineItem
            title="IT Assistant"
            description="Worked on building, implementing, and maintaining applications using Angular. I was responsible for the frontend technologies (Angular 2+, AngularJS, HTML, CSS, Jest) and microfrontend tools. I also used Git for version control, making sure the project versions were managed correctly and releases were properly tagged."
            topics={['Front-End', 'Custom Features', 'Performance Boost', 'Microfrontend tools', 'Jest', ]}
            company="Banco BTG Pactual"
            startYear="2021"
            endYear="2024"
          />
          <TimelineItem
            title="Help Desk Intern"
            description="Responsible for maintaining the computers used by company staff. I also managed the IT system infrastructure and handled user access to company systems, including Teams, Outlook, and the badge system."
            topics={['Computer maintenance', 'User access management', 'IT system management']}
            company="General Water"
            startYear="2021"
            endYear="2021"
          />
          <TimelineItem
            title="Administrative Assistant"
            description="Worked in the administrative area of UPA Santo Amaro, responsible for processing patient billing records and handling infrastructure and IT requests for the building. Assisted patients with questions or document requests, such as copies of records or certificate corrections. Also managed the office supply inventory for the building."
            topics={['Document requests', 'IT requests', 'Office supply inventory']}
            company="INTS"
            startYear="2019"
            endYear="2021"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
