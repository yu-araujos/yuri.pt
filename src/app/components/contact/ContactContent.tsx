import React from 'react';
import ContactForm from './ContactForm';
import Socials from './Socials';

const ContactContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:justify-center p-6 w-full h-full mx-auto  space-y-5">
      <Socials />
      <ContactForm />
    </div>
  );
};

export default ContactContent;
