/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Octagon AI API
 * API for Octagon AI's backend services.
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import type {
  VerifyModel
} from '../../model'
import { customInstance } from '../../../services/custom-axios-instance';
import type { ErrorType, BodyType } from '../../../services/custom-axios-instance';



export const verifyCreate = (
    id: number,
    verifyModel: BodyType<VerifyModel>,
 ) => {
      
      
      return customInstance<VerifyModel>(
      {url: `/verify/${id}`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: verifyModel
    },
      );
    }
  


export const getVerifyCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof verifyCreate>>, TError,{id: number;data: BodyType<VerifyModel>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof verifyCreate>>, TError,{id: number;data: BodyType<VerifyModel>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof verifyCreate>>, {id: number;data: BodyType<VerifyModel>}> = (props) => {
          const {id,data} = props ?? {};

          return  verifyCreate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type VerifyCreateMutationResult = NonNullable<Awaited<ReturnType<typeof verifyCreate>>>
    export type VerifyCreateMutationBody = BodyType<VerifyModel>
    export type VerifyCreateMutationError = ErrorType<unknown>

    export const useVerifyCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof verifyCreate>>, TError,{id: number;data: BodyType<VerifyModel>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof verifyCreate>>,
        TError,
        {id: number;data: BodyType<VerifyModel>},
        TContext
      > => {

      const mutationOptions = getVerifyCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    