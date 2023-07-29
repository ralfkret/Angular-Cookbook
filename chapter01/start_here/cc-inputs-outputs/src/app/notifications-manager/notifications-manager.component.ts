import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  @Output() countChanged = new EventEmitter<number>();
  _count: number = 0;

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
    this.countChanged.emit(this._count);
    console.log("emmitted");
    
  }
  constructor() { }

  ngOnInit(): void {
  }

  addNotification() {
    this.count++;
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
  }

  resetCount() {
    this.count = 0;
  }

}
