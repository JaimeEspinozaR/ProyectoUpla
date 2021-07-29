import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
// import {NotificacionComponent} from '.Not'
//import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
// import { NotificacionComponent } from './notificacion/notificacion.component';
@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

	@ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches),
			shareReplay()
		);

	constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
	}
	openDialog() {
		// const dialogRef = this.dialog.open(NotificacionComponent, { restoreFocus: false });

		// Manually restore focus to the menu trigger since the element that
		// opens the dialog won't be in the DOM any more when the dialog closes.
		// dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
	}
	redirect(pagename: number): void {
    	this.router.navigate(['/main/area']);
    }

	logout(): void {
		window.localStorage.removeItem("ACCESS_TOKEN")
		this.router.navigate(["/login"]);
	}

	menuItems = [
		{ name: 'alarmas y Mensajes', icon: 'notifications', link: 'main/notificaciones' },
		{ name: 'parcelas', icon: 'terrain', link: 'main/parcelas' },
//		{ name: 'usuarios', icon: 'supervised_user_circle', link: 'main/usuarios' },
		{ name: 'configuracion', icon: 'build', link: 'main/sensores' },
//		{ name: 'alarmas y mensajes', icon: 'build', link: 'main/notificaciones' },
		];

}

