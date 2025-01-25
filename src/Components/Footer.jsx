//react bootstarap 
import { Container } from 'react-bootstrap'

//icons
import { FaInstagram, FaYoutube, FaFacebook, FaTelegram } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className='mt-5'>
            <Container>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2>Manzil:</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam velit fuga ea repudiandae sed rerum, ex quo non ullam optio iste ab est tempore nisi ad voluptatibus, qui totam nobis!
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h2>Bosh Sahifa </h2>
                        <ul>
                            <li><a href="">Asosiy</a></li>
                            <li><a href="">Xizmatlar</a></li>
                            <li><a href="">Yangiliklar</a></li>
                            <li><a href="">Biz haqimizda </a></li>
                            <li><a href="">Tanlov</a></li>
                            <li><a href="">ALoqa</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2>Ijtimoy Tarmoqlar</h2>
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
