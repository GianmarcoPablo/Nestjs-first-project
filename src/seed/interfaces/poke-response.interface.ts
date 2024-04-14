export interface PokeResponse {
    count: number;
    next: string;
    previous: string;
    results: Pokemones[]
}

export interface Pokemones {
    name: string;
    url: string;
}