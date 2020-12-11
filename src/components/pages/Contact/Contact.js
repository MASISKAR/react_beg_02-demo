import React, { useState } from 'react';

const defaultValues = {
    name: '',
    email: '',
    phone: '',
    message: ''
};

function Contact() {

    const [values, setValues] = useState(defaultValues);

    // const handleChange = (value, name)=>{

    // };
 //                       event
    const handleChange = ({target: {name, value}}) => {

        setValues({
            ...values,
            [name]: value
        });
    };

    const send = ()=>{
        console.log('values', values);
        setValues(defaultValues);
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Your name'
                value={values.name}
                name='name'
                onChange={handleChange}
            // onChange={(event)=>handleChange(event.target.value, 'name')}
            />
            <input
                type='email'
                name='email'
                placeholder='Your email'
                value={values.email}
                onChange={handleChange}
            />
            <input
                type='phone'
                name='phone'
                placeholder='Your phone'
                value={values.phone}
                onChange={handleChange}
            />

            <textarea
                placeholder='Your message'
                name='message'
                onChange={handleChange}
                value={values.message}
            >

            </textarea>

            <button
            onClick={send}
            >
            Send
            </button>

        </div>
    );
}

export default Contact;