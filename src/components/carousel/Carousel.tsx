import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Flickity from 'react-flickity-component'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
interface Props {
  data: Image[];
}
export type Image = {
  _id: string;
  public_id: string;
  url: string;
};
const CarouselOptions = {
  initialIndex: 1
}

const Carousel = ({ data }: Props) => {
  console.log('images', data);
  return (
    <>
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{
          clickable: true,
        }}
        // width={1200}
        // height={1200}
        className="mySwiper"
      >
        {data?.length > 0 ? (
          data?.map((image) => {
            return (
              <>
                <SwiperSlide>
                  <div className="swiper-child w-[400px] m-3 ">
                    <img src={image?.url ?? ''} alt="Alternate " />
                  </div>
                </SwiperSlide>
              </>
            );
          })
        ) : (
          <h1>No Images</h1>
        )}
      </Swiper>
       */}
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'}
        options={CarouselOptions}
      >
        {data?.map((element) => {
          return (
            <>
              <Image src={element?.url} alt={element?.public_id} />
            </>
          )
        })}
      </Flickity>
      <div className="review-swiper-button-prev "></div>
      <div className="review-swiper-button-next "></div>
    </>
  );
};

export default Carousel;
