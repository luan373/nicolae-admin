import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { AlunoComponent } from './aluno.component';

const routes: Routes = [{
  path: '',
  component: AlunoComponent,
  children: [{
    path: 'cadastro',
    component: FormAlunoComponent,
  }]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AlunoRoutingModule { }

export const routedAlunoComponents = [
  AlunoComponent,
  FormAlunoComponent
]
