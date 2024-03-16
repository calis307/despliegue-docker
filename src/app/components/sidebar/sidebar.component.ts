import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  elementosEncontrados: { nombre: string; icono: string }[] = []; // Array para almacenar los elementos encontrados
  todosElementos: { nombre: string; icono: string }[] = []; // Array para almacenar todos los elementos disponibles

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // Al inicializar el componente, obtener todos los elementos disponibles
    this.todosElementos = this.searchService.obtenerTodosElementos();
    // Inicializar elementosEncontrados con todos los elementos disponibles al principio
    this.elementosEncontrados = this.todosElementos;
  }

  buscarElemento(event: any): void {
    const query = event?.target?.value.trim();
    if (!query) {
      this.elementosEncontrados = this.todosElementos;
      return;
    }
    // Buscar elementos que coincidan con el texto de búsqueda
    this.elementosEncontrados = this.searchService.buscarElemento(query);
  }
}
