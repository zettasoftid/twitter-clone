const { Client } = require('pg');
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config()

// Konfigurasi koneksi ke database PostgreSQL
const dbConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST, // Ganti sesuai dengan host database Anda
  port: process.env.PORT, // Port default PostgreSQL adalah 5432
};

// Membuat koneksi ke database
const client = new Client(dbConfig);

// Menghubungkan ke database
client.connect()
  .then(() => {
    console.log('Terhubung ke database PostgreSQL');
  })
  .catch((err:any) => {
    console.error('Gagal terhubung ke database:', err);
  })