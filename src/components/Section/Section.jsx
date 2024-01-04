import Form from '../Form/Form';
import './Section.css'

function Section () {
    return (
        <section className="section">
            <h1>Need to request a quotation? We’ve got you covered!</h1>
            <p>
                Please, provide your information below and one of our specialized
                sales representative will contact you as soon as possible
            </p>
            <Form />
        </section>
    )
}

export default Section;