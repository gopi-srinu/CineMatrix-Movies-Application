import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Movie, selectedMovieDetails, selectedMovieVideos } from 'src/app/movie';
import { MovieService } from 'src/app/service/movie.service';
import { h } from 'ionicons/dist/types/stencil-public-runtime';
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-horror',
    templateUrl: './horror.page.html',
    styleUrls: ['./horror.page.scss'],
    standalone: true,
    imports: [IonIcon, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent, FooterComponent]
})
export class HorrorPage implements OnInit {
  constructor(private service: MovieService, private router: Router){ }
  ngOnInit() {
    this.service.getHorrorMovies().subscribe((horrorMovies: any) => {
      this.horrorMovies.set(horrorMovies.results);
    })
  }
  horrorMovies = signal<Movie[]>([]);
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
