export class MovieFilmDto {
  id?: number;
  img: string;
  name: string;
  description: string;
  rating: string;

  actors: string[];
  producers: string[];
  genres: string[];
}
