import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { DatocmsService } from '../../lib';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  private router = inject(Router);
  private url = this.router.url;
  private slug = this.url.split('/').pop();

  private datocms = inject(DatocmsService);
  private query = gql`
    query Home {
      page(filter: { slug: { eq: "${this.slug}" } }) {
        id
        title
      }
    }
  `;

  public page: any;

  ngOnInit() {
    this.datocms.request<any>(this.query).subscribe({
      next: ({ data }) => {
        this.page = data.page;
      },
    });
  }
}
