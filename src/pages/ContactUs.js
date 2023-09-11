import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';


const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState('SEND')
  let scriptUrl = process.env.REACT_APP_SCRIPT_URL;
  const formRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current)
    }).then(res => {
      e.target.reset()
      setFormStatus('Send')
      console.log("SUCCESSFULLY SUBMITTED")
    })
      .catch((err) => {
        console.log(err);
      })
    // const { name, email, message } = e.target.elements
    // let conFom = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // }
    // console.log(conFom)
  }
  return (
    <div className="contactus">
      <Row className="a0">

        <Col className="a1 " lg={12} xl={4} sm={12}>
          <div className='d-flex align-items-center justify-content-center'>
          <span className='a10 fs-1'>✩</span>
          <h1 className='a11'>Get</h1>
          <span className='a10 fs-1'>✩</span>
          </div>
          <h3 className='a12'>in Touch</h3>

        </Col>
        <Col className="a2 " lg={12} xl={8} sm={12}>

          <form ref={formRef} onSubmit={onSubmit}>

            <div className="mb-3">
              <label>NAME </label>
              <input className="form-control" placeholder="" name='name' type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label>EMAIL </label>
              <input className="form-control" placeholder="" name='email' type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label>MESSAGE </label>
              <textarea className="form-control" placeholder="" name='message' id="message" required />
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