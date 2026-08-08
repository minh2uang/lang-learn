'use server';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// Connection URL
const url = process.env.DATABASE_CONNECTION_STRING || '';
const client = new mongodb_1.MongoClient(url);
const db_name = process.env.DB_NAME || '';
// Database Name
const DbService = () => {
    const db = client.db(db_name);
    const getCollection = (collectionName) => {
        const collection = db.collection(collectionName);
        return collection;
    };
    return { getCollection };
};
exports.default = DbService;
