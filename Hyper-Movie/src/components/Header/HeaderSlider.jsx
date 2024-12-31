import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

export default function HeaderSlider({ setBackgroundImage, defaultImage }) {
  const slides = [
    "https://lumiere-a.akamaihd.net/v1/images/p_moana2_payoff_5787a994.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg",
    "https://m.media-amazon.com/images/M/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_FMjpg_UX1000_.jpg",
  ];

  return (
    <div className="mt-8">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        loop
      >
        {slides.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full cursor-pointer rounded"
              src={url}
              alt={`Slide ${index + 1}`}
              onMouseOver={() => setBackgroundImage(url)}
              onMouseLeave={() => setBackgroundImage(defaultImage)} // بازگشت به مقدار پیش‌فرض
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
