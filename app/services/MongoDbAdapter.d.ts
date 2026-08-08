/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p style={{fontWeight: "normal"}}>Official <a href="https://www.mongodb.com">MongoDB</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://www.mongodb.com">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/mongodb.svg" width="30" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn2pnpm
 * npm install @auth/mongodb-adapter mongodb
 * ```
 *
 * @module @auth/mongodb-adapter
 */
import { ObjectId } from "mongodb";
import type { Adapter } from "next-auth/adapters";
import type { MongoClient } from "mongodb";
/** This is the interface of the MongoDB adapter options. */
export interface MongoDBAdapterOptions {
    /**
     * The name of the {@link https://www.mongodb.com/docs/manual/core/databases-and-collections/#collections MongoDB collections}.
     */
    collections?: {
        Users?: string;
        Accounts?: string;
        Sessions?: string;
        VerificationTokens?: string;
    };
    /**
     * The name you want to give to the MongoDB database
     */
    databaseName?: string;
}
export declare const defaultCollections: Required<Required<MongoDBAdapterOptions>["collections"]>;
export declare const format: {
    /** Takes a mongoDB object and returns a plain old JavaScript object */
    from<T = Record<string, unknown>>(object: Record<string, any>): T;
    /** Takes a plain old JavaScript object and turns it into a mongoDB object */
    to<T_1 = Record<string, unknown>>(object: Record<string, any>): T_1 & {
        _id: ObjectId;
    };
};
/** @internal */
export declare function _id(hex?: string): ObjectId;
export declare function MongoDBAdapter(client: Promise<MongoClient>, options?: MongoDBAdapterOptions): Adapter;
//# sourceMappingURL=MongoDbAdapter.d.ts.map