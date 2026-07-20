import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AppRoute} from '../../../core/constants/const';
import {NgClass} from '@angular/common';

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
  protected readonly AppRoute = AppRoute;

  public isNavMenuOpen = signal<boolean>(false);

  public toggleNavMenu() {
    this.isNavMenuOpen.set(!this.isNavMenuOpen());
  }
}
