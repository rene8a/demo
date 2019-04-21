import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TargetCompanyService } from './services/target-company.service';
import { empty, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TargetCompany } from 'projects/core/src/lib/interfaces/target-company';

@Injectable()
export class TargetCompanyResolver implements Resolve<Observable<TargetCompany>> {
  constructor(private targetCompanyResolver: TargetCompanyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    const targetId = +route.paramMap.get('targetId');
    if (isNaN(targetId)) {
      this.router.navigate(['/target-companies/list']);
      return of(null);
    } else {
      return this.targetCompanyResolver.getTargetCompanyById(targetId).pipe(map(response => {
        if (response) {
          return response;
        } else {
          this.router.navigate(['/target-companies/list']);
          return null;
        }
      }));
    }
  }
}
