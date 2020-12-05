export interface Location {
    id: number;
    name: string;
    address: string;
    lat: number;
    lon: number;
}

export class Location {
    id = 0;
    name = '';
    address = '';
    lat = 0;
    lon = 0;
}
