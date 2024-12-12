import DatabaseManager from "@/database/database";

export interface Tasbeeh {
  id: number;
  title: string;
  count: number;
  notifTime: string;
  createdAt: string;
}

const createTasbeeh = `INSERT INTO TASBEEH (TITLE, COUNT, NOTIFTIME) VALUES (?, ?, ?)`;
const getAllTasbeeh = `SELECT * FROM TASBEEH ORDER BY CREATEDAT DESC`;
const getTasbeehByID = `SELECT * FROM TASBEEH WHERE ID = ?`;
const updateTasbeeh = `UPDATE TASBEEH SET TITLE = ?, COUNT = ?, NOTIFTIME = ? WHERE ID = ?`;
const deleteTasbeeh = `DELETE FROM TASBEEH WHERE ID = ?`;

class TasbeehDAO {
  static async create(
    tasbeeh: Omit<Tasbeeh, "id" | "createdAt">
  ): Promise<number> {
    try {
      const result = await DatabaseManager.getDatabase().runAsync(
        createTasbeeh,
        [tasbeeh.title, tasbeeh.count, tasbeeh.notifTime]
      );
      return result.lastInsertRowId;
    } catch (error) {
      console.error("Error creating tasbeeh:", error);
      throw error;
    }
  }

  static async getAll(): Promise<Tasbeeh[]> {
    try {
      const result = await DatabaseManager.getDatabase().getAllAsync(
        getAllTasbeeh
      );
      return result as Tasbeeh[];
    } catch (error) {
      console.error("Error fetching tasbeeh:", error);
      throw error;
    }
  }

  static async getByID(id: number): Promise<Tasbeeh | null> {
    return DatabaseManager.getDatabase()
      .getFirstAsync(getTasbeehByID, [id])
      .then((res) => res as Tasbeeh | null)
      .catch((error) => {
        console.error("Error fetching tasbeeh:", error);
        throw error;
      });
  }

  static async update(
    id: number,
    tasbeeh: Omit<Tasbeeh, "id" | "createdAt">
  ): Promise<void> {
    DatabaseManager.getDatabase()
      .runAsync(updateTasbeeh, [
        tasbeeh.title,
        tasbeeh.count,
        tasbeeh.notifTime,
        id,
      ])
      .catch((error) => {
        console.error("Error updating tasbeeh:", error);
        throw error;
      });
  }

  static async delete(id: number): Promise<void> {
    try {
      await DatabaseManager.getDatabase().runAsync(deleteTasbeeh, [id]);
    } catch (error) {
      console.error("Error deleting tasbeeh:", error);
      throw error;
    }
  }
}

export default TasbeehDAO
