export interface MongoDBConnectionError extends Error {
  name: string;
  message: string;
  stack?: string;
}
