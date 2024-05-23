import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCardContent, IonIcon, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MovieService } from 'src/app/service/movie.service';
import { Series, selectedMovieVideos } from 'src/app/movie';
import { Router } from '@angular/router';

@Component({
    selector: 'app-animated-series',
    templateUrl: './animated-series.page.html',
    styleUrls: ['./animated-series.page.scss'],
    standalone: true,
    imports: [IonCard, IonCardHeader, IonCardTitle, IonIcon, IonCardContent, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent]
})
export class AnimatedSeriesPage implements OnInit {
  constructor(private service: MovieService, private router: Router) { }
  ngOnInit() {
    this.service.getAnimatedSeries().subscribe((animatedSeries: any) => {
      this.animatedSeries.set(animatedSeries.results);
    })
  }
  animatedSeries = signal<Series[]>([]);
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
