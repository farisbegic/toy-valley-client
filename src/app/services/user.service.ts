import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = 'http://localhost:8080/users';

  constructor(private http:HttpClient) {
  }

  public getUser(id:string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  public update(user: User, id: number | undefined): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

}
