import Vue from "vue";
import Router from "vue-router";
import SearchView from "@/views/Search";
import SearchResultView from "@/views/Search/SearchResult";
import SearchAlbumView from "@/views/Search/SearchAlbum";
import SearchArtistView from "@/views/Search/SearchArtist";
import SearchPlaylistView from "@/views/Search/SearchPlaylist";
import SearchTrackView from "@/views/Search/SearchTrack";
import DetailView from "@/views/Detail";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            name: "Home",
        },

        {
            path: "/search",
            name: "search",
            component: SearchView,
            children: [
                {
                    path: "result/:query",
                    name: "search-result",
                    component: SearchResultView
                },
                {
                    path: "album/:query",
                    name: "search-album",
                    component: SearchAlbumView
                },
                {
                    path: "artist/:query",
                    name: "search-artist",
                    component: SearchArtistView
                },
                {
                    path: "playlist/:query",
                    name: "search-playlist",
                    component: SearchPlaylistView
                },
                {
                    path: "track/:query",
                    name: "search-track",
                    component: SearchTrackView
                }
            ]
        },
        {
            path: "/artist/:id",
            name: "artist",
            component: DetailView

        },

        {
            path: "/album/:id",
            name: "album",
            component: DetailView
        },
        {
            path: "/playlist/:user_id",
            name: "playlist",
            component: DetailView
        },
        {
            path: "*",
            beforeEnter: function (to, from, next) {
                console.log('GO TO NOT FOUND PAGE');
                next();
            }
        }
    ]
});
export default router;
