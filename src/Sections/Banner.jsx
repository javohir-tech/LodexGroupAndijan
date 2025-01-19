// react bootstrap
import { Button, Container, Form, InputGroup } from 'react-bootstrap'

//components
import { PlayMarket } from '../Components'

//react icons
import { FaGooglePlay, FaApple } from "react-icons/fa";

//image
import BannerImg from '../assets/bannerImg.png'

export default function Banner() {
    return (
        <Container>
            <div className="row align-items-center">
                <div className="col-md-5 banner-info">
                    <h2>Develop Your Life With <span>One Step.</span></h2>
                    <p className='text-secondary'>
                        Pushing the possibilities of the internet. Good for
                        the last software. <span>Make it A software night.</span>
                    </p>
                    <InputGroup className="my-4 w-75">
                        <Form.Control
                            placeholder="Enter your email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="danger" id="button-addon2">
                            Send
                        </Button>
                    </InputGroup>
                    <div className='d-flex gap-4'>
                        <PlayMarket icon={<FaGooglePlay style={{ fontSize: "24px" }} />} title={"Android App on"} subtitle={"Google Play"} />
                        <PlayMarket icon={<FaApple style={{ fontSize: "28px" }} />} title={"Aviable on the "} subtitle={"Apple Store"} />
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={BannerImg} className='img-fluid' alt="banner img " />
                </div>
            </div>
        </Container>
    )
}
