
import React from "react";
import SocialLinks from "./SocialLinks";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto section-transition">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-pixel mb-4 text-gray-900 dark:text-white">
            <span className="text-primary">Contact</span> Me
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pixel-card p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:ankits0057@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                    ankits0057@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                  <a href="tel:6287374114" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                    6287374114
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Chakradharpur, Jharkhand 833102
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-md font-bold mb-4 text-gray-900 dark:text-white">Connect With Me</h4>
              <SocialLinks variant="spaced" size={18} />
            </div>
          </div>
          
          <div className="pixel-card p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:outline-none resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="pixel-btn border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                <span className="absolute inset-0 bg-primary/10 transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                <span className="relative">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
