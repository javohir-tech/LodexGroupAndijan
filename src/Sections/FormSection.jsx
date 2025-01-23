//reeact bootstrap
import { Container, Form } from 'react-bootstrap'

export default function FormSection() {
    return (
        <Container className='mt-5'>
            <h1 className='section-header text-center'>BIZ BILAN BOG'LANING</h1>
            <div>
                <h1 className='section-header'>Contact:</h1>
                <p>Ushbu birlamchi ma’lumotlarni to‘ldirganingizdan so‘ng bizning mas’ul xodimlarimiz siz bilan aloqaga chiqishadi.</p>
            </div>
            <Form>
                <div className='row g-5 mt-4'>
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="company">
                            <Form.Label>Kompaniyangiz nomini kiriting</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>F.I.SH(Familya, Ism, Sharif)</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tel">
                            <Form.Label>Telefon Raqam</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Loyiha Tavsifi</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </div>
                    <div className="col-md-6 checkbox">
                        <p>Loyiha turi: </p>
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="mobil"
                            label="Mobil Ilovalar"
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="crm"
                            label="CRM tizimlar"
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="design"
                            label="UI&UX dizayn"
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="game"
                            label="O'yinlar ishlab chiqarish"
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="ai"
                            label="Sun'iy Intlekt"
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="kiber"
                            label="Kiberxavfsizlik"
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="bot"
                            label="Telegram Bot"
                        />
                        <Form.Check className="d-flex align-items-center gap-3" // prettier-ignore
                            type="checkbox"
                            id="shop"
                            label="Internet Magazin"
                        />
                    </div>
                </div>
            </Form>
        </Container>
    )
}
