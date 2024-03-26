import { Component } from '@angular/core';

@Component({
  selector: 'app-latout-page',
  templateUrl: './latout-page.component.html',
  styleUrls: ['./latout-page.component.scss']
})
export class LatoutPageComponent {
  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
