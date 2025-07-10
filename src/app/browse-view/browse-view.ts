import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Movie } from '../types/movie';

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
  this.http.get<Movie[]>("http://localhost:8080/api/movies")
    .subscribe(movie => 
      this.movies.set(movie)
    );
}

}
