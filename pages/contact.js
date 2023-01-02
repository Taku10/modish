import React from 'react'
import { useForm } from "react-hook-form";
import { ContactBanner } from '../components';


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='contact-container'>
            <ContactBanner />
            <div className='form-wrapper'>
                <h2>Send us a message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
                    <input {...register("fullName")} placeholder='Full Name' />
                    <input {...register("phoneNumber")} placeholder='Phone Number' />
                    <input type='email' {...register("email")} placeholder='Email' />
                    <textarea  {...register("text")} placeholder='Message'></textarea>
                    <button>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
