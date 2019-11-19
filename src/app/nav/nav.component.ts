import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isNavVisible = false;
  constructor(private eRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  clickout(target) {
    if (!this.eRef.nativeElement.contains(target) && this.isNavVisible) {
      this.toggleNav();
    }
  }

  ngOnInit() {
  }

  toggleNav = () => this.isNavVisible = !this.isNavVisible;
}
