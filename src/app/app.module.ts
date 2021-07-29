import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ParcelasComponent } from './parcelas/parcelas.component';
import { ParcelaComponent } from './parcela/parcela.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { ChartsModule } from 'ng2-charts';
import { AreaComponent } from './area/area.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './main/main.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbThemeModule, NbLayoutModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ExportacionComponent } from './exportacion/exportacion.component';

const routes: Routes = [
	{
		path: 'main',
		component: MainComponent,
		children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'usuarios', component: UsuariosComponent },
			{ path: 'export', component: ExportacionComponent },
			{ path: 'parcelas', component: ParcelasComponent },
			{ path: 'notificaciones', component: NotificacionComponent },
			{ path: 'parcela', component: ParcelaComponent },
			{ path: 'area', component: AreaComponent },
			{ path: 'area/:id', component: AreaComponent }
		]
	}, {
		path: '',
		component: LoginComponent
	}, {
		path: 'login',
		component: LoginComponent
	},









];

@NgModule({
	declarations: [
		AppComponent,
		MainNavComponent,
		DashboardComponent,
		UsuariosComponent,
		ParcelasComponent,
		ParcelaComponent,
		AreaComponent,
		LoginComponent,
		MainComponent,
		NotificacionComponent,
		ExportacionComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatBadgeModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		RouterModule.forRoot(routes),
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		HttpClientModule,
		GoogleMapsModule,
		ChartsModule,
		MatExpansionModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		NgbModule,
//		NbThemeModule.forRoot({ name: 'default' }),
//    NbThemeModule.forRoot({ name: 'cosmic' }),
		NbLayoutModule,
		NbEvaIconsModule,
		AppRoutingModule,
		NbChatModule,
		NbThemeModule.forRoot({ name: 'corporate' })
// NgbModule.forRoot()
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {


}
