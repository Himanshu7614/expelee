import React, { useState } from 'react'
import styles from './TeamCard.module.css'

const TeamCard = ({  name, role, image, description }) => {
	const [isRotated, setIsRotated] = useState(false);

	function handleClick() {
	  setIsRotated(!isRotated);
	}
  
	return (
		<div className={name === 'Anandhu Santhosh Kumar' ? `card ${isRotated ? 'rotated' : ''}  order-first lg:order-2 ` : `card ${isRotated ? 'rotated' : ''} lg:order-2`} onTouchEnd={handleClick} onClick={handleClick}>
			<div className='content'>
				<div className='back'>
					<img
						src={image}
						className=""
						alt=""
					/>
					<div
						className={isRotated ? 'hidden' : `${styles.teamCard}  px-[1rem] pt-[4.5rem] absolute top-[90rem] lg:top-[30rem] lg:max-w-[100%]`}
					>
						<h4 className="bold text-center text-[6rem] lg:mt-[0rem] mt-[8rem] lg:text-[2.3rem]">
							{name}
						</h4>
						<p className="regular text-center text-[5rem] lg:text-[1.8rem]">
							{role}
						</p>
					</div>

				</div>
				<div className='front z-10'>
					<div className='front-content mt-[30rem] lg:mt-[5rem]'>
						<h4 className="bold text-center text-[7rem] lg:text-[2rem]">
							{name}
						</h4>
						<p className="regular text-center text-[5rem] lg:text-[1.8rem]">
							{role}
						</p>

					</div>
					<div>
						<p className="regular text-center text-[4rem] mt-[4rem] lg:mt-[2rem] lg:text-[1.8rem]">
							{description}
						</p>
					</div>
					<div className='flex justify-center mt-[10rem] lg:mt-[5rem] gap-[2rem] lg:gap-[1rem]'>
						<img className='w-[15rem] lg:w-[4rem]' src={'/static/linked.svg'} alt="" />
						<img className='w-[15rem] lg:w-[4rem]' src={'/static/telegram.svg'} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeamCard
