import {AfterViewInit, Component, Input} from '@angular/core';
import Swiper from 'swiper';
import {SwiperOptions} from 'swiper/types';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
})
export class SwiperComponent implements AfterViewInit {
  @Input({required: true}) swiperOptions!: SwiperOptions;
  private swiper!: Swiper;

  public ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper',
      {
        ...this.swiperOptions,
      }
    )
  }
}
