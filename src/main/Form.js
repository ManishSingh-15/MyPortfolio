import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export default function Form() {
    const [data,setState]=useState({pname:"",email:"",desc:""})
    const text=(event)=>{
        const {name,value}=event.target;
        setState((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
   
        emailjs.sendForm('service_itg4zg1', 'template_k4qh7rl', form.current, 'eBtl0hSlgBUv2e5oF')
          .then((result) => {
              console.log(result.text);
              alert("Mail has been sent successfully")
          }, (error) => {
              console.log(error.text);
              alert("Error")
          });
          e.target.reset();
      };

    return (
        <div className="form-body" id="contact">
            <h1>Contact Me</h1>
            <hr className='break' />
            <form  ref={form}  onSubmit={sendEmail}>
            <div className="form-contact">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1"  className="form-label ">Name</label>
                    <input type="name" className="form-control"  value={data.value} name="pname" onChange={text}  id="exampleFormControlInput1" placeholder="Enter your Name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={data.value} name="email" onChange={text}  id="exampleFormControlInput1" placeholder="Enter your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label">Description</label>
                    <textarea className="form-control" value={data.value} onChange={text} name="desc" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your text here" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
            </form>
        </div>
    )
}