import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-playlist-dialog',
  standalone: true,
  imports: [],
  templateUrl: './playlist-dialog.html',
  styleUrl: './playlist-dialog.css',
})
export class PlaylistDialogComponent {
  dialogRef = inject(MatDialogRef<PlaylistDialogComponent>);

  playlists = [
    { id: 1, name: 'Favorites' },
    { id: 2, name: 'Watch Later' },
    // TODO: fetch from API
  ];

  selectPlaylist(playlistId: number) {
    this.dialogRef.close(playlistId);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}