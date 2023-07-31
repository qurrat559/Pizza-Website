import React from 'react'
import PizzaLeft from "../assests/pizzaLeft.jpg"
import '../styles/Contact.css'


export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' 
      style={{ backgroundImage: `url(${PizzaLeft})` }}>
        </div> 
        
      <div className='rightSide'>
        <h1>Contact Us</h1>

        <form id='contact-form' method='POST'>
          <label htmlFor="name">Full Name</label>
          <input name='name' placeholder='Enter full name..' type='text'/>
          <label htmlFor="email">Email</label>
          <input name='email' placeholder='Enter Email..' type='email'/>
          <label htmlFor="mesage">Mesage</label>
          <textarea rows="6" placeholder='Enter message...' name='message' required> </textarea>
          <button type='submit'> Send Mesage</button>

        </form>
        </div> 
    </div>
  )
}

export default Contact;