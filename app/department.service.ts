import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Department } from './department';

@Injectable()
export class DepartmentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private departmentsUrl = 'app/departments';  // URL to web api

  constructor(private http: Http) { }

  getDepartments(): Promise<Department[]> {
    return this.http.get(this.departmentsUrl)
               .toPromise()
               .then(response => response.json().data as Department[])
               .catch(this.handleError);
  }

  getDepartment(id: number): Promise<Department> {
    return this.getDepartments()
               .then(departments => departments.find(department => department.id === id));
  }

  delete(id: number): Promise<void> {
    const url = `${this.departmentsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Department> {
    return this.http
      .post(this.departmentsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
