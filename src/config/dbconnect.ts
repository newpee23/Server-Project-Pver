import mysql from "mysql2/promise";

// export let dbConnection: Pool | null = null;

export const getDbConnection = (): mysql.Pool => {
  
  // if (dbConnection !== null) {
  //   return dbConnection;
  // }

  try {
    const connection = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "pver",
    });
    // console.log("Connected to MySQL database!");
    return connection;
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    throw error;
  }
};
