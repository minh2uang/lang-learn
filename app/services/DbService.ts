'use server'
import {MongoClient} from 'mongodb'
import {DbModel} from '../models/DbModel'

// Connection URL
const url = process.env.DATABASE_CONNECTION_STRING || ''
const client = new MongoClient(url)
const db_name = process.env.DB_NAME || ''
// Database Name

const DbService = () => {
    const db = client.db(db_name)
    const getCollection = <CollectionName extends keyof Database>(
        collectionName: CollectionName
    ) => {
        type ItemType = Database[CollectionName]
        const collection = db.collection<ItemType>(collectionName)
        return collection
    }
    return {getCollection}
}

export type Database = DbModel
export default DbService
