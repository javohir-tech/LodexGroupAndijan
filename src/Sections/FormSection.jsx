//reeact bootstrap
import { Button, Container, Form, Modal, Spinner } from 'react-bootstrap'

//react
import { useState } from 'react'

//react i18next
import { useTranslation } from 'react-i18next';

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

    const {t} = useTranslation()

    return (
        <Container className='mt-5' id='contacts'>
            <h1 className='section-header text-center'>{t('form.header')}</h1>
            <div>
                <h1 className='section-header'>{t('form.header1')}</h1>
                <p>{t('form.title')}</p>
            </div>
            <Form onSubmit={handleChange}>
                <div className='row g-3 mt-4'>
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="company">
                            <Form.Label>{t('company')}</Form.Label>
                            <Form.Control type="text" value={company} required onChange={(e) => setCompany(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>{t('form.name')}</Form.Label>
                            <Form.Control type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tel">
                            <Form.Label>{t('form.tel')}</Form.Label>
                            <Form.Control type="number" value={tel} required onChange={(e) => setTel(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>{t('form.message')}</Form.Label>
                            <Form.Control as="textarea" rows={3} required value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                    </div>
                    <div className="col-md-6 checkbox">
                        <p>Loyiha turi: </p>
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="mobil"
                            label={t('form.mobil')}
                            onChange={()=>setMobil(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="crm"
                            label={t('form.crm')}
                            onChange={()=>setCrm(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="design"
                            label={t('form.dizayn')}
                            onClick={()=>setDizayn(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="game"
                            label={t('form.game')}
                            onClick={()=>setGame(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="ai"
                            label={t('form.ai')}
                            onClick={()=>setAi(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="kiber"
                            label={t('form.cyber')}
                            onClick={()=>setCyber(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="bot"
                            label={t('form.telegrambot')}
                            onClick={()=>setTelegramBot(true)}
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="shop"
                            label={t('form.button')}
                            onClick={()=>setMarget(true)}
                        />
                    </div>
                </div>
                <div className='text-center'>
                    <button className='main-btn text-light px-5 py-3 border-0 rounded mt-3'>{loading ? <Spinner animation="border" variant="light" /> : t('form.button')}</button>
                </div>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('form.modalheader')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{t('form.modalbody')}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      {t('form.modalbutton')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
