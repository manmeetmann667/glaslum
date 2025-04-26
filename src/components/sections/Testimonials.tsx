import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { Testimonial } from '../../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-24 bg-stone-900/80">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 reveal">
            What Our Clients Say
          </h2>
          <p className="text-stone-300 reveal">
            Hear from architects, designers, and homeowners who have transformed their spaces with our luxury window solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="reveal">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;