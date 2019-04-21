import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TargetCompany } from 'projects/core/src/lib/interfaces/target-company';

@Injectable()
export class TargetCompanyService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getAllTargetCompanies(): Observable<TargetCompany[]> {
    return this.httpClient.get(this.baseUrl + 'TargetCompany').pipe(map(response => {
      return response as TargetCompany[];
    }));
  }

  getTargetCompanyById(id: number): Observable<TargetCompany> {
    return this.httpClient.get(this.baseUrl + 'TargetCompany/' + id).pipe(map(response => {
      return response as TargetCompany;
    }));
  }

  updateTargetCompany(targetCompany: TargetCompany): Observable<Boolean> {
    return this.httpClient.put(this.baseUrl + 'TargetCompany/' + targetCompany.id, targetCompany, { observe: 'response' })
    .pipe(map(response => {
      return response.status === 204;
    }));
  }

  createTargetCompany(targetCompany: TargetCompany): Observable<Boolean> {
    return this.httpClient.post(this.baseUrl + 'TargetCompany', targetCompany, { observe: 'response' })
    .pipe(map(response => {
      return response.status === 200;
    }));
  }

  deleteTargetCompanyByIds(ids: number[]): Observable<Boolean> {
    const pairs = ids.map(function (value) { return 'id=' + encodeURIComponent(value.toString()); });
    const query_string = pairs.join('&');
    return this.httpClient.delete(this.baseUrl + 'TargetCompany?' + query_string, { observe: 'response' })
    .pipe(map(response => {
      return response.status === 200;
    }));
  }
}
