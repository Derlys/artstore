import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  nombre: string;

  constructor() {
    this.nombre = 'nombre por defecto';
  }

  ngOnInit(): void {}
}