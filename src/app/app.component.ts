import {Component, Renderer2, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  beginDate = 'now-1d';
  endDate = 'now';

  constructor(public viewContainerRef: ViewContainerRef, public renderer: Renderer2) {
  }
}
