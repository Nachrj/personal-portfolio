import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button.js';

const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		console.log(data);
		sendEmail(data.name, data.message)
	}

	const sendEmail = (name, message) => {
		window.open(`mailto:rodriguezjustoignacio@gmail.com?subject=${name}&body=${message}`)
	}

	return (
		<form className='formStyle' onSubmit={handleSubmit(onSubmit)}>
			<label>Name</label>
			<input 
				name='name' 
				placeholder='Jordan Walke'
				ref={register({ required: true, minLength: 2 })}
				/>
			{errors.name && errors.name.type === 'required' && <p>This field is required</p>}
			{errors.name && errors.name.type === 'minLength' && <p>This field requires more characters</p>}
{/*		
			<label>Email</label>
			<input 
				name='email' 
				type='email' 
				placeholder='example@domain.com'
				ref={register({ required: true, minLength: 5 })}

				/>
			{errors.email && errors.email.type === 'required' && <p>This field is required</p>}
			{errors.email && errors.email.type === 'minLength' && <p>This field requires more characters</p>} 
*/}
			<label>Message</label>
			<textarea 
				name='message' 
				ref={register({ required: true, minLength: 3 })}
				placeholder='Write a message!'
				rows='7'

				/>
			{errors.message && errors.message.type === 'required' && <p>This field is required</p>}
			{errors.message && errors.message.type === 'minLength' && <p>This field requires more characters</p>}


			<Button type='submit' text='submit' className='submitButton' />
		</form>
	)
}

export default ContactForm