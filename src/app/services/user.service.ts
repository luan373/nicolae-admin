import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private url: string = 'http://localhost:8080/nicolae-ws/rest/user";

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User>(this.url + '/lista')
  }

  save(user: User) {
    return this._http.post(this.url + '/cadastra', user).subscribe(
      res => {
        console.log('foi');
        console.log(res);
      },
      err => {
        //console.log('Náo foi');
        //console.log(err);
      },
    );
  }

  private handleError(error: Response) {
    console.error(error);

    return Observable.throw(error.json() || 'Server error');
  }

}
