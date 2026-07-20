import {Inject, Injectable, OnDestroy, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScreenService implements OnDestroy {
  private readonly mobileQuery!: MediaQueryList;
  public isMobile = signal<boolean>(false);

  public constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      this.mobileQuery = window.matchMedia('(max-width: 1050px)')
      this.isMobile.set(this.mobileQuery.matches);
      this.mobileQuery.addEventListener('change', this.changeMobileQuery);
    }
  }

  public ngOnDestroy(): void {
    if (this.mobileQuery) {
      this.mobileQuery.removeEventListener('change', this.changeMobileQuery);
    }
  }

  private changeMobileQuery =
    (evt: MediaQueryListEvent) => this.isMobile.set(evt.matches);
}
