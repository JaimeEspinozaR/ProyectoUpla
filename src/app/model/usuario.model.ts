export interface Usuario  {
id_usuario: string;
tipo: string;
rut: string;
nombre: string;
ape_paterno: string;
ape_materno: string;
fecha_nacimiento: Date;
fecha_creacion: Date;
fecha_actualizacion: Date;
correo: string;
estado: string;
}

export interface UsuarioOrds {
count: number;
hasMore: boolean;
items: Usuario[];
limit: number;
offset: number;
}
