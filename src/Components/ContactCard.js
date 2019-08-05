import React from "react"

function ContactCard(props) {
  console.log(props)
  return (
    <div className="contact-card">
      <img src={props.contact.imgUrl} alt="Kitty" />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard