import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  @Input() nombre: string;

  constructor() {}

  ngOnInit(): void {}
}
