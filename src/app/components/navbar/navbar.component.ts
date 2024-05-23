import { Component, OnInit } from '@angular/core';
import { IonButtons, IonTitle, IonToolbar, IonHeader , IonMenuButton , IonButton, IonContent, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton , IonButton, IonButtons]
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
