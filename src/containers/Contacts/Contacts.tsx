import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div className="text-center">
      <ul className="list-unstyled contact-as-details-container">
        <li>70, Baytik Baatyra str., office 505, Bishkek, 720005, Kyrgyzstan</li>
      </ul>
      <ul className="list-unstyled">
        <li><a href="tel:+996(312)298730"><span dir="ltr"> +996 (312) 29 87 30</span></a>
        </li>
        <li><a href="mailto:office@platformaservice.com">office@platformaservice.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;