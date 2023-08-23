import React from 'react'

const Card = ({index, name, role}) => {
  return (
    <div>
         <div class="card shadow-2xl">
                           <div class="card__side card__side--front">
                                <div class={`card__picture card__picture--${index}`}>
                                    &nbsp;
                                </div>
                                <div class="card__details">
                                <h4 className="bold text-center text-[5rem] lg:text-[2rem]">
								{name}
							</h4>
							<p className="regular text-center text-[4rem] lg:text-[1.8rem]">
								{role}
							</p>
                                </div>
                           </div>
                           <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">$297</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                       </div>
    </div>
  )
}

export default Card