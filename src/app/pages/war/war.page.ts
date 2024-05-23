import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonCardSubtitle } from '@ionic/angular/standalone';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MovieService } from 'src/app/service/movie.service';
import { Movie, selectedMovieVideos } from 'src/app/movie';
import { Router } from '@angular/router';

@Component({
    selector: 'app-war',
    templateUrl: './war.page.html',
    styleUrls: ['./war.page.scss'],
    standalone: true,
    imports: [IonCardSubtitle, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent]
})
export class WarPage implements OnInit {
  constructor(private service: MovieService, private router: Router) { }
  ngOnInit() {
    this.service.getWarMovies().subscribe((warMovies: any) => {
      this.warMovies.set(warMovies.results);
    })
  }
  warMovies = signal<Movie[]>([]);
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
