import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss']
})
export class FormAlunoComponent {

  title: string;

  userForm: FormGroup;

  user: User = new User();

  public dateMask: Array<string | RegExp>

  constructor(
    private userService: UserService
  ) {
    this.dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({
      //idUser: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dateBirth: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      address: new FormControl(''),
      parent: new FormControl(''),
      student: new FormControl(''),
      teacher: new FormControl(''),
      telephone1: new FormControl(''),
      telephone2: new FormControl(''),
    });
  }

  save() {
    this.user = this.userForm.value;
    console.log(this.user);
    this.userService.save(this.user);
  }

}
