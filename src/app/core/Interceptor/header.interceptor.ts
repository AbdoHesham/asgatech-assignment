import { AlertService } from 'src/app/shared/services/alert.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable, map, finalize, throwError } from 'rxjs';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { catchError, tap } from 'rxjs/operators';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from '../services/auth.service';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  ctr = 0;
  dialogRef: DynamicDialogRef;
  constructor(
    private SpinnerService: SpinnerService,
    private AlertService: AlertService,
    private auth: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let authToken;
    authToken = this.auth.getUsertoken();

    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken.email}`,
        },
      });
    }
    //    });
    this.activeRequests++;
    this.SpinnerService.isLoading.next(true);

    return next.handle(request).pipe(
      map((evt) => {
        if (evt instanceof HttpResponse) {
          if (evt.body.responseCode == 1) {
            return evt;
          } else {
            if (evt?.body?.responseCode != null) {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });

              this.AlertService.showMessage('error', evt.body.resultMessege);
              // return null;
            }
            return evt;
          }
        }
        return null;
      }),
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.SpinnerService.isLoading.next(false);
        }
      }),
      catchError((error: any) => {
        if (error.status == 403|| error.status == 401) {
          this.auth.login();
          this.AlertService.showMessage('error', 'Session Expired');
          this.auth.setCurrentUser(null);
        } 
        else if (error.status != 200) {
          this.AlertService.showMessage('error', "Technical Error");
        }
        else {
          this.AlertService.showMessage('error', error.error.resultMessege);
        }
        return throwError(error);
      })
    );
  }
}
