import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';

@Component({
  selector: 'app-chat-ai-component',
  templateUrl: './chat-ai-component.component.html',
  styleUrls: ['./chat-ai-component.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class ChatAiComponent implements OnInit{

  constructor() { }

  ngOnInit() {}

}

//  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
