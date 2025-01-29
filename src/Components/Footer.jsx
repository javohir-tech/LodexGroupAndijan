//react bootstarap 
import { Container } from 'react-bootstrap'

//react i18n
import { useTranslation } from 'react-i18next';

//icons
import { FaInstagram, FaYoutube, FaFacebook, FaTelegram } from "react-icons/fa";

export default function Footer() {

    const {t} = useTranslation()

    return (
        <footer className='mt-5'>
            <Container>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2>{t('footer.header1')}</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam velit fuga ea repudiandae sed rerum, ex quo non ullam optio iste ab est tempore nisi ad voluptatibus, qui totam nobis!
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h2>{t('footer.header2')}</h2>
                        <ul>
                            <li><a href="">{t('navbar.link1')}</a></li>
                            <li><a href="">{t('navbar.link2')}</a></li>
                            <li><a href="">{t('navbar.link3')}</a></li>
                            <li><a href="">{t('navbar.link4')}</a></li>
                            <li><a href="">{t('navbar.link5')}</a></li>
                            <li><a href="">{t('navbar.link6')}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2>{t('footer.header3')}</h2>
                        <div className='d-flex gap-3 mt-3'>
                            <FaInstagram/>
                            <FaYoutube/>
                            <FaFacebook/>
                            <FaTelegram/>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
