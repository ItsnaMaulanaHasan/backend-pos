# Backend Express API

Backend ini dibuat dengan **Node.js**, **Express.js**, dan **Sequelize ORM** untuk mengelola database **MySQL**.

## Instalasi dan Konfigurasi

### 1. Clone Repository

```sh
git clone https://github.com/ItsnaMaulanaHasan/backend-pos.git
cd backend-pos
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Konfigurasi Database

Buat database **MySQL** dan ubah file `.env` sesuai kebutuhan:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=password_kamu
DB_NAME=expressdb
DB_DIALECT=mysql
PORT=3000
```

### 4. Migrasi dan Seeder Database

```sh
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## Menjalankan Server

```sh
npm run dev
```
