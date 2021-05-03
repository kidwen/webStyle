import { Component } from '@angular/core';
import { MatButtonProperty } from '@kidwen/layout';

@Component({
    selector: 'style-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title: string = 'style-app';

    public links: Array<MatButtonProperty> = [{
        routerLink: '/demos',
        text: 'Demos',
    }, {
        routerLink: '/404',
        text: '404',
    }];

    public openSideMenu: boolean = false;

    public hideSideMenu(): void {
        this.openSideMenu = false;
    }
}
