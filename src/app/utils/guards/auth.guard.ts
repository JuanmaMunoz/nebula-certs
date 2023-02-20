import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.sessionService.checkSession().pipe(
      tap((ok: boolean) => {
        if (!ok) this.router.navigate(['/login/auth']);
      })
    );
  }
}
