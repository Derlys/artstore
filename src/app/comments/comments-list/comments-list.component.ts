import { Component, OnInit } from '@angular/core';
import { CommentsApiClientService } from '../comments-api-client.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent implements OnInit {
  constructor(private api: CommentsApiClientService) {}

  ngOnInit(): void {}
}
