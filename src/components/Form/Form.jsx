import './Form.css'

function Form () {
    return (
        <form className='quotation-form'>
            <input  type="text" name="quotation-name" id="" placeholder="Your name"/>
            <input  type="email" name="quotation-email" id="" placeholder='E-mail'/>
            <input  type="text" name= "quotation-description" id="description" placeholder="Request description"/>
            <button type="submit" id="submit-button" >Submit</button>
        </form>
    )
}

export default Form;