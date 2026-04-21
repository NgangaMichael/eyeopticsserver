
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model expense
 * 
 */
export type expense = $Result.DefaultSelection<Prisma.$expensePayload>
/**
 * Model patient
 * 
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>
/**
 * Model sale
 * 
 */
export type sale = $Result.DefaultSelection<Prisma.$salePayload>
/**
 * Model container
 * 
 */
export type container = $Result.DefaultSelection<Prisma.$containerPayload>
/**
 * Model containerItem
 * 
 */
export type containerItem = $Result.DefaultSelection<Prisma.$containerItemPayload>
/**
 * Model saleitem
 * 
 */
export type saleitem = $Result.DefaultSelection<Prisma.$saleitemPayload>
/**
 * Model stock
 * 
 */
export type stock = $Result.DefaultSelection<Prisma.$stockPayload>
/**
 * Model supplier
 * 
 */
export type supplier = $Result.DefaultSelection<Prisma.$supplierPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model jobcard
 * 
 */
export type jobcard = $Result.DefaultSelection<Prisma.$jobcardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.expenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.patientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.saleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.container`: Exposes CRUD operations for the **container** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Containers
    * const containers = await prisma.container.findMany()
    * ```
    */
  get container(): Prisma.containerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.containerItem`: Exposes CRUD operations for the **containerItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContainerItems
    * const containerItems = await prisma.containerItem.findMany()
    * ```
    */
  get containerItem(): Prisma.containerItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleitem`: Exposes CRUD operations for the **saleitem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saleitems
    * const saleitems = await prisma.saleitem.findMany()
    * ```
    */
  get saleitem(): Prisma.saleitemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.stockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.supplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobcard`: Exposes CRUD operations for the **jobcard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobcards
    * const jobcards = await prisma.jobcard.findMany()
    * ```
    */
  get jobcard(): Prisma.jobcardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    customer: 'customer',
    expense: 'expense',
    patient: 'patient',
    sale: 'sale',
    container: 'container',
    containerItem: 'containerItem',
    saleitem: 'saleitem',
    stock: 'stock',
    supplier: 'supplier',
    user: 'user',
    jobcard: 'jobcard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "expense" | "patient" | "sale" | "container" | "containerItem" | "saleitem" | "stock" | "supplier" | "user" | "jobcard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      expense: {
        payload: Prisma.$expensePayload<ExtArgs>
        fields: Prisma.expenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          findFirst: {
            args: Prisma.expenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          findMany: {
            args: Prisma.expenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[]
          }
          create: {
            args: Prisma.expenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          createMany: {
            args: Prisma.expenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.expenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          update: {
            args: Prisma.expenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          deleteMany: {
            args: Prisma.expenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.expenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.expenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.expenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>
        fields: Prisma.patientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      sale: {
        payload: Prisma.$salePayload<ExtArgs>
        fields: Prisma.saleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload>
          }
          findFirst: {
            args: Prisma.saleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload>
          }
          findMany: {
            args: Prisma.saleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload>[]
          }
          create: {
            args: Prisma.saleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload>
          }
          createMany: {
            args: Prisma.saleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.saleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload>
          }
          update: {
            args: Prisma.saleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload>
          }
          deleteMany: {
            args: Prisma.saleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.saleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.saleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.saleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      container: {
        payload: Prisma.$containerPayload<ExtArgs>
        fields: Prisma.containerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.containerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.containerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload>
          }
          findFirst: {
            args: Prisma.containerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.containerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload>
          }
          findMany: {
            args: Prisma.containerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload>[]
          }
          create: {
            args: Prisma.containerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload>
          }
          createMany: {
            args: Prisma.containerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.containerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload>
          }
          update: {
            args: Prisma.containerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload>
          }
          deleteMany: {
            args: Prisma.containerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.containerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.containerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerPayload>
          }
          aggregate: {
            args: Prisma.ContainerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContainer>
          }
          groupBy: {
            args: Prisma.containerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.containerCountArgs<ExtArgs>
            result: $Utils.Optional<ContainerCountAggregateOutputType> | number
          }
        }
      }
      containerItem: {
        payload: Prisma.$containerItemPayload<ExtArgs>
        fields: Prisma.containerItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.containerItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.containerItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload>
          }
          findFirst: {
            args: Prisma.containerItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.containerItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload>
          }
          findMany: {
            args: Prisma.containerItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload>[]
          }
          create: {
            args: Prisma.containerItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload>
          }
          createMany: {
            args: Prisma.containerItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.containerItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload>
          }
          update: {
            args: Prisma.containerItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload>
          }
          deleteMany: {
            args: Prisma.containerItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.containerItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.containerItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$containerItemPayload>
          }
          aggregate: {
            args: Prisma.ContainerItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContainerItem>
          }
          groupBy: {
            args: Prisma.containerItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContainerItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.containerItemCountArgs<ExtArgs>
            result: $Utils.Optional<ContainerItemCountAggregateOutputType> | number
          }
        }
      }
      saleitem: {
        payload: Prisma.$saleitemPayload<ExtArgs>
        fields: Prisma.saleitemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saleitemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saleitemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload>
          }
          findFirst: {
            args: Prisma.saleitemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saleitemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload>
          }
          findMany: {
            args: Prisma.saleitemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload>[]
          }
          create: {
            args: Prisma.saleitemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload>
          }
          createMany: {
            args: Prisma.saleitemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.saleitemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload>
          }
          update: {
            args: Prisma.saleitemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload>
          }
          deleteMany: {
            args: Prisma.saleitemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saleitemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.saleitemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saleitemPayload>
          }
          aggregate: {
            args: Prisma.SaleitemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleitem>
          }
          groupBy: {
            args: Prisma.saleitemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleitemGroupByOutputType>[]
          }
          count: {
            args: Prisma.saleitemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleitemCountAggregateOutputType> | number
          }
        }
      }
      stock: {
        payload: Prisma.$stockPayload<ExtArgs>
        fields: Prisma.stockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findFirst: {
            args: Prisma.stockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findMany: {
            args: Prisma.stockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          create: {
            args: Prisma.stockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          createMany: {
            args: Prisma.stockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          update: {
            args: Prisma.stockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          deleteMany: {
            args: Prisma.stockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.stockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.stockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      supplier: {
        payload: Prisma.$supplierPayload<ExtArgs>
        fields: Prisma.supplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findFirst: {
            args: Prisma.supplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findMany: {
            args: Prisma.supplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          create: {
            args: Prisma.supplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          createMany: {
            args: Prisma.supplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.supplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          update: {
            args: Prisma.supplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          deleteMany: {
            args: Prisma.supplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.supplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.supplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      jobcard: {
        payload: Prisma.$jobcardPayload<ExtArgs>
        fields: Prisma.jobcardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobcardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobcardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload>
          }
          findFirst: {
            args: Prisma.jobcardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobcardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload>
          }
          findMany: {
            args: Prisma.jobcardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload>[]
          }
          create: {
            args: Prisma.jobcardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload>
          }
          createMany: {
            args: Prisma.jobcardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jobcardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload>
          }
          update: {
            args: Prisma.jobcardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload>
          }
          deleteMany: {
            args: Prisma.jobcardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobcardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobcardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobcardPayload>
          }
          aggregate: {
            args: Prisma.JobcardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobcard>
          }
          groupBy: {
            args: Prisma.jobcardGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobcardGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobcardCountArgs<ExtArgs>
            result: $Utils.Optional<JobcardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: customerOmit
    expense?: expenseOmit
    patient?: patientOmit
    sale?: saleOmit
    container?: containerOmit
    containerItem?: containerItemOmit
    saleitem?: saleitemOmit
    stock?: stockOmit
    supplier?: supplierOmit
    user?: userOmit
    jobcard?: jobcardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    sale: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | CustomerCountOutputTypeCountSaleArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saleWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    jobcards: number
    sales: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobcards?: boolean | PatientCountOutputTypeCountJobcardsArgs
    sales?: boolean | PatientCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountJobcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobcardWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saleWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    saleitem: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleitem?: boolean | SaleCountOutputTypeCountSaleitemArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountSaleitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saleitemWhereInput
  }


  /**
   * Count Type ContainerCountOutputType
   */

  export type ContainerCountOutputType = {
    items: number
  }

  export type ContainerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ContainerCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerCountOutputType
     */
    select?: ContainerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: containerItemWhereInput
  }


  /**
   * Count Type StockCountOutputType
   */

  export type StockCountOutputType = {
    saleitem: number
  }

  export type StockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleitem?: boolean | StockCountOutputTypeCountSaleitemArgs
  }

  // Custom InputTypes
  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockCountOutputType
     */
    select?: StockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountSaleitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saleitemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    type: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    type: string
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sale?: boolean | customer$saleArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type customerSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "email" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | customer$saleArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      sale: Prisma.$salePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      email: string | null
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends customer$saleArgs<ExtArgs> = {}>(args?: Subset<T, customer$saleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<"customer", 'Int'>
    readonly name: FieldRef<"customer", 'String'>
    readonly type: FieldRef<"customer", 'String'>
    readonly email: FieldRef<"customer", 'String'>
    readonly phone: FieldRef<"customer", 'String'>
    readonly address: FieldRef<"customer", 'String'>
    readonly createdAt: FieldRef<"customer", 'DateTime'>
    readonly updatedAt: FieldRef<"customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.sale
   */
  export type customer$saleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    where?: saleWhereInput
    orderBy?: saleOrderByWithRelationInput | saleOrderByWithRelationInput[]
    cursor?: saleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    category: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    category: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    category: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    category?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    category?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    category?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense to aggregate.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput
    orderBy?: expenseOrderByWithAggregationInput | expenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: expenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    title: string
    amount: number
    category: string | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    category?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["expense"]>



  export type expenseSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    category?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type expenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "amount" | "category" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["expense"]>

  export type $expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      amount: number
      category: string | null
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type expenseGetPayload<S extends boolean | null | undefined | expenseDefaultArgs> = $Result.GetResult<Prisma.$expensePayload, S>

  type expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense'], meta: { name: 'expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {expenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expenseFindUniqueArgs>(args: SelectSubset<T, expenseFindUniqueArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expenseFindUniqueOrThrowArgs>(args: SelectSubset<T, expenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expenseFindFirstArgs>(args?: SelectSubset<T, expenseFindFirstArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expenseFindFirstOrThrowArgs>(args?: SelectSubset<T, expenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expenseFindManyArgs>(args?: SelectSubset<T, expenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {expenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends expenseCreateArgs>(args: SelectSubset<T, expenseCreateArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {expenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expenseCreateManyArgs>(args?: SelectSubset<T, expenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expense.
     * @param {expenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends expenseDeleteArgs>(args: SelectSubset<T, expenseDeleteArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {expenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expenseUpdateArgs>(args: SelectSubset<T, expenseUpdateArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {expenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expenseDeleteManyArgs>(args?: SelectSubset<T, expenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expenseUpdateManyArgs>(args: SelectSubset<T, expenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {expenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends expenseUpsertArgs>(args: SelectSubset<T, expenseUpsertArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expenseCountArgs>(
      args?: Subset<T, expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expenseGroupByArgs['orderBy'] }
        : { orderBy?: expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expense model
   */
  readonly fields: expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expense model
   */
  interface expenseFieldRefs {
    readonly id: FieldRef<"expense", 'String'>
    readonly title: FieldRef<"expense", 'String'>
    readonly amount: FieldRef<"expense", 'Float'>
    readonly category: FieldRef<"expense", 'String'>
    readonly note: FieldRef<"expense", 'String'>
    readonly createdAt: FieldRef<"expense", 'DateTime'>
    readonly updatedAt: FieldRef<"expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * expense findUnique
   */
  export type expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense findUniqueOrThrow
   */
  export type expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense findFirst
   */
  export type expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense findFirstOrThrow
   */
  export type expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense findMany
   */
  export type expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense create
   */
  export type expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * The data needed to create a expense.
     */
    data: XOR<expenseCreateInput, expenseUncheckedCreateInput>
  }

  /**
   * expense createMany
   */
  export type expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expenseCreateManyInput | expenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expense update
   */
  export type expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * The data needed to update a expense.
     */
    data: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>
    /**
     * Choose, which expense to update.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense updateMany
   */
  export type expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expenseWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expense upsert
   */
  export type expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * The filter to search for the expense to update in case it exists.
     */
    where: expenseWhereUniqueInput
    /**
     * In case the expense found by the `where` argument doesn't exist, create a new expense with this data.
     */
    create: XOR<expenseCreateInput, expenseUncheckedCreateInput>
    /**
     * In case the expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>
  }

  /**
   * expense delete
   */
  export type expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Filter which expense to delete.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense deleteMany
   */
  export type expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expenseWhereInput
    /**
     * Limit how many expenses to delete.
     */
    limit?: number
  }

  /**
   * expense without action
   */
  export type expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
  }


  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dob: Date | null
    gender: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dob: Date | null
    gender: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    dob: number
    gender: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dob?: true
    gender?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dob?: true
    gender?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dob?: true
    gender?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: patientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string | null
    phone: string
    dob: Date | null
    gender: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dob?: boolean
    gender?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobcards?: boolean | patient$jobcardsArgs<ExtArgs>
    sales?: boolean | patient$salesArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type patientSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dob?: boolean
    gender?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type patientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "dob" | "gender" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobcards?: boolean | patient$jobcardsArgs<ExtArgs>
    sales?: boolean | patient$salesArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patient"
    objects: {
      jobcards: Prisma.$jobcardPayload<ExtArgs>[]
      sales: Prisma.$salePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string | null
      phone: string
      dob: Date | null
      gender: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<Prisma.$patientPayload, S>

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient'], meta: { name: 'patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientFindUniqueArgs>(args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs>(args: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientFindFirstArgs>(args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs>(args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends patientFindManyArgs>(args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends patientCreateArgs>(args: SelectSubset<T, patientCreateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientCreateManyArgs>(args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends patientDeleteArgs>(args: SelectSubset<T, patientDeleteArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientUpdateArgs>(args: SelectSubset<T, patientUpdateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientDeleteManyArgs>(args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientUpdateManyArgs>(args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends patientUpsertArgs>(args: SelectSubset<T, patientUpsertArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patient model
   */
  readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobcards<T extends patient$jobcardsArgs<ExtArgs> = {}>(args?: Subset<T, patient$jobcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends patient$salesArgs<ExtArgs> = {}>(args?: Subset<T, patient$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<"patient", 'Int'>
    readonly firstName: FieldRef<"patient", 'String'>
    readonly lastName: FieldRef<"patient", 'String'>
    readonly email: FieldRef<"patient", 'String'>
    readonly phone: FieldRef<"patient", 'String'>
    readonly dob: FieldRef<"patient", 'DateTime'>
    readonly gender: FieldRef<"patient", 'String'>
    readonly address: FieldRef<"patient", 'String'>
    readonly createdAt: FieldRef<"patient", 'DateTime'>
    readonly updatedAt: FieldRef<"patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>
  }

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>
  }

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patient.jobcards
   */
  export type patient$jobcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    where?: jobcardWhereInput
    orderBy?: jobcardOrderByWithRelationInput | jobcardOrderByWithRelationInput[]
    cursor?: jobcardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobcardScalarFieldEnum | JobcardScalarFieldEnum[]
  }

  /**
   * patient.sales
   */
  export type patient$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    where?: saleWhereInput
    orderBy?: saleOrderByWithRelationInput | saleOrderByWithRelationInput[]
    cursor?: saleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
  }


  /**
   * Model sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    patientId: number | null
    etimsAmount: Decimal | null
    total: number | null
    discount: number | null
  }

  export type SaleSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    patientId: number | null
    etimsAmount: Decimal | null
    total: number | null
    discount: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    patientId: number | null
    referenceNumber: string | null
    etimsReceipt: string | null
    etimsAmount: Decimal | null
    total: number | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    patientId: number | null
    referenceNumber: string | null
    etimsReceipt: string | null
    etimsAmount: Decimal | null
    total: number | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    customerId: number
    patientId: number
    referenceNumber: number
    etimsReceipt: number
    etimsAmount: number
    total: number
    discount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    id?: true
    customerId?: true
    patientId?: true
    etimsAmount?: true
    total?: true
    discount?: true
  }

  export type SaleSumAggregateInputType = {
    id?: true
    customerId?: true
    patientId?: true
    etimsAmount?: true
    total?: true
    discount?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    customerId?: true
    patientId?: true
    referenceNumber?: true
    etimsReceipt?: true
    etimsAmount?: true
    total?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    customerId?: true
    patientId?: true
    referenceNumber?: true
    etimsReceipt?: true
    etimsAmount?: true
    total?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    customerId?: true
    patientId?: true
    referenceNumber?: true
    etimsReceipt?: true
    etimsAmount?: true
    total?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sale to aggregate.
     */
    where?: saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: saleOrderByWithRelationInput | saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type saleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saleWhereInput
    orderBy?: saleOrderByWithAggregationInput | saleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: saleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: number
    customerId: number | null
    patientId: number | null
    referenceNumber: string | null
    etimsReceipt: string | null
    etimsAmount: Decimal | null
    total: number
    discount: number
    createdAt: Date
    updatedAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends saleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type saleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    patientId?: boolean
    referenceNumber?: boolean
    etimsReceipt?: boolean
    etimsAmount?: boolean
    total?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | sale$customerArgs<ExtArgs>
    patient?: boolean | sale$patientArgs<ExtArgs>
    saleitem?: boolean | sale$saleitemArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>



  export type saleSelectScalar = {
    id?: boolean
    customerId?: boolean
    patientId?: boolean
    referenceNumber?: boolean
    etimsReceipt?: boolean
    etimsAmount?: boolean
    total?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type saleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "patientId" | "referenceNumber" | "etimsReceipt" | "etimsAmount" | "total" | "discount" | "createdAt" | "updatedAt", ExtArgs["result"]["sale"]>
  export type saleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | sale$customerArgs<ExtArgs>
    patient?: boolean | sale$patientArgs<ExtArgs>
    saleitem?: boolean | sale$saleitemArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $salePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sale"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs> | null
      patient: Prisma.$patientPayload<ExtArgs> | null
      saleitem: Prisma.$saleitemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number | null
      patientId: number | null
      referenceNumber: string | null
      etimsReceipt: string | null
      etimsAmount: Prisma.Decimal | null
      total: number
      discount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type saleGetPayload<S extends boolean | null | undefined | saleDefaultArgs> = $Result.GetResult<Prisma.$salePayload, S>

  type saleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface saleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sale'], meta: { name: 'sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {saleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saleFindUniqueArgs>(args: SelectSubset<T, saleFindUniqueArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saleFindUniqueOrThrowArgs>(args: SelectSubset<T, saleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saleFindFirstArgs>(args?: SelectSubset<T, saleFindFirstArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saleFindFirstOrThrowArgs>(args?: SelectSubset<T, saleFindFirstOrThrowArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saleFindManyArgs>(args?: SelectSubset<T, saleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {saleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends saleCreateArgs>(args: SelectSubset<T, saleCreateArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {saleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saleCreateManyArgs>(args?: SelectSubset<T, saleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sale.
     * @param {saleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends saleDeleteArgs>(args: SelectSubset<T, saleDeleteArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {saleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saleUpdateArgs>(args: SelectSubset<T, saleUpdateArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {saleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saleDeleteManyArgs>(args?: SelectSubset<T, saleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saleUpdateManyArgs>(args: SelectSubset<T, saleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale.
     * @param {saleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends saleUpsertArgs>(args: SelectSubset<T, saleUpsertArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends saleCountArgs>(
      args?: Subset<T, saleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saleGroupByArgs['orderBy'] }
        : { orderBy?: saleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sale model
   */
  readonly fields: saleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends sale$customerArgs<ExtArgs> = {}>(args?: Subset<T, sale$customerArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends sale$patientArgs<ExtArgs> = {}>(args?: Subset<T, sale$patientArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    saleitem<T extends sale$saleitemArgs<ExtArgs> = {}>(args?: Subset<T, sale$saleitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sale model
   */
  interface saleFieldRefs {
    readonly id: FieldRef<"sale", 'Int'>
    readonly customerId: FieldRef<"sale", 'Int'>
    readonly patientId: FieldRef<"sale", 'Int'>
    readonly referenceNumber: FieldRef<"sale", 'String'>
    readonly etimsReceipt: FieldRef<"sale", 'String'>
    readonly etimsAmount: FieldRef<"sale", 'Decimal'>
    readonly total: FieldRef<"sale", 'Float'>
    readonly discount: FieldRef<"sale", 'Float'>
    readonly createdAt: FieldRef<"sale", 'DateTime'>
    readonly updatedAt: FieldRef<"sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sale findUnique
   */
  export type saleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * Filter, which sale to fetch.
     */
    where: saleWhereUniqueInput
  }

  /**
   * sale findUniqueOrThrow
   */
  export type saleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * Filter, which sale to fetch.
     */
    where: saleWhereUniqueInput
  }

  /**
   * sale findFirst
   */
  export type saleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * Filter, which sale to fetch.
     */
    where?: saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: saleOrderByWithRelationInput | saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * sale findFirstOrThrow
   */
  export type saleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * Filter, which sale to fetch.
     */
    where?: saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: saleOrderByWithRelationInput | saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * sale findMany
   */
  export type saleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: saleOrderByWithRelationInput | saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales.
     */
    cursor?: saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * sale create
   */
  export type saleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * The data needed to create a sale.
     */
    data: XOR<saleCreateInput, saleUncheckedCreateInput>
  }

  /**
   * sale createMany
   */
  export type saleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: saleCreateManyInput | saleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sale update
   */
  export type saleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * The data needed to update a sale.
     */
    data: XOR<saleUpdateInput, saleUncheckedUpdateInput>
    /**
     * Choose, which sale to update.
     */
    where: saleWhereUniqueInput
  }

  /**
   * sale updateMany
   */
  export type saleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<saleUpdateManyMutationInput, saleUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: saleWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sale upsert
   */
  export type saleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * The filter to search for the sale to update in case it exists.
     */
    where: saleWhereUniqueInput
    /**
     * In case the sale found by the `where` argument doesn't exist, create a new sale with this data.
     */
    create: XOR<saleCreateInput, saleUncheckedCreateInput>
    /**
     * In case the sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saleUpdateInput, saleUncheckedUpdateInput>
  }

  /**
   * sale delete
   */
  export type saleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
    /**
     * Filter which sale to delete.
     */
    where: saleWhereUniqueInput
  }

  /**
   * sale deleteMany
   */
  export type saleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: saleWhereInput
    /**
     * Limit how many sales to delete.
     */
    limit?: number
  }

  /**
   * sale.customer
   */
  export type sale$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    where?: customerWhereInput
  }

  /**
   * sale.patient
   */
  export type sale$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    where?: patientWhereInput
  }

  /**
   * sale.saleitem
   */
  export type sale$saleitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    where?: saleitemWhereInput
    orderBy?: saleitemOrderByWithRelationInput | saleitemOrderByWithRelationInput[]
    cursor?: saleitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleitemScalarFieldEnum | SaleitemScalarFieldEnum[]
  }

  /**
   * sale without action
   */
  export type saleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale
     */
    select?: saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale
     */
    omit?: saleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleInclude<ExtArgs> | null
  }


  /**
   * Model container
   */

  export type AggregateContainer = {
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  export type ContainerAvgAggregateOutputType = {
    id: number | null
  }

  export type ContainerSumAggregateOutputType = {
    id: number | null
  }

  export type ContainerMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    createdBy: string | null
    supplierName: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContainerMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    createdBy: string | null
    supplierName: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContainerCountAggregateOutputType = {
    id: number
    code: number
    name: number
    createdBy: number
    supplierName: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContainerAvgAggregateInputType = {
    id?: true
  }

  export type ContainerSumAggregateInputType = {
    id?: true
  }

  export type ContainerMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdBy?: true
    supplierName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContainerMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdBy?: true
    supplierName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContainerCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdBy?: true
    supplierName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which container to aggregate.
     */
    where?: containerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of containers to fetch.
     */
    orderBy?: containerOrderByWithRelationInput | containerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: containerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned containers
    **/
    _count?: true | ContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerMaxAggregateInputType
  }

  export type GetContainerAggregateType<T extends ContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainer[P]>
      : GetScalarType<T[P], AggregateContainer[P]>
  }




  export type containerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: containerWhereInput
    orderBy?: containerOrderByWithAggregationInput | containerOrderByWithAggregationInput[]
    by: ContainerScalarFieldEnum[] | ContainerScalarFieldEnum
    having?: containerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerCountAggregateInputType | true
    _avg?: ContainerAvgAggregateInputType
    _sum?: ContainerSumAggregateInputType
    _min?: ContainerMinAggregateInputType
    _max?: ContainerMaxAggregateInputType
  }

  export type ContainerGroupByOutputType = {
    id: number
    code: string
    name: string
    createdBy: string
    supplierName: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  type GetContainerGroupByPayload<T extends containerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerGroupByOutputType[P]>
        }
      >
    >


  export type containerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdBy?: boolean
    supplierName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | container$itemsArgs<ExtArgs>
    _count?: boolean | ContainerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["container"]>



  export type containerSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    createdBy?: boolean
    supplierName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type containerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "createdBy" | "supplierName" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["container"]>
  export type containerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | container$itemsArgs<ExtArgs>
    _count?: boolean | ContainerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $containerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "container"
    objects: {
      items: Prisma.$containerItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      createdBy: string
      supplierName: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["container"]>
    composites: {}
  }

  type containerGetPayload<S extends boolean | null | undefined | containerDefaultArgs> = $Result.GetResult<Prisma.$containerPayload, S>

  type containerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<containerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContainerCountAggregateInputType | true
    }

  export interface containerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['container'], meta: { name: 'container' } }
    /**
     * Find zero or one Container that matches the filter.
     * @param {containerFindUniqueArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends containerFindUniqueArgs>(args: SelectSubset<T, containerFindUniqueArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Container that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {containerFindUniqueOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends containerFindUniqueOrThrowArgs>(args: SelectSubset<T, containerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Container that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerFindFirstArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends containerFindFirstArgs>(args?: SelectSubset<T, containerFindFirstArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Container that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerFindFirstOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends containerFindFirstOrThrowArgs>(args?: SelectSubset<T, containerFindFirstOrThrowArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Containers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Containers
     * const containers = await prisma.container.findMany()
     * 
     * // Get first 10 Containers
     * const containers = await prisma.container.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const containerWithIdOnly = await prisma.container.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends containerFindManyArgs>(args?: SelectSubset<T, containerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Container.
     * @param {containerCreateArgs} args - Arguments to create a Container.
     * @example
     * // Create one Container
     * const Container = await prisma.container.create({
     *   data: {
     *     // ... data to create a Container
     *   }
     * })
     * 
     */
    create<T extends containerCreateArgs>(args: SelectSubset<T, containerCreateArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Containers.
     * @param {containerCreateManyArgs} args - Arguments to create many Containers.
     * @example
     * // Create many Containers
     * const container = await prisma.container.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends containerCreateManyArgs>(args?: SelectSubset<T, containerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Container.
     * @param {containerDeleteArgs} args - Arguments to delete one Container.
     * @example
     * // Delete one Container
     * const Container = await prisma.container.delete({
     *   where: {
     *     // ... filter to delete one Container
     *   }
     * })
     * 
     */
    delete<T extends containerDeleteArgs>(args: SelectSubset<T, containerDeleteArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Container.
     * @param {containerUpdateArgs} args - Arguments to update one Container.
     * @example
     * // Update one Container
     * const container = await prisma.container.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends containerUpdateArgs>(args: SelectSubset<T, containerUpdateArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Containers.
     * @param {containerDeleteManyArgs} args - Arguments to filter Containers to delete.
     * @example
     * // Delete a few Containers
     * const { count } = await prisma.container.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends containerDeleteManyArgs>(args?: SelectSubset<T, containerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Containers
     * const container = await prisma.container.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends containerUpdateManyArgs>(args: SelectSubset<T, containerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Container.
     * @param {containerUpsertArgs} args - Arguments to update or create a Container.
     * @example
     * // Update or create a Container
     * const container = await prisma.container.upsert({
     *   create: {
     *     // ... data to create a Container
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Container we want to update
     *   }
     * })
     */
    upsert<T extends containerUpsertArgs>(args: SelectSubset<T, containerUpsertArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerCountArgs} args - Arguments to filter Containers to count.
     * @example
     * // Count the number of Containers
     * const count = await prisma.container.count({
     *   where: {
     *     // ... the filter for the Containers we want to count
     *   }
     * })
    **/
    count<T extends containerCountArgs>(
      args?: Subset<T, containerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContainerAggregateArgs>(args: Subset<T, ContainerAggregateArgs>): Prisma.PrismaPromise<GetContainerAggregateType<T>>

    /**
     * Group by Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends containerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: containerGroupByArgs['orderBy'] }
        : { orderBy?: containerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, containerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the container model
   */
  readonly fields: containerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for container.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__containerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends container$itemsArgs<ExtArgs> = {}>(args?: Subset<T, container$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the container model
   */
  interface containerFieldRefs {
    readonly id: FieldRef<"container", 'Int'>
    readonly code: FieldRef<"container", 'String'>
    readonly name: FieldRef<"container", 'String'>
    readonly createdBy: FieldRef<"container", 'String'>
    readonly supplierName: FieldRef<"container", 'String'>
    readonly status: FieldRef<"container", 'String'>
    readonly createdAt: FieldRef<"container", 'DateTime'>
    readonly updatedAt: FieldRef<"container", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * container findUnique
   */
  export type containerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * Filter, which container to fetch.
     */
    where: containerWhereUniqueInput
  }

  /**
   * container findUniqueOrThrow
   */
  export type containerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * Filter, which container to fetch.
     */
    where: containerWhereUniqueInput
  }

  /**
   * container findFirst
   */
  export type containerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * Filter, which container to fetch.
     */
    where?: containerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of containers to fetch.
     */
    orderBy?: containerOrderByWithRelationInput | containerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for containers.
     */
    cursor?: containerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * container findFirstOrThrow
   */
  export type containerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * Filter, which container to fetch.
     */
    where?: containerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of containers to fetch.
     */
    orderBy?: containerOrderByWithRelationInput | containerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for containers.
     */
    cursor?: containerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * container findMany
   */
  export type containerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * Filter, which containers to fetch.
     */
    where?: containerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of containers to fetch.
     */
    orderBy?: containerOrderByWithRelationInput | containerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing containers.
     */
    cursor?: containerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` containers.
     */
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * container create
   */
  export type containerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * The data needed to create a container.
     */
    data: XOR<containerCreateInput, containerUncheckedCreateInput>
  }

  /**
   * container createMany
   */
  export type containerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many containers.
     */
    data: containerCreateManyInput | containerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * container update
   */
  export type containerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * The data needed to update a container.
     */
    data: XOR<containerUpdateInput, containerUncheckedUpdateInput>
    /**
     * Choose, which container to update.
     */
    where: containerWhereUniqueInput
  }

  /**
   * container updateMany
   */
  export type containerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update containers.
     */
    data: XOR<containerUpdateManyMutationInput, containerUncheckedUpdateManyInput>
    /**
     * Filter which containers to update
     */
    where?: containerWhereInput
    /**
     * Limit how many containers to update.
     */
    limit?: number
  }

  /**
   * container upsert
   */
  export type containerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * The filter to search for the container to update in case it exists.
     */
    where: containerWhereUniqueInput
    /**
     * In case the container found by the `where` argument doesn't exist, create a new container with this data.
     */
    create: XOR<containerCreateInput, containerUncheckedCreateInput>
    /**
     * In case the container was found with the provided `where` argument, update it with this data.
     */
    update: XOR<containerUpdateInput, containerUncheckedUpdateInput>
  }

  /**
   * container delete
   */
  export type containerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
    /**
     * Filter which container to delete.
     */
    where: containerWhereUniqueInput
  }

  /**
   * container deleteMany
   */
  export type containerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which containers to delete
     */
    where?: containerWhereInput
    /**
     * Limit how many containers to delete.
     */
    limit?: number
  }

  /**
   * container.items
   */
  export type container$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    where?: containerItemWhereInput
    orderBy?: containerItemOrderByWithRelationInput | containerItemOrderByWithRelationInput[]
    cursor?: containerItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerItemScalarFieldEnum | ContainerItemScalarFieldEnum[]
  }

  /**
   * container without action
   */
  export type containerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the container
     */
    select?: containerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the container
     */
    omit?: containerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerInclude<ExtArgs> | null
  }


  /**
   * Model containerItem
   */

  export type AggregateContainerItem = {
    _count: ContainerItemCountAggregateOutputType | null
    _avg: ContainerItemAvgAggregateOutputType | null
    _sum: ContainerItemSumAggregateOutputType | null
    _min: ContainerItemMinAggregateOutputType | null
    _max: ContainerItemMaxAggregateOutputType | null
  }

  export type ContainerItemAvgAggregateOutputType = {
    id: number | null
    containerId: number | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
    quantityOrdered: Decimal | null
    landedCost: Decimal | null
    wholesalePrice: Decimal | null
    priceKsh: Decimal | null
    priceUsd: Decimal | null
    costKsh: Decimal | null
  }

  export type ContainerItemSumAggregateOutputType = {
    id: number | null
    containerId: number | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
    quantityOrdered: Decimal | null
    landedCost: Decimal | null
    wholesalePrice: Decimal | null
    priceKsh: Decimal | null
    priceUsd: Decimal | null
    costKsh: Decimal | null
  }

  export type ContainerItemMinAggregateOutputType = {
    id: number | null
    containerId: number | null
    name: string | null
    code: string | null
    type: string | null
    index: string | null
    lensCategory: string | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
    quantityOrdered: Decimal | null
    landedCost: Decimal | null
    wholesalePrice: Decimal | null
    priceKsh: Decimal | null
    priceUsd: Decimal | null
    costKsh: Decimal | null
    createdAt: Date | null
  }

  export type ContainerItemMaxAggregateOutputType = {
    id: number | null
    containerId: number | null
    name: string | null
    code: string | null
    type: string | null
    index: string | null
    lensCategory: string | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
    quantityOrdered: Decimal | null
    landedCost: Decimal | null
    wholesalePrice: Decimal | null
    priceKsh: Decimal | null
    priceUsd: Decimal | null
    costKsh: Decimal | null
    createdAt: Date | null
  }

  export type ContainerItemCountAggregateOutputType = {
    id: number
    containerId: number
    name: number
    code: number
    type: number
    index: number
    lensCategory: number
    sph: number
    cyl: number
    axis: number
    nearAdd: number
    quantityOrdered: number
    landedCost: number
    wholesalePrice: number
    priceKsh: number
    priceUsd: number
    costKsh: number
    createdAt: number
    _all: number
  }


  export type ContainerItemAvgAggregateInputType = {
    id?: true
    containerId?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
    quantityOrdered?: true
    landedCost?: true
    wholesalePrice?: true
    priceKsh?: true
    priceUsd?: true
    costKsh?: true
  }

  export type ContainerItemSumAggregateInputType = {
    id?: true
    containerId?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
    quantityOrdered?: true
    landedCost?: true
    wholesalePrice?: true
    priceKsh?: true
    priceUsd?: true
    costKsh?: true
  }

  export type ContainerItemMinAggregateInputType = {
    id?: true
    containerId?: true
    name?: true
    code?: true
    type?: true
    index?: true
    lensCategory?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
    quantityOrdered?: true
    landedCost?: true
    wholesalePrice?: true
    priceKsh?: true
    priceUsd?: true
    costKsh?: true
    createdAt?: true
  }

  export type ContainerItemMaxAggregateInputType = {
    id?: true
    containerId?: true
    name?: true
    code?: true
    type?: true
    index?: true
    lensCategory?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
    quantityOrdered?: true
    landedCost?: true
    wholesalePrice?: true
    priceKsh?: true
    priceUsd?: true
    costKsh?: true
    createdAt?: true
  }

  export type ContainerItemCountAggregateInputType = {
    id?: true
    containerId?: true
    name?: true
    code?: true
    type?: true
    index?: true
    lensCategory?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
    quantityOrdered?: true
    landedCost?: true
    wholesalePrice?: true
    priceKsh?: true
    priceUsd?: true
    costKsh?: true
    createdAt?: true
    _all?: true
  }

  export type ContainerItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which containerItem to aggregate.
     */
    where?: containerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of containerItems to fetch.
     */
    orderBy?: containerItemOrderByWithRelationInput | containerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: containerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` containerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` containerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned containerItems
    **/
    _count?: true | ContainerItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerItemMaxAggregateInputType
  }

  export type GetContainerItemAggregateType<T extends ContainerItemAggregateArgs> = {
        [P in keyof T & keyof AggregateContainerItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainerItem[P]>
      : GetScalarType<T[P], AggregateContainerItem[P]>
  }




  export type containerItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: containerItemWhereInput
    orderBy?: containerItemOrderByWithAggregationInput | containerItemOrderByWithAggregationInput[]
    by: ContainerItemScalarFieldEnum[] | ContainerItemScalarFieldEnum
    having?: containerItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerItemCountAggregateInputType | true
    _avg?: ContainerItemAvgAggregateInputType
    _sum?: ContainerItemSumAggregateInputType
    _min?: ContainerItemMinAggregateInputType
    _max?: ContainerItemMaxAggregateInputType
  }

  export type ContainerItemGroupByOutputType = {
    id: number
    containerId: number
    name: string
    code: string
    type: string
    index: string | null
    lensCategory: string | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
    quantityOrdered: Decimal
    landedCost: Decimal
    wholesalePrice: Decimal | null
    priceKsh: Decimal
    priceUsd: Decimal
    costKsh: Decimal
    createdAt: Date
    _count: ContainerItemCountAggregateOutputType | null
    _avg: ContainerItemAvgAggregateOutputType | null
    _sum: ContainerItemSumAggregateOutputType | null
    _min: ContainerItemMinAggregateOutputType | null
    _max: ContainerItemMaxAggregateOutputType | null
  }

  type GetContainerItemGroupByPayload<T extends containerItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerItemGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerItemGroupByOutputType[P]>
        }
      >
    >


  export type containerItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    containerId?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    index?: boolean
    lensCategory?: boolean
    sph?: boolean
    cyl?: boolean
    axis?: boolean
    nearAdd?: boolean
    quantityOrdered?: boolean
    landedCost?: boolean
    wholesalePrice?: boolean
    priceKsh?: boolean
    priceUsd?: boolean
    costKsh?: boolean
    createdAt?: boolean
    container?: boolean | containerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["containerItem"]>



  export type containerItemSelectScalar = {
    id?: boolean
    containerId?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    index?: boolean
    lensCategory?: boolean
    sph?: boolean
    cyl?: boolean
    axis?: boolean
    nearAdd?: boolean
    quantityOrdered?: boolean
    landedCost?: boolean
    wholesalePrice?: boolean
    priceKsh?: boolean
    priceUsd?: boolean
    costKsh?: boolean
    createdAt?: boolean
  }

  export type containerItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "containerId" | "name" | "code" | "type" | "index" | "lensCategory" | "sph" | "cyl" | "axis" | "nearAdd" | "quantityOrdered" | "landedCost" | "wholesalePrice" | "priceKsh" | "priceUsd" | "costKsh" | "createdAt", ExtArgs["result"]["containerItem"]>
  export type containerItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    container?: boolean | containerDefaultArgs<ExtArgs>
  }

  export type $containerItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "containerItem"
    objects: {
      container: Prisma.$containerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      containerId: number
      name: string
      code: string
      type: string
      index: string | null
      lensCategory: string | null
      sph: Prisma.Decimal | null
      cyl: Prisma.Decimal | null
      axis: number | null
      nearAdd: Prisma.Decimal | null
      quantityOrdered: Prisma.Decimal
      landedCost: Prisma.Decimal
      wholesalePrice: Prisma.Decimal | null
      priceKsh: Prisma.Decimal
      priceUsd: Prisma.Decimal
      costKsh: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["containerItem"]>
    composites: {}
  }

  type containerItemGetPayload<S extends boolean | null | undefined | containerItemDefaultArgs> = $Result.GetResult<Prisma.$containerItemPayload, S>

  type containerItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<containerItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContainerItemCountAggregateInputType | true
    }

  export interface containerItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['containerItem'], meta: { name: 'containerItem' } }
    /**
     * Find zero or one ContainerItem that matches the filter.
     * @param {containerItemFindUniqueArgs} args - Arguments to find a ContainerItem
     * @example
     * // Get one ContainerItem
     * const containerItem = await prisma.containerItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends containerItemFindUniqueArgs>(args: SelectSubset<T, containerItemFindUniqueArgs<ExtArgs>>): Prisma__containerItemClient<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContainerItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {containerItemFindUniqueOrThrowArgs} args - Arguments to find a ContainerItem
     * @example
     * // Get one ContainerItem
     * const containerItem = await prisma.containerItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends containerItemFindUniqueOrThrowArgs>(args: SelectSubset<T, containerItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__containerItemClient<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContainerItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerItemFindFirstArgs} args - Arguments to find a ContainerItem
     * @example
     * // Get one ContainerItem
     * const containerItem = await prisma.containerItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends containerItemFindFirstArgs>(args?: SelectSubset<T, containerItemFindFirstArgs<ExtArgs>>): Prisma__containerItemClient<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContainerItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerItemFindFirstOrThrowArgs} args - Arguments to find a ContainerItem
     * @example
     * // Get one ContainerItem
     * const containerItem = await prisma.containerItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends containerItemFindFirstOrThrowArgs>(args?: SelectSubset<T, containerItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__containerItemClient<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContainerItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContainerItems
     * const containerItems = await prisma.containerItem.findMany()
     * 
     * // Get first 10 ContainerItems
     * const containerItems = await prisma.containerItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const containerItemWithIdOnly = await prisma.containerItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends containerItemFindManyArgs>(args?: SelectSubset<T, containerItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContainerItem.
     * @param {containerItemCreateArgs} args - Arguments to create a ContainerItem.
     * @example
     * // Create one ContainerItem
     * const ContainerItem = await prisma.containerItem.create({
     *   data: {
     *     // ... data to create a ContainerItem
     *   }
     * })
     * 
     */
    create<T extends containerItemCreateArgs>(args: SelectSubset<T, containerItemCreateArgs<ExtArgs>>): Prisma__containerItemClient<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContainerItems.
     * @param {containerItemCreateManyArgs} args - Arguments to create many ContainerItems.
     * @example
     * // Create many ContainerItems
     * const containerItem = await prisma.containerItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends containerItemCreateManyArgs>(args?: SelectSubset<T, containerItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContainerItem.
     * @param {containerItemDeleteArgs} args - Arguments to delete one ContainerItem.
     * @example
     * // Delete one ContainerItem
     * const ContainerItem = await prisma.containerItem.delete({
     *   where: {
     *     // ... filter to delete one ContainerItem
     *   }
     * })
     * 
     */
    delete<T extends containerItemDeleteArgs>(args: SelectSubset<T, containerItemDeleteArgs<ExtArgs>>): Prisma__containerItemClient<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContainerItem.
     * @param {containerItemUpdateArgs} args - Arguments to update one ContainerItem.
     * @example
     * // Update one ContainerItem
     * const containerItem = await prisma.containerItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends containerItemUpdateArgs>(args: SelectSubset<T, containerItemUpdateArgs<ExtArgs>>): Prisma__containerItemClient<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContainerItems.
     * @param {containerItemDeleteManyArgs} args - Arguments to filter ContainerItems to delete.
     * @example
     * // Delete a few ContainerItems
     * const { count } = await prisma.containerItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends containerItemDeleteManyArgs>(args?: SelectSubset<T, containerItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContainerItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContainerItems
     * const containerItem = await prisma.containerItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends containerItemUpdateManyArgs>(args: SelectSubset<T, containerItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContainerItem.
     * @param {containerItemUpsertArgs} args - Arguments to update or create a ContainerItem.
     * @example
     * // Update or create a ContainerItem
     * const containerItem = await prisma.containerItem.upsert({
     *   create: {
     *     // ... data to create a ContainerItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContainerItem we want to update
     *   }
     * })
     */
    upsert<T extends containerItemUpsertArgs>(args: SelectSubset<T, containerItemUpsertArgs<ExtArgs>>): Prisma__containerItemClient<$Result.GetResult<Prisma.$containerItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContainerItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerItemCountArgs} args - Arguments to filter ContainerItems to count.
     * @example
     * // Count the number of ContainerItems
     * const count = await prisma.containerItem.count({
     *   where: {
     *     // ... the filter for the ContainerItems we want to count
     *   }
     * })
    **/
    count<T extends containerItemCountArgs>(
      args?: Subset<T, containerItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContainerItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContainerItemAggregateArgs>(args: Subset<T, ContainerItemAggregateArgs>): Prisma.PrismaPromise<GetContainerItemAggregateType<T>>

    /**
     * Group by ContainerItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {containerItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends containerItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: containerItemGroupByArgs['orderBy'] }
        : { orderBy?: containerItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, containerItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the containerItem model
   */
  readonly fields: containerItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for containerItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__containerItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    container<T extends containerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, containerDefaultArgs<ExtArgs>>): Prisma__containerClient<$Result.GetResult<Prisma.$containerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the containerItem model
   */
  interface containerItemFieldRefs {
    readonly id: FieldRef<"containerItem", 'Int'>
    readonly containerId: FieldRef<"containerItem", 'Int'>
    readonly name: FieldRef<"containerItem", 'String'>
    readonly code: FieldRef<"containerItem", 'String'>
    readonly type: FieldRef<"containerItem", 'String'>
    readonly index: FieldRef<"containerItem", 'String'>
    readonly lensCategory: FieldRef<"containerItem", 'String'>
    readonly sph: FieldRef<"containerItem", 'Decimal'>
    readonly cyl: FieldRef<"containerItem", 'Decimal'>
    readonly axis: FieldRef<"containerItem", 'Int'>
    readonly nearAdd: FieldRef<"containerItem", 'Decimal'>
    readonly quantityOrdered: FieldRef<"containerItem", 'Decimal'>
    readonly landedCost: FieldRef<"containerItem", 'Decimal'>
    readonly wholesalePrice: FieldRef<"containerItem", 'Decimal'>
    readonly priceKsh: FieldRef<"containerItem", 'Decimal'>
    readonly priceUsd: FieldRef<"containerItem", 'Decimal'>
    readonly costKsh: FieldRef<"containerItem", 'Decimal'>
    readonly createdAt: FieldRef<"containerItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * containerItem findUnique
   */
  export type containerItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * Filter, which containerItem to fetch.
     */
    where: containerItemWhereUniqueInput
  }

  /**
   * containerItem findUniqueOrThrow
   */
  export type containerItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * Filter, which containerItem to fetch.
     */
    where: containerItemWhereUniqueInput
  }

  /**
   * containerItem findFirst
   */
  export type containerItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * Filter, which containerItem to fetch.
     */
    where?: containerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of containerItems to fetch.
     */
    orderBy?: containerItemOrderByWithRelationInput | containerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for containerItems.
     */
    cursor?: containerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` containerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` containerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of containerItems.
     */
    distinct?: ContainerItemScalarFieldEnum | ContainerItemScalarFieldEnum[]
  }

  /**
   * containerItem findFirstOrThrow
   */
  export type containerItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * Filter, which containerItem to fetch.
     */
    where?: containerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of containerItems to fetch.
     */
    orderBy?: containerItemOrderByWithRelationInput | containerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for containerItems.
     */
    cursor?: containerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` containerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` containerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of containerItems.
     */
    distinct?: ContainerItemScalarFieldEnum | ContainerItemScalarFieldEnum[]
  }

  /**
   * containerItem findMany
   */
  export type containerItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * Filter, which containerItems to fetch.
     */
    where?: containerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of containerItems to fetch.
     */
    orderBy?: containerItemOrderByWithRelationInput | containerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing containerItems.
     */
    cursor?: containerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` containerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` containerItems.
     */
    skip?: number
    distinct?: ContainerItemScalarFieldEnum | ContainerItemScalarFieldEnum[]
  }

  /**
   * containerItem create
   */
  export type containerItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * The data needed to create a containerItem.
     */
    data: XOR<containerItemCreateInput, containerItemUncheckedCreateInput>
  }

  /**
   * containerItem createMany
   */
  export type containerItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many containerItems.
     */
    data: containerItemCreateManyInput | containerItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * containerItem update
   */
  export type containerItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * The data needed to update a containerItem.
     */
    data: XOR<containerItemUpdateInput, containerItemUncheckedUpdateInput>
    /**
     * Choose, which containerItem to update.
     */
    where: containerItemWhereUniqueInput
  }

  /**
   * containerItem updateMany
   */
  export type containerItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update containerItems.
     */
    data: XOR<containerItemUpdateManyMutationInput, containerItemUncheckedUpdateManyInput>
    /**
     * Filter which containerItems to update
     */
    where?: containerItemWhereInput
    /**
     * Limit how many containerItems to update.
     */
    limit?: number
  }

  /**
   * containerItem upsert
   */
  export type containerItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * The filter to search for the containerItem to update in case it exists.
     */
    where: containerItemWhereUniqueInput
    /**
     * In case the containerItem found by the `where` argument doesn't exist, create a new containerItem with this data.
     */
    create: XOR<containerItemCreateInput, containerItemUncheckedCreateInput>
    /**
     * In case the containerItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<containerItemUpdateInput, containerItemUncheckedUpdateInput>
  }

  /**
   * containerItem delete
   */
  export type containerItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
    /**
     * Filter which containerItem to delete.
     */
    where: containerItemWhereUniqueInput
  }

  /**
   * containerItem deleteMany
   */
  export type containerItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which containerItems to delete
     */
    where?: containerItemWhereInput
    /**
     * Limit how many containerItems to delete.
     */
    limit?: number
  }

  /**
   * containerItem without action
   */
  export type containerItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the containerItem
     */
    select?: containerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the containerItem
     */
    omit?: containerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: containerItemInclude<ExtArgs> | null
  }


  /**
   * Model saleitem
   */

  export type AggregateSaleitem = {
    _count: SaleitemCountAggregateOutputType | null
    _avg: SaleitemAvgAggregateOutputType | null
    _sum: SaleitemSumAggregateOutputType | null
    _min: SaleitemMinAggregateOutputType | null
    _max: SaleitemMaxAggregateOutputType | null
  }

  export type SaleitemAvgAggregateOutputType = {
    id: number | null
    saleId: number | null
    stockId: number | null
    quantity: Decimal | null
    price: number | null
  }

  export type SaleitemSumAggregateOutputType = {
    id: number | null
    saleId: number | null
    stockId: number | null
    quantity: Decimal | null
    price: number | null
  }

  export type SaleitemMinAggregateOutputType = {
    id: number | null
    saleId: number | null
    stockId: number | null
    quantity: Decimal | null
    price: number | null
  }

  export type SaleitemMaxAggregateOutputType = {
    id: number | null
    saleId: number | null
    stockId: number | null
    quantity: Decimal | null
    price: number | null
  }

  export type SaleitemCountAggregateOutputType = {
    id: number
    saleId: number
    stockId: number
    quantity: number
    price: number
    _all: number
  }


  export type SaleitemAvgAggregateInputType = {
    id?: true
    saleId?: true
    stockId?: true
    quantity?: true
    price?: true
  }

  export type SaleitemSumAggregateInputType = {
    id?: true
    saleId?: true
    stockId?: true
    quantity?: true
    price?: true
  }

  export type SaleitemMinAggregateInputType = {
    id?: true
    saleId?: true
    stockId?: true
    quantity?: true
    price?: true
  }

  export type SaleitemMaxAggregateInputType = {
    id?: true
    saleId?: true
    stockId?: true
    quantity?: true
    price?: true
  }

  export type SaleitemCountAggregateInputType = {
    id?: true
    saleId?: true
    stockId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type SaleitemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saleitem to aggregate.
     */
    where?: saleitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saleitems to fetch.
     */
    orderBy?: saleitemOrderByWithRelationInput | saleitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saleitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saleitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saleitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saleitems
    **/
    _count?: true | SaleitemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleitemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleitemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleitemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleitemMaxAggregateInputType
  }

  export type GetSaleitemAggregateType<T extends SaleitemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleitem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleitem[P]>
      : GetScalarType<T[P], AggregateSaleitem[P]>
  }




  export type saleitemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saleitemWhereInput
    orderBy?: saleitemOrderByWithAggregationInput | saleitemOrderByWithAggregationInput[]
    by: SaleitemScalarFieldEnum[] | SaleitemScalarFieldEnum
    having?: saleitemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleitemCountAggregateInputType | true
    _avg?: SaleitemAvgAggregateInputType
    _sum?: SaleitemSumAggregateInputType
    _min?: SaleitemMinAggregateInputType
    _max?: SaleitemMaxAggregateInputType
  }

  export type SaleitemGroupByOutputType = {
    id: number
    saleId: number
    stockId: number
    quantity: Decimal
    price: number
    _count: SaleitemCountAggregateOutputType | null
    _avg: SaleitemAvgAggregateOutputType | null
    _sum: SaleitemSumAggregateOutputType | null
    _min: SaleitemMinAggregateOutputType | null
    _max: SaleitemMaxAggregateOutputType | null
  }

  type GetSaleitemGroupByPayload<T extends saleitemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleitemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleitemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleitemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleitemGroupByOutputType[P]>
        }
      >
    >


  export type saleitemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    stockId?: boolean
    quantity?: boolean
    price?: boolean
    sale?: boolean | saleDefaultArgs<ExtArgs>
    stock?: boolean | stockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleitem"]>



  export type saleitemSelectScalar = {
    id?: boolean
    saleId?: boolean
    stockId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type saleitemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "stockId" | "quantity" | "price", ExtArgs["result"]["saleitem"]>
  export type saleitemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | saleDefaultArgs<ExtArgs>
    stock?: boolean | stockDefaultArgs<ExtArgs>
  }

  export type $saleitemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saleitem"
    objects: {
      sale: Prisma.$salePayload<ExtArgs>
      stock: Prisma.$stockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saleId: number
      stockId: number
      quantity: Prisma.Decimal
      price: number
    }, ExtArgs["result"]["saleitem"]>
    composites: {}
  }

  type saleitemGetPayload<S extends boolean | null | undefined | saleitemDefaultArgs> = $Result.GetResult<Prisma.$saleitemPayload, S>

  type saleitemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saleitemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleitemCountAggregateInputType | true
    }

  export interface saleitemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saleitem'], meta: { name: 'saleitem' } }
    /**
     * Find zero or one Saleitem that matches the filter.
     * @param {saleitemFindUniqueArgs} args - Arguments to find a Saleitem
     * @example
     * // Get one Saleitem
     * const saleitem = await prisma.saleitem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saleitemFindUniqueArgs>(args: SelectSubset<T, saleitemFindUniqueArgs<ExtArgs>>): Prisma__saleitemClient<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saleitem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saleitemFindUniqueOrThrowArgs} args - Arguments to find a Saleitem
     * @example
     * // Get one Saleitem
     * const saleitem = await prisma.saleitem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saleitemFindUniqueOrThrowArgs>(args: SelectSubset<T, saleitemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saleitemClient<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saleitem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleitemFindFirstArgs} args - Arguments to find a Saleitem
     * @example
     * // Get one Saleitem
     * const saleitem = await prisma.saleitem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saleitemFindFirstArgs>(args?: SelectSubset<T, saleitemFindFirstArgs<ExtArgs>>): Prisma__saleitemClient<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saleitem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleitemFindFirstOrThrowArgs} args - Arguments to find a Saleitem
     * @example
     * // Get one Saleitem
     * const saleitem = await prisma.saleitem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saleitemFindFirstOrThrowArgs>(args?: SelectSubset<T, saleitemFindFirstOrThrowArgs<ExtArgs>>): Prisma__saleitemClient<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saleitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleitemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saleitems
     * const saleitems = await prisma.saleitem.findMany()
     * 
     * // Get first 10 Saleitems
     * const saleitems = await prisma.saleitem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleitemWithIdOnly = await prisma.saleitem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saleitemFindManyArgs>(args?: SelectSubset<T, saleitemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saleitem.
     * @param {saleitemCreateArgs} args - Arguments to create a Saleitem.
     * @example
     * // Create one Saleitem
     * const Saleitem = await prisma.saleitem.create({
     *   data: {
     *     // ... data to create a Saleitem
     *   }
     * })
     * 
     */
    create<T extends saleitemCreateArgs>(args: SelectSubset<T, saleitemCreateArgs<ExtArgs>>): Prisma__saleitemClient<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saleitems.
     * @param {saleitemCreateManyArgs} args - Arguments to create many Saleitems.
     * @example
     * // Create many Saleitems
     * const saleitem = await prisma.saleitem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saleitemCreateManyArgs>(args?: SelectSubset<T, saleitemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Saleitem.
     * @param {saleitemDeleteArgs} args - Arguments to delete one Saleitem.
     * @example
     * // Delete one Saleitem
     * const Saleitem = await prisma.saleitem.delete({
     *   where: {
     *     // ... filter to delete one Saleitem
     *   }
     * })
     * 
     */
    delete<T extends saleitemDeleteArgs>(args: SelectSubset<T, saleitemDeleteArgs<ExtArgs>>): Prisma__saleitemClient<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saleitem.
     * @param {saleitemUpdateArgs} args - Arguments to update one Saleitem.
     * @example
     * // Update one Saleitem
     * const saleitem = await prisma.saleitem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saleitemUpdateArgs>(args: SelectSubset<T, saleitemUpdateArgs<ExtArgs>>): Prisma__saleitemClient<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saleitems.
     * @param {saleitemDeleteManyArgs} args - Arguments to filter Saleitems to delete.
     * @example
     * // Delete a few Saleitems
     * const { count } = await prisma.saleitem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saleitemDeleteManyArgs>(args?: SelectSubset<T, saleitemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saleitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleitemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saleitems
     * const saleitem = await prisma.saleitem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saleitemUpdateManyArgs>(args: SelectSubset<T, saleitemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Saleitem.
     * @param {saleitemUpsertArgs} args - Arguments to update or create a Saleitem.
     * @example
     * // Update or create a Saleitem
     * const saleitem = await prisma.saleitem.upsert({
     *   create: {
     *     // ... data to create a Saleitem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saleitem we want to update
     *   }
     * })
     */
    upsert<T extends saleitemUpsertArgs>(args: SelectSubset<T, saleitemUpsertArgs<ExtArgs>>): Prisma__saleitemClient<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saleitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleitemCountArgs} args - Arguments to filter Saleitems to count.
     * @example
     * // Count the number of Saleitems
     * const count = await prisma.saleitem.count({
     *   where: {
     *     // ... the filter for the Saleitems we want to count
     *   }
     * })
    **/
    count<T extends saleitemCountArgs>(
      args?: Subset<T, saleitemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleitemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saleitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleitemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleitemAggregateArgs>(args: Subset<T, SaleitemAggregateArgs>): Prisma.PrismaPromise<GetSaleitemAggregateType<T>>

    /**
     * Group by Saleitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saleitemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saleitemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saleitemGroupByArgs['orderBy'] }
        : { orderBy?: saleitemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saleitemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleitemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saleitem model
   */
  readonly fields: saleitemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saleitem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saleitemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends saleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, saleDefaultArgs<ExtArgs>>): Prisma__saleClient<$Result.GetResult<Prisma.$salePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock<T extends stockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stockDefaultArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the saleitem model
   */
  interface saleitemFieldRefs {
    readonly id: FieldRef<"saleitem", 'Int'>
    readonly saleId: FieldRef<"saleitem", 'Int'>
    readonly stockId: FieldRef<"saleitem", 'Int'>
    readonly quantity: FieldRef<"saleitem", 'Decimal'>
    readonly price: FieldRef<"saleitem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * saleitem findUnique
   */
  export type saleitemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * Filter, which saleitem to fetch.
     */
    where: saleitemWhereUniqueInput
  }

  /**
   * saleitem findUniqueOrThrow
   */
  export type saleitemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * Filter, which saleitem to fetch.
     */
    where: saleitemWhereUniqueInput
  }

  /**
   * saleitem findFirst
   */
  export type saleitemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * Filter, which saleitem to fetch.
     */
    where?: saleitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saleitems to fetch.
     */
    orderBy?: saleitemOrderByWithRelationInput | saleitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saleitems.
     */
    cursor?: saleitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saleitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saleitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saleitems.
     */
    distinct?: SaleitemScalarFieldEnum | SaleitemScalarFieldEnum[]
  }

  /**
   * saleitem findFirstOrThrow
   */
  export type saleitemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * Filter, which saleitem to fetch.
     */
    where?: saleitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saleitems to fetch.
     */
    orderBy?: saleitemOrderByWithRelationInput | saleitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saleitems.
     */
    cursor?: saleitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saleitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saleitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saleitems.
     */
    distinct?: SaleitemScalarFieldEnum | SaleitemScalarFieldEnum[]
  }

  /**
   * saleitem findMany
   */
  export type saleitemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * Filter, which saleitems to fetch.
     */
    where?: saleitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saleitems to fetch.
     */
    orderBy?: saleitemOrderByWithRelationInput | saleitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saleitems.
     */
    cursor?: saleitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saleitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saleitems.
     */
    skip?: number
    distinct?: SaleitemScalarFieldEnum | SaleitemScalarFieldEnum[]
  }

  /**
   * saleitem create
   */
  export type saleitemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * The data needed to create a saleitem.
     */
    data: XOR<saleitemCreateInput, saleitemUncheckedCreateInput>
  }

  /**
   * saleitem createMany
   */
  export type saleitemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saleitems.
     */
    data: saleitemCreateManyInput | saleitemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * saleitem update
   */
  export type saleitemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * The data needed to update a saleitem.
     */
    data: XOR<saleitemUpdateInput, saleitemUncheckedUpdateInput>
    /**
     * Choose, which saleitem to update.
     */
    where: saleitemWhereUniqueInput
  }

  /**
   * saleitem updateMany
   */
  export type saleitemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saleitems.
     */
    data: XOR<saleitemUpdateManyMutationInput, saleitemUncheckedUpdateManyInput>
    /**
     * Filter which saleitems to update
     */
    where?: saleitemWhereInput
    /**
     * Limit how many saleitems to update.
     */
    limit?: number
  }

  /**
   * saleitem upsert
   */
  export type saleitemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * The filter to search for the saleitem to update in case it exists.
     */
    where: saleitemWhereUniqueInput
    /**
     * In case the saleitem found by the `where` argument doesn't exist, create a new saleitem with this data.
     */
    create: XOR<saleitemCreateInput, saleitemUncheckedCreateInput>
    /**
     * In case the saleitem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saleitemUpdateInput, saleitemUncheckedUpdateInput>
  }

  /**
   * saleitem delete
   */
  export type saleitemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    /**
     * Filter which saleitem to delete.
     */
    where: saleitemWhereUniqueInput
  }

  /**
   * saleitem deleteMany
   */
  export type saleitemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saleitems to delete
     */
    where?: saleitemWhereInput
    /**
     * Limit how many saleitems to delete.
     */
    limit?: number
  }

  /**
   * saleitem without action
   */
  export type saleitemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
  }


  /**
   * Model stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    id: number | null
    appPrice: Decimal | null
    costKsh: Decimal | null
    costUsd: Decimal | null
    fob: Decimal | null
    loading: Decimal | null
    landedCost: Decimal | null
    prevCostPb: Decimal | null
    priceKsh: Decimal | null
    priceUsd: Decimal | null
    profitPerBale: Decimal | null
    qty: Decimal | null
    wholesalePrice: Decimal | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
  }

  export type StockSumAggregateOutputType = {
    id: number | null
    appPrice: Decimal | null
    costKsh: Decimal | null
    costUsd: Decimal | null
    fob: Decimal | null
    loading: Decimal | null
    landedCost: Decimal | null
    prevCostPb: Decimal | null
    priceKsh: Decimal | null
    priceUsd: Decimal | null
    profitPerBale: Decimal | null
    qty: Decimal | null
    wholesalePrice: Decimal | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
  }

  export type StockMinAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    appPrice: Decimal | null
    bought: Date | null
    code: string | null
    costKsh: Decimal | null
    costUsd: Decimal | null
    etr: Date | null
    fob: Decimal | null
    loading: Decimal | null
    landedCost: Decimal | null
    name: string | null
    notes: string | null
    prevCostPb: Decimal | null
    priceKsh: Decimal | null
    priceUsd: Decimal | null
    profitPerBale: Decimal | null
    qty: Decimal | null
    supplier: string | null
    index: string | null
    wholesalePrice: Decimal | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
    lensCategory: string | null
    isDeleted: boolean | null
  }

  export type StockMaxAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    appPrice: Decimal | null
    bought: Date | null
    code: string | null
    costKsh: Decimal | null
    costUsd: Decimal | null
    etr: Date | null
    fob: Decimal | null
    loading: Decimal | null
    landedCost: Decimal | null
    name: string | null
    notes: string | null
    prevCostPb: Decimal | null
    priceKsh: Decimal | null
    priceUsd: Decimal | null
    profitPerBale: Decimal | null
    qty: Decimal | null
    supplier: string | null
    index: string | null
    wholesalePrice: Decimal | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
    lensCategory: string | null
    isDeleted: boolean | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    type: number
    createdAt: number
    updatedAt: number
    appPrice: number
    bought: number
    code: number
    costKsh: number
    costUsd: number
    etr: number
    fob: number
    loading: number
    landedCost: number
    name: number
    notes: number
    prevCostPb: number
    priceKsh: number
    priceUsd: number
    profitPerBale: number
    qty: number
    supplier: number
    index: number
    wholesalePrice: number
    sph: number
    cyl: number
    axis: number
    nearAdd: number
    lensCategory: number
    isDeleted: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    id?: true
    appPrice?: true
    costKsh?: true
    costUsd?: true
    fob?: true
    loading?: true
    landedCost?: true
    prevCostPb?: true
    priceKsh?: true
    priceUsd?: true
    profitPerBale?: true
    qty?: true
    wholesalePrice?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
  }

  export type StockSumAggregateInputType = {
    id?: true
    appPrice?: true
    costKsh?: true
    costUsd?: true
    fob?: true
    loading?: true
    landedCost?: true
    prevCostPb?: true
    priceKsh?: true
    priceUsd?: true
    profitPerBale?: true
    qty?: true
    wholesalePrice?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    appPrice?: true
    bought?: true
    code?: true
    costKsh?: true
    costUsd?: true
    etr?: true
    fob?: true
    loading?: true
    landedCost?: true
    name?: true
    notes?: true
    prevCostPb?: true
    priceKsh?: true
    priceUsd?: true
    profitPerBale?: true
    qty?: true
    supplier?: true
    index?: true
    wholesalePrice?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
    lensCategory?: true
    isDeleted?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    appPrice?: true
    bought?: true
    code?: true
    costKsh?: true
    costUsd?: true
    etr?: true
    fob?: true
    loading?: true
    landedCost?: true
    name?: true
    notes?: true
    prevCostPb?: true
    priceKsh?: true
    priceUsd?: true
    profitPerBale?: true
    qty?: true
    supplier?: true
    index?: true
    wholesalePrice?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
    lensCategory?: true
    isDeleted?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    appPrice?: true
    bought?: true
    code?: true
    costKsh?: true
    costUsd?: true
    etr?: true
    fob?: true
    loading?: true
    landedCost?: true
    name?: true
    notes?: true
    prevCostPb?: true
    priceKsh?: true
    priceUsd?: true
    profitPerBale?: true
    qty?: true
    supplier?: true
    index?: true
    wholesalePrice?: true
    sph?: true
    cyl?: true
    axis?: true
    nearAdd?: true
    lensCategory?: true
    isDeleted?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock to aggregate.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type stockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput
    orderBy?: stockOrderByWithAggregationInput | stockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: stockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: number
    type: string
    createdAt: Date
    updatedAt: Date
    appPrice: Decimal | null
    bought: Date | null
    code: string
    costKsh: Decimal | null
    costUsd: Decimal | null
    etr: Date | null
    fob: Decimal | null
    loading: Decimal | null
    landedCost: Decimal | null
    name: string
    notes: string | null
    prevCostPb: Decimal | null
    priceKsh: Decimal
    priceUsd: Decimal
    profitPerBale: Decimal | null
    qty: Decimal
    supplier: string | null
    index: string | null
    wholesalePrice: Decimal | null
    sph: Decimal | null
    cyl: Decimal | null
    axis: number | null
    nearAdd: Decimal | null
    lensCategory: string | null
    isDeleted: boolean
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type stockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appPrice?: boolean
    bought?: boolean
    code?: boolean
    costKsh?: boolean
    costUsd?: boolean
    etr?: boolean
    fob?: boolean
    loading?: boolean
    landedCost?: boolean
    name?: boolean
    notes?: boolean
    prevCostPb?: boolean
    priceKsh?: boolean
    priceUsd?: boolean
    profitPerBale?: boolean
    qty?: boolean
    supplier?: boolean
    index?: boolean
    wholesalePrice?: boolean
    sph?: boolean
    cyl?: boolean
    axis?: boolean
    nearAdd?: boolean
    lensCategory?: boolean
    isDeleted?: boolean
    saleitem?: boolean | stock$saleitemArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>



  export type stockSelectScalar = {
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appPrice?: boolean
    bought?: boolean
    code?: boolean
    costKsh?: boolean
    costUsd?: boolean
    etr?: boolean
    fob?: boolean
    loading?: boolean
    landedCost?: boolean
    name?: boolean
    notes?: boolean
    prevCostPb?: boolean
    priceKsh?: boolean
    priceUsd?: boolean
    profitPerBale?: boolean
    qty?: boolean
    supplier?: boolean
    index?: boolean
    wholesalePrice?: boolean
    sph?: boolean
    cyl?: boolean
    axis?: boolean
    nearAdd?: boolean
    lensCategory?: boolean
    isDeleted?: boolean
  }

  export type stockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "createdAt" | "updatedAt" | "appPrice" | "bought" | "code" | "costKsh" | "costUsd" | "etr" | "fob" | "loading" | "landedCost" | "name" | "notes" | "prevCostPb" | "priceKsh" | "priceUsd" | "profitPerBale" | "qty" | "supplier" | "index" | "wholesalePrice" | "sph" | "cyl" | "axis" | "nearAdd" | "lensCategory" | "isDeleted", ExtArgs["result"]["stock"]>
  export type stockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleitem?: boolean | stock$saleitemArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $stockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock"
    objects: {
      saleitem: Prisma.$saleitemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      createdAt: Date
      updatedAt: Date
      appPrice: Prisma.Decimal | null
      bought: Date | null
      code: string
      costKsh: Prisma.Decimal | null
      costUsd: Prisma.Decimal | null
      etr: Date | null
      fob: Prisma.Decimal | null
      loading: Prisma.Decimal | null
      landedCost: Prisma.Decimal | null
      name: string
      notes: string | null
      prevCostPb: Prisma.Decimal | null
      priceKsh: Prisma.Decimal
      priceUsd: Prisma.Decimal
      profitPerBale: Prisma.Decimal | null
      qty: Prisma.Decimal
      supplier: string | null
      index: string | null
      wholesalePrice: Prisma.Decimal | null
      sph: Prisma.Decimal | null
      cyl: Prisma.Decimal | null
      axis: number | null
      nearAdd: Prisma.Decimal | null
      lensCategory: string | null
      isDeleted: boolean
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type stockGetPayload<S extends boolean | null | undefined | stockDefaultArgs> = $Result.GetResult<Prisma.$stockPayload, S>

  type stockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface stockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock'], meta: { name: 'stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {stockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stockFindUniqueArgs>(args: SelectSubset<T, stockFindUniqueArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stockFindUniqueOrThrowArgs>(args: SelectSubset<T, stockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stockFindFirstArgs>(args?: SelectSubset<T, stockFindFirstArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stockFindFirstOrThrowArgs>(args?: SelectSubset<T, stockFindFirstOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stockFindManyArgs>(args?: SelectSubset<T, stockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {stockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends stockCreateArgs>(args: SelectSubset<T, stockCreateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {stockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stockCreateManyArgs>(args?: SelectSubset<T, stockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stock.
     * @param {stockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends stockDeleteArgs>(args: SelectSubset<T, stockDeleteArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {stockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stockUpdateArgs>(args: SelectSubset<T, stockUpdateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {stockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stockDeleteManyArgs>(args?: SelectSubset<T, stockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stockUpdateManyArgs>(args: SelectSubset<T, stockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stock.
     * @param {stockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends stockUpsertArgs>(args: SelectSubset<T, stockUpsertArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends stockCountArgs>(
      args?: Subset<T, stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stockGroupByArgs['orderBy'] }
        : { orderBy?: stockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock model
   */
  readonly fields: stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saleitem<T extends stock$saleitemArgs<ExtArgs> = {}>(args?: Subset<T, stock$saleitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saleitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock model
   */
  interface stockFieldRefs {
    readonly id: FieldRef<"stock", 'Int'>
    readonly type: FieldRef<"stock", 'String'>
    readonly createdAt: FieldRef<"stock", 'DateTime'>
    readonly updatedAt: FieldRef<"stock", 'DateTime'>
    readonly appPrice: FieldRef<"stock", 'Decimal'>
    readonly bought: FieldRef<"stock", 'DateTime'>
    readonly code: FieldRef<"stock", 'String'>
    readonly costKsh: FieldRef<"stock", 'Decimal'>
    readonly costUsd: FieldRef<"stock", 'Decimal'>
    readonly etr: FieldRef<"stock", 'DateTime'>
    readonly fob: FieldRef<"stock", 'Decimal'>
    readonly loading: FieldRef<"stock", 'Decimal'>
    readonly landedCost: FieldRef<"stock", 'Decimal'>
    readonly name: FieldRef<"stock", 'String'>
    readonly notes: FieldRef<"stock", 'String'>
    readonly prevCostPb: FieldRef<"stock", 'Decimal'>
    readonly priceKsh: FieldRef<"stock", 'Decimal'>
    readonly priceUsd: FieldRef<"stock", 'Decimal'>
    readonly profitPerBale: FieldRef<"stock", 'Decimal'>
    readonly qty: FieldRef<"stock", 'Decimal'>
    readonly supplier: FieldRef<"stock", 'String'>
    readonly index: FieldRef<"stock", 'String'>
    readonly wholesalePrice: FieldRef<"stock", 'Decimal'>
    readonly sph: FieldRef<"stock", 'Decimal'>
    readonly cyl: FieldRef<"stock", 'Decimal'>
    readonly axis: FieldRef<"stock", 'Int'>
    readonly nearAdd: FieldRef<"stock", 'Decimal'>
    readonly lensCategory: FieldRef<"stock", 'String'>
    readonly isDeleted: FieldRef<"stock", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * stock findUnique
   */
  export type stockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findUniqueOrThrow
   */
  export type stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findFirst
   */
  export type stockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findFirstOrThrow
   */
  export type stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findMany
   */
  export type stockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock create
   */
  export type stockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The data needed to create a stock.
     */
    data: XOR<stockCreateInput, stockUncheckedCreateInput>
  }

  /**
   * stock createMany
   */
  export type stockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock update
   */
  export type stockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The data needed to update a stock.
     */
    data: XOR<stockUpdateInput, stockUncheckedUpdateInput>
    /**
     * Choose, which stock to update.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock updateMany
   */
  export type stockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
  }

  /**
   * stock upsert
   */
  export type stockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The filter to search for the stock to update in case it exists.
     */
    where: stockWhereUniqueInput
    /**
     * In case the stock found by the `where` argument doesn't exist, create a new stock with this data.
     */
    create: XOR<stockCreateInput, stockUncheckedCreateInput>
    /**
     * In case the stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stockUpdateInput, stockUncheckedUpdateInput>
  }

  /**
   * stock delete
   */
  export type stockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter which stock to delete.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock deleteMany
   */
  export type stockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to delete.
     */
    limit?: number
  }

  /**
   * stock.saleitem
   */
  export type stock$saleitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saleitem
     */
    select?: saleitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saleitem
     */
    omit?: saleitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saleitemInclude<ExtArgs> | null
    where?: saleitemWhereInput
    orderBy?: saleitemOrderByWithRelationInput | saleitemOrderByWithRelationInput[]
    cursor?: saleitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleitemScalarFieldEnum | SaleitemScalarFieldEnum[]
  }

  /**
   * stock without action
   */
  export type stockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
  }


  /**
   * Model supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplier to aggregate.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type supplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput
    orderBy?: supplierOrderByWithAggregationInput | supplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: supplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends supplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type supplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>



  export type supplierSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type supplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>

  export type $supplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplier"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type supplierGetPayload<S extends boolean | null | undefined | supplierDefaultArgs> = $Result.GetResult<Prisma.$supplierPayload, S>

  type supplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface supplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplier'], meta: { name: 'supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {supplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supplierFindUniqueArgs>(args: SelectSubset<T, supplierFindUniqueArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supplierFindUniqueOrThrowArgs>(args: SelectSubset<T, supplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supplierFindFirstArgs>(args?: SelectSubset<T, supplierFindFirstArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supplierFindFirstOrThrowArgs>(args?: SelectSubset<T, supplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends supplierFindManyArgs>(args?: SelectSubset<T, supplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {supplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends supplierCreateArgs>(args: SelectSubset<T, supplierCreateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {supplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supplierCreateManyArgs>(args?: SelectSubset<T, supplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supplier.
     * @param {supplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends supplierDeleteArgs>(args: SelectSubset<T, supplierDeleteArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {supplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supplierUpdateArgs>(args: SelectSubset<T, supplierUpdateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {supplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supplierDeleteManyArgs>(args?: SelectSubset<T, supplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supplierUpdateManyArgs>(args: SelectSubset<T, supplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {supplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends supplierUpsertArgs>(args: SelectSubset<T, supplierUpsertArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends supplierCountArgs>(
      args?: Subset<T, supplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends supplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplierGroupByArgs['orderBy'] }
        : { orderBy?: supplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, supplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplier model
   */
  readonly fields: supplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the supplier model
   */
  interface supplierFieldRefs {
    readonly id: FieldRef<"supplier", 'Int'>
    readonly name: FieldRef<"supplier", 'String'>
    readonly email: FieldRef<"supplier", 'String'>
    readonly phone: FieldRef<"supplier", 'String'>
    readonly address: FieldRef<"supplier", 'String'>
    readonly createdAt: FieldRef<"supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * supplier findUnique
   */
  export type supplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findUniqueOrThrow
   */
  export type supplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findFirst
   */
  export type supplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findFirstOrThrow
   */
  export type supplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findMany
   */
  export type supplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier create
   */
  export type supplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data needed to create a supplier.
     */
    data: XOR<supplierCreateInput, supplierUncheckedCreateInput>
  }

  /**
   * supplier createMany
   */
  export type supplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier update
   */
  export type supplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data needed to update a supplier.
     */
    data: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
    /**
     * Choose, which supplier to update.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier updateMany
   */
  export type supplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier upsert
   */
  export type supplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The filter to search for the supplier to update in case it exists.
     */
    where: supplierWhereUniqueInput
    /**
     * In case the supplier found by the `where` argument doesn't exist, create a new supplier with this data.
     */
    create: XOR<supplierCreateInput, supplierUncheckedCreateInput>
    /**
     * In case the supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
  }

  /**
   * supplier delete
   */
  export type supplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter which supplier to delete.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier deleteMany
   */
  export type supplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * supplier without action
   */
  export type supplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    designation: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    designation: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    designation: number
    password: number
    createdAt: number
    updatedAt: number
    phone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    designation?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    designation?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    designation?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    designation: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    phone: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    designation?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    designation?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "designation" | "password" | "createdAt" | "updatedAt" | "phone", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      designation: string | null
      password: string
      createdAt: Date
      updatedAt: Date
      phone: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly designation: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly phone: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model jobcard
   */

  export type AggregateJobcard = {
    _count: JobcardCountAggregateOutputType | null
    _avg: JobcardAvgAggregateOutputType | null
    _sum: JobcardSumAggregateOutputType | null
    _min: JobcardMinAggregateOutputType | null
    _max: JobcardMaxAggregateOutputType | null
  }

  export type JobcardAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    rSph: Decimal | null
    rCyl: Decimal | null
    rAxis: number | null
    rLensStockId: number | null
    rLensPrice: Decimal | null
    lSph: Decimal | null
    lCyl: Decimal | null
    lAxis: number | null
    lLensStockId: number | null
    lLensPrice: Decimal | null
    frameQty: number | null
    framePrice: Decimal | null
    frameStockId: number | null
    total: Decimal | null
    consultation: Decimal | null
    discount: Decimal | null
    advance: Decimal | null
    balance: Decimal | null
  }

  export type JobcardSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    rSph: Decimal | null
    rCyl: Decimal | null
    rAxis: number | null
    rLensStockId: number | null
    rLensPrice: Decimal | null
    lSph: Decimal | null
    lCyl: Decimal | null
    lAxis: number | null
    lLensStockId: number | null
    lLensPrice: Decimal | null
    frameQty: number | null
    framePrice: Decimal | null
    frameStockId: number | null
    total: Decimal | null
    consultation: Decimal | null
    discount: Decimal | null
    advance: Decimal | null
    balance: Decimal | null
  }

  export type JobcardMinAggregateOutputType = {
    id: number | null
    jobCardNumber: string | null
    patientId: number | null
    insuranceCompany: string | null
    notes: string | null
    date: Date | null
    rSph: Decimal | null
    rCyl: Decimal | null
    rAxis: number | null
    rPrism: string | null
    rBase: string | null
    rLens: string | null
    rLensStockId: number | null
    rLensPrice: Decimal | null
    lSph: Decimal | null
    lCyl: Decimal | null
    lAxis: number | null
    lPrism: string | null
    lBase: string | null
    lLens: string | null
    lLensStockId: number | null
    lLensPrice: Decimal | null
    nearAdd: string | null
    distPd: string | null
    nearPd: string | null
    heights: string | null
    frame: string | null
    frameQty: number | null
    framePrice: Decimal | null
    frameStockId: number | null
    total: Decimal | null
    consultation: Decimal | null
    discount: Decimal | null
    advance: Decimal | null
    balance: Decimal | null
    jobDelDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobcardMaxAggregateOutputType = {
    id: number | null
    jobCardNumber: string | null
    patientId: number | null
    insuranceCompany: string | null
    notes: string | null
    date: Date | null
    rSph: Decimal | null
    rCyl: Decimal | null
    rAxis: number | null
    rPrism: string | null
    rBase: string | null
    rLens: string | null
    rLensStockId: number | null
    rLensPrice: Decimal | null
    lSph: Decimal | null
    lCyl: Decimal | null
    lAxis: number | null
    lPrism: string | null
    lBase: string | null
    lLens: string | null
    lLensStockId: number | null
    lLensPrice: Decimal | null
    nearAdd: string | null
    distPd: string | null
    nearPd: string | null
    heights: string | null
    frame: string | null
    frameQty: number | null
    framePrice: Decimal | null
    frameStockId: number | null
    total: Decimal | null
    consultation: Decimal | null
    discount: Decimal | null
    advance: Decimal | null
    balance: Decimal | null
    jobDelDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobcardCountAggregateOutputType = {
    id: number
    jobCardNumber: number
    patientId: number
    insuranceCompany: number
    notes: number
    date: number
    rSph: number
    rCyl: number
    rAxis: number
    rPrism: number
    rBase: number
    rLens: number
    rLensStockId: number
    rLensPrice: number
    lSph: number
    lCyl: number
    lAxis: number
    lPrism: number
    lBase: number
    lLens: number
    lLensStockId: number
    lLensPrice: number
    nearAdd: number
    distPd: number
    nearPd: number
    heights: number
    frame: number
    frameQty: number
    framePrice: number
    frameStockId: number
    total: number
    consultation: number
    discount: number
    advance: number
    balance: number
    jobDelDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobcardAvgAggregateInputType = {
    id?: true
    patientId?: true
    rSph?: true
    rCyl?: true
    rAxis?: true
    rLensStockId?: true
    rLensPrice?: true
    lSph?: true
    lCyl?: true
    lAxis?: true
    lLensStockId?: true
    lLensPrice?: true
    frameQty?: true
    framePrice?: true
    frameStockId?: true
    total?: true
    consultation?: true
    discount?: true
    advance?: true
    balance?: true
  }

  export type JobcardSumAggregateInputType = {
    id?: true
    patientId?: true
    rSph?: true
    rCyl?: true
    rAxis?: true
    rLensStockId?: true
    rLensPrice?: true
    lSph?: true
    lCyl?: true
    lAxis?: true
    lLensStockId?: true
    lLensPrice?: true
    frameQty?: true
    framePrice?: true
    frameStockId?: true
    total?: true
    consultation?: true
    discount?: true
    advance?: true
    balance?: true
  }

  export type JobcardMinAggregateInputType = {
    id?: true
    jobCardNumber?: true
    patientId?: true
    insuranceCompany?: true
    notes?: true
    date?: true
    rSph?: true
    rCyl?: true
    rAxis?: true
    rPrism?: true
    rBase?: true
    rLens?: true
    rLensStockId?: true
    rLensPrice?: true
    lSph?: true
    lCyl?: true
    lAxis?: true
    lPrism?: true
    lBase?: true
    lLens?: true
    lLensStockId?: true
    lLensPrice?: true
    nearAdd?: true
    distPd?: true
    nearPd?: true
    heights?: true
    frame?: true
    frameQty?: true
    framePrice?: true
    frameStockId?: true
    total?: true
    consultation?: true
    discount?: true
    advance?: true
    balance?: true
    jobDelDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobcardMaxAggregateInputType = {
    id?: true
    jobCardNumber?: true
    patientId?: true
    insuranceCompany?: true
    notes?: true
    date?: true
    rSph?: true
    rCyl?: true
    rAxis?: true
    rPrism?: true
    rBase?: true
    rLens?: true
    rLensStockId?: true
    rLensPrice?: true
    lSph?: true
    lCyl?: true
    lAxis?: true
    lPrism?: true
    lBase?: true
    lLens?: true
    lLensStockId?: true
    lLensPrice?: true
    nearAdd?: true
    distPd?: true
    nearPd?: true
    heights?: true
    frame?: true
    frameQty?: true
    framePrice?: true
    frameStockId?: true
    total?: true
    consultation?: true
    discount?: true
    advance?: true
    balance?: true
    jobDelDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobcardCountAggregateInputType = {
    id?: true
    jobCardNumber?: true
    patientId?: true
    insuranceCompany?: true
    notes?: true
    date?: true
    rSph?: true
    rCyl?: true
    rAxis?: true
    rPrism?: true
    rBase?: true
    rLens?: true
    rLensStockId?: true
    rLensPrice?: true
    lSph?: true
    lCyl?: true
    lAxis?: true
    lPrism?: true
    lBase?: true
    lLens?: true
    lLensStockId?: true
    lLensPrice?: true
    nearAdd?: true
    distPd?: true
    nearPd?: true
    heights?: true
    frame?: true
    frameQty?: true
    framePrice?: true
    frameStockId?: true
    total?: true
    consultation?: true
    discount?: true
    advance?: true
    balance?: true
    jobDelDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobcardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobcard to aggregate.
     */
    where?: jobcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobcards to fetch.
     */
    orderBy?: jobcardOrderByWithRelationInput | jobcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobcards
    **/
    _count?: true | JobcardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobcardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobcardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobcardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobcardMaxAggregateInputType
  }

  export type GetJobcardAggregateType<T extends JobcardAggregateArgs> = {
        [P in keyof T & keyof AggregateJobcard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobcard[P]>
      : GetScalarType<T[P], AggregateJobcard[P]>
  }




  export type jobcardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobcardWhereInput
    orderBy?: jobcardOrderByWithAggregationInput | jobcardOrderByWithAggregationInput[]
    by: JobcardScalarFieldEnum[] | JobcardScalarFieldEnum
    having?: jobcardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobcardCountAggregateInputType | true
    _avg?: JobcardAvgAggregateInputType
    _sum?: JobcardSumAggregateInputType
    _min?: JobcardMinAggregateInputType
    _max?: JobcardMaxAggregateInputType
  }

  export type JobcardGroupByOutputType = {
    id: number
    jobCardNumber: string
    patientId: number
    insuranceCompany: string | null
    notes: string | null
    date: Date
    rSph: Decimal | null
    rCyl: Decimal | null
    rAxis: number | null
    rPrism: string | null
    rBase: string | null
    rLens: string | null
    rLensStockId: number | null
    rLensPrice: Decimal | null
    lSph: Decimal | null
    lCyl: Decimal | null
    lAxis: number | null
    lPrism: string | null
    lBase: string | null
    lLens: string | null
    lLensStockId: number | null
    lLensPrice: Decimal | null
    nearAdd: string | null
    distPd: string | null
    nearPd: string | null
    heights: string | null
    frame: string | null
    frameQty: number | null
    framePrice: Decimal | null
    frameStockId: number | null
    total: Decimal
    consultation: Decimal
    discount: Decimal
    advance: Decimal
    balance: Decimal
    jobDelDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: JobcardCountAggregateOutputType | null
    _avg: JobcardAvgAggregateOutputType | null
    _sum: JobcardSumAggregateOutputType | null
    _min: JobcardMinAggregateOutputType | null
    _max: JobcardMaxAggregateOutputType | null
  }

  type GetJobcardGroupByPayload<T extends jobcardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobcardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobcardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobcardGroupByOutputType[P]>
            : GetScalarType<T[P], JobcardGroupByOutputType[P]>
        }
      >
    >


  export type jobcardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobCardNumber?: boolean
    patientId?: boolean
    insuranceCompany?: boolean
    notes?: boolean
    date?: boolean
    rSph?: boolean
    rCyl?: boolean
    rAxis?: boolean
    rPrism?: boolean
    rBase?: boolean
    rLens?: boolean
    rLensStockId?: boolean
    rLensPrice?: boolean
    lSph?: boolean
    lCyl?: boolean
    lAxis?: boolean
    lPrism?: boolean
    lBase?: boolean
    lLens?: boolean
    lLensStockId?: boolean
    lLensPrice?: boolean
    nearAdd?: boolean
    distPd?: boolean
    nearPd?: boolean
    heights?: boolean
    frame?: boolean
    frameQty?: boolean
    framePrice?: boolean
    frameStockId?: boolean
    total?: boolean
    consultation?: boolean
    discount?: boolean
    advance?: boolean
    balance?: boolean
    jobDelDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobcard"]>



  export type jobcardSelectScalar = {
    id?: boolean
    jobCardNumber?: boolean
    patientId?: boolean
    insuranceCompany?: boolean
    notes?: boolean
    date?: boolean
    rSph?: boolean
    rCyl?: boolean
    rAxis?: boolean
    rPrism?: boolean
    rBase?: boolean
    rLens?: boolean
    rLensStockId?: boolean
    rLensPrice?: boolean
    lSph?: boolean
    lCyl?: boolean
    lAxis?: boolean
    lPrism?: boolean
    lBase?: boolean
    lLens?: boolean
    lLensStockId?: boolean
    lLensPrice?: boolean
    nearAdd?: boolean
    distPd?: boolean
    nearPd?: boolean
    heights?: boolean
    frame?: boolean
    frameQty?: boolean
    framePrice?: boolean
    frameStockId?: boolean
    total?: boolean
    consultation?: boolean
    discount?: boolean
    advance?: boolean
    balance?: boolean
    jobDelDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type jobcardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobCardNumber" | "patientId" | "insuranceCompany" | "notes" | "date" | "rSph" | "rCyl" | "rAxis" | "rPrism" | "rBase" | "rLens" | "rLensStockId" | "rLensPrice" | "lSph" | "lCyl" | "lAxis" | "lPrism" | "lBase" | "lLens" | "lLensStockId" | "lLensPrice" | "nearAdd" | "distPd" | "nearPd" | "heights" | "frame" | "frameQty" | "framePrice" | "frameStockId" | "total" | "consultation" | "discount" | "advance" | "balance" | "jobDelDate" | "createdAt" | "updatedAt", ExtArgs["result"]["jobcard"]>
  export type jobcardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }

  export type $jobcardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobcard"
    objects: {
      patient: Prisma.$patientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobCardNumber: string
      patientId: number
      insuranceCompany: string | null
      notes: string | null
      date: Date
      rSph: Prisma.Decimal | null
      rCyl: Prisma.Decimal | null
      rAxis: number | null
      rPrism: string | null
      rBase: string | null
      rLens: string | null
      rLensStockId: number | null
      rLensPrice: Prisma.Decimal | null
      lSph: Prisma.Decimal | null
      lCyl: Prisma.Decimal | null
      lAxis: number | null
      lPrism: string | null
      lBase: string | null
      lLens: string | null
      lLensStockId: number | null
      lLensPrice: Prisma.Decimal | null
      nearAdd: string | null
      distPd: string | null
      nearPd: string | null
      heights: string | null
      frame: string | null
      frameQty: number | null
      framePrice: Prisma.Decimal | null
      frameStockId: number | null
      total: Prisma.Decimal
      consultation: Prisma.Decimal
      discount: Prisma.Decimal
      advance: Prisma.Decimal
      balance: Prisma.Decimal
      jobDelDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobcard"]>
    composites: {}
  }

  type jobcardGetPayload<S extends boolean | null | undefined | jobcardDefaultArgs> = $Result.GetResult<Prisma.$jobcardPayload, S>

  type jobcardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobcardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobcardCountAggregateInputType | true
    }

  export interface jobcardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobcard'], meta: { name: 'jobcard' } }
    /**
     * Find zero or one Jobcard that matches the filter.
     * @param {jobcardFindUniqueArgs} args - Arguments to find a Jobcard
     * @example
     * // Get one Jobcard
     * const jobcard = await prisma.jobcard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobcardFindUniqueArgs>(args: SelectSubset<T, jobcardFindUniqueArgs<ExtArgs>>): Prisma__jobcardClient<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobcard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobcardFindUniqueOrThrowArgs} args - Arguments to find a Jobcard
     * @example
     * // Get one Jobcard
     * const jobcard = await prisma.jobcard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobcardFindUniqueOrThrowArgs>(args: SelectSubset<T, jobcardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobcardClient<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobcard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobcardFindFirstArgs} args - Arguments to find a Jobcard
     * @example
     * // Get one Jobcard
     * const jobcard = await prisma.jobcard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobcardFindFirstArgs>(args?: SelectSubset<T, jobcardFindFirstArgs<ExtArgs>>): Prisma__jobcardClient<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobcard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobcardFindFirstOrThrowArgs} args - Arguments to find a Jobcard
     * @example
     * // Get one Jobcard
     * const jobcard = await prisma.jobcard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobcardFindFirstOrThrowArgs>(args?: SelectSubset<T, jobcardFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobcardClient<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobcards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobcardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobcards
     * const jobcards = await prisma.jobcard.findMany()
     * 
     * // Get first 10 Jobcards
     * const jobcards = await prisma.jobcard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobcardWithIdOnly = await prisma.jobcard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobcardFindManyArgs>(args?: SelectSubset<T, jobcardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobcard.
     * @param {jobcardCreateArgs} args - Arguments to create a Jobcard.
     * @example
     * // Create one Jobcard
     * const Jobcard = await prisma.jobcard.create({
     *   data: {
     *     // ... data to create a Jobcard
     *   }
     * })
     * 
     */
    create<T extends jobcardCreateArgs>(args: SelectSubset<T, jobcardCreateArgs<ExtArgs>>): Prisma__jobcardClient<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobcards.
     * @param {jobcardCreateManyArgs} args - Arguments to create many Jobcards.
     * @example
     * // Create many Jobcards
     * const jobcard = await prisma.jobcard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobcardCreateManyArgs>(args?: SelectSubset<T, jobcardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobcard.
     * @param {jobcardDeleteArgs} args - Arguments to delete one Jobcard.
     * @example
     * // Delete one Jobcard
     * const Jobcard = await prisma.jobcard.delete({
     *   where: {
     *     // ... filter to delete one Jobcard
     *   }
     * })
     * 
     */
    delete<T extends jobcardDeleteArgs>(args: SelectSubset<T, jobcardDeleteArgs<ExtArgs>>): Prisma__jobcardClient<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobcard.
     * @param {jobcardUpdateArgs} args - Arguments to update one Jobcard.
     * @example
     * // Update one Jobcard
     * const jobcard = await prisma.jobcard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobcardUpdateArgs>(args: SelectSubset<T, jobcardUpdateArgs<ExtArgs>>): Prisma__jobcardClient<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobcards.
     * @param {jobcardDeleteManyArgs} args - Arguments to filter Jobcards to delete.
     * @example
     * // Delete a few Jobcards
     * const { count } = await prisma.jobcard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobcardDeleteManyArgs>(args?: SelectSubset<T, jobcardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobcardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobcards
     * const jobcard = await prisma.jobcard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobcardUpdateManyArgs>(args: SelectSubset<T, jobcardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobcard.
     * @param {jobcardUpsertArgs} args - Arguments to update or create a Jobcard.
     * @example
     * // Update or create a Jobcard
     * const jobcard = await prisma.jobcard.upsert({
     *   create: {
     *     // ... data to create a Jobcard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobcard we want to update
     *   }
     * })
     */
    upsert<T extends jobcardUpsertArgs>(args: SelectSubset<T, jobcardUpsertArgs<ExtArgs>>): Prisma__jobcardClient<$Result.GetResult<Prisma.$jobcardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobcardCountArgs} args - Arguments to filter Jobcards to count.
     * @example
     * // Count the number of Jobcards
     * const count = await prisma.jobcard.count({
     *   where: {
     *     // ... the filter for the Jobcards we want to count
     *   }
     * })
    **/
    count<T extends jobcardCountArgs>(
      args?: Subset<T, jobcardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobcardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobcardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobcardAggregateArgs>(args: Subset<T, JobcardAggregateArgs>): Prisma.PrismaPromise<GetJobcardAggregateType<T>>

    /**
     * Group by Jobcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobcardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobcardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobcardGroupByArgs['orderBy'] }
        : { orderBy?: jobcardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobcardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobcardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobcard model
   */
  readonly fields: jobcardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobcard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobcardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends patientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientDefaultArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jobcard model
   */
  interface jobcardFieldRefs {
    readonly id: FieldRef<"jobcard", 'Int'>
    readonly jobCardNumber: FieldRef<"jobcard", 'String'>
    readonly patientId: FieldRef<"jobcard", 'Int'>
    readonly insuranceCompany: FieldRef<"jobcard", 'String'>
    readonly notes: FieldRef<"jobcard", 'String'>
    readonly date: FieldRef<"jobcard", 'DateTime'>
    readonly rSph: FieldRef<"jobcard", 'Decimal'>
    readonly rCyl: FieldRef<"jobcard", 'Decimal'>
    readonly rAxis: FieldRef<"jobcard", 'Int'>
    readonly rPrism: FieldRef<"jobcard", 'String'>
    readonly rBase: FieldRef<"jobcard", 'String'>
    readonly rLens: FieldRef<"jobcard", 'String'>
    readonly rLensStockId: FieldRef<"jobcard", 'Int'>
    readonly rLensPrice: FieldRef<"jobcard", 'Decimal'>
    readonly lSph: FieldRef<"jobcard", 'Decimal'>
    readonly lCyl: FieldRef<"jobcard", 'Decimal'>
    readonly lAxis: FieldRef<"jobcard", 'Int'>
    readonly lPrism: FieldRef<"jobcard", 'String'>
    readonly lBase: FieldRef<"jobcard", 'String'>
    readonly lLens: FieldRef<"jobcard", 'String'>
    readonly lLensStockId: FieldRef<"jobcard", 'Int'>
    readonly lLensPrice: FieldRef<"jobcard", 'Decimal'>
    readonly nearAdd: FieldRef<"jobcard", 'String'>
    readonly distPd: FieldRef<"jobcard", 'String'>
    readonly nearPd: FieldRef<"jobcard", 'String'>
    readonly heights: FieldRef<"jobcard", 'String'>
    readonly frame: FieldRef<"jobcard", 'String'>
    readonly frameQty: FieldRef<"jobcard", 'Int'>
    readonly framePrice: FieldRef<"jobcard", 'Decimal'>
    readonly frameStockId: FieldRef<"jobcard", 'Int'>
    readonly total: FieldRef<"jobcard", 'Decimal'>
    readonly consultation: FieldRef<"jobcard", 'Decimal'>
    readonly discount: FieldRef<"jobcard", 'Decimal'>
    readonly advance: FieldRef<"jobcard", 'Decimal'>
    readonly balance: FieldRef<"jobcard", 'Decimal'>
    readonly jobDelDate: FieldRef<"jobcard", 'DateTime'>
    readonly createdAt: FieldRef<"jobcard", 'DateTime'>
    readonly updatedAt: FieldRef<"jobcard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jobcard findUnique
   */
  export type jobcardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * Filter, which jobcard to fetch.
     */
    where: jobcardWhereUniqueInput
  }

  /**
   * jobcard findUniqueOrThrow
   */
  export type jobcardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * Filter, which jobcard to fetch.
     */
    where: jobcardWhereUniqueInput
  }

  /**
   * jobcard findFirst
   */
  export type jobcardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * Filter, which jobcard to fetch.
     */
    where?: jobcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobcards to fetch.
     */
    orderBy?: jobcardOrderByWithRelationInput | jobcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobcards.
     */
    cursor?: jobcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobcards.
     */
    distinct?: JobcardScalarFieldEnum | JobcardScalarFieldEnum[]
  }

  /**
   * jobcard findFirstOrThrow
   */
  export type jobcardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * Filter, which jobcard to fetch.
     */
    where?: jobcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobcards to fetch.
     */
    orderBy?: jobcardOrderByWithRelationInput | jobcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobcards.
     */
    cursor?: jobcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobcards.
     */
    distinct?: JobcardScalarFieldEnum | JobcardScalarFieldEnum[]
  }

  /**
   * jobcard findMany
   */
  export type jobcardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * Filter, which jobcards to fetch.
     */
    where?: jobcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobcards to fetch.
     */
    orderBy?: jobcardOrderByWithRelationInput | jobcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobcards.
     */
    cursor?: jobcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobcards.
     */
    skip?: number
    distinct?: JobcardScalarFieldEnum | JobcardScalarFieldEnum[]
  }

  /**
   * jobcard create
   */
  export type jobcardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * The data needed to create a jobcard.
     */
    data: XOR<jobcardCreateInput, jobcardUncheckedCreateInput>
  }

  /**
   * jobcard createMany
   */
  export type jobcardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobcards.
     */
    data: jobcardCreateManyInput | jobcardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobcard update
   */
  export type jobcardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * The data needed to update a jobcard.
     */
    data: XOR<jobcardUpdateInput, jobcardUncheckedUpdateInput>
    /**
     * Choose, which jobcard to update.
     */
    where: jobcardWhereUniqueInput
  }

  /**
   * jobcard updateMany
   */
  export type jobcardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobcards.
     */
    data: XOR<jobcardUpdateManyMutationInput, jobcardUncheckedUpdateManyInput>
    /**
     * Filter which jobcards to update
     */
    where?: jobcardWhereInput
    /**
     * Limit how many jobcards to update.
     */
    limit?: number
  }

  /**
   * jobcard upsert
   */
  export type jobcardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * The filter to search for the jobcard to update in case it exists.
     */
    where: jobcardWhereUniqueInput
    /**
     * In case the jobcard found by the `where` argument doesn't exist, create a new jobcard with this data.
     */
    create: XOR<jobcardCreateInput, jobcardUncheckedCreateInput>
    /**
     * In case the jobcard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobcardUpdateInput, jobcardUncheckedUpdateInput>
  }

  /**
   * jobcard delete
   */
  export type jobcardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
    /**
     * Filter which jobcard to delete.
     */
    where: jobcardWhereUniqueInput
  }

  /**
   * jobcard deleteMany
   */
  export type jobcardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobcards to delete
     */
    where?: jobcardWhereInput
    /**
     * Limit how many jobcards to delete.
     */
    limit?: number
  }

  /**
   * jobcard without action
   */
  export type jobcardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobcard
     */
    select?: jobcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobcard
     */
    omit?: jobcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobcardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    category: 'category',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    dob: 'dob',
    gender: 'gender',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    patientId: 'patientId',
    referenceNumber: 'referenceNumber',
    etimsReceipt: 'etimsReceipt',
    etimsAmount: 'etimsAmount',
    total: 'total',
    discount: 'discount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const ContainerScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    createdBy: 'createdBy',
    supplierName: 'supplierName',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContainerScalarFieldEnum = (typeof ContainerScalarFieldEnum)[keyof typeof ContainerScalarFieldEnum]


  export const ContainerItemScalarFieldEnum: {
    id: 'id',
    containerId: 'containerId',
    name: 'name',
    code: 'code',
    type: 'type',
    index: 'index',
    lensCategory: 'lensCategory',
    sph: 'sph',
    cyl: 'cyl',
    axis: 'axis',
    nearAdd: 'nearAdd',
    quantityOrdered: 'quantityOrdered',
    landedCost: 'landedCost',
    wholesalePrice: 'wholesalePrice',
    priceKsh: 'priceKsh',
    priceUsd: 'priceUsd',
    costKsh: 'costKsh',
    createdAt: 'createdAt'
  };

  export type ContainerItemScalarFieldEnum = (typeof ContainerItemScalarFieldEnum)[keyof typeof ContainerItemScalarFieldEnum]


  export const SaleitemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    stockId: 'stockId',
    quantity: 'quantity',
    price: 'price'
  };

  export type SaleitemScalarFieldEnum = (typeof SaleitemScalarFieldEnum)[keyof typeof SaleitemScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    appPrice: 'appPrice',
    bought: 'bought',
    code: 'code',
    costKsh: 'costKsh',
    costUsd: 'costUsd',
    etr: 'etr',
    fob: 'fob',
    loading: 'loading',
    landedCost: 'landedCost',
    name: 'name',
    notes: 'notes',
    prevCostPb: 'prevCostPb',
    priceKsh: 'priceKsh',
    priceUsd: 'priceUsd',
    profitPerBale: 'profitPerBale',
    qty: 'qty',
    supplier: 'supplier',
    index: 'index',
    wholesalePrice: 'wholesalePrice',
    sph: 'sph',
    cyl: 'cyl',
    axis: 'axis',
    nearAdd: 'nearAdd',
    lensCategory: 'lensCategory',
    isDeleted: 'isDeleted'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    designation: 'designation',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JobcardScalarFieldEnum: {
    id: 'id',
    jobCardNumber: 'jobCardNumber',
    patientId: 'patientId',
    insuranceCompany: 'insuranceCompany',
    notes: 'notes',
    date: 'date',
    rSph: 'rSph',
    rCyl: 'rCyl',
    rAxis: 'rAxis',
    rPrism: 'rPrism',
    rBase: 'rBase',
    rLens: 'rLens',
    rLensStockId: 'rLensStockId',
    rLensPrice: 'rLensPrice',
    lSph: 'lSph',
    lCyl: 'lCyl',
    lAxis: 'lAxis',
    lPrism: 'lPrism',
    lBase: 'lBase',
    lLens: 'lLens',
    lLensStockId: 'lLensStockId',
    lLensPrice: 'lLensPrice',
    nearAdd: 'nearAdd',
    distPd: 'distPd',
    nearPd: 'nearPd',
    heights: 'heights',
    frame: 'frame',
    frameQty: 'frameQty',
    framePrice: 'framePrice',
    frameStockId: 'frameStockId',
    total: 'total',
    consultation: 'consultation',
    discount: 'discount',
    advance: 'advance',
    balance: 'balance',
    jobDelDate: 'jobDelDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobcardScalarFieldEnum = (typeof JobcardScalarFieldEnum)[keyof typeof JobcardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const customerOrderByRelevanceFieldEnum: {
    name: 'name',
    type: 'type',
    email: 'email',
    phone: 'phone',
    address: 'address'
  };

  export type customerOrderByRelevanceFieldEnum = (typeof customerOrderByRelevanceFieldEnum)[keyof typeof customerOrderByRelevanceFieldEnum]


  export const expenseOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    note: 'note'
  };

  export type expenseOrderByRelevanceFieldEnum = (typeof expenseOrderByRelevanceFieldEnum)[keyof typeof expenseOrderByRelevanceFieldEnum]


  export const patientOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    address: 'address'
  };

  export type patientOrderByRelevanceFieldEnum = (typeof patientOrderByRelevanceFieldEnum)[keyof typeof patientOrderByRelevanceFieldEnum]


  export const saleOrderByRelevanceFieldEnum: {
    referenceNumber: 'referenceNumber',
    etimsReceipt: 'etimsReceipt'
  };

  export type saleOrderByRelevanceFieldEnum = (typeof saleOrderByRelevanceFieldEnum)[keyof typeof saleOrderByRelevanceFieldEnum]


  export const containerOrderByRelevanceFieldEnum: {
    code: 'code',
    name: 'name',
    createdBy: 'createdBy',
    supplierName: 'supplierName',
    status: 'status'
  };

  export type containerOrderByRelevanceFieldEnum = (typeof containerOrderByRelevanceFieldEnum)[keyof typeof containerOrderByRelevanceFieldEnum]


  export const containerItemOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code',
    type: 'type',
    index: 'index',
    lensCategory: 'lensCategory'
  };

  export type containerItemOrderByRelevanceFieldEnum = (typeof containerItemOrderByRelevanceFieldEnum)[keyof typeof containerItemOrderByRelevanceFieldEnum]


  export const stockOrderByRelevanceFieldEnum: {
    type: 'type',
    code: 'code',
    name: 'name',
    notes: 'notes',
    supplier: 'supplier',
    index: 'index',
    lensCategory: 'lensCategory'
  };

  export type stockOrderByRelevanceFieldEnum = (typeof stockOrderByRelevanceFieldEnum)[keyof typeof stockOrderByRelevanceFieldEnum]


  export const supplierOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address'
  };

  export type supplierOrderByRelevanceFieldEnum = (typeof supplierOrderByRelevanceFieldEnum)[keyof typeof supplierOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    designation: 'designation',
    password: 'password',
    phone: 'phone'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const jobcardOrderByRelevanceFieldEnum: {
    jobCardNumber: 'jobCardNumber',
    insuranceCompany: 'insuranceCompany',
    notes: 'notes',
    rPrism: 'rPrism',
    rBase: 'rBase',
    rLens: 'rLens',
    lPrism: 'lPrism',
    lBase: 'lBase',
    lLens: 'lLens',
    nearAdd: 'nearAdd',
    distPd: 'distPd',
    nearPd: 'nearPd',
    heights: 'heights',
    frame: 'frame'
  };

  export type jobcardOrderByRelevanceFieldEnum = (typeof jobcardOrderByRelevanceFieldEnum)[keyof typeof jobcardOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    id?: IntFilter<"customer"> | number
    name?: StringFilter<"customer"> | string
    type?: StringFilter<"customer"> | string
    email?: StringNullableFilter<"customer"> | string | null
    phone?: StringNullableFilter<"customer"> | string | null
    address?: StringNullableFilter<"customer"> | string | null
    createdAt?: DateTimeFilter<"customer"> | Date | string
    updatedAt?: DateTimeFilter<"customer"> | Date | string
    sale?: SaleListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sale?: saleOrderByRelationAggregateInput
    _relevance?: customerOrderByRelevanceInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    name?: StringFilter<"customer"> | string
    type?: StringFilter<"customer"> | string
    email?: StringNullableFilter<"customer"> | string | null
    phone?: StringNullableFilter<"customer"> | string | null
    address?: StringNullableFilter<"customer"> | string | null
    createdAt?: DateTimeFilter<"customer"> | Date | string
    updatedAt?: DateTimeFilter<"customer"> | Date | string
    sale?: SaleListRelationFilter
  }, "id">

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: customerCountOrderByAggregateInput
    _avg?: customerAvgOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
    _sum?: customerSumOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"customer"> | number
    name?: StringWithAggregatesFilter<"customer"> | string
    type?: StringWithAggregatesFilter<"customer"> | string
    email?: StringNullableWithAggregatesFilter<"customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"customer"> | Date | string
  }

  export type expenseWhereInput = {
    AND?: expenseWhereInput | expenseWhereInput[]
    OR?: expenseWhereInput[]
    NOT?: expenseWhereInput | expenseWhereInput[]
    id?: StringFilter<"expense"> | string
    title?: StringFilter<"expense"> | string
    amount?: FloatFilter<"expense"> | number
    category?: StringNullableFilter<"expense"> | string | null
    note?: StringNullableFilter<"expense"> | string | null
    createdAt?: DateTimeFilter<"expense"> | Date | string
    updatedAt?: DateTimeFilter<"expense"> | Date | string
  }

  export type expenseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: expenseOrderByRelevanceInput
  }

  export type expenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: expenseWhereInput | expenseWhereInput[]
    OR?: expenseWhereInput[]
    NOT?: expenseWhereInput | expenseWhereInput[]
    title?: StringFilter<"expense"> | string
    amount?: FloatFilter<"expense"> | number
    category?: StringNullableFilter<"expense"> | string | null
    note?: StringNullableFilter<"expense"> | string | null
    createdAt?: DateTimeFilter<"expense"> | Date | string
    updatedAt?: DateTimeFilter<"expense"> | Date | string
  }, "id">

  export type expenseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: expenseCountOrderByAggregateInput
    _avg?: expenseAvgOrderByAggregateInput
    _max?: expenseMaxOrderByAggregateInput
    _min?: expenseMinOrderByAggregateInput
    _sum?: expenseSumOrderByAggregateInput
  }

  export type expenseScalarWhereWithAggregatesInput = {
    AND?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[]
    OR?: expenseScalarWhereWithAggregatesInput[]
    NOT?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"expense"> | string
    title?: StringWithAggregatesFilter<"expense"> | string
    amount?: FloatWithAggregatesFilter<"expense"> | number
    category?: StringNullableWithAggregatesFilter<"expense"> | string | null
    note?: StringNullableWithAggregatesFilter<"expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"expense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"expense"> | Date | string
  }

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    id?: IntFilter<"patient"> | number
    firstName?: StringFilter<"patient"> | string
    lastName?: StringFilter<"patient"> | string
    email?: StringNullableFilter<"patient"> | string | null
    phone?: StringFilter<"patient"> | string
    dob?: DateTimeNullableFilter<"patient"> | Date | string | null
    gender?: StringNullableFilter<"patient"> | string | null
    address?: StringNullableFilter<"patient"> | string | null
    createdAt?: DateTimeFilter<"patient"> | Date | string
    updatedAt?: DateTimeFilter<"patient"> | Date | string
    jobcards?: JobcardListRelationFilter
    sales?: SaleListRelationFilter
  }

  export type patientOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobcards?: jobcardOrderByRelationAggregateInput
    sales?: saleOrderByRelationAggregateInput
    _relevance?: patientOrderByRelevanceInput
  }

  export type patientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    firstName?: StringFilter<"patient"> | string
    lastName?: StringFilter<"patient"> | string
    phone?: StringFilter<"patient"> | string
    dob?: DateTimeNullableFilter<"patient"> | Date | string | null
    gender?: StringNullableFilter<"patient"> | string | null
    address?: StringNullableFilter<"patient"> | string | null
    createdAt?: DateTimeFilter<"patient"> | Date | string
    updatedAt?: DateTimeFilter<"patient"> | Date | string
    jobcards?: JobcardListRelationFilter
    sales?: SaleListRelationFilter
  }, "id" | "email">

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: patientCountOrderByAggregateInput
    _avg?: patientAvgOrderByAggregateInput
    _max?: patientMaxOrderByAggregateInput
    _min?: patientMinOrderByAggregateInput
    _sum?: patientSumOrderByAggregateInput
  }

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    OR?: patientScalarWhereWithAggregatesInput[]
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"patient"> | number
    firstName?: StringWithAggregatesFilter<"patient"> | string
    lastName?: StringWithAggregatesFilter<"patient"> | string
    email?: StringNullableWithAggregatesFilter<"patient"> | string | null
    phone?: StringWithAggregatesFilter<"patient"> | string
    dob?: DateTimeNullableWithAggregatesFilter<"patient"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"patient"> | Date | string
  }

  export type saleWhereInput = {
    AND?: saleWhereInput | saleWhereInput[]
    OR?: saleWhereInput[]
    NOT?: saleWhereInput | saleWhereInput[]
    id?: IntFilter<"sale"> | number
    customerId?: IntNullableFilter<"sale"> | number | null
    patientId?: IntNullableFilter<"sale"> | number | null
    referenceNumber?: StringNullableFilter<"sale"> | string | null
    etimsReceipt?: StringNullableFilter<"sale"> | string | null
    etimsAmount?: DecimalNullableFilter<"sale"> | Decimal | DecimalJsLike | number | string | null
    total?: FloatFilter<"sale"> | number
    discount?: FloatFilter<"sale"> | number
    createdAt?: DateTimeFilter<"sale"> | Date | string
    updatedAt?: DateTimeFilter<"sale"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
    saleitem?: SaleitemListRelationFilter
  }

  export type saleOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    patientId?: SortOrderInput | SortOrder
    referenceNumber?: SortOrderInput | SortOrder
    etimsReceipt?: SortOrderInput | SortOrder
    etimsAmount?: SortOrderInput | SortOrder
    total?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: customerOrderByWithRelationInput
    patient?: patientOrderByWithRelationInput
    saleitem?: saleitemOrderByRelationAggregateInput
    _relevance?: saleOrderByRelevanceInput
  }

  export type saleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    referenceNumber?: string
    AND?: saleWhereInput | saleWhereInput[]
    OR?: saleWhereInput[]
    NOT?: saleWhereInput | saleWhereInput[]
    customerId?: IntNullableFilter<"sale"> | number | null
    patientId?: IntNullableFilter<"sale"> | number | null
    etimsReceipt?: StringNullableFilter<"sale"> | string | null
    etimsAmount?: DecimalNullableFilter<"sale"> | Decimal | DecimalJsLike | number | string | null
    total?: FloatFilter<"sale"> | number
    discount?: FloatFilter<"sale"> | number
    createdAt?: DateTimeFilter<"sale"> | Date | string
    updatedAt?: DateTimeFilter<"sale"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
    saleitem?: SaleitemListRelationFilter
  }, "id" | "referenceNumber">

  export type saleOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    patientId?: SortOrderInput | SortOrder
    referenceNumber?: SortOrderInput | SortOrder
    etimsReceipt?: SortOrderInput | SortOrder
    etimsAmount?: SortOrderInput | SortOrder
    total?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: saleCountOrderByAggregateInput
    _avg?: saleAvgOrderByAggregateInput
    _max?: saleMaxOrderByAggregateInput
    _min?: saleMinOrderByAggregateInput
    _sum?: saleSumOrderByAggregateInput
  }

  export type saleScalarWhereWithAggregatesInput = {
    AND?: saleScalarWhereWithAggregatesInput | saleScalarWhereWithAggregatesInput[]
    OR?: saleScalarWhereWithAggregatesInput[]
    NOT?: saleScalarWhereWithAggregatesInput | saleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sale"> | number
    customerId?: IntNullableWithAggregatesFilter<"sale"> | number | null
    patientId?: IntNullableWithAggregatesFilter<"sale"> | number | null
    referenceNumber?: StringNullableWithAggregatesFilter<"sale"> | string | null
    etimsReceipt?: StringNullableWithAggregatesFilter<"sale"> | string | null
    etimsAmount?: DecimalNullableWithAggregatesFilter<"sale"> | Decimal | DecimalJsLike | number | string | null
    total?: FloatWithAggregatesFilter<"sale"> | number
    discount?: FloatWithAggregatesFilter<"sale"> | number
    createdAt?: DateTimeWithAggregatesFilter<"sale"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sale"> | Date | string
  }

  export type containerWhereInput = {
    AND?: containerWhereInput | containerWhereInput[]
    OR?: containerWhereInput[]
    NOT?: containerWhereInput | containerWhereInput[]
    id?: IntFilter<"container"> | number
    code?: StringFilter<"container"> | string
    name?: StringFilter<"container"> | string
    createdBy?: StringFilter<"container"> | string
    supplierName?: StringFilter<"container"> | string
    status?: StringFilter<"container"> | string
    createdAt?: DateTimeFilter<"container"> | Date | string
    updatedAt?: DateTimeFilter<"container"> | Date | string
    items?: ContainerItemListRelationFilter
  }

  export type containerOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    supplierName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: containerItemOrderByRelationAggregateInput
    _relevance?: containerOrderByRelevanceInput
  }

  export type containerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: containerWhereInput | containerWhereInput[]
    OR?: containerWhereInput[]
    NOT?: containerWhereInput | containerWhereInput[]
    name?: StringFilter<"container"> | string
    createdBy?: StringFilter<"container"> | string
    supplierName?: StringFilter<"container"> | string
    status?: StringFilter<"container"> | string
    createdAt?: DateTimeFilter<"container"> | Date | string
    updatedAt?: DateTimeFilter<"container"> | Date | string
    items?: ContainerItemListRelationFilter
  }, "id" | "code">

  export type containerOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    supplierName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: containerCountOrderByAggregateInput
    _avg?: containerAvgOrderByAggregateInput
    _max?: containerMaxOrderByAggregateInput
    _min?: containerMinOrderByAggregateInput
    _sum?: containerSumOrderByAggregateInput
  }

  export type containerScalarWhereWithAggregatesInput = {
    AND?: containerScalarWhereWithAggregatesInput | containerScalarWhereWithAggregatesInput[]
    OR?: containerScalarWhereWithAggregatesInput[]
    NOT?: containerScalarWhereWithAggregatesInput | containerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"container"> | number
    code?: StringWithAggregatesFilter<"container"> | string
    name?: StringWithAggregatesFilter<"container"> | string
    createdBy?: StringWithAggregatesFilter<"container"> | string
    supplierName?: StringWithAggregatesFilter<"container"> | string
    status?: StringWithAggregatesFilter<"container"> | string
    createdAt?: DateTimeWithAggregatesFilter<"container"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"container"> | Date | string
  }

  export type containerItemWhereInput = {
    AND?: containerItemWhereInput | containerItemWhereInput[]
    OR?: containerItemWhereInput[]
    NOT?: containerItemWhereInput | containerItemWhereInput[]
    id?: IntFilter<"containerItem"> | number
    containerId?: IntFilter<"containerItem"> | number
    name?: StringFilter<"containerItem"> | string
    code?: StringFilter<"containerItem"> | string
    type?: StringFilter<"containerItem"> | string
    index?: StringNullableFilter<"containerItem"> | string | null
    lensCategory?: StringNullableFilter<"containerItem"> | string | null
    sph?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    cyl?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    axis?: IntNullableFilter<"containerItem"> | number | null
    nearAdd?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    wholesalePrice?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"containerItem"> | Date | string
    container?: XOR<ContainerScalarRelationFilter, containerWhereInput>
  }

  export type containerItemOrderByWithRelationInput = {
    id?: SortOrder
    containerId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    index?: SortOrderInput | SortOrder
    lensCategory?: SortOrderInput | SortOrder
    sph?: SortOrderInput | SortOrder
    cyl?: SortOrderInput | SortOrder
    axis?: SortOrderInput | SortOrder
    nearAdd?: SortOrderInput | SortOrder
    quantityOrdered?: SortOrder
    landedCost?: SortOrder
    wholesalePrice?: SortOrderInput | SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    costKsh?: SortOrder
    createdAt?: SortOrder
    container?: containerOrderByWithRelationInput
    _relevance?: containerItemOrderByRelevanceInput
  }

  export type containerItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: containerItemWhereInput | containerItemWhereInput[]
    OR?: containerItemWhereInput[]
    NOT?: containerItemWhereInput | containerItemWhereInput[]
    containerId?: IntFilter<"containerItem"> | number
    name?: StringFilter<"containerItem"> | string
    code?: StringFilter<"containerItem"> | string
    type?: StringFilter<"containerItem"> | string
    index?: StringNullableFilter<"containerItem"> | string | null
    lensCategory?: StringNullableFilter<"containerItem"> | string | null
    sph?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    cyl?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    axis?: IntNullableFilter<"containerItem"> | number | null
    nearAdd?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    wholesalePrice?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"containerItem"> | Date | string
    container?: XOR<ContainerScalarRelationFilter, containerWhereInput>
  }, "id">

  export type containerItemOrderByWithAggregationInput = {
    id?: SortOrder
    containerId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    index?: SortOrderInput | SortOrder
    lensCategory?: SortOrderInput | SortOrder
    sph?: SortOrderInput | SortOrder
    cyl?: SortOrderInput | SortOrder
    axis?: SortOrderInput | SortOrder
    nearAdd?: SortOrderInput | SortOrder
    quantityOrdered?: SortOrder
    landedCost?: SortOrder
    wholesalePrice?: SortOrderInput | SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    costKsh?: SortOrder
    createdAt?: SortOrder
    _count?: containerItemCountOrderByAggregateInput
    _avg?: containerItemAvgOrderByAggregateInput
    _max?: containerItemMaxOrderByAggregateInput
    _min?: containerItemMinOrderByAggregateInput
    _sum?: containerItemSumOrderByAggregateInput
  }

  export type containerItemScalarWhereWithAggregatesInput = {
    AND?: containerItemScalarWhereWithAggregatesInput | containerItemScalarWhereWithAggregatesInput[]
    OR?: containerItemScalarWhereWithAggregatesInput[]
    NOT?: containerItemScalarWhereWithAggregatesInput | containerItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"containerItem"> | number
    containerId?: IntWithAggregatesFilter<"containerItem"> | number
    name?: StringWithAggregatesFilter<"containerItem"> | string
    code?: StringWithAggregatesFilter<"containerItem"> | string
    type?: StringWithAggregatesFilter<"containerItem"> | string
    index?: StringNullableWithAggregatesFilter<"containerItem"> | string | null
    lensCategory?: StringNullableWithAggregatesFilter<"containerItem"> | string | null
    sph?: DecimalNullableWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    cyl?: DecimalNullableWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    axis?: IntNullableWithAggregatesFilter<"containerItem"> | number | null
    nearAdd?: DecimalNullableWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    wholesalePrice?: DecimalNullableWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalWithAggregatesFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"containerItem"> | Date | string
  }

  export type saleitemWhereInput = {
    AND?: saleitemWhereInput | saleitemWhereInput[]
    OR?: saleitemWhereInput[]
    NOT?: saleitemWhereInput | saleitemWhereInput[]
    id?: IntFilter<"saleitem"> | number
    saleId?: IntFilter<"saleitem"> | number
    stockId?: IntFilter<"saleitem"> | number
    quantity?: DecimalFilter<"saleitem"> | Decimal | DecimalJsLike | number | string
    price?: FloatFilter<"saleitem"> | number
    sale?: XOR<SaleScalarRelationFilter, saleWhereInput>
    stock?: XOR<StockScalarRelationFilter, stockWhereInput>
  }

  export type saleitemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    stockId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sale?: saleOrderByWithRelationInput
    stock?: stockOrderByWithRelationInput
  }

  export type saleitemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: saleitemWhereInput | saleitemWhereInput[]
    OR?: saleitemWhereInput[]
    NOT?: saleitemWhereInput | saleitemWhereInput[]
    saleId?: IntFilter<"saleitem"> | number
    stockId?: IntFilter<"saleitem"> | number
    quantity?: DecimalFilter<"saleitem"> | Decimal | DecimalJsLike | number | string
    price?: FloatFilter<"saleitem"> | number
    sale?: XOR<SaleScalarRelationFilter, saleWhereInput>
    stock?: XOR<StockScalarRelationFilter, stockWhereInput>
  }, "id">

  export type saleitemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    stockId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: saleitemCountOrderByAggregateInput
    _avg?: saleitemAvgOrderByAggregateInput
    _max?: saleitemMaxOrderByAggregateInput
    _min?: saleitemMinOrderByAggregateInput
    _sum?: saleitemSumOrderByAggregateInput
  }

  export type saleitemScalarWhereWithAggregatesInput = {
    AND?: saleitemScalarWhereWithAggregatesInput | saleitemScalarWhereWithAggregatesInput[]
    OR?: saleitemScalarWhereWithAggregatesInput[]
    NOT?: saleitemScalarWhereWithAggregatesInput | saleitemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"saleitem"> | number
    saleId?: IntWithAggregatesFilter<"saleitem"> | number
    stockId?: IntWithAggregatesFilter<"saleitem"> | number
    quantity?: DecimalWithAggregatesFilter<"saleitem"> | Decimal | DecimalJsLike | number | string
    price?: FloatWithAggregatesFilter<"saleitem"> | number
  }

  export type stockWhereInput = {
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    id?: IntFilter<"stock"> | number
    type?: StringFilter<"stock"> | string
    createdAt?: DateTimeFilter<"stock"> | Date | string
    updatedAt?: DateTimeFilter<"stock"> | Date | string
    appPrice?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    bought?: DateTimeNullableFilter<"stock"> | Date | string | null
    code?: StringFilter<"stock"> | string
    costKsh?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    costUsd?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    etr?: DateTimeNullableFilter<"stock"> | Date | string | null
    fob?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    loading?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    landedCost?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    name?: StringFilter<"stock"> | string
    notes?: StringNullableFilter<"stock"> | string | null
    prevCostPb?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFilter<"stock"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFilter<"stock"> | Decimal | DecimalJsLike | number | string
    profitPerBale?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalFilter<"stock"> | Decimal | DecimalJsLike | number | string
    supplier?: StringNullableFilter<"stock"> | string | null
    index?: StringNullableFilter<"stock"> | string | null
    wholesalePrice?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    sph?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    cyl?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    axis?: IntNullableFilter<"stock"> | number | null
    nearAdd?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    lensCategory?: StringNullableFilter<"stock"> | string | null
    isDeleted?: BoolFilter<"stock"> | boolean
    saleitem?: SaleitemListRelationFilter
  }

  export type stockOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appPrice?: SortOrderInput | SortOrder
    bought?: SortOrderInput | SortOrder
    code?: SortOrder
    costKsh?: SortOrderInput | SortOrder
    costUsd?: SortOrderInput | SortOrder
    etr?: SortOrderInput | SortOrder
    fob?: SortOrderInput | SortOrder
    loading?: SortOrderInput | SortOrder
    landedCost?: SortOrderInput | SortOrder
    name?: SortOrder
    notes?: SortOrderInput | SortOrder
    prevCostPb?: SortOrderInput | SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    profitPerBale?: SortOrderInput | SortOrder
    qty?: SortOrder
    supplier?: SortOrderInput | SortOrder
    index?: SortOrderInput | SortOrder
    wholesalePrice?: SortOrderInput | SortOrder
    sph?: SortOrderInput | SortOrder
    cyl?: SortOrderInput | SortOrder
    axis?: SortOrderInput | SortOrder
    nearAdd?: SortOrderInput | SortOrder
    lensCategory?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    saleitem?: saleitemOrderByRelationAggregateInput
    _relevance?: stockOrderByRelevanceInput
  }

  export type stockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    type?: StringFilter<"stock"> | string
    createdAt?: DateTimeFilter<"stock"> | Date | string
    updatedAt?: DateTimeFilter<"stock"> | Date | string
    appPrice?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    bought?: DateTimeNullableFilter<"stock"> | Date | string | null
    costKsh?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    costUsd?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    etr?: DateTimeNullableFilter<"stock"> | Date | string | null
    fob?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    loading?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    landedCost?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    name?: StringFilter<"stock"> | string
    notes?: StringNullableFilter<"stock"> | string | null
    prevCostPb?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFilter<"stock"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFilter<"stock"> | Decimal | DecimalJsLike | number | string
    profitPerBale?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalFilter<"stock"> | Decimal | DecimalJsLike | number | string
    supplier?: StringNullableFilter<"stock"> | string | null
    index?: StringNullableFilter<"stock"> | string | null
    wholesalePrice?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    sph?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    cyl?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    axis?: IntNullableFilter<"stock"> | number | null
    nearAdd?: DecimalNullableFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    lensCategory?: StringNullableFilter<"stock"> | string | null
    isDeleted?: BoolFilter<"stock"> | boolean
    saleitem?: SaleitemListRelationFilter
  }, "id" | "code">

  export type stockOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appPrice?: SortOrderInput | SortOrder
    bought?: SortOrderInput | SortOrder
    code?: SortOrder
    costKsh?: SortOrderInput | SortOrder
    costUsd?: SortOrderInput | SortOrder
    etr?: SortOrderInput | SortOrder
    fob?: SortOrderInput | SortOrder
    loading?: SortOrderInput | SortOrder
    landedCost?: SortOrderInput | SortOrder
    name?: SortOrder
    notes?: SortOrderInput | SortOrder
    prevCostPb?: SortOrderInput | SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    profitPerBale?: SortOrderInput | SortOrder
    qty?: SortOrder
    supplier?: SortOrderInput | SortOrder
    index?: SortOrderInput | SortOrder
    wholesalePrice?: SortOrderInput | SortOrder
    sph?: SortOrderInput | SortOrder
    cyl?: SortOrderInput | SortOrder
    axis?: SortOrderInput | SortOrder
    nearAdd?: SortOrderInput | SortOrder
    lensCategory?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    _count?: stockCountOrderByAggregateInput
    _avg?: stockAvgOrderByAggregateInput
    _max?: stockMaxOrderByAggregateInput
    _min?: stockMinOrderByAggregateInput
    _sum?: stockSumOrderByAggregateInput
  }

  export type stockScalarWhereWithAggregatesInput = {
    AND?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    OR?: stockScalarWhereWithAggregatesInput[]
    NOT?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stock"> | number
    type?: StringWithAggregatesFilter<"stock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"stock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"stock"> | Date | string
    appPrice?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    bought?: DateTimeNullableWithAggregatesFilter<"stock"> | Date | string | null
    code?: StringWithAggregatesFilter<"stock"> | string
    costKsh?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    costUsd?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    etr?: DateTimeNullableWithAggregatesFilter<"stock"> | Date | string | null
    fob?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    loading?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    landedCost?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    name?: StringWithAggregatesFilter<"stock"> | string
    notes?: StringNullableWithAggregatesFilter<"stock"> | string | null
    prevCostPb?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string
    profitPerBale?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string
    supplier?: StringNullableWithAggregatesFilter<"stock"> | string | null
    index?: StringNullableWithAggregatesFilter<"stock"> | string | null
    wholesalePrice?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    sph?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    cyl?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    axis?: IntNullableWithAggregatesFilter<"stock"> | number | null
    nearAdd?: DecimalNullableWithAggregatesFilter<"stock"> | Decimal | DecimalJsLike | number | string | null
    lensCategory?: StringNullableWithAggregatesFilter<"stock"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"stock"> | boolean
  }

  export type supplierWhereInput = {
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    id?: IntFilter<"supplier"> | number
    name?: StringFilter<"supplier"> | string
    email?: StringNullableFilter<"supplier"> | string | null
    phone?: StringNullableFilter<"supplier"> | string | null
    address?: StringNullableFilter<"supplier"> | string | null
    createdAt?: DateTimeFilter<"supplier"> | Date | string
    updatedAt?: DateTimeFilter<"supplier"> | Date | string
  }

  export type supplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: supplierOrderByRelevanceInput
  }

  export type supplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    name?: StringFilter<"supplier"> | string
    email?: StringNullableFilter<"supplier"> | string | null
    phone?: StringNullableFilter<"supplier"> | string | null
    address?: StringNullableFilter<"supplier"> | string | null
    createdAt?: DateTimeFilter<"supplier"> | Date | string
    updatedAt?: DateTimeFilter<"supplier"> | Date | string
  }, "id">

  export type supplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: supplierCountOrderByAggregateInput
    _avg?: supplierAvgOrderByAggregateInput
    _max?: supplierMaxOrderByAggregateInput
    _min?: supplierMinOrderByAggregateInput
    _sum?: supplierSumOrderByAggregateInput
  }

  export type supplierScalarWhereWithAggregatesInput = {
    AND?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    OR?: supplierScalarWhereWithAggregatesInput[]
    NOT?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"supplier"> | number
    name?: StringWithAggregatesFilter<"supplier"> | string
    email?: StringNullableWithAggregatesFilter<"supplier"> | string | null
    phone?: StringNullableWithAggregatesFilter<"supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"supplier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"supplier"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    designation?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    phone?: StringNullableFilter<"user"> | string | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    designation?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrderInput | SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    designation?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    phone?: StringNullableFilter<"user"> | string | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    designation?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    designation?: StringNullableWithAggregatesFilter<"user"> | string | null
    password?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    phone?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type jobcardWhereInput = {
    AND?: jobcardWhereInput | jobcardWhereInput[]
    OR?: jobcardWhereInput[]
    NOT?: jobcardWhereInput | jobcardWhereInput[]
    id?: IntFilter<"jobcard"> | number
    jobCardNumber?: StringFilter<"jobcard"> | string
    patientId?: IntFilter<"jobcard"> | number
    insuranceCompany?: StringNullableFilter<"jobcard"> | string | null
    notes?: StringNullableFilter<"jobcard"> | string | null
    date?: DateTimeFilter<"jobcard"> | Date | string
    rSph?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    rCyl?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    rAxis?: IntNullableFilter<"jobcard"> | number | null
    rPrism?: StringNullableFilter<"jobcard"> | string | null
    rBase?: StringNullableFilter<"jobcard"> | string | null
    rLens?: StringNullableFilter<"jobcard"> | string | null
    rLensStockId?: IntNullableFilter<"jobcard"> | number | null
    rLensPrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lSph?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lCyl?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lAxis?: IntNullableFilter<"jobcard"> | number | null
    lPrism?: StringNullableFilter<"jobcard"> | string | null
    lBase?: StringNullableFilter<"jobcard"> | string | null
    lLens?: StringNullableFilter<"jobcard"> | string | null
    lLensStockId?: IntNullableFilter<"jobcard"> | number | null
    lLensPrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    nearAdd?: StringNullableFilter<"jobcard"> | string | null
    distPd?: StringNullableFilter<"jobcard"> | string | null
    nearPd?: StringNullableFilter<"jobcard"> | string | null
    heights?: StringNullableFilter<"jobcard"> | string | null
    frame?: StringNullableFilter<"jobcard"> | string | null
    frameQty?: IntNullableFilter<"jobcard"> | number | null
    framePrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    frameStockId?: IntNullableFilter<"jobcard"> | number | null
    total?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    advance?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    jobDelDate?: DateTimeNullableFilter<"jobcard"> | Date | string | null
    createdAt?: DateTimeFilter<"jobcard"> | Date | string
    updatedAt?: DateTimeFilter<"jobcard"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
  }

  export type jobcardOrderByWithRelationInput = {
    id?: SortOrder
    jobCardNumber?: SortOrder
    patientId?: SortOrder
    insuranceCompany?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    rSph?: SortOrderInput | SortOrder
    rCyl?: SortOrderInput | SortOrder
    rAxis?: SortOrderInput | SortOrder
    rPrism?: SortOrderInput | SortOrder
    rBase?: SortOrderInput | SortOrder
    rLens?: SortOrderInput | SortOrder
    rLensStockId?: SortOrderInput | SortOrder
    rLensPrice?: SortOrderInput | SortOrder
    lSph?: SortOrderInput | SortOrder
    lCyl?: SortOrderInput | SortOrder
    lAxis?: SortOrderInput | SortOrder
    lPrism?: SortOrderInput | SortOrder
    lBase?: SortOrderInput | SortOrder
    lLens?: SortOrderInput | SortOrder
    lLensStockId?: SortOrderInput | SortOrder
    lLensPrice?: SortOrderInput | SortOrder
    nearAdd?: SortOrderInput | SortOrder
    distPd?: SortOrderInput | SortOrder
    nearPd?: SortOrderInput | SortOrder
    heights?: SortOrderInput | SortOrder
    frame?: SortOrderInput | SortOrder
    frameQty?: SortOrderInput | SortOrder
    framePrice?: SortOrderInput | SortOrder
    frameStockId?: SortOrderInput | SortOrder
    total?: SortOrder
    consultation?: SortOrder
    discount?: SortOrder
    advance?: SortOrder
    balance?: SortOrder
    jobDelDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: patientOrderByWithRelationInput
    _relevance?: jobcardOrderByRelevanceInput
  }

  export type jobcardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jobCardNumber?: string
    AND?: jobcardWhereInput | jobcardWhereInput[]
    OR?: jobcardWhereInput[]
    NOT?: jobcardWhereInput | jobcardWhereInput[]
    patientId?: IntFilter<"jobcard"> | number
    insuranceCompany?: StringNullableFilter<"jobcard"> | string | null
    notes?: StringNullableFilter<"jobcard"> | string | null
    date?: DateTimeFilter<"jobcard"> | Date | string
    rSph?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    rCyl?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    rAxis?: IntNullableFilter<"jobcard"> | number | null
    rPrism?: StringNullableFilter<"jobcard"> | string | null
    rBase?: StringNullableFilter<"jobcard"> | string | null
    rLens?: StringNullableFilter<"jobcard"> | string | null
    rLensStockId?: IntNullableFilter<"jobcard"> | number | null
    rLensPrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lSph?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lCyl?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lAxis?: IntNullableFilter<"jobcard"> | number | null
    lPrism?: StringNullableFilter<"jobcard"> | string | null
    lBase?: StringNullableFilter<"jobcard"> | string | null
    lLens?: StringNullableFilter<"jobcard"> | string | null
    lLensStockId?: IntNullableFilter<"jobcard"> | number | null
    lLensPrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    nearAdd?: StringNullableFilter<"jobcard"> | string | null
    distPd?: StringNullableFilter<"jobcard"> | string | null
    nearPd?: StringNullableFilter<"jobcard"> | string | null
    heights?: StringNullableFilter<"jobcard"> | string | null
    frame?: StringNullableFilter<"jobcard"> | string | null
    frameQty?: IntNullableFilter<"jobcard"> | number | null
    framePrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    frameStockId?: IntNullableFilter<"jobcard"> | number | null
    total?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    advance?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    jobDelDate?: DateTimeNullableFilter<"jobcard"> | Date | string | null
    createdAt?: DateTimeFilter<"jobcard"> | Date | string
    updatedAt?: DateTimeFilter<"jobcard"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
  }, "id" | "jobCardNumber">

  export type jobcardOrderByWithAggregationInput = {
    id?: SortOrder
    jobCardNumber?: SortOrder
    patientId?: SortOrder
    insuranceCompany?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    rSph?: SortOrderInput | SortOrder
    rCyl?: SortOrderInput | SortOrder
    rAxis?: SortOrderInput | SortOrder
    rPrism?: SortOrderInput | SortOrder
    rBase?: SortOrderInput | SortOrder
    rLens?: SortOrderInput | SortOrder
    rLensStockId?: SortOrderInput | SortOrder
    rLensPrice?: SortOrderInput | SortOrder
    lSph?: SortOrderInput | SortOrder
    lCyl?: SortOrderInput | SortOrder
    lAxis?: SortOrderInput | SortOrder
    lPrism?: SortOrderInput | SortOrder
    lBase?: SortOrderInput | SortOrder
    lLens?: SortOrderInput | SortOrder
    lLensStockId?: SortOrderInput | SortOrder
    lLensPrice?: SortOrderInput | SortOrder
    nearAdd?: SortOrderInput | SortOrder
    distPd?: SortOrderInput | SortOrder
    nearPd?: SortOrderInput | SortOrder
    heights?: SortOrderInput | SortOrder
    frame?: SortOrderInput | SortOrder
    frameQty?: SortOrderInput | SortOrder
    framePrice?: SortOrderInput | SortOrder
    frameStockId?: SortOrderInput | SortOrder
    total?: SortOrder
    consultation?: SortOrder
    discount?: SortOrder
    advance?: SortOrder
    balance?: SortOrder
    jobDelDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: jobcardCountOrderByAggregateInput
    _avg?: jobcardAvgOrderByAggregateInput
    _max?: jobcardMaxOrderByAggregateInput
    _min?: jobcardMinOrderByAggregateInput
    _sum?: jobcardSumOrderByAggregateInput
  }

  export type jobcardScalarWhereWithAggregatesInput = {
    AND?: jobcardScalarWhereWithAggregatesInput | jobcardScalarWhereWithAggregatesInput[]
    OR?: jobcardScalarWhereWithAggregatesInput[]
    NOT?: jobcardScalarWhereWithAggregatesInput | jobcardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobcard"> | number
    jobCardNumber?: StringWithAggregatesFilter<"jobcard"> | string
    patientId?: IntWithAggregatesFilter<"jobcard"> | number
    insuranceCompany?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    notes?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    date?: DateTimeWithAggregatesFilter<"jobcard"> | Date | string
    rSph?: DecimalNullableWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    rCyl?: DecimalNullableWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    rAxis?: IntNullableWithAggregatesFilter<"jobcard"> | number | null
    rPrism?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    rBase?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    rLens?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    rLensStockId?: IntNullableWithAggregatesFilter<"jobcard"> | number | null
    rLensPrice?: DecimalNullableWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lSph?: DecimalNullableWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lCyl?: DecimalNullableWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lAxis?: IntNullableWithAggregatesFilter<"jobcard"> | number | null
    lPrism?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    lBase?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    lLens?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    lLensStockId?: IntNullableWithAggregatesFilter<"jobcard"> | number | null
    lLensPrice?: DecimalNullableWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    nearAdd?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    distPd?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    nearPd?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    heights?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    frame?: StringNullableWithAggregatesFilter<"jobcard"> | string | null
    frameQty?: IntNullableWithAggregatesFilter<"jobcard"> | number | null
    framePrice?: DecimalNullableWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    frameStockId?: IntNullableWithAggregatesFilter<"jobcard"> | number | null
    total?: DecimalWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    consultation?: DecimalWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    advance?: DecimalWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalWithAggregatesFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    jobDelDate?: DateTimeNullableWithAggregatesFilter<"jobcard"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"jobcard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"jobcard"> | Date | string
  }

  export type customerCreateInput = {
    name: string
    type: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sale?: saleCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sale?: saleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: saleUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: saleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    id?: number
    name: string
    type: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expenseCreateInput = {
    id?: string
    title: string
    amount: number
    category?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type expenseUncheckedCreateInput = {
    id?: string
    title: string
    amount: number
    category?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type expenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expenseCreateManyInput = {
    id?: string
    title: string
    amount: number
    category?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type expenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientCreateInput = {
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dob?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobcards?: jobcardCreateNestedManyWithoutPatientInput
    sales?: saleCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dob?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobcards?: jobcardUncheckedCreateNestedManyWithoutPatientInput
    sales?: saleUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobcards?: jobcardUpdateManyWithoutPatientNestedInput
    sales?: saleUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobcards?: jobcardUncheckedUpdateManyWithoutPatientNestedInput
    sales?: saleUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dob?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type patientUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saleCreateInput = {
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: customerCreateNestedOneWithoutSaleInput
    patient?: patientCreateNestedOneWithoutSalesInput
    saleitem?: saleitemCreateNestedManyWithoutSaleInput
  }

  export type saleUncheckedCreateInput = {
    id?: number
    customerId?: number | null
    patientId?: number | null
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleitem?: saleitemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type saleUpdateInput = {
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneWithoutSaleNestedInput
    patient?: patientUpdateOneWithoutSalesNestedInput
    saleitem?: saleitemUpdateManyWithoutSaleNestedInput
  }

  export type saleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleitem?: saleitemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type saleCreateManyInput = {
    id?: number
    customerId?: number | null
    patientId?: number | null
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type saleUpdateManyMutationInput = {
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type containerCreateInput = {
    code: string
    name: string
    createdBy: string
    supplierName: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: containerItemCreateNestedManyWithoutContainerInput
  }

  export type containerUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    createdBy: string
    supplierName: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: containerItemUncheckedCreateNestedManyWithoutContainerInput
  }

  export type containerUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: containerItemUpdateManyWithoutContainerNestedInput
  }

  export type containerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: containerItemUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type containerCreateManyInput = {
    id?: number
    code: string
    name: string
    createdBy: string
    supplierName: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type containerUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type containerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type containerItemCreateInput = {
    name: string
    code: string
    type: string
    index?: string | null
    lensCategory?: string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    quantityOrdered: Decimal | DecimalJsLike | number | string
    landedCost: Decimal | DecimalJsLike | number | string
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    priceKsh?: Decimal | DecimalJsLike | number | string
    priceUsd?: Decimal | DecimalJsLike | number | string
    costKsh?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    container: containerCreateNestedOneWithoutItemsInput
  }

  export type containerItemUncheckedCreateInput = {
    id?: number
    containerId: number
    name: string
    code: string
    type: string
    index?: string | null
    lensCategory?: string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    quantityOrdered: Decimal | DecimalJsLike | number | string
    landedCost: Decimal | DecimalJsLike | number | string
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    priceKsh?: Decimal | DecimalJsLike | number | string
    priceUsd?: Decimal | DecimalJsLike | number | string
    costKsh?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type containerItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    index?: NullableStringFieldUpdateOperationsInput | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    container?: containerUpdateOneRequiredWithoutItemsNestedInput
  }

  export type containerItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    index?: NullableStringFieldUpdateOperationsInput | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type containerItemCreateManyInput = {
    id?: number
    containerId: number
    name: string
    code: string
    type: string
    index?: string | null
    lensCategory?: string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    quantityOrdered: Decimal | DecimalJsLike | number | string
    landedCost: Decimal | DecimalJsLike | number | string
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    priceKsh?: Decimal | DecimalJsLike | number | string
    priceUsd?: Decimal | DecimalJsLike | number | string
    costKsh?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type containerItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    index?: NullableStringFieldUpdateOperationsInput | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type containerItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    index?: NullableStringFieldUpdateOperationsInput | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saleitemCreateInput = {
    quantity: Decimal | DecimalJsLike | number | string
    price: number
    sale: saleCreateNestedOneWithoutSaleitemInput
    stock: stockCreateNestedOneWithoutSaleitemInput
  }

  export type saleitemUncheckedCreateInput = {
    id?: number
    saleId: number
    stockId: number
    quantity: Decimal | DecimalJsLike | number | string
    price: number
  }

  export type saleitemUpdateInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
    sale?: saleUpdateOneRequiredWithoutSaleitemNestedInput
    stock?: stockUpdateOneRequiredWithoutSaleitemNestedInput
  }

  export type saleitemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    stockId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type saleitemCreateManyInput = {
    id?: number
    saleId: number
    stockId: number
    quantity: Decimal | DecimalJsLike | number | string
    price: number
  }

  export type saleitemUpdateManyMutationInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type saleitemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    stockId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type stockCreateInput = {
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appPrice?: Decimal | DecimalJsLike | number | string | null
    bought?: Date | string | null
    code: string
    costKsh?: Decimal | DecimalJsLike | number | string | null
    costUsd?: Decimal | DecimalJsLike | number | string | null
    etr?: Date | string | null
    fob?: Decimal | DecimalJsLike | number | string | null
    loading?: Decimal | DecimalJsLike | number | string | null
    landedCost?: Decimal | DecimalJsLike | number | string | null
    name: string
    notes?: string | null
    prevCostPb?: Decimal | DecimalJsLike | number | string | null
    priceKsh: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
    profitPerBale?: Decimal | DecimalJsLike | number | string | null
    qty?: Decimal | DecimalJsLike | number | string
    supplier?: string | null
    index?: string | null
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    lensCategory?: string | null
    isDeleted?: boolean
    saleitem?: saleitemCreateNestedManyWithoutStockInput
  }

  export type stockUncheckedCreateInput = {
    id?: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appPrice?: Decimal | DecimalJsLike | number | string | null
    bought?: Date | string | null
    code: string
    costKsh?: Decimal | DecimalJsLike | number | string | null
    costUsd?: Decimal | DecimalJsLike | number | string | null
    etr?: Date | string | null
    fob?: Decimal | DecimalJsLike | number | string | null
    loading?: Decimal | DecimalJsLike | number | string | null
    landedCost?: Decimal | DecimalJsLike | number | string | null
    name: string
    notes?: string | null
    prevCostPb?: Decimal | DecimalJsLike | number | string | null
    priceKsh: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
    profitPerBale?: Decimal | DecimalJsLike | number | string | null
    qty?: Decimal | DecimalJsLike | number | string
    supplier?: string | null
    index?: string | null
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    lensCategory?: string | null
    isDeleted?: boolean
    saleitem?: saleitemUncheckedCreateNestedManyWithoutStockInput
  }

  export type stockUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bought?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    costKsh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etr?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fob?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loading?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    landedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prevCostPb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profitPerBale?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    saleitem?: saleitemUpdateManyWithoutStockNestedInput
  }

  export type stockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bought?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    costKsh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etr?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fob?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loading?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    landedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prevCostPb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profitPerBale?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    saleitem?: saleitemUncheckedUpdateManyWithoutStockNestedInput
  }

  export type stockCreateManyInput = {
    id?: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appPrice?: Decimal | DecimalJsLike | number | string | null
    bought?: Date | string | null
    code: string
    costKsh?: Decimal | DecimalJsLike | number | string | null
    costUsd?: Decimal | DecimalJsLike | number | string | null
    etr?: Date | string | null
    fob?: Decimal | DecimalJsLike | number | string | null
    loading?: Decimal | DecimalJsLike | number | string | null
    landedCost?: Decimal | DecimalJsLike | number | string | null
    name: string
    notes?: string | null
    prevCostPb?: Decimal | DecimalJsLike | number | string | null
    priceKsh: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
    profitPerBale?: Decimal | DecimalJsLike | number | string | null
    qty?: Decimal | DecimalJsLike | number | string
    supplier?: string | null
    index?: string | null
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    lensCategory?: string | null
    isDeleted?: boolean
  }

  export type stockUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bought?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    costKsh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etr?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fob?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loading?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    landedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prevCostPb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profitPerBale?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type stockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bought?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    costKsh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etr?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fob?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loading?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    landedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prevCostPb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profitPerBale?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type supplierCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type supplierUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type supplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type supplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type supplierCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type supplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type supplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    username: string
    email: string
    designation?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    designation?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    email: string
    designation?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jobcardCreateInput = {
    jobCardNumber: string
    insuranceCompany?: string | null
    notes?: string | null
    date?: Date | string
    rSph?: Decimal | DecimalJsLike | number | string | null
    rCyl?: Decimal | DecimalJsLike | number | string | null
    rAxis?: number | null
    rPrism?: string | null
    rBase?: string | null
    rLens?: string | null
    rLensStockId?: number | null
    rLensPrice?: Decimal | DecimalJsLike | number | string | null
    lSph?: Decimal | DecimalJsLike | number | string | null
    lCyl?: Decimal | DecimalJsLike | number | string | null
    lAxis?: number | null
    lPrism?: string | null
    lBase?: string | null
    lLens?: string | null
    lLensStockId?: number | null
    lLensPrice?: Decimal | DecimalJsLike | number | string | null
    nearAdd?: string | null
    distPd?: string | null
    nearPd?: string | null
    heights?: string | null
    frame?: string | null
    frameQty?: number | null
    framePrice?: Decimal | DecimalJsLike | number | string | null
    frameStockId?: number | null
    total?: Decimal | DecimalJsLike | number | string
    consultation?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    advance?: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    jobDelDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: patientCreateNestedOneWithoutJobcardsInput
  }

  export type jobcardUncheckedCreateInput = {
    id?: number
    jobCardNumber: string
    patientId: number
    insuranceCompany?: string | null
    notes?: string | null
    date?: Date | string
    rSph?: Decimal | DecimalJsLike | number | string | null
    rCyl?: Decimal | DecimalJsLike | number | string | null
    rAxis?: number | null
    rPrism?: string | null
    rBase?: string | null
    rLens?: string | null
    rLensStockId?: number | null
    rLensPrice?: Decimal | DecimalJsLike | number | string | null
    lSph?: Decimal | DecimalJsLike | number | string | null
    lCyl?: Decimal | DecimalJsLike | number | string | null
    lAxis?: number | null
    lPrism?: string | null
    lBase?: string | null
    lLens?: string | null
    lLensStockId?: number | null
    lLensPrice?: Decimal | DecimalJsLike | number | string | null
    nearAdd?: string | null
    distPd?: string | null
    nearPd?: string | null
    heights?: string | null
    frame?: string | null
    frameQty?: number | null
    framePrice?: Decimal | DecimalJsLike | number | string | null
    frameStockId?: number | null
    total?: Decimal | DecimalJsLike | number | string
    consultation?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    advance?: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    jobDelDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jobcardUpdateInput = {
    jobCardNumber?: StringFieldUpdateOperationsInput | string
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rAxis?: NullableIntFieldUpdateOperationsInput | number | null
    rPrism?: NullableStringFieldUpdateOperationsInput | string | null
    rBase?: NullableStringFieldUpdateOperationsInput | string | null
    rLens?: NullableStringFieldUpdateOperationsInput | string | null
    rLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    rLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lAxis?: NullableIntFieldUpdateOperationsInput | number | null
    lPrism?: NullableStringFieldUpdateOperationsInput | string | null
    lBase?: NullableStringFieldUpdateOperationsInput | string | null
    lLens?: NullableStringFieldUpdateOperationsInput | string | null
    lLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    lLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nearAdd?: NullableStringFieldUpdateOperationsInput | string | null
    distPd?: NullableStringFieldUpdateOperationsInput | string | null
    nearPd?: NullableStringFieldUpdateOperationsInput | string | null
    heights?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    frameQty?: NullableIntFieldUpdateOperationsInput | number | null
    framePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frameStockId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jobDelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientUpdateOneRequiredWithoutJobcardsNestedInput
  }

  export type jobcardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobCardNumber?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rAxis?: NullableIntFieldUpdateOperationsInput | number | null
    rPrism?: NullableStringFieldUpdateOperationsInput | string | null
    rBase?: NullableStringFieldUpdateOperationsInput | string | null
    rLens?: NullableStringFieldUpdateOperationsInput | string | null
    rLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    rLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lAxis?: NullableIntFieldUpdateOperationsInput | number | null
    lPrism?: NullableStringFieldUpdateOperationsInput | string | null
    lBase?: NullableStringFieldUpdateOperationsInput | string | null
    lLens?: NullableStringFieldUpdateOperationsInput | string | null
    lLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    lLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nearAdd?: NullableStringFieldUpdateOperationsInput | string | null
    distPd?: NullableStringFieldUpdateOperationsInput | string | null
    nearPd?: NullableStringFieldUpdateOperationsInput | string | null
    heights?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    frameQty?: NullableIntFieldUpdateOperationsInput | number | null
    framePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frameStockId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jobDelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobcardCreateManyInput = {
    id?: number
    jobCardNumber: string
    patientId: number
    insuranceCompany?: string | null
    notes?: string | null
    date?: Date | string
    rSph?: Decimal | DecimalJsLike | number | string | null
    rCyl?: Decimal | DecimalJsLike | number | string | null
    rAxis?: number | null
    rPrism?: string | null
    rBase?: string | null
    rLens?: string | null
    rLensStockId?: number | null
    rLensPrice?: Decimal | DecimalJsLike | number | string | null
    lSph?: Decimal | DecimalJsLike | number | string | null
    lCyl?: Decimal | DecimalJsLike | number | string | null
    lAxis?: number | null
    lPrism?: string | null
    lBase?: string | null
    lLens?: string | null
    lLensStockId?: number | null
    lLensPrice?: Decimal | DecimalJsLike | number | string | null
    nearAdd?: string | null
    distPd?: string | null
    nearPd?: string | null
    heights?: string | null
    frame?: string | null
    frameQty?: number | null
    framePrice?: Decimal | DecimalJsLike | number | string | null
    frameStockId?: number | null
    total?: Decimal | DecimalJsLike | number | string
    consultation?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    advance?: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    jobDelDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jobcardUpdateManyMutationInput = {
    jobCardNumber?: StringFieldUpdateOperationsInput | string
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rAxis?: NullableIntFieldUpdateOperationsInput | number | null
    rPrism?: NullableStringFieldUpdateOperationsInput | string | null
    rBase?: NullableStringFieldUpdateOperationsInput | string | null
    rLens?: NullableStringFieldUpdateOperationsInput | string | null
    rLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    rLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lAxis?: NullableIntFieldUpdateOperationsInput | number | null
    lPrism?: NullableStringFieldUpdateOperationsInput | string | null
    lBase?: NullableStringFieldUpdateOperationsInput | string | null
    lLens?: NullableStringFieldUpdateOperationsInput | string | null
    lLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    lLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nearAdd?: NullableStringFieldUpdateOperationsInput | string | null
    distPd?: NullableStringFieldUpdateOperationsInput | string | null
    nearPd?: NullableStringFieldUpdateOperationsInput | string | null
    heights?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    frameQty?: NullableIntFieldUpdateOperationsInput | number | null
    framePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frameStockId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jobDelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobcardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobCardNumber?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rAxis?: NullableIntFieldUpdateOperationsInput | number | null
    rPrism?: NullableStringFieldUpdateOperationsInput | string | null
    rBase?: NullableStringFieldUpdateOperationsInput | string | null
    rLens?: NullableStringFieldUpdateOperationsInput | string | null
    rLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    rLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lAxis?: NullableIntFieldUpdateOperationsInput | number | null
    lPrism?: NullableStringFieldUpdateOperationsInput | string | null
    lBase?: NullableStringFieldUpdateOperationsInput | string | null
    lLens?: NullableStringFieldUpdateOperationsInput | string | null
    lLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    lLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nearAdd?: NullableStringFieldUpdateOperationsInput | string | null
    distPd?: NullableStringFieldUpdateOperationsInput | string | null
    nearPd?: NullableStringFieldUpdateOperationsInput | string | null
    heights?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    frameQty?: NullableIntFieldUpdateOperationsInput | number | null
    framePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frameStockId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jobDelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SaleListRelationFilter = {
    every?: saleWhereInput
    some?: saleWhereInput
    none?: saleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type saleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerOrderByRelevanceInput = {
    fields: customerOrderByRelevanceFieldEnum | customerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type expenseOrderByRelevanceInput = {
    fields: expenseOrderByRelevanceFieldEnum | expenseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type expenseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type expenseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expenseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type JobcardListRelationFilter = {
    every?: jobcardWhereInput
    some?: jobcardWhereInput
    none?: jobcardWhereInput
  }

  export type jobcardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type patientOrderByRelevanceInput = {
    fields: patientOrderByRelevanceFieldEnum | patientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: customerWhereInput | null
    isNot?: customerWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: patientWhereInput | null
    isNot?: patientWhereInput | null
  }

  export type SaleitemListRelationFilter = {
    every?: saleitemWhereInput
    some?: saleitemWhereInput
    none?: saleitemWhereInput
  }

  export type saleitemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saleOrderByRelevanceInput = {
    fields: saleOrderByRelevanceFieldEnum | saleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type saleCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    patientId?: SortOrder
    referenceNumber?: SortOrder
    etimsReceipt?: SortOrder
    etimsAmount?: SortOrder
    total?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type saleAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    patientId?: SortOrder
    etimsAmount?: SortOrder
    total?: SortOrder
    discount?: SortOrder
  }

  export type saleMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    patientId?: SortOrder
    referenceNumber?: SortOrder
    etimsReceipt?: SortOrder
    etimsAmount?: SortOrder
    total?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type saleMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    patientId?: SortOrder
    referenceNumber?: SortOrder
    etimsReceipt?: SortOrder
    etimsAmount?: SortOrder
    total?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type saleSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    patientId?: SortOrder
    etimsAmount?: SortOrder
    total?: SortOrder
    discount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ContainerItemListRelationFilter = {
    every?: containerItemWhereInput
    some?: containerItemWhereInput
    none?: containerItemWhereInput
  }

  export type containerItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type containerOrderByRelevanceInput = {
    fields: containerOrderByRelevanceFieldEnum | containerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type containerCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    supplierName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type containerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type containerMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    supplierName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type containerMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    supplierName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type containerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ContainerScalarRelationFilter = {
    is?: containerWhereInput
    isNot?: containerWhereInput
  }

  export type containerItemOrderByRelevanceInput = {
    fields: containerItemOrderByRelevanceFieldEnum | containerItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type containerItemCountOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    index?: SortOrder
    lensCategory?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
    quantityOrdered?: SortOrder
    landedCost?: SortOrder
    wholesalePrice?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    costKsh?: SortOrder
    createdAt?: SortOrder
  }

  export type containerItemAvgOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
    quantityOrdered?: SortOrder
    landedCost?: SortOrder
    wholesalePrice?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    costKsh?: SortOrder
  }

  export type containerItemMaxOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    index?: SortOrder
    lensCategory?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
    quantityOrdered?: SortOrder
    landedCost?: SortOrder
    wholesalePrice?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    costKsh?: SortOrder
    createdAt?: SortOrder
  }

  export type containerItemMinOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    index?: SortOrder
    lensCategory?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
    quantityOrdered?: SortOrder
    landedCost?: SortOrder
    wholesalePrice?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    costKsh?: SortOrder
    createdAt?: SortOrder
  }

  export type containerItemSumOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
    quantityOrdered?: SortOrder
    landedCost?: SortOrder
    wholesalePrice?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    costKsh?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type SaleScalarRelationFilter = {
    is?: saleWhereInput
    isNot?: saleWhereInput
  }

  export type StockScalarRelationFilter = {
    is?: stockWhereInput
    isNot?: stockWhereInput
  }

  export type saleitemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    stockId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type saleitemAvgOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    stockId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type saleitemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    stockId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type saleitemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    stockId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type saleitemSumOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    stockId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type stockOrderByRelevanceInput = {
    fields: stockOrderByRelevanceFieldEnum | stockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type stockCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appPrice?: SortOrder
    bought?: SortOrder
    code?: SortOrder
    costKsh?: SortOrder
    costUsd?: SortOrder
    etr?: SortOrder
    fob?: SortOrder
    loading?: SortOrder
    landedCost?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    prevCostPb?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    profitPerBale?: SortOrder
    qty?: SortOrder
    supplier?: SortOrder
    index?: SortOrder
    wholesalePrice?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
    lensCategory?: SortOrder
    isDeleted?: SortOrder
  }

  export type stockAvgOrderByAggregateInput = {
    id?: SortOrder
    appPrice?: SortOrder
    costKsh?: SortOrder
    costUsd?: SortOrder
    fob?: SortOrder
    loading?: SortOrder
    landedCost?: SortOrder
    prevCostPb?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    profitPerBale?: SortOrder
    qty?: SortOrder
    wholesalePrice?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
  }

  export type stockMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appPrice?: SortOrder
    bought?: SortOrder
    code?: SortOrder
    costKsh?: SortOrder
    costUsd?: SortOrder
    etr?: SortOrder
    fob?: SortOrder
    loading?: SortOrder
    landedCost?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    prevCostPb?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    profitPerBale?: SortOrder
    qty?: SortOrder
    supplier?: SortOrder
    index?: SortOrder
    wholesalePrice?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
    lensCategory?: SortOrder
    isDeleted?: SortOrder
  }

  export type stockMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appPrice?: SortOrder
    bought?: SortOrder
    code?: SortOrder
    costKsh?: SortOrder
    costUsd?: SortOrder
    etr?: SortOrder
    fob?: SortOrder
    loading?: SortOrder
    landedCost?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    prevCostPb?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    profitPerBale?: SortOrder
    qty?: SortOrder
    supplier?: SortOrder
    index?: SortOrder
    wholesalePrice?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
    lensCategory?: SortOrder
    isDeleted?: SortOrder
  }

  export type stockSumOrderByAggregateInput = {
    id?: SortOrder
    appPrice?: SortOrder
    costKsh?: SortOrder
    costUsd?: SortOrder
    fob?: SortOrder
    loading?: SortOrder
    landedCost?: SortOrder
    prevCostPb?: SortOrder
    priceKsh?: SortOrder
    priceUsd?: SortOrder
    profitPerBale?: SortOrder
    qty?: SortOrder
    wholesalePrice?: SortOrder
    sph?: SortOrder
    cyl?: SortOrder
    axis?: SortOrder
    nearAdd?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type supplierOrderByRelevanceInput = {
    fields: supplierOrderByRelevanceFieldEnum | supplierOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type supplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type supplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type supplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type supplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type supplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    designation?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    designation?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    designation?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientScalarRelationFilter = {
    is?: patientWhereInput
    isNot?: patientWhereInput
  }

  export type jobcardOrderByRelevanceInput = {
    fields: jobcardOrderByRelevanceFieldEnum | jobcardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jobcardCountOrderByAggregateInput = {
    id?: SortOrder
    jobCardNumber?: SortOrder
    patientId?: SortOrder
    insuranceCompany?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    rSph?: SortOrder
    rCyl?: SortOrder
    rAxis?: SortOrder
    rPrism?: SortOrder
    rBase?: SortOrder
    rLens?: SortOrder
    rLensStockId?: SortOrder
    rLensPrice?: SortOrder
    lSph?: SortOrder
    lCyl?: SortOrder
    lAxis?: SortOrder
    lPrism?: SortOrder
    lBase?: SortOrder
    lLens?: SortOrder
    lLensStockId?: SortOrder
    lLensPrice?: SortOrder
    nearAdd?: SortOrder
    distPd?: SortOrder
    nearPd?: SortOrder
    heights?: SortOrder
    frame?: SortOrder
    frameQty?: SortOrder
    framePrice?: SortOrder
    frameStockId?: SortOrder
    total?: SortOrder
    consultation?: SortOrder
    discount?: SortOrder
    advance?: SortOrder
    balance?: SortOrder
    jobDelDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type jobcardAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    rSph?: SortOrder
    rCyl?: SortOrder
    rAxis?: SortOrder
    rLensStockId?: SortOrder
    rLensPrice?: SortOrder
    lSph?: SortOrder
    lCyl?: SortOrder
    lAxis?: SortOrder
    lLensStockId?: SortOrder
    lLensPrice?: SortOrder
    frameQty?: SortOrder
    framePrice?: SortOrder
    frameStockId?: SortOrder
    total?: SortOrder
    consultation?: SortOrder
    discount?: SortOrder
    advance?: SortOrder
    balance?: SortOrder
  }

  export type jobcardMaxOrderByAggregateInput = {
    id?: SortOrder
    jobCardNumber?: SortOrder
    patientId?: SortOrder
    insuranceCompany?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    rSph?: SortOrder
    rCyl?: SortOrder
    rAxis?: SortOrder
    rPrism?: SortOrder
    rBase?: SortOrder
    rLens?: SortOrder
    rLensStockId?: SortOrder
    rLensPrice?: SortOrder
    lSph?: SortOrder
    lCyl?: SortOrder
    lAxis?: SortOrder
    lPrism?: SortOrder
    lBase?: SortOrder
    lLens?: SortOrder
    lLensStockId?: SortOrder
    lLensPrice?: SortOrder
    nearAdd?: SortOrder
    distPd?: SortOrder
    nearPd?: SortOrder
    heights?: SortOrder
    frame?: SortOrder
    frameQty?: SortOrder
    framePrice?: SortOrder
    frameStockId?: SortOrder
    total?: SortOrder
    consultation?: SortOrder
    discount?: SortOrder
    advance?: SortOrder
    balance?: SortOrder
    jobDelDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type jobcardMinOrderByAggregateInput = {
    id?: SortOrder
    jobCardNumber?: SortOrder
    patientId?: SortOrder
    insuranceCompany?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    rSph?: SortOrder
    rCyl?: SortOrder
    rAxis?: SortOrder
    rPrism?: SortOrder
    rBase?: SortOrder
    rLens?: SortOrder
    rLensStockId?: SortOrder
    rLensPrice?: SortOrder
    lSph?: SortOrder
    lCyl?: SortOrder
    lAxis?: SortOrder
    lPrism?: SortOrder
    lBase?: SortOrder
    lLens?: SortOrder
    lLensStockId?: SortOrder
    lLensPrice?: SortOrder
    nearAdd?: SortOrder
    distPd?: SortOrder
    nearPd?: SortOrder
    heights?: SortOrder
    frame?: SortOrder
    frameQty?: SortOrder
    framePrice?: SortOrder
    frameStockId?: SortOrder
    total?: SortOrder
    consultation?: SortOrder
    discount?: SortOrder
    advance?: SortOrder
    balance?: SortOrder
    jobDelDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type jobcardSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    rSph?: SortOrder
    rCyl?: SortOrder
    rAxis?: SortOrder
    rLensStockId?: SortOrder
    rLensPrice?: SortOrder
    lSph?: SortOrder
    lCyl?: SortOrder
    lAxis?: SortOrder
    lLensStockId?: SortOrder
    lLensPrice?: SortOrder
    frameQty?: SortOrder
    framePrice?: SortOrder
    frameStockId?: SortOrder
    total?: SortOrder
    consultation?: SortOrder
    discount?: SortOrder
    advance?: SortOrder
    balance?: SortOrder
  }

  export type saleCreateNestedManyWithoutCustomerInput = {
    create?: XOR<saleCreateWithoutCustomerInput, saleUncheckedCreateWithoutCustomerInput> | saleCreateWithoutCustomerInput[] | saleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: saleCreateOrConnectWithoutCustomerInput | saleCreateOrConnectWithoutCustomerInput[]
    createMany?: saleCreateManyCustomerInputEnvelope
    connect?: saleWhereUniqueInput | saleWhereUniqueInput[]
  }

  export type saleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<saleCreateWithoutCustomerInput, saleUncheckedCreateWithoutCustomerInput> | saleCreateWithoutCustomerInput[] | saleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: saleCreateOrConnectWithoutCustomerInput | saleCreateOrConnectWithoutCustomerInput[]
    createMany?: saleCreateManyCustomerInputEnvelope
    connect?: saleWhereUniqueInput | saleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type saleUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<saleCreateWithoutCustomerInput, saleUncheckedCreateWithoutCustomerInput> | saleCreateWithoutCustomerInput[] | saleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: saleCreateOrConnectWithoutCustomerInput | saleCreateOrConnectWithoutCustomerInput[]
    upsert?: saleUpsertWithWhereUniqueWithoutCustomerInput | saleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: saleCreateManyCustomerInputEnvelope
    set?: saleWhereUniqueInput | saleWhereUniqueInput[]
    disconnect?: saleWhereUniqueInput | saleWhereUniqueInput[]
    delete?: saleWhereUniqueInput | saleWhereUniqueInput[]
    connect?: saleWhereUniqueInput | saleWhereUniqueInput[]
    update?: saleUpdateWithWhereUniqueWithoutCustomerInput | saleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: saleUpdateManyWithWhereWithoutCustomerInput | saleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: saleScalarWhereInput | saleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type saleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<saleCreateWithoutCustomerInput, saleUncheckedCreateWithoutCustomerInput> | saleCreateWithoutCustomerInput[] | saleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: saleCreateOrConnectWithoutCustomerInput | saleCreateOrConnectWithoutCustomerInput[]
    upsert?: saleUpsertWithWhereUniqueWithoutCustomerInput | saleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: saleCreateManyCustomerInputEnvelope
    set?: saleWhereUniqueInput | saleWhereUniqueInput[]
    disconnect?: saleWhereUniqueInput | saleWhereUniqueInput[]
    delete?: saleWhereUniqueInput | saleWhereUniqueInput[]
    connect?: saleWhereUniqueInput | saleWhereUniqueInput[]
    update?: saleUpdateWithWhereUniqueWithoutCustomerInput | saleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: saleUpdateManyWithWhereWithoutCustomerInput | saleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: saleScalarWhereInput | saleScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type jobcardCreateNestedManyWithoutPatientInput = {
    create?: XOR<jobcardCreateWithoutPatientInput, jobcardUncheckedCreateWithoutPatientInput> | jobcardCreateWithoutPatientInput[] | jobcardUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: jobcardCreateOrConnectWithoutPatientInput | jobcardCreateOrConnectWithoutPatientInput[]
    createMany?: jobcardCreateManyPatientInputEnvelope
    connect?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
  }

  export type saleCreateNestedManyWithoutPatientInput = {
    create?: XOR<saleCreateWithoutPatientInput, saleUncheckedCreateWithoutPatientInput> | saleCreateWithoutPatientInput[] | saleUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: saleCreateOrConnectWithoutPatientInput | saleCreateOrConnectWithoutPatientInput[]
    createMany?: saleCreateManyPatientInputEnvelope
    connect?: saleWhereUniqueInput | saleWhereUniqueInput[]
  }

  export type jobcardUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<jobcardCreateWithoutPatientInput, jobcardUncheckedCreateWithoutPatientInput> | jobcardCreateWithoutPatientInput[] | jobcardUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: jobcardCreateOrConnectWithoutPatientInput | jobcardCreateOrConnectWithoutPatientInput[]
    createMany?: jobcardCreateManyPatientInputEnvelope
    connect?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
  }

  export type saleUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<saleCreateWithoutPatientInput, saleUncheckedCreateWithoutPatientInput> | saleCreateWithoutPatientInput[] | saleUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: saleCreateOrConnectWithoutPatientInput | saleCreateOrConnectWithoutPatientInput[]
    createMany?: saleCreateManyPatientInputEnvelope
    connect?: saleWhereUniqueInput | saleWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type jobcardUpdateManyWithoutPatientNestedInput = {
    create?: XOR<jobcardCreateWithoutPatientInput, jobcardUncheckedCreateWithoutPatientInput> | jobcardCreateWithoutPatientInput[] | jobcardUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: jobcardCreateOrConnectWithoutPatientInput | jobcardCreateOrConnectWithoutPatientInput[]
    upsert?: jobcardUpsertWithWhereUniqueWithoutPatientInput | jobcardUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: jobcardCreateManyPatientInputEnvelope
    set?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
    disconnect?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
    delete?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
    connect?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
    update?: jobcardUpdateWithWhereUniqueWithoutPatientInput | jobcardUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: jobcardUpdateManyWithWhereWithoutPatientInput | jobcardUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: jobcardScalarWhereInput | jobcardScalarWhereInput[]
  }

  export type saleUpdateManyWithoutPatientNestedInput = {
    create?: XOR<saleCreateWithoutPatientInput, saleUncheckedCreateWithoutPatientInput> | saleCreateWithoutPatientInput[] | saleUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: saleCreateOrConnectWithoutPatientInput | saleCreateOrConnectWithoutPatientInput[]
    upsert?: saleUpsertWithWhereUniqueWithoutPatientInput | saleUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: saleCreateManyPatientInputEnvelope
    set?: saleWhereUniqueInput | saleWhereUniqueInput[]
    disconnect?: saleWhereUniqueInput | saleWhereUniqueInput[]
    delete?: saleWhereUniqueInput | saleWhereUniqueInput[]
    connect?: saleWhereUniqueInput | saleWhereUniqueInput[]
    update?: saleUpdateWithWhereUniqueWithoutPatientInput | saleUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: saleUpdateManyWithWhereWithoutPatientInput | saleUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: saleScalarWhereInput | saleScalarWhereInput[]
  }

  export type jobcardUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<jobcardCreateWithoutPatientInput, jobcardUncheckedCreateWithoutPatientInput> | jobcardCreateWithoutPatientInput[] | jobcardUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: jobcardCreateOrConnectWithoutPatientInput | jobcardCreateOrConnectWithoutPatientInput[]
    upsert?: jobcardUpsertWithWhereUniqueWithoutPatientInput | jobcardUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: jobcardCreateManyPatientInputEnvelope
    set?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
    disconnect?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
    delete?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
    connect?: jobcardWhereUniqueInput | jobcardWhereUniqueInput[]
    update?: jobcardUpdateWithWhereUniqueWithoutPatientInput | jobcardUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: jobcardUpdateManyWithWhereWithoutPatientInput | jobcardUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: jobcardScalarWhereInput | jobcardScalarWhereInput[]
  }

  export type saleUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<saleCreateWithoutPatientInput, saleUncheckedCreateWithoutPatientInput> | saleCreateWithoutPatientInput[] | saleUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: saleCreateOrConnectWithoutPatientInput | saleCreateOrConnectWithoutPatientInput[]
    upsert?: saleUpsertWithWhereUniqueWithoutPatientInput | saleUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: saleCreateManyPatientInputEnvelope
    set?: saleWhereUniqueInput | saleWhereUniqueInput[]
    disconnect?: saleWhereUniqueInput | saleWhereUniqueInput[]
    delete?: saleWhereUniqueInput | saleWhereUniqueInput[]
    connect?: saleWhereUniqueInput | saleWhereUniqueInput[]
    update?: saleUpdateWithWhereUniqueWithoutPatientInput | saleUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: saleUpdateManyWithWhereWithoutPatientInput | saleUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: saleScalarWhereInput | saleScalarWhereInput[]
  }

  export type customerCreateNestedOneWithoutSaleInput = {
    create?: XOR<customerCreateWithoutSaleInput, customerUncheckedCreateWithoutSaleInput>
    connectOrCreate?: customerCreateOrConnectWithoutSaleInput
    connect?: customerWhereUniqueInput
  }

  export type patientCreateNestedOneWithoutSalesInput = {
    create?: XOR<patientCreateWithoutSalesInput, patientUncheckedCreateWithoutSalesInput>
    connectOrCreate?: patientCreateOrConnectWithoutSalesInput
    connect?: patientWhereUniqueInput
  }

  export type saleitemCreateNestedManyWithoutSaleInput = {
    create?: XOR<saleitemCreateWithoutSaleInput, saleitemUncheckedCreateWithoutSaleInput> | saleitemCreateWithoutSaleInput[] | saleitemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: saleitemCreateOrConnectWithoutSaleInput | saleitemCreateOrConnectWithoutSaleInput[]
    createMany?: saleitemCreateManySaleInputEnvelope
    connect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
  }

  export type saleitemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<saleitemCreateWithoutSaleInput, saleitemUncheckedCreateWithoutSaleInput> | saleitemCreateWithoutSaleInput[] | saleitemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: saleitemCreateOrConnectWithoutSaleInput | saleitemCreateOrConnectWithoutSaleInput[]
    createMany?: saleitemCreateManySaleInputEnvelope
    connect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type customerUpdateOneWithoutSaleNestedInput = {
    create?: XOR<customerCreateWithoutSaleInput, customerUncheckedCreateWithoutSaleInput>
    connectOrCreate?: customerCreateOrConnectWithoutSaleInput
    upsert?: customerUpsertWithoutSaleInput
    disconnect?: customerWhereInput | boolean
    delete?: customerWhereInput | boolean
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutSaleInput, customerUpdateWithoutSaleInput>, customerUncheckedUpdateWithoutSaleInput>
  }

  export type patientUpdateOneWithoutSalesNestedInput = {
    create?: XOR<patientCreateWithoutSalesInput, patientUncheckedCreateWithoutSalesInput>
    connectOrCreate?: patientCreateOrConnectWithoutSalesInput
    upsert?: patientUpsertWithoutSalesInput
    disconnect?: patientWhereInput | boolean
    delete?: patientWhereInput | boolean
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutSalesInput, patientUpdateWithoutSalesInput>, patientUncheckedUpdateWithoutSalesInput>
  }

  export type saleitemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<saleitemCreateWithoutSaleInput, saleitemUncheckedCreateWithoutSaleInput> | saleitemCreateWithoutSaleInput[] | saleitemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: saleitemCreateOrConnectWithoutSaleInput | saleitemCreateOrConnectWithoutSaleInput[]
    upsert?: saleitemUpsertWithWhereUniqueWithoutSaleInput | saleitemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: saleitemCreateManySaleInputEnvelope
    set?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    disconnect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    delete?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    connect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    update?: saleitemUpdateWithWhereUniqueWithoutSaleInput | saleitemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: saleitemUpdateManyWithWhereWithoutSaleInput | saleitemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: saleitemScalarWhereInput | saleitemScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type saleitemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<saleitemCreateWithoutSaleInput, saleitemUncheckedCreateWithoutSaleInput> | saleitemCreateWithoutSaleInput[] | saleitemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: saleitemCreateOrConnectWithoutSaleInput | saleitemCreateOrConnectWithoutSaleInput[]
    upsert?: saleitemUpsertWithWhereUniqueWithoutSaleInput | saleitemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: saleitemCreateManySaleInputEnvelope
    set?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    disconnect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    delete?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    connect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    update?: saleitemUpdateWithWhereUniqueWithoutSaleInput | saleitemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: saleitemUpdateManyWithWhereWithoutSaleInput | saleitemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: saleitemScalarWhereInput | saleitemScalarWhereInput[]
  }

  export type containerItemCreateNestedManyWithoutContainerInput = {
    create?: XOR<containerItemCreateWithoutContainerInput, containerItemUncheckedCreateWithoutContainerInput> | containerItemCreateWithoutContainerInput[] | containerItemUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: containerItemCreateOrConnectWithoutContainerInput | containerItemCreateOrConnectWithoutContainerInput[]
    createMany?: containerItemCreateManyContainerInputEnvelope
    connect?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
  }

  export type containerItemUncheckedCreateNestedManyWithoutContainerInput = {
    create?: XOR<containerItemCreateWithoutContainerInput, containerItemUncheckedCreateWithoutContainerInput> | containerItemCreateWithoutContainerInput[] | containerItemUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: containerItemCreateOrConnectWithoutContainerInput | containerItemCreateOrConnectWithoutContainerInput[]
    createMany?: containerItemCreateManyContainerInputEnvelope
    connect?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
  }

  export type containerItemUpdateManyWithoutContainerNestedInput = {
    create?: XOR<containerItemCreateWithoutContainerInput, containerItemUncheckedCreateWithoutContainerInput> | containerItemCreateWithoutContainerInput[] | containerItemUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: containerItemCreateOrConnectWithoutContainerInput | containerItemCreateOrConnectWithoutContainerInput[]
    upsert?: containerItemUpsertWithWhereUniqueWithoutContainerInput | containerItemUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: containerItemCreateManyContainerInputEnvelope
    set?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
    disconnect?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
    delete?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
    connect?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
    update?: containerItemUpdateWithWhereUniqueWithoutContainerInput | containerItemUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: containerItemUpdateManyWithWhereWithoutContainerInput | containerItemUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: containerItemScalarWhereInput | containerItemScalarWhereInput[]
  }

  export type containerItemUncheckedUpdateManyWithoutContainerNestedInput = {
    create?: XOR<containerItemCreateWithoutContainerInput, containerItemUncheckedCreateWithoutContainerInput> | containerItemCreateWithoutContainerInput[] | containerItemUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: containerItemCreateOrConnectWithoutContainerInput | containerItemCreateOrConnectWithoutContainerInput[]
    upsert?: containerItemUpsertWithWhereUniqueWithoutContainerInput | containerItemUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: containerItemCreateManyContainerInputEnvelope
    set?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
    disconnect?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
    delete?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
    connect?: containerItemWhereUniqueInput | containerItemWhereUniqueInput[]
    update?: containerItemUpdateWithWhereUniqueWithoutContainerInput | containerItemUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: containerItemUpdateManyWithWhereWithoutContainerInput | containerItemUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: containerItemScalarWhereInput | containerItemScalarWhereInput[]
  }

  export type containerCreateNestedOneWithoutItemsInput = {
    create?: XOR<containerCreateWithoutItemsInput, containerUncheckedCreateWithoutItemsInput>
    connectOrCreate?: containerCreateOrConnectWithoutItemsInput
    connect?: containerWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type containerUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<containerCreateWithoutItemsInput, containerUncheckedCreateWithoutItemsInput>
    connectOrCreate?: containerCreateOrConnectWithoutItemsInput
    upsert?: containerUpsertWithoutItemsInput
    connect?: containerWhereUniqueInput
    update?: XOR<XOR<containerUpdateToOneWithWhereWithoutItemsInput, containerUpdateWithoutItemsInput>, containerUncheckedUpdateWithoutItemsInput>
  }

  export type saleCreateNestedOneWithoutSaleitemInput = {
    create?: XOR<saleCreateWithoutSaleitemInput, saleUncheckedCreateWithoutSaleitemInput>
    connectOrCreate?: saleCreateOrConnectWithoutSaleitemInput
    connect?: saleWhereUniqueInput
  }

  export type stockCreateNestedOneWithoutSaleitemInput = {
    create?: XOR<stockCreateWithoutSaleitemInput, stockUncheckedCreateWithoutSaleitemInput>
    connectOrCreate?: stockCreateOrConnectWithoutSaleitemInput
    connect?: stockWhereUniqueInput
  }

  export type saleUpdateOneRequiredWithoutSaleitemNestedInput = {
    create?: XOR<saleCreateWithoutSaleitemInput, saleUncheckedCreateWithoutSaleitemInput>
    connectOrCreate?: saleCreateOrConnectWithoutSaleitemInput
    upsert?: saleUpsertWithoutSaleitemInput
    connect?: saleWhereUniqueInput
    update?: XOR<XOR<saleUpdateToOneWithWhereWithoutSaleitemInput, saleUpdateWithoutSaleitemInput>, saleUncheckedUpdateWithoutSaleitemInput>
  }

  export type stockUpdateOneRequiredWithoutSaleitemNestedInput = {
    create?: XOR<stockCreateWithoutSaleitemInput, stockUncheckedCreateWithoutSaleitemInput>
    connectOrCreate?: stockCreateOrConnectWithoutSaleitemInput
    upsert?: stockUpsertWithoutSaleitemInput
    connect?: stockWhereUniqueInput
    update?: XOR<XOR<stockUpdateToOneWithWhereWithoutSaleitemInput, stockUpdateWithoutSaleitemInput>, stockUncheckedUpdateWithoutSaleitemInput>
  }

  export type saleitemCreateNestedManyWithoutStockInput = {
    create?: XOR<saleitemCreateWithoutStockInput, saleitemUncheckedCreateWithoutStockInput> | saleitemCreateWithoutStockInput[] | saleitemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: saleitemCreateOrConnectWithoutStockInput | saleitemCreateOrConnectWithoutStockInput[]
    createMany?: saleitemCreateManyStockInputEnvelope
    connect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
  }

  export type saleitemUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<saleitemCreateWithoutStockInput, saleitemUncheckedCreateWithoutStockInput> | saleitemCreateWithoutStockInput[] | saleitemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: saleitemCreateOrConnectWithoutStockInput | saleitemCreateOrConnectWithoutStockInput[]
    createMany?: saleitemCreateManyStockInputEnvelope
    connect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type saleitemUpdateManyWithoutStockNestedInput = {
    create?: XOR<saleitemCreateWithoutStockInput, saleitemUncheckedCreateWithoutStockInput> | saleitemCreateWithoutStockInput[] | saleitemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: saleitemCreateOrConnectWithoutStockInput | saleitemCreateOrConnectWithoutStockInput[]
    upsert?: saleitemUpsertWithWhereUniqueWithoutStockInput | saleitemUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: saleitemCreateManyStockInputEnvelope
    set?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    disconnect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    delete?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    connect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    update?: saleitemUpdateWithWhereUniqueWithoutStockInput | saleitemUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: saleitemUpdateManyWithWhereWithoutStockInput | saleitemUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: saleitemScalarWhereInput | saleitemScalarWhereInput[]
  }

  export type saleitemUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<saleitemCreateWithoutStockInput, saleitemUncheckedCreateWithoutStockInput> | saleitemCreateWithoutStockInput[] | saleitemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: saleitemCreateOrConnectWithoutStockInput | saleitemCreateOrConnectWithoutStockInput[]
    upsert?: saleitemUpsertWithWhereUniqueWithoutStockInput | saleitemUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: saleitemCreateManyStockInputEnvelope
    set?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    disconnect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    delete?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    connect?: saleitemWhereUniqueInput | saleitemWhereUniqueInput[]
    update?: saleitemUpdateWithWhereUniqueWithoutStockInput | saleitemUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: saleitemUpdateManyWithWhereWithoutStockInput | saleitemUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: saleitemScalarWhereInput | saleitemScalarWhereInput[]
  }

  export type patientCreateNestedOneWithoutJobcardsInput = {
    create?: XOR<patientCreateWithoutJobcardsInput, patientUncheckedCreateWithoutJobcardsInput>
    connectOrCreate?: patientCreateOrConnectWithoutJobcardsInput
    connect?: patientWhereUniqueInput
  }

  export type patientUpdateOneRequiredWithoutJobcardsNestedInput = {
    create?: XOR<patientCreateWithoutJobcardsInput, patientUncheckedCreateWithoutJobcardsInput>
    connectOrCreate?: patientCreateOrConnectWithoutJobcardsInput
    upsert?: patientUpsertWithoutJobcardsInput
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutJobcardsInput, patientUpdateWithoutJobcardsInput>, patientUncheckedUpdateWithoutJobcardsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type saleCreateWithoutCustomerInput = {
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: patientCreateNestedOneWithoutSalesInput
    saleitem?: saleitemCreateNestedManyWithoutSaleInput
  }

  export type saleUncheckedCreateWithoutCustomerInput = {
    id?: number
    patientId?: number | null
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleitem?: saleitemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type saleCreateOrConnectWithoutCustomerInput = {
    where: saleWhereUniqueInput
    create: XOR<saleCreateWithoutCustomerInput, saleUncheckedCreateWithoutCustomerInput>
  }

  export type saleCreateManyCustomerInputEnvelope = {
    data: saleCreateManyCustomerInput | saleCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type saleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: saleWhereUniqueInput
    update: XOR<saleUpdateWithoutCustomerInput, saleUncheckedUpdateWithoutCustomerInput>
    create: XOR<saleCreateWithoutCustomerInput, saleUncheckedCreateWithoutCustomerInput>
  }

  export type saleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: saleWhereUniqueInput
    data: XOR<saleUpdateWithoutCustomerInput, saleUncheckedUpdateWithoutCustomerInput>
  }

  export type saleUpdateManyWithWhereWithoutCustomerInput = {
    where: saleScalarWhereInput
    data: XOR<saleUpdateManyMutationInput, saleUncheckedUpdateManyWithoutCustomerInput>
  }

  export type saleScalarWhereInput = {
    AND?: saleScalarWhereInput | saleScalarWhereInput[]
    OR?: saleScalarWhereInput[]
    NOT?: saleScalarWhereInput | saleScalarWhereInput[]
    id?: IntFilter<"sale"> | number
    customerId?: IntNullableFilter<"sale"> | number | null
    patientId?: IntNullableFilter<"sale"> | number | null
    referenceNumber?: StringNullableFilter<"sale"> | string | null
    etimsReceipt?: StringNullableFilter<"sale"> | string | null
    etimsAmount?: DecimalNullableFilter<"sale"> | Decimal | DecimalJsLike | number | string | null
    total?: FloatFilter<"sale"> | number
    discount?: FloatFilter<"sale"> | number
    createdAt?: DateTimeFilter<"sale"> | Date | string
    updatedAt?: DateTimeFilter<"sale"> | Date | string
  }

  export type jobcardCreateWithoutPatientInput = {
    jobCardNumber: string
    insuranceCompany?: string | null
    notes?: string | null
    date?: Date | string
    rSph?: Decimal | DecimalJsLike | number | string | null
    rCyl?: Decimal | DecimalJsLike | number | string | null
    rAxis?: number | null
    rPrism?: string | null
    rBase?: string | null
    rLens?: string | null
    rLensStockId?: number | null
    rLensPrice?: Decimal | DecimalJsLike | number | string | null
    lSph?: Decimal | DecimalJsLike | number | string | null
    lCyl?: Decimal | DecimalJsLike | number | string | null
    lAxis?: number | null
    lPrism?: string | null
    lBase?: string | null
    lLens?: string | null
    lLensStockId?: number | null
    lLensPrice?: Decimal | DecimalJsLike | number | string | null
    nearAdd?: string | null
    distPd?: string | null
    nearPd?: string | null
    heights?: string | null
    frame?: string | null
    frameQty?: number | null
    framePrice?: Decimal | DecimalJsLike | number | string | null
    frameStockId?: number | null
    total?: Decimal | DecimalJsLike | number | string
    consultation?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    advance?: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    jobDelDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jobcardUncheckedCreateWithoutPatientInput = {
    id?: number
    jobCardNumber: string
    insuranceCompany?: string | null
    notes?: string | null
    date?: Date | string
    rSph?: Decimal | DecimalJsLike | number | string | null
    rCyl?: Decimal | DecimalJsLike | number | string | null
    rAxis?: number | null
    rPrism?: string | null
    rBase?: string | null
    rLens?: string | null
    rLensStockId?: number | null
    rLensPrice?: Decimal | DecimalJsLike | number | string | null
    lSph?: Decimal | DecimalJsLike | number | string | null
    lCyl?: Decimal | DecimalJsLike | number | string | null
    lAxis?: number | null
    lPrism?: string | null
    lBase?: string | null
    lLens?: string | null
    lLensStockId?: number | null
    lLensPrice?: Decimal | DecimalJsLike | number | string | null
    nearAdd?: string | null
    distPd?: string | null
    nearPd?: string | null
    heights?: string | null
    frame?: string | null
    frameQty?: number | null
    framePrice?: Decimal | DecimalJsLike | number | string | null
    frameStockId?: number | null
    total?: Decimal | DecimalJsLike | number | string
    consultation?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    advance?: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    jobDelDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jobcardCreateOrConnectWithoutPatientInput = {
    where: jobcardWhereUniqueInput
    create: XOR<jobcardCreateWithoutPatientInput, jobcardUncheckedCreateWithoutPatientInput>
  }

  export type jobcardCreateManyPatientInputEnvelope = {
    data: jobcardCreateManyPatientInput | jobcardCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type saleCreateWithoutPatientInput = {
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: customerCreateNestedOneWithoutSaleInput
    saleitem?: saleitemCreateNestedManyWithoutSaleInput
  }

  export type saleUncheckedCreateWithoutPatientInput = {
    id?: number
    customerId?: number | null
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleitem?: saleitemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type saleCreateOrConnectWithoutPatientInput = {
    where: saleWhereUniqueInput
    create: XOR<saleCreateWithoutPatientInput, saleUncheckedCreateWithoutPatientInput>
  }

  export type saleCreateManyPatientInputEnvelope = {
    data: saleCreateManyPatientInput | saleCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type jobcardUpsertWithWhereUniqueWithoutPatientInput = {
    where: jobcardWhereUniqueInput
    update: XOR<jobcardUpdateWithoutPatientInput, jobcardUncheckedUpdateWithoutPatientInput>
    create: XOR<jobcardCreateWithoutPatientInput, jobcardUncheckedCreateWithoutPatientInput>
  }

  export type jobcardUpdateWithWhereUniqueWithoutPatientInput = {
    where: jobcardWhereUniqueInput
    data: XOR<jobcardUpdateWithoutPatientInput, jobcardUncheckedUpdateWithoutPatientInput>
  }

  export type jobcardUpdateManyWithWhereWithoutPatientInput = {
    where: jobcardScalarWhereInput
    data: XOR<jobcardUpdateManyMutationInput, jobcardUncheckedUpdateManyWithoutPatientInput>
  }

  export type jobcardScalarWhereInput = {
    AND?: jobcardScalarWhereInput | jobcardScalarWhereInput[]
    OR?: jobcardScalarWhereInput[]
    NOT?: jobcardScalarWhereInput | jobcardScalarWhereInput[]
    id?: IntFilter<"jobcard"> | number
    jobCardNumber?: StringFilter<"jobcard"> | string
    patientId?: IntFilter<"jobcard"> | number
    insuranceCompany?: StringNullableFilter<"jobcard"> | string | null
    notes?: StringNullableFilter<"jobcard"> | string | null
    date?: DateTimeFilter<"jobcard"> | Date | string
    rSph?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    rCyl?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    rAxis?: IntNullableFilter<"jobcard"> | number | null
    rPrism?: StringNullableFilter<"jobcard"> | string | null
    rBase?: StringNullableFilter<"jobcard"> | string | null
    rLens?: StringNullableFilter<"jobcard"> | string | null
    rLensStockId?: IntNullableFilter<"jobcard"> | number | null
    rLensPrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lSph?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lCyl?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    lAxis?: IntNullableFilter<"jobcard"> | number | null
    lPrism?: StringNullableFilter<"jobcard"> | string | null
    lBase?: StringNullableFilter<"jobcard"> | string | null
    lLens?: StringNullableFilter<"jobcard"> | string | null
    lLensStockId?: IntNullableFilter<"jobcard"> | number | null
    lLensPrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    nearAdd?: StringNullableFilter<"jobcard"> | string | null
    distPd?: StringNullableFilter<"jobcard"> | string | null
    nearPd?: StringNullableFilter<"jobcard"> | string | null
    heights?: StringNullableFilter<"jobcard"> | string | null
    frame?: StringNullableFilter<"jobcard"> | string | null
    frameQty?: IntNullableFilter<"jobcard"> | number | null
    framePrice?: DecimalNullableFilter<"jobcard"> | Decimal | DecimalJsLike | number | string | null
    frameStockId?: IntNullableFilter<"jobcard"> | number | null
    total?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    advance?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"jobcard"> | Decimal | DecimalJsLike | number | string
    jobDelDate?: DateTimeNullableFilter<"jobcard"> | Date | string | null
    createdAt?: DateTimeFilter<"jobcard"> | Date | string
    updatedAt?: DateTimeFilter<"jobcard"> | Date | string
  }

  export type saleUpsertWithWhereUniqueWithoutPatientInput = {
    where: saleWhereUniqueInput
    update: XOR<saleUpdateWithoutPatientInput, saleUncheckedUpdateWithoutPatientInput>
    create: XOR<saleCreateWithoutPatientInput, saleUncheckedCreateWithoutPatientInput>
  }

  export type saleUpdateWithWhereUniqueWithoutPatientInput = {
    where: saleWhereUniqueInput
    data: XOR<saleUpdateWithoutPatientInput, saleUncheckedUpdateWithoutPatientInput>
  }

  export type saleUpdateManyWithWhereWithoutPatientInput = {
    where: saleScalarWhereInput
    data: XOR<saleUpdateManyMutationInput, saleUncheckedUpdateManyWithoutPatientInput>
  }

  export type customerCreateWithoutSaleInput = {
    name: string
    type: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customerUncheckedCreateWithoutSaleInput = {
    id?: number
    name: string
    type: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customerCreateOrConnectWithoutSaleInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutSaleInput, customerUncheckedCreateWithoutSaleInput>
  }

  export type patientCreateWithoutSalesInput = {
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dob?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobcards?: jobcardCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutSalesInput = {
    id?: number
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dob?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobcards?: jobcardUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutSalesInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutSalesInput, patientUncheckedCreateWithoutSalesInput>
  }

  export type saleitemCreateWithoutSaleInput = {
    quantity: Decimal | DecimalJsLike | number | string
    price: number
    stock: stockCreateNestedOneWithoutSaleitemInput
  }

  export type saleitemUncheckedCreateWithoutSaleInput = {
    id?: number
    stockId: number
    quantity: Decimal | DecimalJsLike | number | string
    price: number
  }

  export type saleitemCreateOrConnectWithoutSaleInput = {
    where: saleitemWhereUniqueInput
    create: XOR<saleitemCreateWithoutSaleInput, saleitemUncheckedCreateWithoutSaleInput>
  }

  export type saleitemCreateManySaleInputEnvelope = {
    data: saleitemCreateManySaleInput | saleitemCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type customerUpsertWithoutSaleInput = {
    update: XOR<customerUpdateWithoutSaleInput, customerUncheckedUpdateWithoutSaleInput>
    create: XOR<customerCreateWithoutSaleInput, customerUncheckedCreateWithoutSaleInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutSaleInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutSaleInput, customerUncheckedUpdateWithoutSaleInput>
  }

  export type customerUpdateWithoutSaleInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientUpsertWithoutSalesInput = {
    update: XOR<patientUpdateWithoutSalesInput, patientUncheckedUpdateWithoutSalesInput>
    create: XOR<patientCreateWithoutSalesInput, patientUncheckedCreateWithoutSalesInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutSalesInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutSalesInput, patientUncheckedUpdateWithoutSalesInput>
  }

  export type patientUpdateWithoutSalesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobcards?: jobcardUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobcards?: jobcardUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type saleitemUpsertWithWhereUniqueWithoutSaleInput = {
    where: saleitemWhereUniqueInput
    update: XOR<saleitemUpdateWithoutSaleInput, saleitemUncheckedUpdateWithoutSaleInput>
    create: XOR<saleitemCreateWithoutSaleInput, saleitemUncheckedCreateWithoutSaleInput>
  }

  export type saleitemUpdateWithWhereUniqueWithoutSaleInput = {
    where: saleitemWhereUniqueInput
    data: XOR<saleitemUpdateWithoutSaleInput, saleitemUncheckedUpdateWithoutSaleInput>
  }

  export type saleitemUpdateManyWithWhereWithoutSaleInput = {
    where: saleitemScalarWhereInput
    data: XOR<saleitemUpdateManyMutationInput, saleitemUncheckedUpdateManyWithoutSaleInput>
  }

  export type saleitemScalarWhereInput = {
    AND?: saleitemScalarWhereInput | saleitemScalarWhereInput[]
    OR?: saleitemScalarWhereInput[]
    NOT?: saleitemScalarWhereInput | saleitemScalarWhereInput[]
    id?: IntFilter<"saleitem"> | number
    saleId?: IntFilter<"saleitem"> | number
    stockId?: IntFilter<"saleitem"> | number
    quantity?: DecimalFilter<"saleitem"> | Decimal | DecimalJsLike | number | string
    price?: FloatFilter<"saleitem"> | number
  }

  export type containerItemCreateWithoutContainerInput = {
    name: string
    code: string
    type: string
    index?: string | null
    lensCategory?: string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    quantityOrdered: Decimal | DecimalJsLike | number | string
    landedCost: Decimal | DecimalJsLike | number | string
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    priceKsh?: Decimal | DecimalJsLike | number | string
    priceUsd?: Decimal | DecimalJsLike | number | string
    costKsh?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type containerItemUncheckedCreateWithoutContainerInput = {
    id?: number
    name: string
    code: string
    type: string
    index?: string | null
    lensCategory?: string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    quantityOrdered: Decimal | DecimalJsLike | number | string
    landedCost: Decimal | DecimalJsLike | number | string
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    priceKsh?: Decimal | DecimalJsLike | number | string
    priceUsd?: Decimal | DecimalJsLike | number | string
    costKsh?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type containerItemCreateOrConnectWithoutContainerInput = {
    where: containerItemWhereUniqueInput
    create: XOR<containerItemCreateWithoutContainerInput, containerItemUncheckedCreateWithoutContainerInput>
  }

  export type containerItemCreateManyContainerInputEnvelope = {
    data: containerItemCreateManyContainerInput | containerItemCreateManyContainerInput[]
    skipDuplicates?: boolean
  }

  export type containerItemUpsertWithWhereUniqueWithoutContainerInput = {
    where: containerItemWhereUniqueInput
    update: XOR<containerItemUpdateWithoutContainerInput, containerItemUncheckedUpdateWithoutContainerInput>
    create: XOR<containerItemCreateWithoutContainerInput, containerItemUncheckedCreateWithoutContainerInput>
  }

  export type containerItemUpdateWithWhereUniqueWithoutContainerInput = {
    where: containerItemWhereUniqueInput
    data: XOR<containerItemUpdateWithoutContainerInput, containerItemUncheckedUpdateWithoutContainerInput>
  }

  export type containerItemUpdateManyWithWhereWithoutContainerInput = {
    where: containerItemScalarWhereInput
    data: XOR<containerItemUpdateManyMutationInput, containerItemUncheckedUpdateManyWithoutContainerInput>
  }

  export type containerItemScalarWhereInput = {
    AND?: containerItemScalarWhereInput | containerItemScalarWhereInput[]
    OR?: containerItemScalarWhereInput[]
    NOT?: containerItemScalarWhereInput | containerItemScalarWhereInput[]
    id?: IntFilter<"containerItem"> | number
    containerId?: IntFilter<"containerItem"> | number
    name?: StringFilter<"containerItem"> | string
    code?: StringFilter<"containerItem"> | string
    type?: StringFilter<"containerItem"> | string
    index?: StringNullableFilter<"containerItem"> | string | null
    lensCategory?: StringNullableFilter<"containerItem"> | string | null
    sph?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    cyl?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    axis?: IntNullableFilter<"containerItem"> | number | null
    nearAdd?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    wholesalePrice?: DecimalNullableFilter<"containerItem"> | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFilter<"containerItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"containerItem"> | Date | string
  }

  export type containerCreateWithoutItemsInput = {
    code: string
    name: string
    createdBy: string
    supplierName: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type containerUncheckedCreateWithoutItemsInput = {
    id?: number
    code: string
    name: string
    createdBy: string
    supplierName: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type containerCreateOrConnectWithoutItemsInput = {
    where: containerWhereUniqueInput
    create: XOR<containerCreateWithoutItemsInput, containerUncheckedCreateWithoutItemsInput>
  }

  export type containerUpsertWithoutItemsInput = {
    update: XOR<containerUpdateWithoutItemsInput, containerUncheckedUpdateWithoutItemsInput>
    create: XOR<containerCreateWithoutItemsInput, containerUncheckedCreateWithoutItemsInput>
    where?: containerWhereInput
  }

  export type containerUpdateToOneWithWhereWithoutItemsInput = {
    where?: containerWhereInput
    data: XOR<containerUpdateWithoutItemsInput, containerUncheckedUpdateWithoutItemsInput>
  }

  export type containerUpdateWithoutItemsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type containerUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saleCreateWithoutSaleitemInput = {
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: customerCreateNestedOneWithoutSaleInput
    patient?: patientCreateNestedOneWithoutSalesInput
  }

  export type saleUncheckedCreateWithoutSaleitemInput = {
    id?: number
    customerId?: number | null
    patientId?: number | null
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type saleCreateOrConnectWithoutSaleitemInput = {
    where: saleWhereUniqueInput
    create: XOR<saleCreateWithoutSaleitemInput, saleUncheckedCreateWithoutSaleitemInput>
  }

  export type stockCreateWithoutSaleitemInput = {
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appPrice?: Decimal | DecimalJsLike | number | string | null
    bought?: Date | string | null
    code: string
    costKsh?: Decimal | DecimalJsLike | number | string | null
    costUsd?: Decimal | DecimalJsLike | number | string | null
    etr?: Date | string | null
    fob?: Decimal | DecimalJsLike | number | string | null
    loading?: Decimal | DecimalJsLike | number | string | null
    landedCost?: Decimal | DecimalJsLike | number | string | null
    name: string
    notes?: string | null
    prevCostPb?: Decimal | DecimalJsLike | number | string | null
    priceKsh: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
    profitPerBale?: Decimal | DecimalJsLike | number | string | null
    qty?: Decimal | DecimalJsLike | number | string
    supplier?: string | null
    index?: string | null
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    lensCategory?: string | null
    isDeleted?: boolean
  }

  export type stockUncheckedCreateWithoutSaleitemInput = {
    id?: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appPrice?: Decimal | DecimalJsLike | number | string | null
    bought?: Date | string | null
    code: string
    costKsh?: Decimal | DecimalJsLike | number | string | null
    costUsd?: Decimal | DecimalJsLike | number | string | null
    etr?: Date | string | null
    fob?: Decimal | DecimalJsLike | number | string | null
    loading?: Decimal | DecimalJsLike | number | string | null
    landedCost?: Decimal | DecimalJsLike | number | string | null
    name: string
    notes?: string | null
    prevCostPb?: Decimal | DecimalJsLike | number | string | null
    priceKsh: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
    profitPerBale?: Decimal | DecimalJsLike | number | string | null
    qty?: Decimal | DecimalJsLike | number | string
    supplier?: string | null
    index?: string | null
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    lensCategory?: string | null
    isDeleted?: boolean
  }

  export type stockCreateOrConnectWithoutSaleitemInput = {
    where: stockWhereUniqueInput
    create: XOR<stockCreateWithoutSaleitemInput, stockUncheckedCreateWithoutSaleitemInput>
  }

  export type saleUpsertWithoutSaleitemInput = {
    update: XOR<saleUpdateWithoutSaleitemInput, saleUncheckedUpdateWithoutSaleitemInput>
    create: XOR<saleCreateWithoutSaleitemInput, saleUncheckedCreateWithoutSaleitemInput>
    where?: saleWhereInput
  }

  export type saleUpdateToOneWithWhereWithoutSaleitemInput = {
    where?: saleWhereInput
    data: XOR<saleUpdateWithoutSaleitemInput, saleUncheckedUpdateWithoutSaleitemInput>
  }

  export type saleUpdateWithoutSaleitemInput = {
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneWithoutSaleNestedInput
    patient?: patientUpdateOneWithoutSalesNestedInput
  }

  export type saleUncheckedUpdateWithoutSaleitemInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stockUpsertWithoutSaleitemInput = {
    update: XOR<stockUpdateWithoutSaleitemInput, stockUncheckedUpdateWithoutSaleitemInput>
    create: XOR<stockCreateWithoutSaleitemInput, stockUncheckedCreateWithoutSaleitemInput>
    where?: stockWhereInput
  }

  export type stockUpdateToOneWithWhereWithoutSaleitemInput = {
    where?: stockWhereInput
    data: XOR<stockUpdateWithoutSaleitemInput, stockUncheckedUpdateWithoutSaleitemInput>
  }

  export type stockUpdateWithoutSaleitemInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bought?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    costKsh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etr?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fob?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loading?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    landedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prevCostPb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profitPerBale?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type stockUncheckedUpdateWithoutSaleitemInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bought?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    costKsh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etr?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fob?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loading?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    landedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prevCostPb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profitPerBale?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    qty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type saleitemCreateWithoutStockInput = {
    quantity: Decimal | DecimalJsLike | number | string
    price: number
    sale: saleCreateNestedOneWithoutSaleitemInput
  }

  export type saleitemUncheckedCreateWithoutStockInput = {
    id?: number
    saleId: number
    quantity: Decimal | DecimalJsLike | number | string
    price: number
  }

  export type saleitemCreateOrConnectWithoutStockInput = {
    where: saleitemWhereUniqueInput
    create: XOR<saleitemCreateWithoutStockInput, saleitemUncheckedCreateWithoutStockInput>
  }

  export type saleitemCreateManyStockInputEnvelope = {
    data: saleitemCreateManyStockInput | saleitemCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type saleitemUpsertWithWhereUniqueWithoutStockInput = {
    where: saleitemWhereUniqueInput
    update: XOR<saleitemUpdateWithoutStockInput, saleitemUncheckedUpdateWithoutStockInput>
    create: XOR<saleitemCreateWithoutStockInput, saleitemUncheckedCreateWithoutStockInput>
  }

  export type saleitemUpdateWithWhereUniqueWithoutStockInput = {
    where: saleitemWhereUniqueInput
    data: XOR<saleitemUpdateWithoutStockInput, saleitemUncheckedUpdateWithoutStockInput>
  }

  export type saleitemUpdateManyWithWhereWithoutStockInput = {
    where: saleitemScalarWhereInput
    data: XOR<saleitemUpdateManyMutationInput, saleitemUncheckedUpdateManyWithoutStockInput>
  }

  export type patientCreateWithoutJobcardsInput = {
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dob?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: saleCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutJobcardsInput = {
    id?: number
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dob?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: saleUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutJobcardsInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutJobcardsInput, patientUncheckedCreateWithoutJobcardsInput>
  }

  export type patientUpsertWithoutJobcardsInput = {
    update: XOR<patientUpdateWithoutJobcardsInput, patientUncheckedUpdateWithoutJobcardsInput>
    create: XOR<patientCreateWithoutJobcardsInput, patientUncheckedCreateWithoutJobcardsInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutJobcardsInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutJobcardsInput, patientUncheckedUpdateWithoutJobcardsInput>
  }

  export type patientUpdateWithoutJobcardsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: saleUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutJobcardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: saleUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type saleCreateManyCustomerInput = {
    id?: number
    patientId?: number | null
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type saleUpdateWithoutCustomerInput = {
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientUpdateOneWithoutSalesNestedInput
    saleitem?: saleitemUpdateManyWithoutSaleNestedInput
  }

  export type saleUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleitem?: saleitemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type saleUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobcardCreateManyPatientInput = {
    id?: number
    jobCardNumber: string
    insuranceCompany?: string | null
    notes?: string | null
    date?: Date | string
    rSph?: Decimal | DecimalJsLike | number | string | null
    rCyl?: Decimal | DecimalJsLike | number | string | null
    rAxis?: number | null
    rPrism?: string | null
    rBase?: string | null
    rLens?: string | null
    rLensStockId?: number | null
    rLensPrice?: Decimal | DecimalJsLike | number | string | null
    lSph?: Decimal | DecimalJsLike | number | string | null
    lCyl?: Decimal | DecimalJsLike | number | string | null
    lAxis?: number | null
    lPrism?: string | null
    lBase?: string | null
    lLens?: string | null
    lLensStockId?: number | null
    lLensPrice?: Decimal | DecimalJsLike | number | string | null
    nearAdd?: string | null
    distPd?: string | null
    nearPd?: string | null
    heights?: string | null
    frame?: string | null
    frameQty?: number | null
    framePrice?: Decimal | DecimalJsLike | number | string | null
    frameStockId?: number | null
    total?: Decimal | DecimalJsLike | number | string
    consultation?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    advance?: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    jobDelDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type saleCreateManyPatientInput = {
    id?: number
    customerId?: number | null
    referenceNumber?: string | null
    etimsReceipt?: string | null
    etimsAmount?: Decimal | DecimalJsLike | number | string | null
    total: number
    discount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jobcardUpdateWithoutPatientInput = {
    jobCardNumber?: StringFieldUpdateOperationsInput | string
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rAxis?: NullableIntFieldUpdateOperationsInput | number | null
    rPrism?: NullableStringFieldUpdateOperationsInput | string | null
    rBase?: NullableStringFieldUpdateOperationsInput | string | null
    rLens?: NullableStringFieldUpdateOperationsInput | string | null
    rLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    rLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lAxis?: NullableIntFieldUpdateOperationsInput | number | null
    lPrism?: NullableStringFieldUpdateOperationsInput | string | null
    lBase?: NullableStringFieldUpdateOperationsInput | string | null
    lLens?: NullableStringFieldUpdateOperationsInput | string | null
    lLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    lLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nearAdd?: NullableStringFieldUpdateOperationsInput | string | null
    distPd?: NullableStringFieldUpdateOperationsInput | string | null
    nearPd?: NullableStringFieldUpdateOperationsInput | string | null
    heights?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    frameQty?: NullableIntFieldUpdateOperationsInput | number | null
    framePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frameStockId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jobDelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobcardUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobCardNumber?: StringFieldUpdateOperationsInput | string
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rAxis?: NullableIntFieldUpdateOperationsInput | number | null
    rPrism?: NullableStringFieldUpdateOperationsInput | string | null
    rBase?: NullableStringFieldUpdateOperationsInput | string | null
    rLens?: NullableStringFieldUpdateOperationsInput | string | null
    rLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    rLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lAxis?: NullableIntFieldUpdateOperationsInput | number | null
    lPrism?: NullableStringFieldUpdateOperationsInput | string | null
    lBase?: NullableStringFieldUpdateOperationsInput | string | null
    lLens?: NullableStringFieldUpdateOperationsInput | string | null
    lLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    lLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nearAdd?: NullableStringFieldUpdateOperationsInput | string | null
    distPd?: NullableStringFieldUpdateOperationsInput | string | null
    nearPd?: NullableStringFieldUpdateOperationsInput | string | null
    heights?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    frameQty?: NullableIntFieldUpdateOperationsInput | number | null
    framePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frameStockId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jobDelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobcardUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobCardNumber?: StringFieldUpdateOperationsInput | string
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rAxis?: NullableIntFieldUpdateOperationsInput | number | null
    rPrism?: NullableStringFieldUpdateOperationsInput | string | null
    rBase?: NullableStringFieldUpdateOperationsInput | string | null
    rLens?: NullableStringFieldUpdateOperationsInput | string | null
    rLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    rLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lSph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lCyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lAxis?: NullableIntFieldUpdateOperationsInput | number | null
    lPrism?: NullableStringFieldUpdateOperationsInput | string | null
    lBase?: NullableStringFieldUpdateOperationsInput | string | null
    lLens?: NullableStringFieldUpdateOperationsInput | string | null
    lLensStockId?: NullableIntFieldUpdateOperationsInput | number | null
    lLensPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nearAdd?: NullableStringFieldUpdateOperationsInput | string | null
    distPd?: NullableStringFieldUpdateOperationsInput | string | null
    nearPd?: NullableStringFieldUpdateOperationsInput | string | null
    heights?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    frameQty?: NullableIntFieldUpdateOperationsInput | number | null
    framePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frameStockId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jobDelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saleUpdateWithoutPatientInput = {
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneWithoutSaleNestedInput
    saleitem?: saleitemUpdateManyWithoutSaleNestedInput
  }

  export type saleUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleitem?: saleitemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type saleUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    etimsReceipt?: NullableStringFieldUpdateOperationsInput | string | null
    etimsAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saleitemCreateManySaleInput = {
    id?: number
    stockId: number
    quantity: Decimal | DecimalJsLike | number | string
    price: number
  }

  export type saleitemUpdateWithoutSaleInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: stockUpdateOneRequiredWithoutSaleitemNestedInput
  }

  export type saleitemUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    stockId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type saleitemUncheckedUpdateManyWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    stockId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type containerItemCreateManyContainerInput = {
    id?: number
    name: string
    code: string
    type: string
    index?: string | null
    lensCategory?: string | null
    sph?: Decimal | DecimalJsLike | number | string | null
    cyl?: Decimal | DecimalJsLike | number | string | null
    axis?: number | null
    nearAdd?: Decimal | DecimalJsLike | number | string | null
    quantityOrdered: Decimal | DecimalJsLike | number | string
    landedCost: Decimal | DecimalJsLike | number | string
    wholesalePrice?: Decimal | DecimalJsLike | number | string | null
    priceKsh?: Decimal | DecimalJsLike | number | string
    priceUsd?: Decimal | DecimalJsLike | number | string
    costKsh?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type containerItemUpdateWithoutContainerInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    index?: NullableStringFieldUpdateOperationsInput | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type containerItemUncheckedUpdateWithoutContainerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    index?: NullableStringFieldUpdateOperationsInput | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type containerItemUncheckedUpdateManyWithoutContainerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    index?: NullableStringFieldUpdateOperationsInput | string | null
    lensCategory?: NullableStringFieldUpdateOperationsInput | string | null
    sph?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cyl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    axis?: NullableIntFieldUpdateOperationsInput | number | null
    nearAdd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantityOrdered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    landedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wholesalePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costKsh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saleitemCreateManyStockInput = {
    id?: number
    saleId: number
    quantity: Decimal | DecimalJsLike | number | string
    price: number
  }

  export type saleitemUpdateWithoutStockInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
    sale?: saleUpdateOneRequiredWithoutSaleitemNestedInput
  }

  export type saleitemUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type saleitemUncheckedUpdateManyWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}