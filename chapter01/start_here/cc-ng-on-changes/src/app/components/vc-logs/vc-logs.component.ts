import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnChanges {
  @Input() vName;
  logs: string[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    const chng = changes.vName;
    if (chng) {
      if (chng.firstChange){
        this.logs.push(`First version is ${chng.currentValue}`)
      } else {
        this.logs.push(`Added version ${chng.currentValue} (from ${chng.previousValue})`)
      }
    }
  }


}
