// react bootstrap
import { Container } from 'react-bootstrap'

//image
import BannerImg from '../assets/bannerImg.png'
import { useTranslation } from 'react-i18next';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//react
import { useEffect } from 'react';


export default function Banner() {
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

    const { t } = useTranslation()
    return (
        <Container id='banner'>
            <div className="row align-items-center">
                <div  data-aos="fade-right" className="col-md-5 banner-info">
                    <h2>{t('banner.header1')} <span>{t('banner.header2')}</span></h2>
                    <p className='text-secondary'>
                        {t("banner.title1")} <span> {t("banner.title2")}</span>
                    </p>
                </div>
                <div  data-aos="fade-left" className="col-md-7">
                    <img src={BannerImg} className='img-fluid' alt="banner img " />
                </div>
            </div>
        </Container>
    )
}
