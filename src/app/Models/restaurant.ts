import {Plat} from './plat';

export class Restaurant {
    id: number;
    nom: string;
    description: string;
    plats : Plat[];
    longitude: number;
    lattitude: number;
}