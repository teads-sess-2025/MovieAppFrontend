import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Playlist } from '../types/playlist';
import { BACKEND_BASE_URL } from '../app.config';

@Component({
  selector: 'app-playlist-dialog',
  standalone: true,
  imports: [],
  templateUrl: './playlist-dialog.html',
  styleUrl: './playlist-dialog.css',
})
export class PlaylistDialogComponent {
  dialogRef = inject(MatDialogRef<PlaylistDialogComponent>);

  http = inject(HttpClient);
  playlists = signal<Playlist[]>([]);

  ngOnInit() {
    this.http
      .get<Playlist[]>(`${BACKEND_BASE_URL}/api/playlists`)
      .subscribe((playlist) => this.playlists.set(playlist));
  }
  
  selectPlaylist(playlistId: number) {
    this.dialogRef.close(playlistId);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
