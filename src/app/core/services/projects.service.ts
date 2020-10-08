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
      'http://127.0.0.1:8000/api-projects/projects/',
      projectData
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
