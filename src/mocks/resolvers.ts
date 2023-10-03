import {ResponseResolver, RestContext, RestRequest} from 'msw';
import {ExerciseResponse} from '../types/exercise';



export const exerciseResolver = (
  req: ,
  res,
  ctx,
): ResponseResolver<RestRequest, RestContext, ExerciseResponse> => {};
