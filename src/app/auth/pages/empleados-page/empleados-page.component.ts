import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados-page',
  templateUrl: './empleados-page.component.html',
  styleUrls: ['./empleados-page.component.scss']
})
export class EmpleadosPageComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
