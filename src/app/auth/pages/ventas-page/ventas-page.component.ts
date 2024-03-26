import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas-page',
  templateUrl: './ventas-page.component.html',
  styleUrls: ['./ventas-page.component.scss']
})
export class VentasPageComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
