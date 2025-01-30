import React from 'react'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//react
import { useEffect } from 'react';

export default function ServicesCard({title , icon , description, aos}) {
  useEffect(() => {
    AOS.init({
      offset: 200,       // Animatsiya boshlanish nuqtasi (pikselda)
      duration: 1000,    // Animatsiya davomiyligi (ms)
      easing: 'ease',    // Animatsiya tezligi (easing function)
      delay: 100,        // Animatsiya kechikishi (ms)
      once: false,       // Animatsiya faqat bir marta ishlashi
      mirror: false,     // Scroll ortga qaytganda animatsiya takrorlanishi
    });
  }, []);

  return (
    <div data-aos={aos} className={`col-md-5 shadow px-4 py-3 rounded`}>
        <div className={`d-flex justify-content-between align-items-center mb-3`}>
            <p className='mb-0'>{title}</p><div>{icon}</div>
        </div>
        <p>{description}</p>
    </div>
  )
}
