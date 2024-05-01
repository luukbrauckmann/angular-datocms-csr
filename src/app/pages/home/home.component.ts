import { Component, inject } from '@angular/core';
import { DatocmsService } from '../../lib/ts/datocms.service';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private datocms = inject(DatocmsService);
  private query = gql`
    query Home {
      page: home {
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
