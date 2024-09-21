import React from 'react';

interface TimelineItemProps {
  title: string;
  description: string;
  topics: string[];
  year: string;
  company: string;
  startYear: string;
  endYear: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, topics, company, startYear, endYear }) => {
  return (
    <div className="relative flex items-start">
      <div className="hidden lg:block absolute -left-10 top-2 w-2 h-2 bg-purple-500 rounded-full"></div>
      <div className="hidden lg:block absolute -left-4 top-2 w-px h-full bg-purple-500"></div>

      <div className="lg:ml-3 p-4 bg-purple-700 bg-opacity-25 rounded-lg shadow-lg w-full mb-6">
        <h3 className="text-xl font-semibold text-purple-200">{title}</h3>
        <div className="flex items-center text-purple-300 mb-2">
          <span className="text-sm">{company}</span>
          <span className="mx-2">|</span>
          <span className="text-sm">{startYear} - {endYear}</span>
        </div>
        <p className="text-lg text-gray-400 mt-3 mb-5">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {topics.map((topic, index) => (
            <span key={index} className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full text-lg">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
