/* eslint-disable @typescript-eslint/naming-convention */

export interface IFilmesAPI{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  release_date?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  genre_ids?: number[];
  id?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_title?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_language?: string;
  title?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  backdrop_path?: string;
  popularith?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vote_count?: number;
  video?: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vote_average?: number;
}
export interface IListaFilmes{
  page: number;
  results: IFilmesAPI[];
  total_results: number;
  total_pages: number;

}
