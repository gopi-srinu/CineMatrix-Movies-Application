import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'popular',
    loadComponent: () => import('./pages/popular/popular.page').then( m => m.PopularPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'top-rated',
    loadComponent: () => import('./pages/top-rated/top-rated.page').then( m => m.TopRatedPage)
  },
  {
    path: 'now-playing',
    loadComponent: () => import('./pages/now-playing/now-playing.page').then( m => m.NowPlayingPage)
  },
  {
    path: 'top-rated-series',
    loadComponent: () => import('./pages/top-rated-series/top-rated-series.page').then( m => m.TopRatedSeriesPage)
  },
  {
    path: 'week-trending-series',
    loadComponent: () => import('./pages/this-week-trending-series/this-week-trending-series.page').then( m => m.ThisWeekTrendingSeriesPage)
  },
  {
    path: 'top-rated-series',
    loadComponent: () => import('./pages/top-rated-series/top-rated-series.page').then( m => m.TopRatedSeriesPage)
  },
  {
    path: 'popular-series',
    loadComponent: () => import('./pages/popular-series/popular-series.page').then( m => m.PopularSeriesPage)
  },
  {
    path: 'week-trending-movies',
    loadComponent: () => import('./pages/this-week-trending-movies/this-week-trending-movies.page').then( m => m.ThisWeekTrendingMoviesPage)
  },
  {
    path: 'recommended',
    loadComponent: () => import('./pages/recommended/recommended.page').then( m => m.RecommendedPage)
  },
  {
    path: 'recommended-series',
    loadComponent: () => import('./pages/recommended-series/recommended-series.page').then( m => m.RecommendedSeriesPage)
  },
  {
    path: 'animated-movies',
    loadComponent: () => import('./pages/animated-movies/animated-movies.page').then( m => m.AnimatedMoviesPage)
  },
  {
    path: 'horror',
    loadComponent: () => import('./pages/horror/horror.page').then( m => m.HorrorPage)
  },
  {
    path: 'racing',
    loadComponent: () => import('./pages/racing/racing.page').then( m => m.RacingPage)
  },
  {
    path: 'upcoming-series',
    loadComponent: () => import('./pages/upcoming-series/upcoming-series.page').then( m => m.UpcomingSeriesPage)
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./pages/selected-movie/selected-movie.page').then( m => m.SelectedMoviePage)
  },
  {
    path: 'categories',
    loadComponent: () => import('./pages/categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'action',
    loadComponent: () => import('./pages/action/action.page').then( m => m.ActionPage)
  },
  {
    path: 'adventure',
    loadComponent: () => import('./pages/adventure/adventure.page').then( m => m.AdventurePage)
  },
  {
    path: 'family',
    loadComponent: () => import('./pages/family/family.page').then( m => m.FamilyPage)
  },
  {
    path: 'mystery',
    loadComponent: () => import('./pages/mystery/mystery.page').then( m => m.MysteryPage)
  },
  {
    path: 'thriller',
    loadComponent: () => import('./pages/thriller/thriller.page').then( m => m.ThrillerPage)
  },
  {
    path: 'comedy',
    loadComponent: () => import('./pages/comedy/comedy.page').then( m => m.ComedyPage)
  },
  {
    path: 'drama',
    loadComponent: () => import('./pages/drama/drama.page').then( m => m.DramaPage)
  },
  {
    path: 'anime',
    loadComponent: () => import('./pages/anime/anime.page').then( m => m.AnimePage)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.page').then( m => m.HistoryPage)
  },
  {
    path: 'war',
    loadComponent: () => import('./pages/war/war.page').then( m => m.WarPage)
  },
  {
    path: 'crime',
    loadComponent: () => import('./pages/crime/crime.page').then( m => m.CrimePage)
  },
  {
    path: 'action-and-adventure-series',
    loadComponent: () => import('./pages/action-and-adventure-series/action-and-adventure-series.page').then( m => m.ActionAndAdventureSeriesPage)
  },
  {
    path: 'animated-series',
    loadComponent: () => import('./pages/animated-series/animated-series.page').then( m => m.AnimatedSeriesPage)
  },
  {
    path: 'comedy-series',
    loadComponent: () => import('./pages/comedy-series/comedy-series.page').then( m => m.ComedySeriesPage)
  },
  {
    path: 'crime-series',
    loadComponent: () => import('./pages/crime-series/crime-series.page').then( m => m.CrimeSeriesPage)
  },
  {
    path: 'documentary-series',
    loadComponent: () => import('./pages/documentary-series/documentary-series.page').then( m => m.DocumentarySeriesPage)
  },
  {
    path: 'drama-series',
    loadComponent: () => import('./pages/drama-series/drama-series.page').then( m => m.DramaSeriesPage)
  },
  {
    path: 'mystery-series',
    loadComponent: () => import('./pages/mystery-series/mystery-series.page').then( m => m.MysterySeriesPage)
  },
  {
    path: 'war-and-political-series',
    loadComponent: () => import('./pages/war-andpolitical-series/war-andpolitical-series.page').then( m => m.WarAndpoliticalSeriesPage)
  },
  {
    path: 'family-series',
    loadComponent: () => import('./pages/family-series/family-series.page').then( m => m.FamilySeriesPage)
  },
  {
    path: 'selected-series',
    loadComponent: () => import('./pages/selected-series/selected-series.page').then( m => m.SelectedSeriesPage)
  },
];
