import { Component, OnInit, Sanitizer, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { MovieService } from 'src/app/service/movie.service';
import { movieImages, selectedMovieDetails, selectedMovieVideos } from 'src/app/movie';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FooterComponent } from "../../components/footer/footer.component";
import { YoutubePlayerComponent } from "../../components/youtube-player/youtube-player.component";

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.page.html',
  styleUrls: ['./selected-movie.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, SidenavComponent, FooterComponent, YoutubePlayerComponent]
})
export class SelectedMoviePage implements OnInit {
  constructor(private service: MovieService, private sanitizer: DomSanitizer) { }
  movieId!: number;
  loading: boolean = false;
  genres: Array<string> = [];
  selectedMovievideos = signal<selectedMovieVideos[]>([]);
  selectedMovieImages = signal<movieImages>({
    backdrops: [
      {
        aspect_ratio: 0,
        height: 0,
        iso_639_1: null,
        file_path: '',
        vote_average: 0,
        vote_count: 0,
        width: 0,
      }
    ]
  });
  selectedMovieClips = signal<selectedMovieVideos>({
    id: 0,
    results: [
      {
        iso_639_1: '',
        iso_3166_1: '',
        name: '',
        key: '',
        site: '',
        size: 0,
        type: '',
        official: true,
        published_at: '',
        id: '',
      },
    ]
  });
  ngOnInit() {
    this.loading = true;
    this.movieId = this.service.selectedMovieId;
    this.service.getVideosLength().subscribe((videoLength: any) => this.selectedMovievideos.set(videoLength))
    setTimeout(() => {
      if (this.movieId !== null) {
        this.getSelectedMovieDetails();
      } else {
        console.log("error");
      }
    }, 2000);
  }
  selectedMovieDetails = signal<selectedMovieDetails>({
    adult: false,
    backdrop_path: '',
    belongs_to_collection: {
      id: 0,
      name: '',
      poster_path: '',
      backdrop_path: ''
    },
    budget: 0,
    genres: [
      {
        id: 0,
        name: ''
      }
    ],
    homepage: '',
    id: 0,
    imdb_id: '',
    origin_country: [
      '',
    ],
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [
      {
        id: 0,
        logo_path: '',
        name: '',
        origin_country: '',
      }
    ],
    production_countries: [
      {
        iso_3166_1: '',
        name: '',
      }
    ],
    release_date: '',
    revenue: '',
    runtime: '',
    spoken_languages: [
      {
        english_name: '',
        iso_639_1: '',
        name: '',
      }
    ],
    status: '',
    tagline: '',
    title: '',
    video: true,
    vote_average: 0,
    vote_count: 0
  });
  getSelectedMovieDetails() {
    this.service.getSelectedMovieDetails(this.movieId).subscribe((selectedMovieInfo: selectedMovieDetails) => {
      this.loading = false;
      this.selectedMovieDetails.set(selectedMovieInfo);
      console.log(this.selectedMovieDetails());
    })
    this.service.getSelectedMovieVideos(this.movieId).subscribe((selectedMovieVideos: selectedMovieVideos) => {
      this.selectedMovieClips.set(selectedMovieVideos);
      console.log(this.movieId);
    })
    this.service.getSelectedMovieImages(this.movieId).subscribe((movieImages: movieImages) => {
      this.selectedMovieImages.set(movieImages);
      console.log(this.selectedMovieImages());
    })
    console.log(this.selectedMovieClips());
  }
}
