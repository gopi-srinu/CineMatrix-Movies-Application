export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [
        number
    ],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface Series {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [
        number
    ],
    id: number,
    origin_country: [
        string
    ],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    vote_average: number,
    vote_count: number
}

export interface selectedMovieDetails {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: {
        id: number,
        name: string,
        poster_path: string,
        backdrop_path: string
    },
    budget: number,
    genres: [
        {
            id: number,
            name: string
        },
    ],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: [
        string
    ],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string
        },
    ],
    production_countries: [
        {
            iso_3166_1: string,
            name: string
        }
    ],
    release_date: string,
    revenue: string,
    runtime: string,
    spoken_languages: [
        {
            english_name: string,
            iso_639_1: string,
            name: string
        },
    ],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface selectedSeriesDetails {
    adult: boolean,
    backdrop_path: string,
    created_by: [
        {
            id: number,
            credit_id: string,
            name: string,
            original_name: string,
            gender: number,
            profile_path: string
        },
    ],
    episode_run_time: [],
    first_air_date: string,
    genres: [
        {
            id: number,
            name: string
        },
    ],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: [
        string
    ],
    last_air_date: string,
    last_episode_to_air: {
        id: number,
        overview: string,
        name: string,
        vote_average: number,
        vote_count: number,
        air_date: string,
        episode_number: number,
        episode_type: string,
        runtime: number,
        season_number: number,
        show_id: number,
        still_path: string
    },
    name: string,
    next_episode_to_air: null,
    networks: [
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string
        }
    ],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: [
        string
    ],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string
        },
    ],
    production_countries: [
        {
            iso_3166_1: string,
            name: string
        }
    ],
    seasons: [
        {
            air_date: string,
            episode_count: number,
            id: number,
            name: string,
            overview: string,
            poster_path: string,
            season_number: number,
            vote_average: number

        },
    ],
    spoken_languages: [
        {
            english_name: string,
            iso_639_1: string,
            name: string
        }
    ],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
}

export interface selectedMovieVideos {
    id: number,
    results: [
        {
            iso_639_1: string,
            iso_3166_1: string,
            name: string,
            key: string,
            site: string,
            size: number,
            type: string,
            official: boolean,
            published_at: string,
            id: string
        },
    ]
}

export interface movieImages {
    backdrops: [
        {
            aspect_ratio: number,
            height: number,
            iso_639_1: null,
            file_path: string,
            vote_average: number,
            vote_count: number,
            width: number
        },
    ]
}

export interface selectedSeriesVideos {
    id: number,
    results: [
        {
            iso_639_1: string,
            iso_3166_1: string,
            name: string,
            key: string,
            published_at: string,
            site: string,
            size: number,
            type: string,
            official: boolean,
            id: string
        }
    ]
}

export interface searchedMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [
        number
    ],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}