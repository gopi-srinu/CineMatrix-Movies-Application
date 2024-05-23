import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Series, selectedMovieVideos } from 'src/app/movie';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-mystery-series',
    templateUrl: './mystery-series.page.html',
    styleUrls: ['./mystery-series.page.scss'],
    standalone: true,
    imports: [IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SidenavComponent, NavbarComponent]
})
export class MysterySeriesPage implements OnInit {
  constructor(private service: MovieService, private router: Router) {}
  ngOnInit() {
    this.service.getMysterySeries().subscribe((mysterySeries: any) => {
      this.mysterySeries.set(mysterySeries.results);
    })
  }
  mysterySeries = signal<Series[]>([]);
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
