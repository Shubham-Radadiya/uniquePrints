import React from 'react'
import './index.css'

export default function Footer() {
    return (
        <>
            <div className='footer_bg'>
                <div className='footer_flex'>
                    <div className='footer_paragraph'>
                        <p>Printify is an online design,copying and printing <br />company that is passionate about great design <br /> and the difference it can make to our customers <br />and the world.</p>
                    </div>
                    <div>
                        <h2>Explore</h2>
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Out Services</li>
                            <li>Plans & Pricing</li>
                            <li>How it Works</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Latest Posts</h2>
                        <span className='footer_date'>July 12,2019</span>
                        <p className='post_details'><b>A Clean Website Gives <br /> More Experience To The <br /> Visitors</b></p>
                        <span className='footer_date'>July 12,2019</span>
                        <p className='post_details'><b>A Clean Website Gives <br /> More Experience To The <br /> Visitors</b></p>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <p className='contact_number' >000 8888 999</p>
                        <p className='contact_number' >needhelp@gmail.com</p>
                        <p className='contact_number' >88 New Street,Washington DC <br /> United States,America</p>
                    </div>
                </div>
            </div>
        </>
    )
}
