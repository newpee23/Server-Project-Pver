import mysql, { Connection } from "mysql2/promise";

export let dbConnection: Connection | null = null;

export const getDbConnection = async (): Promise<Connection> => {
  if (dbConnection) {
    return dbConnection;
  }

  try {
    const connection = await mysql.createConnection({
      host: "pver.cxworxybio16.ap-southeast-1.rds.amazonaws.com",
      user: "root",
      password: "Nn!Peerapat",
      database: "pver",
    });
    console.log("Connected to MySQL database!");
    dbConnection = connection;
    return connection;
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    throw error;
  }
};
