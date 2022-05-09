module.exports = {
  HOST: "postgresql-wesport.alwaysdata.net",
  USER: "wesport_free",
  PASSWORD: "shieldeye21",
  DB: "wesport_data",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
