const FormGroup = ({ styles, title, desc, children }) => {
	return (
		<div className={`flex flex-col ${styles}`}>
			<h4 className="medium text-[6rem] lg:text-[2.2rem]">{title}</h4>
			<span className=" text-[6rem] lg:text-[1.5rem]">{desc}</span>
			{children}
		</div>
	)
}

export default FormGroup
