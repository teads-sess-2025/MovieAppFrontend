import { Routes } from '@angular/router';
import { BrowseView } from './browse-view/browse-view';
import { HomeView } from './home-view/home-view';
import { MovieView } from './movie-view/movie-view';
import { PlaylistView } from './playlist-view/playlist-view';
import { SearchView } from './search-view/search-view';
import { PlaylistMovieView } from './playlist-movie-view/playlist-movie-view';

export const routes: Routes = [
    {path: "", component:HomeView},
    {path: "browse", component: BrowseView},
    {path: "movie/:id", component: MovieView},
    {path: "playlists", component: PlaylistView},
    {path: "playlists/:id", component: PlaylistMovieView},
    {path: "search", component: SearchView}
];
