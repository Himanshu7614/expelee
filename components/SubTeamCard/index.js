import React, { useState } from 'react'

const SubTeamCard = ({ name, role, description, image }) => {
	const [isRotated, setIsRotated] = useState(false);

	function handleClick() {
	  setIsRotated(!isRotated);
	}
	return (
		<div className={isRotated ? `card rotated` : `card`}onTouchEnd={handleClick}  onClick={handleClick}>
			<div className="content lg:mx-[0rem] mx-[15rem]">
				<div className="back bg-white">
					<div className="flex flex-col gap-[3rem] lg:gap-[1rem] py-[2rem] justify-center w-[90rem] !mx-auto h-[70rem] lg:w-[29rem] lg:h-[27rem]  lg:shadow-md">
						<img
							className="w-[45rem] lg:w-[15rem] mx-auto mt-[-40%] lg:mt-[-46%] flex justify-center"
							src={image}
							alt=""
						/>
						<h4 className="bold text-center text-[5rem] lg:text-[2rem]">
							{name}
						</h4>
						<p className="text-center regular text-[5rem] lg:text-[1.5rem]">
							{role}
						</p>
						<div className="flex justify-center gap-[2rem] lg:gap-[1rem]">
							<img
								className="w-[11rem] lg:w-[3rem]"
								src={'/static/linked.svg'}
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="subFront">
					<div className=" bg-white flex flex-col gap-[3rem] lg:gap-[1rem] py-[2rem] mx-auto h-[80rem] lg:w-[30rem] lg:h-[27rem] shadow-xl lg:shadow-md">
						<div className="px-[1rem]">
							<h4 className="bold text-center text-[5rem] lg:text-[2rem] mb-[1rem]">
								{name}
							</h4>
							<p className="text-center regular text-[5rem] lg:text-[1.5rem]">
								{role}
							</p>
							<p className="text-center regular text-[5rem] lg:text-[1.5rem]">
								{description}
							</p>
						</div>
						<div className="flex justify-center gap-[2rem] lg:gap-[1rem]">
							<img
								className="w-[13rem] lg:w-[3rem]"
								src={'/static/linked.svg'}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubTeamCard
