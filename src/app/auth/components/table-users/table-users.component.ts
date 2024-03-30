import { Component, ViewChild } from '@angular/core';
import { Servicios } from '../../models/servicio.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupPageComponent } from '../../pages/signup-page/signup-page.component';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent {
  usuarios: Servicios[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'acciones']
  dataSource = new MatTableDataSource(this.usuarios);
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
    private _userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadDataServices();
  }

  private loadDataServices(): void {
    this._userService.getUsers().subscribe(usuarios => {
      this.usuarios = usuarios;
      this.dataSource.data = this.usuarios;
      console.log(usuarios);

    })
  }

  openUsers() {
    const dialogRef = this.dialog.open(SignupPageComponent, {
      width: '550px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadDataServices();
    });
  }



}
