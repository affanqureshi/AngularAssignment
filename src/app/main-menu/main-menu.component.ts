import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
     selector: 'app-main-menu',
     templateUrl: './main-menu.component.html',
     styleUrls: ['./main-menu.component.css']
   })
export class MainMenuComponent implements OnInit {
  isEmployeeMenuOpen: boolean = false;
  lastOpenedUrl: string = '';
  queryParams: any = {};
  activeMenuItem: string = ''; // Track the active menu item

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
      this.router.events
          .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
          .subscribe((res: NavigationEnd) => {     
               //To get URL information use Router service (like this.router.events.pipe()) and use filter 
//to filter out only NavigationEnds to get last open URL and its parameters.
     
          this.lastOpenedUrl = res.url;
          this.queryParams = this.activatedRoute.snapshot.queryParams;
          this.highlightActiveMenu(res.url);
      });
  }



  toggleEmployeeMenu() {
    this.isEmployeeMenuOpen = !this.isEmployeeMenuOpen;
  }

  private highlightActiveMenu(url:any) {
    if (url.includes('/employee')) {
      this.activeMenuItem = 'employee';
    } else if (url.includes('/staff')) {
      this.activeMenuItem = 'staff';
    } else {
      this.activeMenuItem = '';
    }
  }
}
