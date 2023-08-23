import React, { Fragment, useEffect } from 'react'
import styles from './contactForm.module.css'
import FormGroup from '../GenerateTokenForm/FormGroup'
import FormInput from '../FormInput'
import PrimaryButton from '../PrimaryButton'
import { Form, Formik } from 'formik'

const ContactForm = () => {
	const [values, setValues] = React.useState({
		fullName: '',
		email: '',
		subject: '',
		projectDescription: '',
	})
	const [errors, setErrors] = React.useState({})


	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		})
	}

	const validate = () => {
		const errors = {}
		if (!values.fullName) {
			errors.fullName = 'Required'
		} else if (values.fullName.length < 6) {
			errors.fullName = 'Must be 6 characters or greater'
		}

		if (!values.email) {
			errors.email = 'Required'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}

		if (!values.subject) {
			errors.subject = 'Required'
		} else if (values.subject.length < 10) {
			errors.subject = 'Must be 10 characters or greater'
		}

		if (!values.projectDescription) {
			errors.projectDescription = 'Required'
		} else if (values.projectDescription.length < 15) {
			errors.projectDescription = 'Must be 15 characters or greater'
		}

		setErrors(errors)
		return errors
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		let errors = validate();

		if (errors) return;

		const res = await fetch('/api/sendgrid', {
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})

		const { error } = await res.json()
		if (error) {
			return
		}
	}

	return (
		<Fragment>
			<Formik
				initialValues={values}
				onSubmit={handleSubmit}
				validate={validate}
			>
				{({ setFieldValue, touched, submitForm }) => (
					<Form
						autoComplete="off"
						autoCorrect="off"
						noValidate
						className={`${styles.form} mx-auto p-[3.6rem] mt-[0rem]`}
					>
						{/* Token */}
						<FormGroup
							title="Contact Us"
							desc="This information will be used to contact you."
						>
							<div className="lg:flex gap-[2.2rem] mt-[2.5rem]">
								<FormInput
									name="fullName"
									type="text"
									placeholder="Eg: John Doe"
									onChange={handleChange}
									errors={errors}
								/>

								<FormInput
									name="email"
									type="email"
									placeholder="Eg: jhondoe@gmail.com"
									onChange={handleChange}
									errors={errors}
								/>
							</div>
							<FormInput
								name="subject"
								type="text"
								placeholder="Enter your supply amount"
								styles="mt-[2.5rem]"
								onChange={handleChange}
								errors={errors}
							/>
							<FormInput
								name="projectDescription"
								type="text"
								placeholder="Description about your project"
								styles="mt-[2.5rem]"
								onChange={handleChange}
								errors={errors}
							/>
						</FormGroup>
						<PrimaryButton
							text="Submit"
							onClick={handleSubmit}
							classes="mt-[2.9rem]"
						/>
					</Form>
				)}
			</Formik>
		</Fragment>
	)
}

export default ContactForm
