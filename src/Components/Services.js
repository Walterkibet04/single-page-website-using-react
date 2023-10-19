import React from 'react'
import Data from './Data'
import Card from './Card'

const Services = () => {
  return (
    <>
      <h1>Our services</h1>
      <div className="services">
        {Data.map((values)=>{
          return <Card
          title1={values.title}
          imgSource={values.imgsrc}
          desc1={values.Desc}
          button={values.btnService}
          />
        })}
        
      </div>
    </>
  )
}

export default Services