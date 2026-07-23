import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {SwiperComponent} from '../../shared/components/swiper/swiper.component';
import {MAIN_HERO_SWIPER_CONFIG} from '../../shared/components/swiper/swiper.config';
import {TopChannelsComponent} from './components/top-channels/top-channels.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    SwiperComponent,
    TopChannelsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  protected readonly MAIN_HERO_SWIPER_CONFIG = MAIN_HERO_SWIPER_CONFIG;
}
