import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return of(null)
      .pipe(
        mergeMap(() => {
          if (
            request.url.endsWith("/users/authenticate") &&
            request.method === "POST"
          ) {
            const username = request.body.username;
            const password = request.body.password;

            if (username === "admin" && password === "admin") {
              let body = {
                username: username,
                password: password,
                token: "fake-jwt-token"
              };

              return of(new HttpResponse({ status: 200, body: body }));
            } else {
              return throwError({
                error: { message: "Username or password is incorrect" }
              });
            }
          }
          return next.handle(request);
        })
      )
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
