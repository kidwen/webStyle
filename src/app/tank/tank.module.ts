import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterModule, MenuNavModule } from '@kidwen/layout';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-fount.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TankRoutingModule } from './tank-routing.module';

@NgModule({
    imports: [
        TankRoutingModule,
        MatListModule,
        FormsModule,
        CommonModule,
        MenuNavModule,
        FooterModule,
        MatSidenavModule,
    ],
    declarations: [
        MainComponent,
        NotFoundComponent,
        WelcomeComponent,
        IntroComponent,
    ],
    exports: [],
})

export class TankModule { }
