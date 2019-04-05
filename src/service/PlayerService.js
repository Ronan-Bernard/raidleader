import {
    BaseService
} from "./BaseService";

export class PlayerService extends BaseService {

    constructor() {
        super();
        this.tableName = "players";
    }

    getPlayers() {
        return this.connection.select({
            from: this.tableName,
        })
    }

    addPlayer(player) {
        return this.connection.insert({
            into: this.tableName,
            values: [player],
            return: true // since studentid is autoincrement field and we need id,
            // so we are making return true which will return the whole data inserted.
        })
    }

    getPlayerById(id) {
        return this.connection.select({
            from: this.tableName,
            where: {
                id: id
            }
        })
    }

    removePlayer(id) {
        return this.connection.remove({
            from: this.tableName,
            where: {
                id: id
            }
        })
    }

    updatePlayerById(id, updateData) {
        return this.connection.update({ in: this.tableName,
            set: updateData,
            where: {
                id: id
            }
        })
    }
}
