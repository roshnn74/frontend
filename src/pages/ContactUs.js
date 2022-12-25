import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';


const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
      <div className="contactus">
    <Row className="a0">

      <Col className="a1 " lg={12} xl={4} sm={12}>
      <h1 className='a11'>Get</h1>
      <h3 className='a12'>in Touch</h3>
      
      </Col>
      <Col className="a2 " lg={12} xl={8} sm={12}>
        
      <form onSubmit={onSubmit}>
        
        <div className="mb-3">
          <label>NAME </label>
          <input className="form-control" placeholder="" type="text" id="name" required />
        </div>
        <div className="mb-3">
        <label>Email </label>
          <input className="form-control" placeholder="" type="email" id="email" required />
        </div>
        <div className="mb-3">
        <label>Message </label> 
          <textarea className="form-control" placeholder="" id="message" required />
        </div>
        <button className="btn btn-light" type="submit">
          {formStatus}
        </button>
      </form>
    </Col>
    </Row>
    </div>
  )
}

export default ContactUs