import React from 'react';
import { Check } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} card overflow-hidden`}>
      <div className="lg:w-1/2">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-64 lg:h-full object-cover"
        />
      </div>
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-serif font-medium text-stone-50 mb-4">{service.title}</h3>
        <p className="text-stone-300 mb-6">{service.description}</p>
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 text-amber-500 mt-1"><Check size={16} /></span>
              <span className="text-stone-200">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;