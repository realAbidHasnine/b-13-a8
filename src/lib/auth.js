import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const dbUri = process.env.AUTH_DB_URI;
if (!dbUri) {
    throw new Error("Missing AUTH_DB_URI environment variable");
}

const client = new MongoClient(dbUri);
const dbPromise = client.connect().then(client => client.db("better-auth"));

export const auth = betterAuth({
    database: mongodbAdapter(dbPromise),
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    trustedOrigins: [
        process.env.BETTER_AUTH_URL || "http://localhost:3000",
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    ].filter(Boolean),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        },
    },
});
