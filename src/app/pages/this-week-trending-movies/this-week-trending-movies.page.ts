import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { MovieService } from 'src/app/service/movie.service';
import { Movie, selectedMovieDetails, selectedMovieVideos } from 'src/app/movie';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-this-week-trending-movies',
    templateUrl: './this-week-trending-movies.page.html',
    styleUrls: ['./this-week-trending-movies.page.scss'],
    standalone: true,
    imports: [IonIcon, IonCardSubtitle, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent, FooterComponent]
})
export class ThisWeekTrendingMoviesPage implements OnInit {
  constructor(private service: MovieService, private router: Router) { }
  ngOnInit() {
    this.service.getWeekTrendingMovies().subscribe((weekTrendingMovies: any) => {
      this.weekTrendingMovies.set(weekTrendingMovies.results);
    })
  }
  weekTrendingMovies = signal<Movie[]>([]);
  getSelectedMovieDetails(id: number) {
    this.router.navigateByUrl('movie/id');
    console.log(id);
    this.service.selectedMovieId = id;
    this.service.getSelectedMovieVideos(id).subscribe((selectedMovieClips: selectedMovieVideos) => {
      console.log(selectedMovieClips.results);
    })
    this.service.getSelectedMovieDetails(id).subscribe((selectedMovieDetails: any) => {
      console.log(selectedMovieDetails);
    })
  }
}
