import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  isBrowser(): Boolean {
    return isPlatformBrowser(this.platformId);
  }

  ifBrowser(callback: Function): void {
    if (this.isBrowser()) {
      callback();
    }
  }
}
