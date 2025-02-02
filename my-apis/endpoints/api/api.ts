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
  ApiAimodelsListParams,
  ApiProblemsListParams,
  ApiTypesListParams,
  PatchedAIModel,
  PatchedProblem,
  PatchedType,
  Problem,
  Type,
  VerifyModel
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




export const apiAimodelsList = (
    params?: ApiAimodelsListParams,
 signal?: AbortSignal
) => {
      
      
      return customInstance<AIModel[]>(
      {url: `/api/aimodels/`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getApiAimodelsListQueryKey = (params?: ApiAimodelsListParams,) => {
    return [`/api/aimodels/`, ...(params ? [params]: [])] as const;
    }

    
export const getApiAimodelsListQueryOptions = <TData = Awaited<ReturnType<typeof apiAimodelsList>>, TError = ErrorType<unknown>>(params?: ApiAimodelsListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiAimodelsList>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getApiAimodelsListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof apiAimodelsList>>> = ({ signal }) => apiAimodelsList(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof apiAimodelsList>>, TError, TData> & { queryKey: QueryKey }
}

export type ApiAimodelsListQueryResult = NonNullable<Awaited<ReturnType<typeof apiAimodelsList>>>
export type ApiAimodelsListQueryError = ErrorType<unknown>

export const useApiAimodelsList = <TData = Awaited<ReturnType<typeof apiAimodelsList>>, TError = ErrorType<unknown>>(
 params?: ApiAimodelsListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiAimodelsList>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getApiAimodelsListQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const apiAimodelsCreate = (
    aIModel: BodyType<NonReadonly<AIModel>>,
 ) => {
      
      
      return customInstance<AIModel>(
      {url: `/api/aimodels/`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: aIModel
    },
      );
    }
  


export const getApiAimodelsCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsCreate>>, TError,{data: BodyType<NonReadonly<AIModel>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsCreate>>, TError,{data: BodyType<NonReadonly<AIModel>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiAimodelsCreate>>, {data: BodyType<NonReadonly<AIModel>>}> = (props) => {
          const {data} = props ?? {};

          return  apiAimodelsCreate(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiAimodelsCreateMutationResult = NonNullable<Awaited<ReturnType<typeof apiAimodelsCreate>>>
    export type ApiAimodelsCreateMutationBody = BodyType<NonReadonly<AIModel>>
    export type ApiAimodelsCreateMutationError = ErrorType<unknown>

    export const useApiAimodelsCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsCreate>>, TError,{data: BodyType<NonReadonly<AIModel>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiAimodelsCreate>>,
        TError,
        {data: BodyType<NonReadonly<AIModel>>},
        TContext
      > => {

      const mutationOptions = getApiAimodelsCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiAimodelsRetrieve = (
    id: number,
 signal?: AbortSignal
) => {
      
      
      return customInstance<AIModel>(
      {url: `/api/aimodels/${id}/`, method: 'GET', signal
    },
      );
    }
  

export const getApiAimodelsRetrieveQueryKey = (id: number,) => {
    return [`/api/aimodels/${id}/`] as const;
    }

    
export const getApiAimodelsRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof apiAimodelsRetrieve>>, TError = ErrorType<unknown>>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiAimodelsRetrieve>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getApiAimodelsRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof apiAimodelsRetrieve>>> = ({ signal }) => apiAimodelsRetrieve(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof apiAimodelsRetrieve>>, TError, TData> & { queryKey: QueryKey }
}

export type ApiAimodelsRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof apiAimodelsRetrieve>>>
export type ApiAimodelsRetrieveQueryError = ErrorType<unknown>

export const useApiAimodelsRetrieve = <TData = Awaited<ReturnType<typeof apiAimodelsRetrieve>>, TError = ErrorType<unknown>>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiAimodelsRetrieve>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getApiAimodelsRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const apiAimodelsUpdate = (
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
  


export const getApiAimodelsUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<AIModel>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<AIModel>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiAimodelsUpdate>>, {id: number;data: BodyType<NonReadonly<AIModel>>}> = (props) => {
          const {id,data} = props ?? {};

          return  apiAimodelsUpdate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiAimodelsUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof apiAimodelsUpdate>>>
    export type ApiAimodelsUpdateMutationBody = BodyType<NonReadonly<AIModel>>
    export type ApiAimodelsUpdateMutationError = ErrorType<unknown>

    export const useApiAimodelsUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<AIModel>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiAimodelsUpdate>>,
        TError,
        {id: number;data: BodyType<NonReadonly<AIModel>>},
        TContext
      > => {

      const mutationOptions = getApiAimodelsUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiAimodelsPartialUpdate = (
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
  


export const getApiAimodelsPartialUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedAIModel>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedAIModel>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiAimodelsPartialUpdate>>, {id: number;data: BodyType<NonReadonly<PatchedAIModel>>}> = (props) => {
          const {id,data} = props ?? {};

          return  apiAimodelsPartialUpdate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiAimodelsPartialUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof apiAimodelsPartialUpdate>>>
    export type ApiAimodelsPartialUpdateMutationBody = BodyType<NonReadonly<PatchedAIModel>>
    export type ApiAimodelsPartialUpdateMutationError = ErrorType<unknown>

    export const useApiAimodelsPartialUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedAIModel>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiAimodelsPartialUpdate>>,
        TError,
        {id: number;data: BodyType<NonReadonly<PatchedAIModel>>},
        TContext
      > => {

      const mutationOptions = getApiAimodelsPartialUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiAimodelsDestroy = (
    id: number,
 ) => {
      
      
      return customInstance<void>(
      {url: `/api/aimodels/${id}/`, method: 'DELETE'
    },
      );
    }
  


export const getApiAimodelsDestroyMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsDestroy>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsDestroy>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiAimodelsDestroy>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  apiAimodelsDestroy(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiAimodelsDestroyMutationResult = NonNullable<Awaited<ReturnType<typeof apiAimodelsDestroy>>>
    
    export type ApiAimodelsDestroyMutationError = ErrorType<unknown>

    export const useApiAimodelsDestroy = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiAimodelsDestroy>>, TError,{id: number}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiAimodelsDestroy>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getApiAimodelsDestroyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiEvaluateCreate = (
    id: number,
 ) => {
      
      
      return customInstance<void>(
      {url: `/api/evaluate/${id}`, method: 'POST'
    },
      );
    }
  


export const getApiEvaluateCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEvaluateCreate>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiEvaluateCreate>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiEvaluateCreate>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  apiEvaluateCreate(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiEvaluateCreateMutationResult = NonNullable<Awaited<ReturnType<typeof apiEvaluateCreate>>>
    
    export type ApiEvaluateCreateMutationError = ErrorType<unknown>

    export const useApiEvaluateCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEvaluateCreate>>, TError,{id: number}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiEvaluateCreate>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getApiEvaluateCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiProblemsList = (
    params?: ApiProblemsListParams,
 signal?: AbortSignal
) => {
      
      
      return customInstance<Problem[]>(
      {url: `/api/problems/`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getApiProblemsListQueryKey = (params?: ApiProblemsListParams,) => {
    return [`/api/problems/`, ...(params ? [params]: [])] as const;
    }

    
export const getApiProblemsListQueryOptions = <TData = Awaited<ReturnType<typeof apiProblemsList>>, TError = ErrorType<unknown>>(params?: ApiProblemsListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiProblemsList>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getApiProblemsListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof apiProblemsList>>> = ({ signal }) => apiProblemsList(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof apiProblemsList>>, TError, TData> & { queryKey: QueryKey }
}

export type ApiProblemsListQueryResult = NonNullable<Awaited<ReturnType<typeof apiProblemsList>>>
export type ApiProblemsListQueryError = ErrorType<unknown>

export const useApiProblemsList = <TData = Awaited<ReturnType<typeof apiProblemsList>>, TError = ErrorType<unknown>>(
 params?: ApiProblemsListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiProblemsList>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getApiProblemsListQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const apiProblemsCreate = (
    problem: BodyType<NonReadonly<Problem>>,
 ) => {
      
      
      return customInstance<Problem>(
      {url: `/api/problems/`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: problem
    },
      );
    }
  


export const getApiProblemsCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiProblemsCreate>>, TError,{data: BodyType<NonReadonly<Problem>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiProblemsCreate>>, TError,{data: BodyType<NonReadonly<Problem>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiProblemsCreate>>, {data: BodyType<NonReadonly<Problem>>}> = (props) => {
          const {data} = props ?? {};

          return  apiProblemsCreate(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiProblemsCreateMutationResult = NonNullable<Awaited<ReturnType<typeof apiProblemsCreate>>>
    export type ApiProblemsCreateMutationBody = BodyType<NonReadonly<Problem>>
    export type ApiProblemsCreateMutationError = ErrorType<unknown>

    export const useApiProblemsCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiProblemsCreate>>, TError,{data: BodyType<NonReadonly<Problem>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiProblemsCreate>>,
        TError,
        {data: BodyType<NonReadonly<Problem>>},
        TContext
      > => {

      const mutationOptions = getApiProblemsCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiProblemsRetrieve = (
    id: number,
 signal?: AbortSignal
) => {
      
      
      return customInstance<Problem>(
      {url: `/api/problems/${id}/`, method: 'GET', signal
    },
      );
    }
  

export const getApiProblemsRetrieveQueryKey = (id: number,) => {
    return [`/api/problems/${id}/`] as const;
    }

    
export const getApiProblemsRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof apiProblemsRetrieve>>, TError = ErrorType<unknown>>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiProblemsRetrieve>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getApiProblemsRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof apiProblemsRetrieve>>> = ({ signal }) => apiProblemsRetrieve(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof apiProblemsRetrieve>>, TError, TData> & { queryKey: QueryKey }
}

export type ApiProblemsRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof apiProblemsRetrieve>>>
export type ApiProblemsRetrieveQueryError = ErrorType<unknown>

export const useApiProblemsRetrieve = <TData = Awaited<ReturnType<typeof apiProblemsRetrieve>>, TError = ErrorType<unknown>>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiProblemsRetrieve>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getApiProblemsRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const apiProblemsUpdate = (
    id: number,
    problem: BodyType<NonReadonly<Problem>>,
 ) => {
      
      
      return customInstance<Problem>(
      {url: `/api/problems/${id}/`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: problem
    },
      );
    }
  


export const getApiProblemsUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiProblemsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<Problem>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiProblemsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<Problem>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiProblemsUpdate>>, {id: number;data: BodyType<NonReadonly<Problem>>}> = (props) => {
          const {id,data} = props ?? {};

          return  apiProblemsUpdate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiProblemsUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof apiProblemsUpdate>>>
    export type ApiProblemsUpdateMutationBody = BodyType<NonReadonly<Problem>>
    export type ApiProblemsUpdateMutationError = ErrorType<unknown>

    export const useApiProblemsUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiProblemsUpdate>>, TError,{id: number;data: BodyType<NonReadonly<Problem>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiProblemsUpdate>>,
        TError,
        {id: number;data: BodyType<NonReadonly<Problem>>},
        TContext
      > => {

      const mutationOptions = getApiProblemsUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiProblemsPartialUpdate = (
    id: number,
    patchedProblem: BodyType<NonReadonly<PatchedProblem>>,
 ) => {
      
      
      return customInstance<Problem>(
      {url: `/api/problems/${id}/`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: patchedProblem
    },
      );
    }
  


export const getApiProblemsPartialUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiProblemsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedProblem>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiProblemsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedProblem>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiProblemsPartialUpdate>>, {id: number;data: BodyType<NonReadonly<PatchedProblem>>}> = (props) => {
          const {id,data} = props ?? {};

          return  apiProblemsPartialUpdate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiProblemsPartialUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof apiProblemsPartialUpdate>>>
    export type ApiProblemsPartialUpdateMutationBody = BodyType<NonReadonly<PatchedProblem>>
    export type ApiProblemsPartialUpdateMutationError = ErrorType<unknown>

    export const useApiProblemsPartialUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiProblemsPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedProblem>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiProblemsPartialUpdate>>,
        TError,
        {id: number;data: BodyType<NonReadonly<PatchedProblem>>},
        TContext
      > => {

      const mutationOptions = getApiProblemsPartialUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiProblemsDestroy = (
    id: number,
 ) => {
      
      
      return customInstance<void>(
      {url: `/api/problems/${id}/`, method: 'DELETE'
    },
      );
    }
  


export const getApiProblemsDestroyMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiProblemsDestroy>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiProblemsDestroy>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiProblemsDestroy>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  apiProblemsDestroy(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiProblemsDestroyMutationResult = NonNullable<Awaited<ReturnType<typeof apiProblemsDestroy>>>
    
    export type ApiProblemsDestroyMutationError = ErrorType<unknown>

    export const useApiProblemsDestroy = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiProblemsDestroy>>, TError,{id: number}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiProblemsDestroy>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getApiProblemsDestroyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiTypesList = (
    params?: ApiTypesListParams,
 signal?: AbortSignal
) => {
      
      
      return customInstance<Type[]>(
      {url: `/api/types/`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getApiTypesListQueryKey = (params?: ApiTypesListParams,) => {
    return [`/api/types/`, ...(params ? [params]: [])] as const;
    }

    
export const getApiTypesListQueryOptions = <TData = Awaited<ReturnType<typeof apiTypesList>>, TError = ErrorType<unknown>>(params?: ApiTypesListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiTypesList>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getApiTypesListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof apiTypesList>>> = ({ signal }) => apiTypesList(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof apiTypesList>>, TError, TData> & { queryKey: QueryKey }
}

export type ApiTypesListQueryResult = NonNullable<Awaited<ReturnType<typeof apiTypesList>>>
export type ApiTypesListQueryError = ErrorType<unknown>

export const useApiTypesList = <TData = Awaited<ReturnType<typeof apiTypesList>>, TError = ErrorType<unknown>>(
 params?: ApiTypesListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiTypesList>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getApiTypesListQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const apiTypesCreate = (
    type: BodyType<NonReadonly<Type>>,
 ) => {
      
      
      return customInstance<Type>(
      {url: `/api/types/`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: type
    },
      );
    }
  


export const getApiTypesCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiTypesCreate>>, TError,{data: BodyType<NonReadonly<Type>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiTypesCreate>>, TError,{data: BodyType<NonReadonly<Type>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiTypesCreate>>, {data: BodyType<NonReadonly<Type>>}> = (props) => {
          const {data} = props ?? {};

          return  apiTypesCreate(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiTypesCreateMutationResult = NonNullable<Awaited<ReturnType<typeof apiTypesCreate>>>
    export type ApiTypesCreateMutationBody = BodyType<NonReadonly<Type>>
    export type ApiTypesCreateMutationError = ErrorType<unknown>

    export const useApiTypesCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiTypesCreate>>, TError,{data: BodyType<NonReadonly<Type>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiTypesCreate>>,
        TError,
        {data: BodyType<NonReadonly<Type>>},
        TContext
      > => {

      const mutationOptions = getApiTypesCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiTypesRetrieve = (
    id: number,
 signal?: AbortSignal
) => {
      
      
      return customInstance<Type>(
      {url: `/api/types/${id}/`, method: 'GET', signal
    },
      );
    }
  

export const getApiTypesRetrieveQueryKey = (id: number,) => {
    return [`/api/types/${id}/`] as const;
    }

    
export const getApiTypesRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof apiTypesRetrieve>>, TError = ErrorType<unknown>>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiTypesRetrieve>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getApiTypesRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof apiTypesRetrieve>>> = ({ signal }) => apiTypesRetrieve(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof apiTypesRetrieve>>, TError, TData> & { queryKey: QueryKey }
}

export type ApiTypesRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof apiTypesRetrieve>>>
export type ApiTypesRetrieveQueryError = ErrorType<unknown>

export const useApiTypesRetrieve = <TData = Awaited<ReturnType<typeof apiTypesRetrieve>>, TError = ErrorType<unknown>>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiTypesRetrieve>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getApiTypesRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const apiTypesUpdate = (
    id: number,
    type: BodyType<NonReadonly<Type>>,
 ) => {
      
      
      return customInstance<Type>(
      {url: `/api/types/${id}/`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: type
    },
      );
    }
  


export const getApiTypesUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiTypesUpdate>>, TError,{id: number;data: BodyType<NonReadonly<Type>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiTypesUpdate>>, TError,{id: number;data: BodyType<NonReadonly<Type>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiTypesUpdate>>, {id: number;data: BodyType<NonReadonly<Type>>}> = (props) => {
          const {id,data} = props ?? {};

          return  apiTypesUpdate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiTypesUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof apiTypesUpdate>>>
    export type ApiTypesUpdateMutationBody = BodyType<NonReadonly<Type>>
    export type ApiTypesUpdateMutationError = ErrorType<unknown>

    export const useApiTypesUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiTypesUpdate>>, TError,{id: number;data: BodyType<NonReadonly<Type>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiTypesUpdate>>,
        TError,
        {id: number;data: BodyType<NonReadonly<Type>>},
        TContext
      > => {

      const mutationOptions = getApiTypesUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiTypesPartialUpdate = (
    id: number,
    patchedType: BodyType<NonReadonly<PatchedType>>,
 ) => {
      
      
      return customInstance<Type>(
      {url: `/api/types/${id}/`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: patchedType
    },
      );
    }
  


export const getApiTypesPartialUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiTypesPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedType>>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiTypesPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedType>>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiTypesPartialUpdate>>, {id: number;data: BodyType<NonReadonly<PatchedType>>}> = (props) => {
          const {id,data} = props ?? {};

          return  apiTypesPartialUpdate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiTypesPartialUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof apiTypesPartialUpdate>>>
    export type ApiTypesPartialUpdateMutationBody = BodyType<NonReadonly<PatchedType>>
    export type ApiTypesPartialUpdateMutationError = ErrorType<unknown>

    export const useApiTypesPartialUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiTypesPartialUpdate>>, TError,{id: number;data: BodyType<NonReadonly<PatchedType>>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiTypesPartialUpdate>>,
        TError,
        {id: number;data: BodyType<NonReadonly<PatchedType>>},
        TContext
      > => {

      const mutationOptions = getApiTypesPartialUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiTypesDestroy = (
    id: number,
 ) => {
      
      
      return customInstance<void>(
      {url: `/api/types/${id}/`, method: 'DELETE'
    },
      );
    }
  


export const getApiTypesDestroyMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiTypesDestroy>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiTypesDestroy>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiTypesDestroy>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  apiTypesDestroy(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiTypesDestroyMutationResult = NonNullable<Awaited<ReturnType<typeof apiTypesDestroy>>>
    
    export type ApiTypesDestroyMutationError = ErrorType<unknown>

    export const useApiTypesDestroy = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiTypesDestroy>>, TError,{id: number}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiTypesDestroy>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getApiTypesDestroyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const apiVerifyCreate = (
    id: number,
    verifyModel: BodyType<VerifyModel>,
 ) => {
      
      
      return customInstance<VerifyModel>(
      {url: `/api/verify/${id}`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: verifyModel
    },
      );
    }
  


export const getApiVerifyCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiVerifyCreate>>, TError,{id: number;data: BodyType<VerifyModel>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof apiVerifyCreate>>, TError,{id: number;data: BodyType<VerifyModel>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiVerifyCreate>>, {id: number;data: BodyType<VerifyModel>}> = (props) => {
          const {id,data} = props ?? {};

          return  apiVerifyCreate(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiVerifyCreateMutationResult = NonNullable<Awaited<ReturnType<typeof apiVerifyCreate>>>
    export type ApiVerifyCreateMutationBody = BodyType<VerifyModel>
    export type ApiVerifyCreateMutationError = ErrorType<unknown>

    export const useApiVerifyCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiVerifyCreate>>, TError,{id: number;data: BodyType<VerifyModel>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof apiVerifyCreate>>,
        TError,
        {id: number;data: BodyType<VerifyModel>},
        TContext
      > => {

      const mutationOptions = getApiVerifyCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    