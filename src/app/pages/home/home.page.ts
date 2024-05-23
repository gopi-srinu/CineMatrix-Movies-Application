import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { MovieService } from 'src/app/service/movie.service';
import { Movie, Series, selectedMovieVideos } from 'src/app/movie';
import { FooterComponent } from "../../components/footer/footer.component";
import { ThisReceiver } from '@angular/compiler';
import { ThisWeekTrendingSeriesPage } from '../this-week-trending-series/this-week-trending-series.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, SidenavComponent, FooterComponent]
})
export class HomePage implements OnInit {
  constructor(private service: MovieService, private router: Router) {
    this.service.getActionMovies().subscribe((actionMovies: any) => {
      console.log(actionMovies.results);
    })
    this.service.getAdventureMovies().subscribe((adventureMovies: any) => {
      console.log(adventureMovies.results);
    })
  }
  ngOnInit() {
    this.service.getActionMovies().subscribe((actionMovies: any) => {
      this.actionMovies.set(actionMovies.results);
    })
    this.service.getHorrorMovies().subscribe((horrorMovies: any) => {
      this.horrorMovies.set(horrorMovies.results);
    })
    this.service.getAdventureMovies().subscribe((adventureMovies: any) => {
      this.adventureMovies.set(adventureMovies.results);
    })
    this.service.getDramaMovies().subscribe((dramaMovies: any) => {
      this.dramaMovies.set(dramaMovies.results);
    })
    this.service.getHistoryBasedMovies().subscribe((historyMovies: any) => {
      this.historyMovies.set(historyMovies.results);
    })
    this.service.getThrillerMovies().subscribe((thrillerMovies: any) => {
      this.thrillerMovies.set(thrillerMovies.results);
    })
    this.service.getWarMovies().subscribe((warMovies: any) => {
      this.warMovies.set(warMovies.results);
    })
    this.service.getFamilyMovies().subscribe((familyMovies: any) => {
      this.familyMovies.set(familyMovies.results);
    })
    this.service.getCrimeMovies().subscribe((crimeMovies: any) => {
      this.crimeMovies.set(crimeMovies.results);
    })
    this.service.getAnimeMovies().subscribe((animeMovies: any) => {
      this.animeMovies.set(animeMovies.results);
    })
    this.service.getComedyMovies().subscribe((comedyMovies: any) => {
      this.comedyMovies.set(comedyMovies.results);
    })
    this.service.getMysteryMovies().subscribe((mysteryMovies: any) => {
      this.mysteryMovies.set(mysteryMovies.results);
    })
    this.service.getRacingMovies().subscribe((racingMovies: any) => {
      this.racingMovies.set(racingMovies.results);
    })
    this.service.getActionandAdventureSeries().subscribe((actionAndAdventureSeries: any) => {
      this.actionAndAdventureSeries.set(actionAndAdventureSeries.results);
    })
    this.service.getAnimatedSeries().subscribe((animatedSeries: any) => {
      this.animatedSeries.set(animatedSeries.results);
    })
    this.service.getComedySeries().subscribe((comedySeries: any) => {
      this.comedySeries.set(comedySeries.results);
    })
    this.service.getCrimeSeries().subscribe((crimeSeries: any) => {
      this.crimeSeries.set(crimeSeries.results);
    })
    this.service.getDocumentarySeries().subscribe((documentarySeries: any) => {
      this.documentarySeries.set(documentarySeries.results);
    })
    this.service.getDramaSeries().subscribe((dramaSeries: any) => {
      this.dramaSeries.set(dramaSeries.results);
    })
    this.service.getMysterySeries().subscribe((mysterySeries: any) => {
      this.mysterySeries.set(mysterySeries.results);
    })
    this.service.getWarandPolitics().subscribe((warAndPolitics: any) => {
      this.warAndPolitics.set(warAndPolitics.results);
    })
    this.service.getFamilySeries().subscribe((familySeries: any) => {
      this.familySeries.set(familySeries.results);
    })
  }
  actionMovies = signal<Movie[]>([]);
  horrorMovies = signal<Movie[]>([]);
  adventureMovies = signal<Movie[]>([]);
  racingMovies = signal<Movie[]>([]);
  dramaMovies = signal<Movie[]>([]);
  historyMovies = signal<Movie[]>([]);
  thrillerMovies = signal<Movie[]>([]);
  warMovies = signal<Movie[]>([]);
  familyMovies = signal<Movie[]>([]);
  crimeMovies = signal<Movie[]>([]);
  animeMovies = signal<Movie[]>([]);
  comedyMovies = signal<Movie[]>([]);
  mysteryMovies = signal<Movie[]>([]);
  actionAndAdventureSeries = signal<Series[]>([]);
  animatedSeries = signal<Series[]>([]);
  comedySeries = signal<Series[]>([]);
  crimeSeries = signal<Series[]>([]);
  documentarySeries = signal<Series[]>([]);
  dramaSeries = signal<Series[]>([]);
  mysterySeries = signal<Series[]>([]);
  warAndPolitics = signal<Series[]>([]);
  familySeries = signal<Series[]>([]);

  navigateToSelectedPage(route: string) {
    this.router.navigateByUrl(route);
  }

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
  getSelectedSeriesPage(id: number) {
    this.router.navigateByUrl('selected-series');
    console.log(id);
    this.service.selectedSeriesId = id;
    this.service.getSelectedSeriesVideos(id).subscribe((selectedSeriesClips: selectedMovieVideos) => {
      console.log(selectedSeriesClips.results);
    })
    this.service.getSelectedSeriesDetails(id).subscribe((selectedSeriesDetails: any) => {
      console.log(selectedSeriesDetails);
    })
  }
}
