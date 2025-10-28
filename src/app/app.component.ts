import { Component, OnInit, OnDestroy } from '@angular/core';

import { LifecycleComponent } from "./lifecycle/lifecycle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LifecycleComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  currentDateAndTime: Date = new Date();

  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentDateAndTime = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
