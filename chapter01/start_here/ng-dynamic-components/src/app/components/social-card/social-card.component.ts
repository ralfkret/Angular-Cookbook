import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnChanges, SimpleChanges, Type } from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';
import { FbCardComponent } from "../fb-card/fb-card.component";
import { TwitterCardComponent } from "../twitter-card/twitter-card.component";

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnChanges {
  @Input() type: SocialCardType;
  @ViewChild("vrf", { read: ViewContainerRef }) vrf: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver) { }

  private static map = new Map<SocialCardType, Type<unknown>>(
    [[SocialCardType.Facebook, FbCardComponent],
    [SocialCardType.Twitter, TwitterCardComponent]]);

  ngOnChanges(changes: SimpleChanges): void {
    const chgType = changes.type;
    if (!chgType || chgType.currentValue === undefined || !this.vrf)
      return;
    console.log(SocialCardType[chgType.currentValue]);
    const componentType = SocialCardComponent.map.get(chgType.currentValue);
    const cf = this.cfr.resolveComponentFactory(componentType);
    this.vrf.clear();
    const component = this.vrf.createComponent(cf);
    console.log(component);

  }

}
