### RDBMS - Relational Database Management Systems

- PostgreSQL
- Oracle
- MySQL
- SQLite3

### Non-Relational DBMS
Data not stored in tables like Relational DBs

- MongoDB
- Cassandra
- Redis
- Memcache
- Neo4j

### sql

- Basic syntax

- INSERT=
INSERT INTO (the name of the Table) (column1, column2) VALUES (in the same order as the columns);

- UPDATE=
The code below selected which one I wanted to update only
SELECT * FROM (Name of Table)
WHERE (what you want to update) = Something

UPDATE (name of table)
SET (what field you want to update) = 'something', (field to update) = 'something else'
WHERE (name of the table) = 'the specific data set you want to update';

- DELETE=
DELETE FROM (name of table) WHERE (field you want to delete) = 'something'

### Using knex
- npm i knex
- npm i sqlite3
