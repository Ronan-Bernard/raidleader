import * as JsStore from "jsstore";
import {
    DATA_TYPE
} from "jsstore";
import * as workerPath from 'file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js'; // eslint-disable-line import/no-webpack-loader-syntax

// This will ensure that we are using only one instance.
// Otherwise due to multiple instance multiple worker will be created.
export const idbCon = new JsStore.Instance(new Worker(workerPath));
export const dbName = "raidleader_db";

const initJsStore = async () => {
    try {
        const isDbCreated = await idbCon.isDbExist(dbName);
        if (isDbCreated) {
            idbCon.openDb(dbName);
        } else {
            idbCon.createDb(getDbSchema());
        }

    } catch (ex) {
        console.error(ex);
    }
}

const getDbSchema = () => {
    var playersTable = {
        name: 'player',
        columns: [{
                name: 'id',
                primaryKey: true,
                autoIncrement: true
            },
            {
                name: 'name',
                notNull: true,
                dataType: DATA_TYPE.String
            }
        ]
    }

    return {
        name: dbName,
        tables: [playersTable]
    }
}

initJsStore();
