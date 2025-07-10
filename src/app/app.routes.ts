import { Routes } from '@angular/router';
import { BrowseView } from './browse-view/browse-view';
import { HomeView } from './home-view/home-view';
import { MovieView } from './movie-view/movie-view';
import { PlaylistView } from './playlist-view/playlist-view';

export const routes: Routes = [
    {path: "", component:HomeView},
    {path: "browse", component: BrowseView},
    {path: "movie/:id", component: MovieView},
    {path: "playlists", component: PlaylistView}
];
