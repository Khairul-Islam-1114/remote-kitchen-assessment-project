import React from 'react'

const Hero = () => {
    return (
        <div className='hero' style={{ background: "url('/hero_img.png') no-repeat", backgroundSize: 'cover' }}>
                <h1 className='hero__title'>Satisfy Your Cravings with Remote Kitchen</h1>
                <p className="hero__subtitle">Browse our menu and experience culinary bliss.</p>
        </div>
    )
}

export default Hero;