import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Movie } from '../types/movie';
import { BACKEND_BASE_URL } from '../app.config';

@Component({
  selector: 'app-browse-view',
  imports: [],
  templateUrl: './browse-view.html',
  styleUrl: './browse-view.css'
})
export class BrowseView implements OnInit {

  http = inject(HttpClient);
  movies = signal<Movie[]>([]);

  ngOnInit() {
  this.http.get<Movie[]>(`${BACKEND_BASE_URL}/api/movies`)
    .subscribe(movie => 
      this.movies.set(movie)
    );
}

}
