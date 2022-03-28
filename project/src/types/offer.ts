type Host = {
  userName: string,
  userStatus: string,
  userPhotoSrc: string,
  offerDesc: string
}

type Review = {
  userName: string,
  userRating: number,
  review: string,
  reviewDate: string
}

export type Offer = {
  id: number,
  title: string,
  desc: string,
  premium: string,
  isFavorite: boolean,
  photosSrc: string[],
  roomType: string,
  rating: number,
  numberOfRooms: number,
  numberOfGuests: number,
  price: number,
  roomService: string[],
  host: Host,
  reviews: Review[],
  mapCoordinates: string[],
  otherPlacesId: number[]
}

export type City = {
  city: string,
  offers: Offer[],
  offerCount: number,
}
