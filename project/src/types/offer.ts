type Host = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string,
  // userPhotoSrc: string,
  // offerDesc: string
}

// type Review = {
//   userName: string,
//   userRating: number,
//   review: string,
//   reviewDate: string
// }

type location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type City = {
  name: string,
  location: location,
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
  host: Host,
  description: string,
  location: location,
  id: number,
}
