import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                  <img alt="testimonial" src="https://img.freepik.com/premium-psd/nature-background-banner-template-with-green-leaf-garden-summer_634423-16396.jpg?w=1380"  width={2000}/>
                </div>
            </section>
        </div>
    )
}
export default Testimonial