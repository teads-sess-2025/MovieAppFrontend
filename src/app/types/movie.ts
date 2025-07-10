export type Movie = {
    id: number,
    adult: boolean,
    budget: number,
    genres: [{id: number, name: string}],
    original_language: string,
    origin_country: string[],
    original_title: string,
    title: string,
    poster_path: string,
    production_companies: [{id: number, name: string, logo_path: string}]
    backdrop_path: string,
    revenue: number,
    tagline: string,
    status: string,
    overview: string,
    release_date: string,
    vote_average: number,
    vote_count: number
}
