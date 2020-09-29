import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsDetailComponent } from './comments-detail/comments-detail.component';
import { CommentsApiClientService } from './comments-api-client.service';

@NgModule({
  declarations: [CommentsListComponent, CommentsDetailComponent],
  imports: [CommonModule, CommentsRoutingModule],
  providers: [CommentsApiClientService],
})
export class CommentsModule {}
