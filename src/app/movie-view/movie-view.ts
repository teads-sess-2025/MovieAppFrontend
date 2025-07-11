import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, input, OnInit, signal } from '@angular/core';
import { Movie } from '../types/movie';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistDialogComponent } from '../playlist-dialog/playlist-dialog';
import { BACKEND_BASE_URL } from '../app.config';


@Component({
  selector: 'app-movie-view',
  imports: [],
  templateUrl: './movie-view.html',
  styleUrl: './movie-view.css',
  standalone: true  // <-- Mark component standalone if you're using Angular standalone components
})
export class MovieView implements OnInit {

  @Input() id!: string;  // Use @Input(), NOT input()

  http = inject(HttpClient);
  movie = signal<Movie | null>(null);

  ngOnInit() {
    if (!this.id) {
      console.error('Movie ID input is missing!');
      return;
    }

    this.http.get<Movie>(`${BACKEND_BASE_URL}/api/movies/${this.id}`)
      .subscribe({
        next: (movie) => this.movie.set(movie),
        error: (err) => console.error('Failed to load movie', err)
      });
  }

dialog = inject(MatDialog);  // inject MatDialog

saveMovieToPlaylist() {
  const dialogRef = this.dialog.open(PlaylistDialogComponent);

  dialogRef.afterClosed().subscribe((playlistId: number | null) => {
    if (playlistId) {
      this.http.post(`${BACKEND_BASE_URL}/api/movies/save/${this.id}?i=${playlistId}`, null)
        .subscribe({
          next: () => alert('Movie added to playlist!'),
          error: (err) => alert('Failed to add movie.')
        });
    }
  });
}


}
