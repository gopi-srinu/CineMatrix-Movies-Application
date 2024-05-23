import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonIcon, IonCard } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { Movie, selectedMovieVideos } from 'src/app/movie';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comedy',
    templateUrl: './comedy.page.html',
    styleUrls: ['./comedy.page.scss'],
    standalone: true,
    imports: [IonCard, IonIcon, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, SidenavComponent]
})
export class ComedyPage implements OnInit {

  constructor(private service: MovieService, private router: Router) { }
  ngOnInit() {
    this.service.getComedyMovies().subscribe((comedyMovies: any) => {
      this.comedyMovies.set(comedyMovies.results);
    })
  }
  comedyMovies = signal<Movie[]>([]);
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
