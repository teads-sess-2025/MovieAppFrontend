import { HttpClient } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { Movie } from '../types/movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-view',
  imports: [FormsModule],
  templateUrl: './search-view.html',
  styleUrl: './search-view.css',
  standalone: true,
})
export class SearchView {
  http = inject(HttpClient);
  movies = signal<Movie[]>([]);
  searchTerm = signal('');

  searchMovies() {
    const name = this.searchTerm();
    if (!name.trim()) return;

    this.http
      .get<Movie[]>(`http://localhost:8080/api/movies/n/${name}`)
      .subscribe({
        next: (results) => this.movies.set(results),
        error: (err) => {
          console.error('Search failed', err);
          this.movies.set([]);
        },
      });
  }
}
