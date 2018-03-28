import { NgModule } from '@angular/core';

import { AlunoComponent } from './aluno.component';
import { ThemeModule } from '../../@theme/theme.module';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { AlunoRoutingModule, routedAlunoComponents } from './aluno-routing.module';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    ThemeModule,
    AlunoRoutingModule,
    FormsModule,
    TextMaskModule,

  ],
  declarations: [
    ...routedAlunoComponents,
  ],
  providers: [
    UserService,
  ]
})
export class AlunoModule { }
