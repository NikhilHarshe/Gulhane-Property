import React from 'react';

const services = [
  {
    title: 'Interior Designer',
    description: 'Professional interior design services to transform your spaces into beautiful, functional areas.',
    icon: '🛋️',
  },
  {
    title: 'Planning',
    description: 'Comprehensive planning services for property development and management.',
    icon: '📐',
  },
  {
    title: 'Landscape',
    description: 'Expert landscape design and maintenance services to enhance the beauty of your property.',
    icon: '🌳',
  },
  {
    title: 'Visualization',
    description: 'High-quality 3D visualization services to help you see the potential of your projects.',
    icon: '👓',
  },
  {
    title: 'Presentation',
    description: 'Professional presentation services to effectively showcase your property and projects.',
    icon: '📊',
  },
];

const Services = () => {
  return (
    <div className="bg-[#1F2023] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='aboutimg h-52 bg-[#2a2a2d]  text-center flex flex-col justify-center'>
          <span className=" text-3xl font-extrabold text-[#F130A2] text-center bg-slate-50 pt-3">Our Services</span>
          <p className="text-xl pb-3 text-gray-600 text-center bg-slate-50">Explore our professional services</p>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2a2a2d] shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-6xl text-pink-500">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#F130A2]">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
