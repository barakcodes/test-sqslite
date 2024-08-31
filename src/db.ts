import { Database } from "bun:sqlite";
export const sqlite = new Database("sqlite.db", { strict: true });
