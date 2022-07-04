import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ShellComponent } from './components/shell/shell.component';
import { HeaderComponent } from './components/header/header.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { AuthComponent } from './components/auth/auth.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

@NgModule({
  declarations: [HeaderComponent, ShellComponent, NavMainComponent, AuthComponent, NotAuthorizedComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [ShellComponent, NotAuthorizedComponent],
})
export class CoreModule {}
