import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { Series, selectedMovieVideos } from 'src/app/movie';
import { MovieService } from 'src/app/service/movie.service';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-recommended-series',
    templateUrl: './recommended-series.page.html',
    styleUrls: ['./recommended-series.page.scss'],
    standalone: true,
    imports: [IonIcon, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent, FooterComponent]
})
export class RecommendedSeriesPage implements OnInit {
  constructor(private service: MovieService, private router: Router) { }
  ngOnInit() {
    this.service.getRecommendedSeries().subscribe((recommendedSeries: any) => {
      this.recommendedSeries.set(recommendedSeries.results);
    })
  }
  recommendedSeries = signal<Series[]>([]);
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
