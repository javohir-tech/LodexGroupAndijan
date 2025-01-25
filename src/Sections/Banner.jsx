// react bootstrap
import { Button, Container, Form, InputGroup } from 'react-bootstrap'

//components 
import { PlayMarket } from '../Components'

//image
import BannerImg from '../assets/bannerImg.png'
import { useTranslation } from 'react-i18next';

export default function Banner() {

    const {t} =useTranslation()
    return (
        <Container>
            <div className="row align-items-center">
                <div className="col-md-5 banner-info">
                    <h2>{t('banner.header1')} <span>{t('banner.header2')}</span></h2>
                    <p className='text-secondary'>
                       {t("banner.title1")} <span> {t("banner.title2")}</span>
                    </p>
                </div>
                <div className="col-md-7">
                    <img src={BannerImg} className='img-fluid' alt="banner img " />
                </div>
            </div>
        </Container>
    )
}
