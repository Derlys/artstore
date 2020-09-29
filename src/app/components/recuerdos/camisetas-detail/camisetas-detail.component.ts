import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camisetas-detail',
  templateUrl: './camisetas-detail.component.html',
  styleUrls: ['./camisetas-detail.component.scss'],
})
export class CamisetasDetailComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
  ngOnInit() {}
}
