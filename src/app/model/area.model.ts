export interface Area  {
	id_area: string;
	nombre: string; 
	cols_c: string;
	rows_c: string;
	color: string;
	button_text: string
 
}

export interface AreaOrds {
	count: number;
	hasMore: boolean;
	items: Area[];
	limit: number;
	offset: number;
}
