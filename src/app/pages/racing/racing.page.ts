import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonIcon } from '@ionic/angular/standalone';
import { MovieService } from 'src/app/service/movie.service';
import { Movie, selectedMovieVideos } from 'src/app/movie';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Router } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-racing',
    templateUrl: './racing.page.html',
    styleUrls: ['./racing.page.scss'],
    standalone: true,
    imports: [IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent, FooterComponent]
})
export class RacingPage implements OnInit {
  racingMovies = signal<Movie[]>([]);
  constructor(private service: MovieService , private router: Router){ }
  ngOnInit() {
    this.service.getRacingMovies().subscribe((racingMovies: any) => {
      this.racingMovies.set(racingMovies.results);
    })
    console.log(this.racingMovies());
  }
  getSelectedMovieDetails(id: number){
    this.router.navigateByUrl('movie/:id');
    console.log(id);
    this.service.selectedMovieId = id;
    this.service.getSelectedMovieVideos(id).subscribe((selectedMovieClips: selectedMovieVideos) => {
      this.service.videosLength.next(selectedMovieClips.results.length);
      console.log(selectedMovieClips.results);
    })
    this.service.getSelectedMovieDetails(id).subscribe((selectedMovieDetails: any) => {
      console.log(selectedMovieDetails);
    })
  }
}
