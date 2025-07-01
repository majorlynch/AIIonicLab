import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CoreModule } from './core/core.module';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  providers: [HttpClient],
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, CoreModule],
})
export class AppComponent {
  constructor() {}
}
