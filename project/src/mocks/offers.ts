import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location1',
    desc: '',
    premium: 'premium',
    isFavorite: false,
    photosSrc: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg' ],
    roomType: 'Rooms',
    rating: 4.5,
    numberOfRooms: 3,
    numberOfGuests: 4,
    price: 120,
    roomService: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: {
      userName: 'Angelina',
      userStatus: 'Pro',
      userPhotoSrc: 'img/avatar-angelina.jpg',
      offerDesc: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    },
    reviews: [
      {
        userName: 'Max',
        userRating: 5,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        reviewDate: 'April 2019',
      },
      {
        userName: 'Max',
        userRating: 5,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        reviewDate: 'April 2019',
      },
    ],
    mapCoordinates: '',
    otherPlacesId: [2, 3, 4],
  },
  {
    id: 2,
    title: 'Beautiful & luxurious studio at great location2',
    desc: '',
    premium: 'premium',
    isFavorite: false,
    photosSrc: [ 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg', 'img/room.jpg' ],
    roomType: 'Apartment',
    rating: 4,
    numberOfRooms: 1,
    numberOfGuests: 2,
    price: 220,
    roomService: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: {
      userName: 'Angelina',
      userStatus: 'Pro',
      userPhotoSrc: 'img/avatar-angelina.jpg',
      offerDesc: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    },
    reviews: [
      {
        userName: 'Max',
        userRating: 5,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        reviewDate: 'April 2019',
      },
      {
        userName: 'Anton',
        userRating: 5,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        reviewDate: 'April 2019',
      },
    ],
    mapCoordinates: '',
    otherPlacesId: [2, 3, 4],
  },
  {
    id: 3,
    title: 'Beautiful & luxurious studio at great location3',
    desc: '',
    premium: 'premium',
    isFavorite: false,
    photosSrc: [ 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-01.jpg' ],
    roomType: 'houses',
    rating: 3,
    numberOfRooms: 2,
    numberOfGuests: 3,
    price: 330,
    roomService: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: {
      userName: 'Antony',
      userStatus: 'Pro',
      userPhotoSrc: 'img/avatar-angelina.jpg',
      offerDesc: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    },
    reviews: [
      {
        userName: 'Ilya',
        userRating: 5,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        reviewDate: 'April 2019',
      },
      {
        userName: 'Anton',
        userRating: 5,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        reviewDate: 'April 2019',
      },
    ],
    mapCoordinates: '',
    otherPlacesId: [2, 3, 4],
  },
  {
    id: 4,
    title: 'Beautiful & luxurious studio at great location4',
    desc: '',
    premium: 'premium',
    isFavorite: true,
    photosSrc: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg' ],
    roomType: 'Apartment',
    rating: 2,
    numberOfRooms: 5,
    numberOfGuests: 8,
    price: 1130,
    roomService: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: {
      userName: 'Angelina',
      userStatus: 'Pro',
      userPhotoSrc: 'img/avatar-angelina.jpg',
      offerDesc: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    },
    reviews: [
      {
        userName: 'Max',
        userRating: 5,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        reviewDate: 'April 2019',
      },
      {
        userName: 'Anton',
        userRating: 5,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        reviewDate: 'April 2019',
      },
    ],
    mapCoordinates: '',
    otherPlacesId: [2, 3, 4],
  },
];