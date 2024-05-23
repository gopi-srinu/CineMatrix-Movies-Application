import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MovieService } from 'src/app/service/movie.service';
import { Movie, selectedMovieVideos } from 'src/app/movie';
import { Router } from '@angular/router';

@Component({
    selector: 'app-mystery',
    templateUrl: './mystery.page.html',
    styleUrls: ['./mystery.page.scss'],
    standalone: true,
    imports: [IonIcon, IonCardSubtitle, IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent]
})
export class MysteryPage implements OnInit {
  constructor(private service: MovieService, private router: Router) { }
  ngOnInit() {
    this.service.getMysteryMovies().subscribe((mysteryMovies: any) => {
      this.mysteryMovies.set(mysteryMovies.results);
    })
  }
  mysteryMovies = signal<Movie[]>([]);
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
