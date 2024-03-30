import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Servicios } from '../../models/servicio.model';
import { ServicioService } from '../../services/servicio.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalServicioComponent } from '../../modales/modal-servicio/modal-servicio.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-services',
  templateUrl: './table-services.component.html',
  styleUrls: ['./table-services.component.scss']
})
export class TableServicesComponent implements OnInit {

  services: Servicios[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'descripcion', 'icon', 'acciones']
  dataSource = new MatTableDataSource(this.services);
  loading: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private servicioService: ServicioService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadDataServices();
  }

  private loadDataServices(): void {
    this.servicioService.getServicios().subscribe(servicios => {
      this.services = servicios;
      this.dataSource.data = this.services;
      console.log(servicios);

    })
  }

  openAddEditService(id?: number): void {
    const dialogRef = this.dialog.open(ModalServicioComponent, {
      width: '550px',
      disableClose: true,
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadDataServices();
      }
    });
  }

  deleteService(id: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Este proceso no es reversible, está a punto de eliminar su servicio`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.servicioService.deleteService(id)
          .subscribe(() => {
            this.loadDataServices();
            this.loading = false;
          });
      }
    });

  }
  // TODO: reemplazo modal
  // this.loading = true;
  // this.servicioService.deleteService(id).subscribe( () => {
  //   this.loadDataServices();
  //   this.loading = false;
  // })

}
