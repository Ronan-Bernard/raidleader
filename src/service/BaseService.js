// eslint-disable-next-line
import { Column, DATA_TYPE, COL_OPTION } from "jsstore";
import {
    idbCon
} from "./IdbService";
export class BaseService {

    get connection() {
        return idbCon;
    }

}
