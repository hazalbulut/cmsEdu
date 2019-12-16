import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`);

    public users: Observable<User[]>;
    public isDarkTheme: boolean = false;
    public dir: string = 'ltr';

    constructor(zone: NgZone, private userService: UserService, private router: Router) {

        this.mediaMatcher.addListener(mql =>
            zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
    }

    @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;

    ngOnInit() {
        this.users = this.userService.users;
        this.userService.loadAll();

        this.router.events.subscribe(() => {
            if (this.isScreenSmall()) {
                this.sidenav.close();
            }
        });
    }

    public isScreenSmall() {

        return this.mediaMatcher.matches;
    }
    public toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;

    }
    public toggleDir() {
        this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
        this.sidenav.toggle().then(() => {
            this.sidenav.toggle();
        });

    }
}
