import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );
  iconFacebook = "/src/assets/icon/facebook.png";
  iconInstagram = "/src/assets/icon/instagram.png";
  iconTwitter = "/src/assets/icon/twitter.png";

  constructor(private breakpointObserver: BreakpointObserver) {

  }

}
