export interface IMovie {
    [x: string]: any;
          movies: any;
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
    adult: string;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    title: string;
    vote_average: number;
    vote_count: number;
    release_date:number;
    video:string;
}