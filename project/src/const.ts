export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/',
}

export const ratingCalculation = function(userRating: string | number) {
  return `${Number(userRating)*20}%`;
};

