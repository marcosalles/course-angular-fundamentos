import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[picDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  
  @Input() brightness: number = 70;
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) { }
  
  @HostListener('mouseover')
  darkenOn() {
    this.renderer.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness}%)`);
  }
  
  @HostListener('mouseleave')
  darkenOff() {
    this.renderer.setElementStyle(this.el.nativeElement, 'filter', undefined);
  }
}
