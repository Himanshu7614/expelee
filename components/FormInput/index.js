const FormInput = ({ name, type, placeholder, styles, onChange, errors }) => {
	return (
		<div className={`flex-1 flex flex-col ${styles}`}>
			<span className={"mt-[4rem] lg:mt-[0rem] text-[6rem] lg:text-[1.5rem] text-[#797979] mb-[9px]"}>{name} *</span>
			<input
				type={type}
				placeholder={placeholder}
				className={errors && errors[name] ? "border-[red] bg-[#e9e9e9] h-[12rem] regular text-[5rem] lg:text-[1.5rem] lg:h-[5rem] rounded-[7px] placeholder:regular placeholder:text-[5rem] lg:placeholder:text-[1.5rem] placeholder:text-[#797979] px-[2rem] py-[1.6rem]" :  "bg-[#e9e9e9] h-[12rem] regular text-[5rem] lg:text-[1.5rem] lg:h-[5rem] rounded-[7px] placeholder:regular placeholder:text-[5rem] lg:placeholder:text-[1.5rem] placeholder:text-[#797979] px-[2rem] py-[1.6rem]"}
				onChange={onChange}
				name={name}

			/>
			{errors && errors[name] ? <div className="lg:text-[1rem] text-[3rem] text-[red]">{errors[name]}</div> : null}
		</div>
	)
}

export default FormInput
