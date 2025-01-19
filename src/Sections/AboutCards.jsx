//components
import { AboutCard } from '../Components'

//react bootstrap 
import { Container } from 'react-bootstrap'

//images
import Card1 from '../assets/card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'

export default function AboutCards() {
    return (
        <Container className='mt-5'>
            <AboutCard img={Card1} order={false} title={"Kuchli jamoa"}  description={"LODE-X IT Group jamoasi har tomonlama professional va tajribali bo'lgan mutaxassislardan iborat,"  }/>
            <AboutCard img={Card2} order={true} title={"Hamyonbop narxlar"}  description={"Xizmatlarimiz narxi siz va biznesingiz uchun albatta ma'qul va to'g'ri tanlov bo'ladi."}/>
            <AboutCard img={Card3} order={false} title={"Tezkor va sifatli ish"}  description={"Biz doimo mijozlarimizga oz muddatda mukammal bo'lgan loyihalarni taqdim etamiz"}/>
        </Container>
    )
}
