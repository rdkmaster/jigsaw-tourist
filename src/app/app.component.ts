import {Component, Renderer2, ViewContainerRef} from '@angular/core';
import {ArrayCollection, TimeGr, TimeService} from '@rdkmaster/jigsaw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  beginDate = 'now-1d';
  endDate = 'now';
  rangeTimeComboValue = new ArrayCollection([
    {label: TimeService.getFormatDate(this.beginDate, TimeGr.date), closable: false},
    {label: TimeService.getFormatDate(this.endDate, TimeGr.date), closable: false}
  ]);

  constructor(public viewContainerRef: ViewContainerRef, public renderer: Renderer2) {
  }

  handleChange() {
    this.rangeTimeComboValue = new ArrayCollection([
      {label: TimeService.getFormatDate(this.beginDate, TimeGr.date), closable: false},
      {label: TimeService.getFormatDate(this.endDate, TimeGr.date), closable: false}
    ]);
  }
}
