import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCard } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, SidenavComponent]
})
export class CategoriesPage implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  navigateToSelectedPage(route: string){
    this.router.navigateByUrl(route);
  }
}
