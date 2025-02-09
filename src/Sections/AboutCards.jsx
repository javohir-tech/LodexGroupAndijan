//components
import { AboutCard } from '../Components'

//react bootstrap 
import { Container } from 'react-bootstrap'

//images
import Card1 from '../assets/card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'

//language change
import { useTranslation } from 'react-i18next'

export default function AboutCards() {

    const {t} = useTranslation()
    return (
        <Container className='mt-5' id="about">
            <AboutCard aos1={"fade-right"} aos2={"fade-left"} img={Card1} order={false} title={t("about.header1")}  description={t('about.title1')}/>
            <AboutCard aos1={"fade-left"} aos2={"fade-right"} img={Card2} order={true} title={t("about.header2")}  description={t('about.title2')}/>
            <AboutCard aos1={"fade-right"} aos2={"fade-left"} img={Card3} order={false} title={t("about.header3")}  description={t("about.title3")}/>
        </Container>
    )
}
