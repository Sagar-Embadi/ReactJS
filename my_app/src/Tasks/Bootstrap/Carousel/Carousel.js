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
                <img src="https://th.bing.com/th/id/R.fcfde7d19cdac423e74cee3b206fb238?rik=OEkFwOI1Zuu7Lg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-kA-ZJ2602W8%2fUYfkL8PnytI%2fAAAAAAAACJ8%2fnQMW84AwJQ0%2fs1600%2fScreen%2bshot%2b2013-05-06%2bat%2b1.10.33%2bPM.png&ehk=mIT8yIKs%2bNHIqC7e05p0yRos7oQDw72FQEbatilckPU%3d&risl=&pid=ImgRaw&r=0" alt="" className='img'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://echt.com.au/cdn/shop/files/Mobile_-_w_image_2000x1904.jpg?v=1710288868" alt="" className='img'/>
            </Carousel.Item>
        </Carousel>
    </>
  )
}
