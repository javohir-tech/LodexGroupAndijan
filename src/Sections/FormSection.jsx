//reeact bootstrap
import { Button, Container, Form, Modal, Spinner } from 'react-bootstrap'

//react
import { useState } from 'react'

export default function FormSection() {
    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //message
    const [company, setCompany] = useState("")
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [message, setMessage] = useState("")
    const [crm, setCrm] = useState(false)
    const [mobil , setMobil] = useState(false);
    const [dizayn , setDizayn] = useState(false);
    const [game , setGame] = useState(false);
    const [ai , setAi] = useState(false);
    const [cyber , setCyber] = useState(false);
    const [telegramBot , setTelegramBot] = useState(false);
    const [marget , setMarget] = useState(false);
    const [loading, setLoading] = useState(false)

    //bot tokens 
    const token = `7724269650:AAH53SlcoKwSsBHCndTtA5z5Wfpt0P8dI3E`
    const bot_id = `-4760741839`

    const newInputs = () => {
        setCompany("");
        setName("")
        setTel("");
        setMessage("")
        setCrm(false)
        setMobil(false)
        setDizayn(false)
        setGame(false)
        setAi(false)
        setCyber(false)
        setTelegramBot(false)
        setMarget(false)
        setCrm(false)
    }

    const handleChange = (e) => {
        e.preventDefault()

        setLoading(true)

        const xabar = `
        company : ${company};
        name : ${name};
        tel: ${tel};
        message : ${message};
        Crm : ${crm ? "✅" : "❌"}
        Mobil Ilova : ${mobil ? "✅" : "❌"}
        Dizayn : ${dizayn ? "✅" : "❌"}
        Sunniy intlekt : ${ai ? "✅" : "❌"}
        O'yinlar : ${game ? "✅" : "❌"}
        Kiber Xavfsizlik : ${cyber ? "✅" : "❌"}
        TElegram Bot : ${telegramBot ? "✅" : "❌"}
        Online Magazin : ${marget ? "✅" : "❌"}
    `

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "COntent-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: bot_id,
                text: xabar
            })
        })
            .then((response) => response.json())
            .then(res => {
                if (res.ok) {
                    handleShow()
                    newInputs()
                }
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Container className='mt-5'>
            <h1 className='section-header text-center'>BIZ BILAN BOG'LANING</h1>
            <div>
                <h1 className='section-header'>Contact:</h1>
                <p>Ushbu birlamchi ma’lumotlarni to‘ldirganingizdan so‘ng bizning mas’ul xodimlarimiz siz bilan aloqaga chiqishadi.</p>
            </div>
            <Form onSubmit={handleChange}>
                <div className='row g-5 mt-4'>
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="company">
                            <Form.Label>Kompaniyangiz nomini kiriting</Form.Label>
                            <Form.Control type="text" value={company} required onChange={(e) => setCompany(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>F.I.SH(Familya, Ism, Sharif)</Form.Label>
                            <Form.Control type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tel">
                            <Form.Label>Telefon Raqam</Form.Label>
                            <Form.Control type="number" value={tel} required onChange={(e) => setTel(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Loyiha Tavsifi</Form.Label>
                            <Form.Control as="textarea" rows={3} required value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                    </div>
                    <div className="col-md-6 checkbox">
                        <p>Loyiha turi: </p>
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="mobil"
                            label="Mobil Ilovalar"
                            onChange={()=>setMobil(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="crm"
                            label="CRM tizimlar"
                            onChange={()=>setCrm(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="design"
                            label="UI&UX dizayn"
                            onClick={()=>setDizayn(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="game"
                            label="O'yinlar ishlab chiqarish"
                            onClick={()=>setGame(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="ai"
                            label="Sun'iy Intlekt"
                            onClick={()=>setAi(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="kiber"
                            label="Kiberxavfsizlik"
                            onClick={()=>setCyber(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="bot"
                            label="Telegram Bot"
                            onClick={()=>setTelegramBot(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="shop"
                            label="Internet Magazin"
                            onClick={()=>setMarget(true)}
                        />
                    </div>
                </div>
                <div className='text-center'>
                    <button className='main-btn text-light px-5 py-3 border-0 rounded mt-3'>{loading ? <Spinner animation="border" variant="light" /> : 'Send'}</button>
                </div>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Habar Yuborildi </Modal.Title>
                </Modal.Header>
                <Modal.Body>Xabaringiz Muvafaqiyatli Yuborildi Biz Siz Bilan Tez Orada Aloqaga Chiqamiz </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Yopish
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
