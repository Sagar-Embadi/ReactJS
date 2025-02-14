import "./Carousel.css"
import Carousel from "react-bootstrap/Carousel"
import img from "../../../assets/image.png"
export const Carousel1 = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img src={img} alt="" className='img'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img} alt="" className='img'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img} alt="" className='img'/>
            </Carousel.Item>
        </Carousel>
    </>
  )
}
