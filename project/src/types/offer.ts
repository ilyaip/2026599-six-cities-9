type User = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string,
}

type location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type City = {
  name: string,
  location: location,
}

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User
}

export type Offer = {
  city: City,
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: User,
  description: string,
  location: location,
  id: number,
}
