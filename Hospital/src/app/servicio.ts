export interface Servicio {
    "ServiciosEnPromocions":Array<any>,
    "IDServicio": number,
    "NombreServicio": string,
    "Precio": number,
    "Recomendaciones": string
}
    
export interface Promocion {
    "IDPromocion": number,
    "NombrePromocion": string,
    "Detalle": string,
    "FechaExpiracion": string
}

export interface ServiciosEnPromocion {
    "IDPromocion": number,
    "IDServicio": number,
    "PrecioFinal": number,
    "ID": number
}
