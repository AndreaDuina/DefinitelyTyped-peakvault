// Type definitions for connect-azuretables 1.0
// Project: https://github.com/mike-goodwin/connect-azuretables
// Definitions by: Mikael Brevik <https://github.com/mikaelbr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";
import * as session from "express-session";

declare function connectAzureTable(
    session: (options?: session.SessionOptions) => express.RequestHandler,
): connectAzureTable.AzureTableStoreFactory;

declare namespace connectAzureTable {
    interface AzureTableStoreFactory {
        create(options: AzureTableStoreOptions): AzureTableStore;
    }
    interface AzureTableStore extends session.Store {
        startBackgroundCleanUp(): void;
        cleanUp(): void;
        update(method: "SET" | "TOUCH", sid: string, session: session.SessionData, callback?: (err: any) => void): void;
    }
    interface AzureTableStoreOptions {
        logger?: ((message: string) => void) | undefined;
        errorLogger?: ((message: string) => void) | undefined;
        sessionTimeOut?: number | undefined; // sessionTimeOut in minutes
        overrideCron?: string | undefined; // cron job description
        storageAccount?: string | undefined;
        accessKey?: string | undefined;
        table?: string | undefined;
    }
}

export = connectAzureTable;
