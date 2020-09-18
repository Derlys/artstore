import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss'],
})
export class ProductformComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Product>;
  fg: FormGroup;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.required],
      url: [''],
    });
    this.fg.valueChanges.subscribe((form: any) => {
      console.log('cambio el formulario:  form');
    });
  }

  ngOnInit() {}

  guardar(nombre: string, url: string): boolean {
    const d = new Product(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
}
