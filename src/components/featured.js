import React from 'react'
import Slider from 'react-slick'

const settings = {
    arrows:false,
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1
}

const generateSlides = ({slides}) => {
  console.log(slides)
    if(slides){
      return(
           <Slider {...settings}>
              {slides.map((item)=>{
                  return(
                    //let imageUrl = require(`../images/${props.imageName}.jpg`);
                    <div key={item.id} className="item-slider" style={{background:`url(${require(`../images/covers/${item.cover}`)})`}}>
                         
                               <div className="caption">
                            <h4>{item.topic}</h4>
                            <p>{item.title}</p>
                         </div>    
                    </div>        
                  )
              })}

           </Slider>     
      )
  }
}

const Featured = (props) => {
    console.log(props)
    return(
        <div>
         {generateSlides(props)} 
        </div>
    )
}

export default Featured