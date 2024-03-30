import { Component, ViewChild } from '@angular/core';
import { Formulario } from '../../models/formulario.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormularioService } from '../../services/formulario.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-formulario',
  templateUrl: './table-formulario.component.html',
  styleUrls: ['./table-formulario.component.scss']
})
export class TableFormularioComponent {
  formulario: Formulario[] = [];
  displayedColumns: string[] = ['id', 'correo', 'dni', 'telefono', 'descripcion'];
  dataSource = new MatTableDataSource(this.formulario);
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
    private _formularioService: FormularioService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadDataServices();
  }

  private loadDataServices(): void {
    this._formularioService.getEnvios().subscribe(formularios => {
      this.formulario = formularios;
      this.dataSource.data = this.formulario;
      console.log(formularios);

    })
  }

}
