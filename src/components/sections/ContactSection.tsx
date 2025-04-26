import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-stone-950/80">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="section-title mb-8 reveal">Get In Touch</h2>
            <p className="text-stone-300 mb-8 max-w-xl reveal">
              Whether you're starting a new project or renovating an existing space, our team of experts is ready to help you find the perfect window solutions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start reveal">
                <Phone className="mr-4 text-amber-500 mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-medium text-stone-100 mb-1">Phone</h3>
                  <p className="text-stone-300">+1 (800) 555-8989</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <Mail className="mr-4 text-amber-500 mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-medium text-stone-100 mb-1">Email</h3>
                  <p className="text-stone-300">info@luxewindows.com</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <MapPin className="mr-4 text-amber-500 mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-medium text-stone-100 mb-1">Showroom</h3>
                  <p className="text-stone-300">
                    1250 Luxury Avenue<br />
                    Suite 300<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <Calendar className="mr-4 text-amber-500 mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-medium text-stone-100 mb-1">Hours</h3>
                  <p className="text-stone-300">
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: 10AM - 4PM<br />
                    Sunday: By appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-8 reveal">
            <h3 className="text-2xl font-serif text-stone-50 mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-stone-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-stone-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-stone-300 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-stone-300 mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-stone-200 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="new-project">New Project</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="quote">Request a Quote</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-stone-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;