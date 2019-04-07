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
          console.log('création de la db');
            idbCon.createDb(getDbSchema());
        }

    } catch (ex) {
        console.error(ex);
    }
}

const getDbSchema = () => {
    var playersTable = {
        name: 'players',
        columns: [{
              name: 'id',
              primaryKey: true,
              autoIncrement: true
            },
            {
              name: 'hash',
              notNull: true,
              dataType: DATA_TYPE.String
            },
            {
              name: 'name',
              notNull: true,
              dataType: DATA_TYPE.String
            },
            {
              name: 'heroClass',
              notNull: true,
              dataType: DATA_TYPE.String
            },
            {
              name: 'skill',
              notNull: true,
              dataType: DATA_TYPE.Number
            },
            {
              name: 'focus',
              notNull: true,
              dataType: DATA_TYPE.Number
            },
            {
              name: 'hearts',
              notNull: true,
              dataType: DATA_TYPE.Number
            },
            {
              name: 'fame',
              notNull: true,
              dataType: DATA_TYPE.Number
            },
            {
              name: 'sex',
              notNull: true,
              dataType: DATA_TYPE.String
            },
            {
              name: 'potentialSkill',
              notNull: true,
              dataType: DATA_TYPE.Number
            },
        ]
    }

    return {
        name: dbName,
        tables: [playersTable]
    }
}

initJsStore();
