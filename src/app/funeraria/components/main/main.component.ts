import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Formulario } from 'src/app/auth/models/formulario.model';
import { Servicios } from 'src/app/auth/models/servicio.model';
import { FormularioService } from 'src/app/auth/services/formulario.service';
import { ServicioService } from 'src/app/auth/services/servicio.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  public servicios: Servicios[] = [];

  formEnvio: FormGroup;
  ngOnInit(): void {
    this._serviceServicio.getServicios()
      .subscribe(servicios => {
        this.servicios = servicios;
      });
  }
  constructor(
    private _formularioService: FormularioService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _serviceServicio: ServicioService
  ) {
    this.formEnvio = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.minLength(8)]],
      telefono: [''],
      descripcion: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  addEnvioFormulario() {
    if (this.formEnvio.invalid) {
      return;
    }

    const formulario: Formulario = {
      correo: this.formEnvio.value.correo,
      dni: this.formEnvio.value.dni,
      telefono: this.formEnvio.value.telefono,
      descripcion: this.formEnvio.value.descripcion
    };

    this._formularioService.envioForumulario(formulario).subscribe(() => {
      this.toastr.success('Formulario enviado correctamente', 'Éxito');
      console.log('Formulario enviado correctamente');
    });
  }
}
