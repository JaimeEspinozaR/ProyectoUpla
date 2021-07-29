export interface Notificacion  {
	id_notificacion: string;
	usuario: string;
	parcela: string;
	mensaje: string;
	id_usuario: string; 
	estado: string;
}

export interface NotificacionOrds {
	count: number;
	hasMore: boolean;
	items: Notificacion[];
	limit: number;
	offset: number;
}
