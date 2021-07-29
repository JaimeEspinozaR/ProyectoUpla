import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UsuarioService } from '../service/usuario.service';
import { Usuario, UsuarioOrds } from '../model/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Usuario>;

  usuarios: UsuarioOrds;
  displayedColumns = ['id_usuario', 'tipo', 'nombre', 'ape_paterno', 'ape_materno',
    'fecha_nacimiento', 'fecha_creacion', 'correo', 'estado'];

  constructor(
    public rest: UsuarioService
  ) { }

  getUsuarios(): void {
    this.rest.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp;
      this.table.dataSource = this.usuarios.items;
    });

  }
  ngOnInit(): void {
    this.getUsuarios();
  }

  ngAfterViewInit(): void {
  }

}
