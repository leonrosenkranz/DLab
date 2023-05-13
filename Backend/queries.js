const Pool = require("pg").Pool;
const pool = new Pool({
  user: "samgende",
  host: "localhost",
  database: "testdb",
  password: "loonaG14",
  port: 5432,
});

const getKpis = (request, response) => {
  pool.query("SELECT * FROM kpis", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getKpis,
};
