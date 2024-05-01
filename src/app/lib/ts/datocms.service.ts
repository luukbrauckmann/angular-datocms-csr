import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DocumentNode, print } from 'graphql';

@Injectable({
  providedIn: 'root',
})
export class DatocmsService {
  http = inject(HttpClient);

  constructor() {}

  request<T>(query: DocumentNode, variables: any = {}) {
    return this.http.post<T>(
      environment.apiUrl,
      JSON.stringify({
        query: print(query),
        variables,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${environment.apiToken}`,
        },
      }
    );
  }
}
