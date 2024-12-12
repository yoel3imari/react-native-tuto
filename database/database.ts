import * as SQLite from "expo-sqlite";
import tables from "./tables";

class DatabaseManager {
  private db: SQLite.SQLiteDatabase;

  constructor() {
    this.db = SQLite.openDatabaseSync("tasbeeh.db");
    this.initDatabase();
  }

  private initDatabase() {
    tables.map((query) => {
      this.db.runAsync(query);
    });
  }

  getDatabase(): SQLite.SQLiteDatabase {
    return this.db;
  }
}

export default new DatabaseManager();
