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
import { customInstance } from '../../../services/custom-axios-instance';
import type { ErrorType } from '../../../services/custom-axios-instance';



export const deployCreate = (
    id: number,
 ) => {
      
      
      return customInstance<void>(
      {url: `/deploy/${id}`, method: 'POST'
    },
      );
    }
  


export const getDeployCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deployCreate>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deployCreate>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deployCreate>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deployCreate(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeployCreateMutationResult = NonNullable<Awaited<ReturnType<typeof deployCreate>>>
    
    export type DeployCreateMutationError = ErrorType<unknown>

    export const useDeployCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deployCreate>>, TError,{id: number}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof deployCreate>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeployCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    