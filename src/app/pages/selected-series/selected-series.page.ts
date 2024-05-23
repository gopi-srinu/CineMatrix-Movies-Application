import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { MovieService } from 'src/app/service/movie.service';
import { movieImages, selectedMovieVideos, selectedSeriesDetails, selectedSeriesVideos } from 'src/app/movie';
import { YoutubePlayerComponent } from "../../components/youtube-player/youtube-player.component";

@Component({
  selector: 'app-selected-series',
  templateUrl: './selected-series.page.html',
  styleUrls: ['./selected-series.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, SidenavComponent, YoutubePlayerComponent]
})
export class SelectedSeriesPage implements OnInit {
  constructor(private service: MovieService) { }
  seriesId!: number;
  loading: boolean = false;
  ngOnInit() {
    this.loading = true;
    this.seriesId = this.service.selectedSeriesId;
    setTimeout(() => {
      if (this.seriesId !== null) {
        this.getSelectedSeriesDetails();
      } else {
        console.log("error");
      }
    }, 2000);
  }
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
  selectedSeriesData = signal<selectedSeriesDetails>({
    adult: false,
    backdrop_path: '',
    created_by: [
      {
        id: 0,
        credit_id: '',
        name: '',
        original_name: '',
        gender: 0,
        profile_path: '',
      }
    ],
    episode_run_time: [],
    first_air_date: '',
    genres: [
      {
        id: 0,
        name: '',
      }
    ],
    homepage: '',
    id: 0,
    in_production: false,
    languages: [''],
    last_air_date: '',
    last_episode_to_air: {
      id: 0,
      overview: '',
      name: '',
      vote_average: 0,
      vote_count: 0,
      air_date: '',
      episode_number: 0,
      episode_type: '',
      runtime: 0,
      season_number: 0,
      show_id: 0,
      still_path: ''
    },
    name: '',
    next_episode_to_air: null,
    networks: [
      {
        id: 0,
        logo_path: '',
        name: '',
        origin_country: '',
      }
    ],
    number_of_episodes: 0,
    number_of_seasons: 0,
    origin_country: [''],
    original_language: '',
    original_name: '',
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
    seasons: [
      {
        air_date: '',
        episode_count: 0,
        id: 0,
        name: '',
        overview: '',
        poster_path: '',
        season_number: 0,
        vote_average: 0,
      }
    ],
    spoken_languages: [
      {
        english_name: '',
        iso_639_1: '',
        name: '',
      }
    ],
    status: '',
    tagline: '',
    type: '',
    vote_average: 0,
    vote_count: 0,
  })
  selectedSeriesVideos = signal<selectedMovieVideos>({
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
      }
    ]
  })
  getSelectedSeriesDetails() {
    this.service.getSelectedSeriesDetails(this.seriesId).subscribe((selectedSeriesDetails: selectedSeriesDetails) => {
      this.loading = false;
      this.selectedSeriesData.set(selectedSeriesDetails);
      console.log(this.selectedSeriesData());
    })
    this.service.getSelectedSeriesVideos(this.seriesId).subscribe((selectedSeriesVideos: selectedSeriesVideos) => {
      this.selectedSeriesVideos.set(selectedSeriesVideos);
      console.log(this.seriesId);
    })
    this.service.getSelectedSeriesImages(this.seriesId).subscribe((seriesImages: movieImages) => {
      this.selectedMovieImages.set(seriesImages);
      console.log(this.selectedMovieImages());
    })
    console.log(this.selectedSeriesData());
  }
}
