import React from 'react'
import CommonHead from '../Common/CommonHead'

const Banner = () => {
  return (
    <section className='banner'>
      <div className="container">
        <div className="banner_row">
          <div className="banner_image">
            <img src="bannner_img.png" alt="banner" />
          </div>
          <div className="banner_text">
            <CommonHead CommonHeadText='Normal to oily skin' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner