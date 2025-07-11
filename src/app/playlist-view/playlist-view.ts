import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BACKEND_BASE_URL } from '../app.config';

type Playlist = {
  id: number;
  name: string;
  description: string;
  user_id: number;
};

@Component({
  selector: 'app-playlist-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './playlist-view.html',
  styleUrl: './playlist-view.css'
})
export class PlaylistView implements OnInit {
opendialog() {
throw new Error('Method not implemented.');
}
  http = inject(HttpClient);
  playlists = signal<Playlist[]>([]);
  showDialog = signal(false);
  newPlaylist = {
    name: '',
    description: ''
  };

  ngOnInit() {
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.http.get<Playlist[]>(`${BACKEND_BASE_URL}/api/playlists`)
      .subscribe({
        next: data => this.playlists.set(data),
        error: err => console.error('Failed to fetch playlists:', err)
      });
  }

  openDialog() {
    this.showDialog.set(true);
  }

  closeDialog() {
    this.showDialog.set(false);
    this.newPlaylist = { name: '', description: '' };
  }

  createPlaylist() {
    const payload = {
      ...this.newPlaylist,
      user_id: 1 // assuming user is always ID 1
    };

    this.http.post<Playlist>(`${BACKEND_BASE_URL}/api/playlists`, payload)
      .subscribe({
        next: () => {
          this.loadPlaylists();
          this.closeDialog();
        },
        error: err => console.error('Failed to create playlist:', err)
      });
  }
}

