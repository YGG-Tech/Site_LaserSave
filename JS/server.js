const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("./database.db");

db.run(`
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    senha_hash TEXT,
    descricao TEXT,
    maquina TEXT,
    potencia TEXT,
    termos INTEGER
)
`);
