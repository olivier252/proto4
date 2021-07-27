import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RayonService } from '../services/rayon.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  controlNavBar = [Breakpoints.TabletPortrait, Breakpoints.Handset];
  itemsMenu: any[];
  isText = true;
  isMobilePortrait = false;
  // isLandscape = false;

  sizeBarText: string = "200px";
  // tailleBarIcon: string = "72px"
  sizeBar: string = this.sizeBarText;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private rayonService: RayonService) {
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobilePortrait = this.breakpointObserver.isMatched(this.controlNavBar);
      }
    });
  }

  ngOnInit() {
    this.itemsMenu = this.rayonService.itemsMenu;
  }

  
  events: string[] = [];
  opened: boolean;



  
}
