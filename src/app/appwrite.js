import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_PROJECTID);

export const GDGCDatabase = process.env.NEXT_PUBLIC_DATABASEID;
export const TshirtSizeCollection = process.env.NEXT_PUBLIC_TSHIRTSIZECOLLID;
export const AppwriteDatabase = new Databases(client);

export { ID } from "appwrite";
