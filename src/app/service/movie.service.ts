import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie, selectedSeriesDetails, Series, selectedMovieDetails, selectedMovieVideos, movieImages, selectedSeriesVideos, searchedMovie} from '../movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) { }
  selectedMovieId!: number;
  selectedSeriesId!: number;
  private readonly apiKey: string = '0225c9ebc653f052c7b498686d11150e';
  videosLength = new BehaviorSubject<number>(0);
  getVideosLength() {
    return this.videosLength.asObservable();
  }
  getPopularMovies(): Observable<Movie[]> {
    const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(popularMovies);
  }
  getTopRatedMovies(): Observable<Movie[]> {
    const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(topRatedMovies);
  }
  getNowPlayingMovies(): Observable<Movie[]> {
    const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(nowPlayingMovies);
  }
  getUpcomingSeries(): Observable<Series> {
    const upcomingSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&first_air_date_year=2024&include_null_first_air_dates=false&language=en-US&page=1&sort_by=first_air_date.asec`;
    return this.http.get<Series>(upcomingSeries);
  }
  getWeekTrendingSeries(): Observable<Series> {
    const weekTrendingSeries = `https://api.themoviedb.org/3/trending/tv/week?api_key=${this.apiKey}&sort_by_popularity.desc`;
    return this.http.get<Series>(weekTrendingSeries);
  }
  getTopRatedSeries(): Observable<Series> {
    const topRatedSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&sort_by_popularity=desc`;
    return this.http.get<Series>(topRatedSeries);
  }
  getPopularSeries(): Observable<Series> {
    const popularSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`;
    return this.http.get<Series>(popularSeries);
  }
  getWeekTrendingMovies(): Observable<Movie> {
    const weekTrendingMovies = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get<Movie>(weekTrendingMovies);
  }
  getRecommendedMovies(): Observable<Movie> {
    const recommendedMovies = `https://api.themoviedb.org/3/movie/${980489}/recommendations?api_key=${this.apiKey}`;
    return this.http.get<Movie>(recommendedMovies);
  }
  getRecommendedSeries(): Observable<Series> {
    const recommendedSeries = `https://api.themoviedb.org/3/tv/${66732}/recommendations?api_key=${this.apiKey}`;
    return this.http.get<Series>(recommendedSeries);
  }
  getAnimatedMovies(): Observable<Movie> {
    const animatedMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=16`;
    return this.http.get<Movie>(animatedMovies);
  }
  getHorrorMovies(): Observable<Movie> {
    const horrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=27&page=2`;
    return this.http.get<Movie>(horrorMovies);
  }
  getActionMovies(): Observable<Movie> {
    const horrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=28`;
    return this.http.get<Movie>(horrorMovies);
  }
  getAdventureMovies(): Observable<Movie> {
    const adventureMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=12`;
    return this.http.get<Movie>(adventureMovies);
  }
  getDocumentaryList(): Observable<Movie> {
    const documentaryList = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=99`;
    return this.http.get<Movie>(documentaryList);
  }
  getDramaMovies(): Observable<Movie> {
    const dramaMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=18`;
    return this.http.get<Movie>(dramaMovies);
  }
  getHistoryBasedMovies(): Observable<Movie> {
    const historyBasedMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=36`;
    return this.http.get<Movie>(historyBasedMovies);
  }
  getThrillerMovies(): Observable<Movie> {
    const thrillerMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=53`;
    return this.http.get<Movie>(thrillerMovies);
  }
  getWarMovies(): Observable<Movie> {
    const warMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=10752`;
    return this.http.get<Movie>(warMovies);
  }
  getFamilyMovies(): Observable<Movie> {
    const familyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=10751`;
    return this.http.get<Movie>(familyMovies);
  }
  getCrimeMovies(): Observable<Movie> {
    const crimeMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=80`;
    return this.http.get<Movie>(crimeMovies);
  }
  getAnimeMovies(): Observable<Movie> {
    const animeMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=16`;
    return this.http.get<Movie>(animeMovies);
  }
  getComedyMovies(): Observable<Movie> {
    const comedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=35`;
    return this.http.get<Movie>(comedyMovies);
  }
  getMysteryMovies(): Observable<Movie> {
    const mysteryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=9648`;
    return this.http.get<Movie>(mysteryMovies);
  }
  getActionandAdventureSeries(): Observable<Series> {
    const actionandAdventureSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=10759`;
    return this.http.get<Series>(actionandAdventureSeries);
  }
  getAnimatedSeries(): Observable<Series> {
    const animatedSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=16&page=2`;
    return this.http.get<Series>(animatedSeries);
  }
  getComedySeries(): Observable<Series> {
    const comedySeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=35`;
    return this.http.get<Series>(comedySeries);
  }
  getCrimeSeries(): Observable<Series> {
    const crimeSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=80`;
    return this.http.get<Series>(crimeSeries);
  }
  getDocumentarySeries(): Observable<Series> {
    const documentarySeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=99`;
    return this.http.get<Series>(documentarySeries);
  }
  getDramaSeries(): Observable<Series> {
    const dramaSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=18`;
    return this.http.get<Series>(dramaSeries);
  }
  getAnimatedSeriesList(): Observable<Series> {
    const animatedSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=10762`;
    return this.http.get<Series>(animatedSeries);
  }
  getMysterySeries(): Observable<Series> {
    const mysterySeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=9648`;
    return this.http.get<Series>(mysterySeries);
  }
  getWarandPolitics(): Observable<Series> {
    const warAndPolitics = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=10768`;
    return this.http.get<Series>(warAndPolitics);
  }
  getFamilySeries(): Observable<Series> {
    const familySeries = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&with_genres=10751`;
    return this.http.get<Series>(familySeries);
  }
  getRacingMovies(): Observable<Movie> {
    const racingMovies = `https://api.themoviedb.org/3/keyword/${10039}/movies?api_key=${this.apiKey}`;
    return this.http.get<Movie>(racingMovies);
  }
  getSelectedMovieDetails(id: number): Observable<selectedMovieDetails> {
    console.log(id);
    const selectedMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<selectedMovieDetails>(selectedMovieDetails);
  }
  getSelectedSeriesDetails(id: number): Observable<selectedSeriesDetails> {
    const selectedSeriesDetails = `https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}`;
    return this.http.get<selectedSeriesDetails>(selectedSeriesDetails);
  }
  getSelectedMovieVideos(id: number): Observable<selectedMovieVideos> {
    const selectedMovieVideos = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`;
    return this.http.get<selectedMovieVideos>(selectedMovieVideos);
  }
  getSelectedMovieImages(movieId: number): Observable<movieImages> {
    const movieImages = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${this.apiKey}`;
    return this.http.get<movieImages>(movieImages);
  }
  getSelectedSeriesVideos(seriesId: number): Observable<selectedSeriesVideos>{
    const selectedSeriesClips = `https://api.themoviedb.org/3/tv/${seriesId}/videos?api_key=${this.apiKey}`;
    return this.http.get<selectedSeriesVideos>(selectedSeriesClips);
  }
  getSelectedSeriesImages(seriesId: number): Observable<movieImages>{
    const selectedSeriesImages = `https://api.themoviedb.org/3/tv/${seriesId}/images?api_key=${this.apiKey}`;
    return this.http.get<movieImages>(selectedSeriesImages);
  }
  getSearchedMovieDetails(movie: string): Observable<{results: searchedMovie}>{
    const searchedMovie = `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${this.apiKey}`;
    return this.http.get<{results: searchedMovie}>(searchedMovie);
  }
}
