import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Movie, selectedMovieDetails, selectedMovieVideos } from 'src/app/movie';
import { MovieService } from 'src/app/service/movie.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
    selector: 'app-popular',
    templateUrl: './popular.page.html',
    styleUrls: ['./popular.page.scss'],
    standalone: true,
    imports: [IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, SidenavComponent, FooterComponent]
})
export class PopularPage implements OnInit {
  constructor(private service:MovieService, private router: Router) { }
  ngOnInit() {
    this.service.getPopularMovies().subscribe((popularMovies: any) => {
      this.popularMovies.set(popularMovies.results);
    })
  }
  popularMovies = signal<Movie[]>([]);
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
