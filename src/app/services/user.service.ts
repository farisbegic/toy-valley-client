import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/user.model";

@Injectable()
export class UserService {

  private readonly baseUrl: string = 'http://localhost:8080/users';

  constructor(private http:HttpClient) {
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

}
