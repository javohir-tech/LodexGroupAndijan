//react bootstrap css 
import { Container } from 'react-bootstrap'

//components
import { ServicesCard } from '../Components'

//icons
import { TbWorldWww } from "react-icons/tb";
import { CiMobile2 } from "react-icons/ci";
import { SiCivicrm } from "react-icons/si";
import { IoLogoBitbucket } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import { CgDanger } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

//language change
import { useTranslation } from 'react-i18next';


export default function Services() {
  

  const { t } = useTranslation()
  return (
    <Container className='mt-5' id='services'>
      <h1 data-aos="zoom-in-up" className='text-center section-header'>{t('services.header')}</h1>
      <div className="row justify-content-evenly mt-3 g-4 icons ">
        <ServicesCard aos={"zoom-in-right"} title={t('services.title1')} icon={<TbWorldWww />} description={t('services.description1')} />
        <ServicesCard aos={"zoom-in-left"} title={t('services.title2')} icon={<CiMobile2 />} description={t('services.description2')} />
        <ServicesCard aos={"zoom-in-right"} title={t('services.title3')} icon={<SiCivicrm />} description={t('services.description3')} />
        <ServicesCard aos={"zoom-in-left"} title={t('services.title4')} icon={<IoLogoBitbucket />} description={t('services.description4')} />
        <ServicesCard aos={"zoom-in-right"} title={t('services.title5')} icon={<IoGameController />} description={t('services.description5')} />
        <ServicesCard aos={"zoom-in-left"} title={t('services.title6')} icon={<RiRobot2Fill />} description={t('services.description6')} />
        <ServicesCard aos={"zoom-in-right"} title={t('services.title7')} icon={<CgDanger />} description={t('services.description7')} />
        <ServicesCard aos={"zoom-in-left"} title={t('services.title8')} icon={<FaRobot />} description={t('services.description8')} />
        <ServicesCard aos={"zoom-in-up"} title={t('services.title9')} icon={<FiShoppingBag />} description={t('services.description9')} />
      </div>
    </Container>
  )
}
