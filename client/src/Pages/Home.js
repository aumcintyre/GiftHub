import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='home-container row'>
                <div>
                    <h1 className='home-row col-md-12' style={{ fontSize: '70px' }}>Hi!</h1>
                    <img src='images/home-logo.png' className='home-logo' />
                    <p className='home-row container' style={{ padding: '28px', fontSize: '24px' }}>
                        Welcome to GiftHub
                    </p>
                </div>
            </div>
        </div >
    )
}
