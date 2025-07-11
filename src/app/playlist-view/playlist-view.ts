import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Playlist } from '../types/playlist';
import { BACKEND_BASE_URL } from '../app.config';

@Component({
  selector: 'app-playlist-view',
  imports: [],
  templateUrl: './playlist-view.html',
  styleUrl: './playlist-view.css'
})
export class PlaylistView {

    http = inject(HttpClient);
  playlists = signal<Playlist[]>([]);

  ngOnInit() {
  this.http.get<Playlist[]>(`${BACKEND_BASE_URL}/api/playlists`)
    .subscribe(playlist => 
      this.playlists.set(playlist)
    );
}

}
