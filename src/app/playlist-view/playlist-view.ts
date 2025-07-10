import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Playlist } from '../types/playlist';

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
  this.http.get<Playlist[]>("http://localhost:8080/api/playlists")
    .subscribe(playlist => 
      this.playlists.set(playlist)
    );
}

}
