import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '../../../core/constants/const';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly AppRoute = AppRoute;
}
