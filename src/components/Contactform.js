import React from 'react'

const Contactform = () => {
  const [formStatus, setFormStatus] = React.useState('Send Message')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, phone, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="containerz">
      <h3 className="mb-3"><br></br>Any Quesions?</h3>
      <form onSubmit={onSubmit}>
        
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" placeholder="John Doe" required />
        </div>
        
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" placeholder="john.doe@email.com" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            Phone Number
          </label>
          <input className="form-control" type="tel" id="phone" placeholder="613-625-2766" pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        
        <div className="d-flex justify-content-center"> {/* Use d-flex class for flexbox layout */}
          <button className="btn btn-danger" type="submit" style={{ border: 'none' }}>
            {formStatus}
          </button>
        </div>
        <div><br></br></div>
      
      </form>
    </div>


  )
}
export default Contactform
