import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  constructor(private http: HttpClient) { }
  places: any = [];
  orders: any = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerPage();
  }
  
  async ngOnInit() {
    this.places = await this.getPlaces();
    this.orders = await this.getOrders();
  }

  updateItemsPerPage() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 768) { // Tamanho de tela de dispositivos móveis
      this.itemsPerPage = 1;
      this.currentPage = 1;
    } else {
      this.itemsPerPage = 8;
    }
  }

  async getPlaces(): Promise<any> {
    try {
      const data = await this.http.get('assets/places.json').toPromise();
      return data;
    } catch (error) {
      
    }
  }

  async getOrders(): Promise<any> {
    try {
      const data = await this.http.get('assets/productionPlaces.json').toPromise();
      return data;
    } catch (error) {
      
    }
  }

  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getTotalPages() {
    return Math.ceil(this.places.length / this.itemsPerPage);
  }
}