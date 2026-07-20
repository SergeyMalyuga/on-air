import {Component, effect, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AppRoute} from '../../../core/constants/const';
import {NgClass} from '@angular/common';
import {ScreenService} from '../../../core/services/screen.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private screenService = inject(ScreenService);

  protected readonly AppRoute = AppRoute;

  public isNavMenuOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      const isMobile = this.screenService.isMobile();
      if (!isMobile) {
        this.isNavMenuOpen.set(false);
      }
    });
  }

  public toggleNavMenu() {
    this.isNavMenuOpen.set(!this.isNavMenuOpen());
  }
}
