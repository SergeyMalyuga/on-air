import {Navigation, Pagination} from 'swiper/modules';
import {SwiperOptions} from 'swiper/types';

export const MAIN_HERO_SWIPER_CONFIG = {
  modules: [Pagination, Navigation],
  slidesPerView: "auto",
  navigation: {
    addIcons: false,
    prevEl: '.home-page__swiper-button-previous',
    nextEl: '.home-page__swiper-button-next'
  },
  pagination: {
    el: '.home-page__swiper-pagination',
    clickable: true
  }
} as SwiperOptions
