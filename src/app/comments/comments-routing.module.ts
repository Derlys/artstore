import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsDetailComponent } from './comments-detail/comments-detail.component';
import { CommentsListComponent } from './comments-list/comments-list.component';

const routes: Routes = [
  {
    path: 'comments',
    component: CommentsListComponent,
  },
  {
    path: 'comments/:id',
    component: CommentsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
