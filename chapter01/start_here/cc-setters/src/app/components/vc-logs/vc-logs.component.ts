import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent {
  private _vName: string;
  logs: string[] = [];

  get vName(): string {
    return this._vName;
  }

  @Input()
  set vName(v: string) {
    if (!v)
      return;
    if (!this._vName) {
      this.logs.push(`initial version is ${v.trim()}`)
    } else {
      this.logs.push(`version changed to ${v.trim()}`)
    }
    this._vName = v;
  }

}
