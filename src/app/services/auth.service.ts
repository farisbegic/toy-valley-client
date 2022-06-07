import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap, Observable, of, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {AuthResponse} from '../models/auth/auth-response.interface';
import {Router} from '@angular/router';
import {Route} from '../constants/route.constants';
import {SignInForm} from "../models/auth/login-form-interface";

@Injectable()
export class AuthService {

  private readonly baseUrl: string = `${environment.backendUrl}/authenticate`;
  private jwt: string | null = null;
  private userId: string | null = null;
  private admin: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  public getToken(): string | null {
    return this.jwt;
  }

  public getUserId(): string | null {
    return this.userId;
  }

  public getAdmin(): string | null {
    return this.admin;
  }

  public logIn(signInForm: SignInForm): Observable<void> {
    const body = {
      email: signInForm.email,
      password: signInForm.password,
    };

    return this.http.post<AuthResponse>(`${this.baseUrl}`, body).pipe(
      mergeMap(response => {
        this.jwt = response.token;
        return of(undefined);
      })
    );
  }

  public logout(): void {
    this.jwt = null;
    this.userId = null;
    this.admin = null;
  }

  public goToLogin():void {
    this.router.navigate([Route.LOGIN]);
  }

}
