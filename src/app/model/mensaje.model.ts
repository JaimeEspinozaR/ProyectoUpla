export interface Mensaje  {
	id_mensaje: string;
	usuario: string;
	parcela: string;
	mensaje: string;
	id_usuario: string; 
	estado: string;
	fecha_creacion: string
}

export interface MensajeOrds {
	count: number;
	hasMore: boolean;
	items: Mensaje[];
	limit: number;
	offset: number;
}
