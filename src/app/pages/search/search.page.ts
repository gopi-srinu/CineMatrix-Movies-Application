import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonIcon } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { Movie, searchedMovie } from 'src/app/movie';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
    standalone: true,
    imports: [IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, SidenavComponent]
})
export class SearchPage implements OnInit {
  constructor(private service:MovieService, private router: Router){}
  movieName: string = '';
  searchedMovies = signal<searchedMovie[]>([]);
  ngOnInit(): void {}
  getSearchedMovieDetails(movieName: string){
    if(this.movieName.length == 0){
      alert("Please type a movie name");
    }else{
      this.service.getSearchedMovieDetails(movieName).subscribe((result: any) => {
        this.searchedMovies.set(result.results);
      })
    }
  }
  getSelectedMovieDetails(id: number) {
    this.router.navigateByUrl('movie/id');
    console.log(id);
    this.service.selectedMovieId = id;
    this.service.getSelectedMovieDetails(id).subscribe((selectedMovieDetails: any) => {
      console.log(selectedMovieDetails);
    })
  }
}
