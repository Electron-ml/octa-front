/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Octagon AI API
 * API for Octagon AI's backend services.
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  AIModel,
  AimodelsListParams,
  PatchedAIModel
} from '../../model'
import { customInstance } from '../../../services/custom-axios-instance';
import type { ErrorType, BodyType } from '../../../services/custom-axios-instance';

// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir/49579497#49579497
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
T,
>() => T extends Y ? 1 : 2
? A
: B;

type WritableKeys<T> = {
[P in keyof T]-?: IfEquals<
  { [Q in P]: T[P] },
  { -readonly [Q in P]: T[P] },
  P
>;
}[keyof T];

type UnionToIntersection<U> =
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never;
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;

type Writable<T> = Pick<T, WritableKeys<T>>;
type NonReadonly<T> = [T] extends [UnionToIntersection<T>] ? {
  [P in keyof Writable<T>]: T[P] extends object
    ? NonReadonly<NonNullable<T[P]>>
    : T[P];
} : DistributeReadOnlyOverUnions<T>;




export const aimodelsList = (
    params?: AimodelsListParams,
 signal?: AbortSignal
) => {
      
      
      return customInstance<AIModel[]>(
      {url: `/api/aimodels/`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getAimodelsListQueryKey = (params?: AimodelsListParams,) => {
    return [`/api/aimodels/`, ...(params ? [params]: [])] as const;
    }

    
export const getAimodelsListQueryOptions = <TData = Awaited<ReturnType<typeof aimodelsList>>, TError = ErrorType<unknown>>(params?: AimodelsListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aimodelsList>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAimodelsListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aimodelsList>>> = ({ signal }) => aimodelsList(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof aimodelsList>>, TError, TData> & { queryKey: QueryKey }
}

export type AimodelsListQueryResult = NonNullable<Awaited<ReturnType<typeof aimodelsList>>>
export type AimodelsListQueryError = ErrorType<unknown>

export const useAimodelsList = <TData = Awaited<ReturnType<typeof aimodelsList>>, TError = ErrorType<unknown>>(
 params?: AimodelsListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aimodelsList>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAimodelsListQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const aimodelsCreate = (
    aIModel: BodyType<NonReadonly<AIModel>>,
 ) => {
      
      
      return customInstance<AIModel>(
      {url: `/api/aimodels/`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: aIModel
    },
      );
    }
  


export const getAimodelsCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aimodelsCreate>>, TError,{data: BodyType<NonReadonly<AIModel>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof aimodelsCreate>>, TError,{data: BodyType<NonReadonly<AIModel>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof aimodelsCreate>>, {data: BodyType<NonReadonly<AIModel>>}> = (props) => {
          const {data} = props ?? {};

          return  aimodelsCreate(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AimodelsCreateMutationResult = NonNullable<Awaited<ReturnType<typeof aimodelsCreate>>>
    export type AimodelsCreateMutationBody = BodyType<NonReadonly<AIModel>>
    export type AimodelsCreateMutationError = ErrorType<unknown>

    export const useAimodelsCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aimodelsCreate>>, TError,{data: BodyType<NonReadonly<AIModel>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof aimodelsCreate>>,
        TError,
        {data: BodyType<NonReadonly<AIModel>>},
        TContext
      > => {

      const mutationOptions = getAimodelsCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const aimodelsRetrieve = (
    id: number,
 signal?: AbortSignal
) => {
      
      
      return customInstance<AIModel>(
      {url: `/api/aimodels/${id}/`, method: 'GET', signal
    },
      );
    }
  

export const getAimodelsRetrieveQueryKey = (id: number,) => {
    return [`/api/aimodels/${id}/`] as const;
    }

    
export const getAimodelsRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof aimodelsRetrieve>>, TError = ErrorType<unknown>>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aimodelsRetrieve>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAimodelsRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aimodelsRetrieve>>> = ({ signal }) => aimodelsRetrieve(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof aimodelsRetrieve>>, TError, TData> & { queryKey: QueryKey }
}

export type AimodelsRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof aimodelsRetrieve>>>
export type AimodelsRetrieveQueryError = ErrorType<unknown>

export const useAimodelsRetrieve = <TData = Awaited<ReturnType<typeof aimodelsRetrieve>>, TError = ErrorType<unknown>>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aimodelsRetrieve>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAimodelsRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const aimodelsUpdate = (
    id: number,
    aIModel: BodyType<NonReadonly<AIModel>>,
 ) => {
      
      
      return customInstance<AIModel>(
      {url: `/api/aimodels/${id}/`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: aIModel
    },
      );
    }
  


export const getAimodelsUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aimodelsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<AIModel>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof aimodelsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<AIModel>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof aimodelsUpdate>>, {id: number;data: BodyType<NonReadonly<AIModel>>}> = (props) => {
          const {id,data} = props ?? {};

          return  aimodelsUpdate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AimodelsUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof aimodelsUpdate>>>
    export type AimodelsUpdateMutationBody = BodyType<NonReadonly<AIModel>>
    export type AimodelsUpdateMutationError = ErrorType<unknown>

    export const useAimodelsUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aimodelsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<AIModel>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof aimodelsUpdate>>,
        TError,
        {id: number;data: BodyType<NonReadonly<AIModel>>},
        TContext
      > => {

      const mutationOptions = getAimodelsUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const aimodelsPartialUpdate = (
    id: number,
    patchedAIModel: BodyType<NonReadonly<PatchedAIModel>>,
 ) => {
      
      
      return customInstance<AIModel>(
      {url: `/api/aimodels/${id}/`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: patchedAIModel
    },
      );
    }
  


export const getAimodelsPartialUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aimodelsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedAIModel>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof aimodelsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedAIModel>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof aimodelsPartialUpdate>>, {id: number;data: BodyType<NonReadonly<PatchedAIModel>>}> = (props) => {
          const {id,data} = props ?? {};

          return  aimodelsPartialUpdate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AimodelsPartialUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof aimodelsPartialUpdate>>>
    export type AimodelsPartialUpdateMutationBody = BodyType<NonReadonly<PatchedAIModel>>
    export type AimodelsPartialUpdateMutationError = ErrorType<unknown>

    export const useAimodelsPartialUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aimodelsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedAIModel>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof aimodelsPartialUpdate>>,
        TError,
        {id: number;data: BodyType<NonReadonly<PatchedAIModel>>},
        TContext
      > => {

      const mutationOptions = getAimodelsPartialUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const aimodelsDestroy = (
    id: number,
 ) => {
      
      
      return customInstance<void>(
      {url: `/api/aimodels/${id}/`, method: 'DELETE'
    },
      );
    }
  


export const getAimodelsDestroyMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aimodelsDestroy>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof aimodelsDestroy>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof aimodelsDestroy>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  aimodelsDestroy(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AimodelsDestroyMutationResult = NonNullable<Awaited<ReturnType<typeof aimodelsDestroy>>>
    
    export type AimodelsDestroyMutationError = ErrorType<unknown>

    export const useAimodelsDestroy = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aimodelsDestroy>>, TError,{id: number}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof aimodelsDestroy>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getAimodelsDestroyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    