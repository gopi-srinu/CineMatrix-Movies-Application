import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardSubtitle, IonIcon, IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Movie, selectedMovieVideos } from 'src/app/movie';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crime',
    templateUrl: './crime.page.html',
    styleUrls: ['./crime.page.scss'],
    standalone: true,
    imports: [IonCardTitle, IonCardHeader, IonCard, IonIcon, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent]
})
export class CrimePage implements OnInit {
  constructor(private service: MovieService, private router:Router) {}
  ngOnInit() {
    this.service.getCrimeMovies().subscribe((crimeMovies: any) => {
      this.crimeMovies.set(crimeMovies.results);
    })
  }
  crimeMovies = signal<Movie[]>([]);
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
