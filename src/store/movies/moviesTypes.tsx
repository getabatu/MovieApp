export const SET_MOVIE_LOADING = 'SET_MOVIE_LOADING';
export const LOAD_MOVIES_UPCOMING = 'LOAD_MOVIES_UPCOMING';
export const LOAD_MOVIES_TOP_RATED = 'LOAD_MOVIES_TOP_RATED';
export const LOAD_MOVIES_NOW_PLAYING = 'LOAD_MOVIES_NOW_PLAYING';
export const LOAD_MOVIES_POPULAR = 'LOAD_MOVIES_POPULAR';
export const LOAD_MORE_UPCOMING = 'LOAD_MORE_UPCOMING';


export interface initMovieState {
  top_rated: respondData;
  popular: respondData;
  now_playing: respondData;
  upcoming: respondData;
}

export interface loadMoviesUpcoming {
  type: typeof LOAD_MOVIES_UPCOMING;
  payload: {
    upcoming: respondMovieData;
  };
}

export interface loadMoviesTopRated {
  type: typeof LOAD_MOVIES_TOP_RATED;
  payload: {
    top_rated: respondMovieData;
  };
}

export interface loadMoviesNowPlaying {
  type: typeof LOAD_MOVIES_NOW_PLAYING;
  payload: {
    now_playing: respondMovieData;
  };
}

export interface loadMoviesPopular {
  type: typeof LOAD_MOVIES_POPULAR;
  payload: {
    popular: respondMovieData;
  };
}

export interface respondLoadingState {
  type: typeof SET_MOVIE_LOADING;
  payload: (keyof initMovieState)[];
}

export interface isLoadMoreUpcoming {
  type: typeof LOAD_MORE_UPCOMING;
  payload: respondPageData;
}

export interface movieData {
  id: number;
  title: string;
  overview: string;
  vote_average: string;
  poster_path: string;
  release_date: string;
}

export interface respondPageData {
  results: movieData[];
  page: number;
  total_pages: number;
}

export interface respondMovieData {
  movies: movieData[];
  currentPage: null | number;
  totalPages: null | number;
}

export interface respondData extends respondMovieData {
  isLoading: boolean;
}

export type moviesActionTypes =
  | loadMoviesPopular
  | loadMoviesNowPlaying
  | loadMoviesTopRated
  | loadMoviesUpcoming
  | respondLoadingState
  | isLoadMoreUpcoming;
