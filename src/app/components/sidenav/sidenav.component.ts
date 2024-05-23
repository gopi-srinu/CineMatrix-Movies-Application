import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonToolbar, IonHeader, IonTitle, IonContent ,IonMenu, IonButtons , IonMenuButton, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [IonIcon, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonToolbar, IonTitle, IonContent, IonHeader, IonMenu , IonMenuButton]
})
export class SidenavComponent  implements OnInit {
  constructor(private router: Router) { }
  menuType: string = 'overlay';
  ngOnInit() {}
  navigateToHomePage(){
    this.router.navigateByUrl('home');
  }
}
