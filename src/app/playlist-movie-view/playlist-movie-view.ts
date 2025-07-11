import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Playlist } from '../types/playlist';
import { Movie } from '../types/movie';
import { BACKEND_BASE_URL } from '../app.config';

@Component({
  selector: 'app-playlist-movie-view',
  imports: [],
  templateUrl: './playlist-movie-view.html',
  styleUrl: './playlist-movie-view.css'
})
  export class PlaylistMovieView implements OnInit {
  http = inject(HttpClient);
  @Input() id!: number;

  playlist = signal<Playlist | null>(null);
  movies = signal<Movie[]>([]);

  ngOnInit() {
    this.http.get<Playlist>(`${BACKEND_BASE_URL}/api/playlists/${this.id}`).subscribe({
      next: (p) => this.playlist.set(p),
    });

    this.http.get<Movie[]>(`${BACKEND_BASE_URL}/api/playlists/${this.id}/movies`).subscribe({
      next: (m) => this.movies.set(m),
    });
  }
}
