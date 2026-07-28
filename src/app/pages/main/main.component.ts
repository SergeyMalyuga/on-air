import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {SwiperComponent} from '../../shared/components/swiper/swiper.component';
import {MAIN_HERO_SWIPER_CONFIG} from '../../shared/components/swiper/swiper.config';
import {RecommendedComponent} from './components/recommended/recommended.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, SwiperComponent, RecommendedComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  protected readonly MAIN_HERO_SWIPER_CONFIG = MAIN_HERO_SWIPER_CONFIG;
}
