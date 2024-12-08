import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client.
    setEndpoint(import.meta.env.VITE_APPWRITE_API_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

export const account = new Account(client)

export const databases = new Databases(client, import.meta.env.VITE_APPWRITE_DATABASE_ID)