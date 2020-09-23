import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Token } from '../models/token.model';
import { SignupRequest } from '../models/signupRequest.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient) {}

  login(user: { username: string, password: string, remember: boolean }): Observable<boolean> {
    return this.http.post<any>(`${environment.APIUrl}/api/users/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(_ => {
          return of(false);
        }));
  }

  verifyAuthorization() {
    return this.http.get(`${environment.APIUrl}/api/users/verify-authorization`);
  }

  loginExternal(provider: string) {
    const returnUrl = window.location.origin;

    window.location.href = `${environment.APIUrl}/api/users/externalLogin?provider=${provider}&returnUrl=${returnUrl}`;
  }

  logout() {
    return this.http.post(`${environment.APIUrl}/api/users/logout`, {
      refreshToken: this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(_ => {
        return of(false);
      }));
  }

  signup(request: SignupRequest){
    return this.http.post(`${environment.APIUrl}/api/users`, request);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${environment.APIUrl}/api/users/refresh`, {refreshToken: this.getRefreshToken(),
                                                                                    token: this.getJwtToken() })
      .pipe(tap((tokens: Token) => {
        this.storeTokens(tokens);
      }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

    private doLoginUser(username: string, tokens: Token) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Token) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
    if ( tokens.refreshToken != null){
      localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    }
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
