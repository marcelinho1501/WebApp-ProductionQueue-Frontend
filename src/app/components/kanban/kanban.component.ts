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
  itemsPerPage: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerPage();
  }

  async ngOnInit() {
    this.updateItemsPerPage();
    this.places = await this.getPlaces();
    this.orders = await this.getOrders();
  }

  updateItemsPerPage() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if (viewportWidth <= 768 || viewportHeight <= 600) { // Tamanho de tela de dispositivos móveis ou monitor menor de notebook
      this.itemsPerPage = 1;
    } else if (viewportWidth >= 1200 && viewportHeight >= 800) { // Monitor maior externo
      this.currentPage = 1;
      this.itemsPerPage = 5;
    } else {
      this.itemsPerPage = 3;
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
      console.log(data);
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

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getTextColor(backgroundColor: string): string {
    const hex = backgroundColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (brightness > 128) ? '#000000' : '#FFFFFF';
  }
}
