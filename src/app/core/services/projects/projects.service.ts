import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient,
  ) { }

  addProject( projectData: object ) {
    return this.http.post<any>(
      environment.api_projects,
      projectData
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
