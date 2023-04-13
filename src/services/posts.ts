import { Posts } from '../models/Posts';
import { api } from './api';

export async function getPosts(): Promise<Posts> {
  return api
    .get('/')
    .then((res) => res)
    .catch((err) => err);
}
