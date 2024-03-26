import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicioService } from '../../services/servicio.service';
import { Servicios } from '../../models/servicio.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { ServiceState } from '../../models/servico.estado.model';

@Component({
  selector: 'app-modal-servicio',
  templateUrl: './modal-servicio.component.html',
  styleUrls: ['./modal-servicio.component.scss']
})
export class ModalServicioComponent implements OnInit {
  formService: FormGroup;
  loading: boolean = false;
  operacion: string = "Agregar ";
  id:number |undefined;

  estados: ServiceState[] = [
    { value: true, viewValue: 'Activo' },
    { value: false, viewValue: 'Inactivo' }
  ];


  constructor(
    public dialogRef: MatDialogRef<ModalServicioComponent>,
    private _servicioService: ServicioService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
  ) {
    this.formService = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      descripcion: ['', [Validators.required, Validators.maxLength(250)]],
      estado: ['', Validators.required],
      stock: ['', Validators.required],
      imagen: ['', Validators.required,],
    });
    this.id = data.id;
  }


  addEditService() {
    if (this.formService.invalid) {
      return;
    }
    const servicio: Servicios = {
      titulo: this.formService.value.titulo,
      descripcion: this.formService.value.descripcion,
      estado: this.formService.value.estado,
      stock: this.formService.value.stock,
      imagen: this.formService.value.imagen,
    }
    this.loading = true;

    if (this.id === undefined) {
      // es agregar
      this._servicioService.createService(servicio).subscribe(() => {
        this.toastr.success('Servicio guardado correctamente', 'Éxito');
        this.loading = false;
        this.dialogRef.close(true);
      })
    } else {
      //es editar
      this._servicioService.updateService(this.id, servicio).subscribe(() => {
        // TODO: revisar esta nota this.mensajeExito('actualizado');
        // TODO: this.toastr.info('Servicio actualizado correctamente', 'Éxito');
        this.loading = false;
        this.dialogRef.close(true);
        console.log('Actualiza pero ocurre algo ');
      })
    }

  }

  /* TODO: reemplazo con  toastarp mas personalizado
  mensajeExito(operacion: string){
    this._snackBar.open(`El servicio fue ${operacion} con exito`, "", {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',

    })
  }
  **/

  ngOnInit(): void {
    this.esEditar(this.id);
  }

  esEditar(id:number | undefined){

    if (id != undefined) {
      this.operacion = "Editar ";
      this.getServicio(id);
    }
  }

  getServicio(id: number){
    this._servicioService.getServicio(id).subscribe( data => {
      this.formService.setValue({
        titulo: data.titulo,
        descripcion: data.descripcion,
        estado: data.estado,
        stock: data.stock,
        imagen: data.imagen,
      });
    })
  }

  cancelar() {
    this.dialogRef.close(false);
  }



}
