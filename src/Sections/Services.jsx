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

export default function Services() {
  return (
    <Container className='mt-5'>
        <h1 className='text-center'>XIZMATLARIMIZ</h1>
        <div className="row justify-content-evenly mt-3 g-4">
            <ServicesCard title={"Veb-saytlar"} icon={<TbWorldWww/>} description={"Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz"}/>
            <ServicesCard title={"Mobil ilovalar"} icon={<CiMobile2/>} description={"Istalgan qiyinchilikdagi mobil ilovalarni ishlab chiqish va ularni texnik qoʻllab-quvvatlash"}/>
            <ServicesCard title={"CRM tizimlar"} icon={<SiCivicrm/>} description={"Biznesni va jarayonlarni avtomatlashtirish, kanselyariya ishlarini 100% gacha kamaytiruvchi boshqaruv elektron tizimlarini  ishlab  chiqish"} />
            <ServicesCard title={"Logo va brending"} icon={<IoLogoBitbucket/>} description={"Biznesni ilgari surish uchun asosiy vositalar va marketing materiallari to'plamini noldan yaratish."} />
            <ServicesCard title={"O'yinlar ishlab chiqarish"} icon={<IoGameController/>} description={"Xalqaro darajaga mos keladigan har qanday mavzu va murakkablikdagi o'yinlarni ishlab chiqish."} />
            <ServicesCard title={"Sun'iy intellekt"} icon={<RiRobot2Fill/>} description={"Inson aql-zakovati imkoniyatlariga ega intellektual kompyuter tizimlarini ishlab chiqish"} />
            <ServicesCard title={"Kiber xavfsizlik"} icon={""} description={"Tarmoqlar, qurilmalar, kodlar va ma'lumotlardagi zaifliklarni topish va tuzatish."} />
            <ServicesCard title={"Telegram Bot"} icon={""} description={"Telegram botlar mijozlaringiz bilan aloqa qilishga yordam beradi. Telegram botlar har qanday biznes boshlash uchun eng yaxshi tanlov."} />
            <ServicesCard title={"Internet magazine"} icon={""} description={"Mahsulotlaringizni onlayn sotmoqchimisiz? Unda sizga Onlayn Internet Magazin xizmatimizni taklif qilamiz."} />
        </div>
    </Container>
  )
}
