import { ViewChild ,AfterViewInit } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChatShowcaseService } from '../service/chat-showcase-service.service';
import { NotificacionService} from '../service/notificacion.service'
import { NotificacionOrds} from '../model/notificacion.model'

import { MensajeService} from '../service/mensaje.service'
import { MensajeOrds, Mensaje} from '../model/mensaje.model'
import { Subscription } from 'rxjs';



@Component({
	selector: 'app-notificacion',
	templateUrl: './notificacion.component.html',
	styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {
	constructor(protected chatShowcaseService: ChatShowcaseService,public notificacionRest: NotificacionService, public mensajeRest: MensajeService) {}
	
	@ViewChild('chat') content: ElementRef;
	@ViewChild('notificacion') notificacion: ElementRef;
	
	@ViewChildren('notificaciones') notificacionesQ:  QueryList<any>;
	@ViewChildren('mensajes') mensajess:  QueryList<any>;
	 
	notificacionesOrds: NotificacionOrds;
	mensajeOrds: MensajeOrds;
	
	notificaciones = []; 
	mensajes = []; 
	
	subscription: Subscription;
	statusText: string;
	   data: any;
    interval: any;
	getUsuarioNotificaciones(): void {
		this.notificacionRest.getUsuarioNotificaciones(parseInt(window.localStorage.getItem("id_usuario"))).subscribe((resp: any) => {
			this.notificacionesOrds = resp;
			this.notificaciones = this.notificacionesOrds.items;
		});

	}
	getUsuarioMensajes(): void {
		this.mensajeRest.getUsuarioMensajes(parseInt(window.localStorage.getItem("id_usuario"))).subscribe((resp: any) => {
			this.mensajeOrds = resp;
			this.mensajes = this.mensajeOrds.items; 
		});

	}
	
	ngOnInit(): void {
 	
		        if(this.interval){
            clearInterval(this.interval);
        }
        this.interval = setInterval(() => {
			this.getUsuarioNotificaciones();
			this.getUsuarioMensajes();
        }, 5000);

		this.getUsuarioNotificaciones();
		this.getUsuarioMensajes();
	}


	 
	ngAfterViewInit() { 
		this.scrollToBottomChat();
		this.scrollToBottomNotificacion();
		this.mensajess.changes.subscribe(this.scrollToBottomChat);
		this.notificacionesQ.changes.subscribe(this.scrollToBottomNotificacion);
		
	}
 

	sendMessage(event: any) {
				this.mensajeRest.postUsuarioMensajes(parseInt(window.localStorage.getItem("id_usuario")),1,event.message).subscribe((resp: any) => {});
 
	}

	scrollToBottomChat = () => {
		console.log("Change!")
		try {
			this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
		} catch (err) { }
	}
	
	scrollToBottomNotificacion = () => {
		console.log("Change!")
		try {
			this.notificacion.nativeElement.scrollTop = this.notificacion.nativeElement.scrollHeight;
		} catch (err) { }
	}
}


