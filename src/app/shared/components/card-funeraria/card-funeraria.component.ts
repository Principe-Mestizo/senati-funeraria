import { Component, Input } from '@angular/core';
import { Servicios } from 'src/app/auth/models/servicio.model';

@Component({
  selector: 'app-card-funeraria',
  templateUrl: './card-funeraria.component.html',
  styleUrls: ['./card-funeraria.component.scss']
})
export class CardFunerariaComponent {
  @Input()
  public servicio!:Servicios;

  ngOnInit() {
    if (!this.servicio) {
      throw Error('Service property doenst')
    }
  }
}
