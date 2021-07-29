export interface Parcela {
	id_parcela: string;
	nombre: string;
	descripcion: string;
	imagen: string;

	x1: string;
	x2: string;
	y1: Date;
	y2: Date;
}

export interface ParcelaOrds {
	count: number;
	hasMore: boolean;
	items: Parcela[];
	limit: number;
	offset: number;
}
