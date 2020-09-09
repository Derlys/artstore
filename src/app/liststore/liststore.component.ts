import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liststore',
  templateUrl: './liststore.component.html',
  styleUrls: ['./liststore.component.scss'],
})
export class ListstoreComponent implements OnInit {
  products: string[];

  constructor() {
    this.products = ['camisetas', 'cuadros', 'recuerdos'];
  }

  ngOnInit(): void {}
}
