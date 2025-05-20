import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Banner from '../components/Banner';
import './Slider.css'

function Slider() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      navigation
      loop={true}
      speed={500}
      className='slider'
    >
      <SwiperSlide className='slide'> <Banner brand={'wowhydrate'} bannerSide={"left"} bannerText={'Unikalne napoje elektrolitowe i proteinowe'} /> </SwiperSlide>
      <SwiperSlide className='slide'><Banner brand={'whoop'} bannerSide={"right"} bannerText={'Inteligentny monitoring aktywności, snu i stresu'} /></SwiperSlide>
      <SwiperSlide className='slide'><Banner brand={'playermaker'} bannerSide={"left"} bannerText={'System GPS do oceny zdolności fizycznych i technicznych w piłce nożnej'} /></SwiperSlide>
      <SwiperSlide className='slide'><Banner brand={'eleiko'} bannerSide={"right"} bannerText={'Światowy lider w treningu siłowym od ponad 60 lat'} /></SwiperSlide>
    </Swiper>
  )
}

export default Slider
