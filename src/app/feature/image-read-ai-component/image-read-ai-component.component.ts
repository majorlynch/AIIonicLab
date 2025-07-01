import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';

@Component({
  selector: 'app-image-read-ai-component',
  templateUrl: './image-read-ai-component.component.html',
  styleUrls: ['./image-read-ai-component.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class ImageReadAiComponentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
