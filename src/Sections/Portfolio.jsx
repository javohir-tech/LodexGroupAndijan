// react bootstrap css 
import { Container } from 'react-bootstrap'

//components
import { PortfolioCard } from '../Components'

//images
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image.png"

export default function Portfolio() {
  return (
    <Container className='my-5'>
        <h1 className='text-center section-header'>Portfoilo</h1>
        <div className="row mt-3 g-5">
            <PortfolioCard col={7} img={image1} title={"Buxoro Tabbiy Mahsulot"} description={"bnp Fabric"} link={"http://bnp.suvonov-javohir.uz/"}/>
            <PortfolioCard col={5} img={image3} title={"Targetolok"} description={"Izzatbek Targetolok"} link={"https://targelok.suvonov-javohir.uz/"}/>
            <PortfolioCard col={5} img={image4} title={"Images"} description={"Images"} link={"http://suvonov-javohir.uz"}/>
            <PortfolioCard col={7} img={image2} title={"Avto Zoom"} description={"Avto Zoom Rental"} link={"https://www.autozoomrental.com/"}/>
            <PortfolioCard col={7} img={image5} title={"Zamon Travel"} description={"Sayohat uchun mo'jallangan web saytimiz"} link={"https://travel.suvonov-javohir.uz/"}/>
        </div>
        <div className='btn-more text-center mt-5'>
            <button className='btn btn-primary px-5 py-3'>Ko'proq ko'rish</button>
        </div>
    </Container>
  )
}
