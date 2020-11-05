import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient,
  ) { }

  addProject( projectData: object ) {
    return this.http.post<any>(
      'https://evamed-rest-api.herokuapp.com/api-projects/projects/',
      projectData
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
