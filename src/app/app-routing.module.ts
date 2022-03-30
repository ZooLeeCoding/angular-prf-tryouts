import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'first', component: MyFirstComponentComponent },
  { path: '', redirectTo: 'first', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
