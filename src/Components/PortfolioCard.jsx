

//icons
import { CgArrowTopRight } from "react-icons/cg";

//AOS
import AOS from 'aos';

//react
import { useEffect } from 'react';

export default function PortfolioCard({title, description, col, img , link, oas}) {

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
        < >
        <div data-aos={oas} data-aos-anchor-placement="bottom-bottom" className={`col-md-${col} portfolio-card position-relative`}>
            <a href={link} target="_blank">
            <img src={img} className="img-fluid h-100 w-100" alt="image  is not  defiendt " />
            </a>
            <div className="position-absolute bottom-0 left-0 w-75 px-3">
                <h2 className="mb-0">{title}</h2>
                <p className="mb-0">{description}</p>
            </div>
            <a className="position-absolute border p-3 rounded-pill arrow">
                    <CgArrowTopRight className="color-danger"/>
            </a>
        </div>

        </>
        
        
    )
}
