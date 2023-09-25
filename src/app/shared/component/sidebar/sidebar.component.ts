import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  pageTitle: string = 'Responsive App'; // Judul default
  constructor(
      changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
      private router: Router, private route: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Dapatkan judul dari ActivatedRoute saat ini
        const routeSnapshot = this.route.snapshot;
        if (routeSnapshot.data && routeSnapshot.data['title']) {
          this.pageTitle = routeSnapshot.data['title'];
        } else {
          this.pageTitle = 'Responsive App'; // Judul default jika tidak ada data judul
        }
      }
    });
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
}
