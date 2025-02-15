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

## API Endpoints dan Body Params

### **Customer API**

#### **1️⃣ Tambah Customer**

- **Endpoint:** `POST /api/customers`
- **Body (JSON):**

```json
{
  "name": "John Doe",
  "level": "Juragan"
}
```

#### **2️⃣ Get Semua Customer dan Transaksinya**

- **Endpoint:** `GET /api/customers`

#### **3️⃣ Get Detail Customer**

- **Endpoint:** `GET /api/customers/:id`

#### **4️⃣ Edit Customer**

- **Endpoint:** `PUT /api/customers/:id`
- **Body (JSON):**

```json
{
  "name": "John Smith",
  "level": "Konglomerat"
}
```

#### **5️⃣ Hapus Customer (Soft Delete)**

- **Endpoint:** `DELETE /api/customers/:id`

---

### **Product API**

#### **6️⃣ Tambah Product**

- **Endpoint:** `POST /api/products`
- **Body (JSON):**

```json
{
  "name": "Nasi Goreng Spesial",
  "price": 35000,
  "category": "Makanan"
}
```

#### **7️⃣ Get Semua Product**

- **Endpoint:** `GET /api/products`

#### **8️⃣ Get Detail Product**

- **Endpoint:** `GET /api/products/:id`

#### **9️⃣ Edit Product**

- **Endpoint:** `PUT /api/products/:id`
- **Body (JSON):**

```json
{
  "name": "Mie Ayam Bakso",
  "price": 27000,
  "category": "Makanan"
}
```

#### **🔟 Hapus Product**

- **Endpoint:** `DELETE /api/products/:id`

---

### **Transaction API**

#### **1️⃣1️⃣ Tambah Transaksi**

- **Endpoint:** `POST /api/transactions`
- **Body (JSON):**

```json
{
  "customer_id": 1,
  "products": [
    { "product_id": 1, "quantity": 2 },
    { "product_id": 3, "quantity": 1 }
  ],
  "favorite_product_id": 1
}
```

#### **1️⃣2️⃣ Get Semua Data Transaksi**

- **Endpoint:** `GET /api/transactions`

#### **1️⃣3️⃣ Get Detail Transaksi Berdasarkan Customer**

- **Endpoint:** `GET /api/transactions/:customer_id`

#### **1️⃣4️⃣ Edit Transaksi (Ubah Jumlah Produk)**

- **Endpoint:** `PUT /api/transactions/:id`
- **Body (JSON):**

```json
{
  "products": [
    { "product_id": 1, "quantity": 3 },
    { "product_id": 2, "quantity": 1 }
  ]
}
```

#### **1️⃣5️⃣ Hapus Transaksi**

- **Endpoint:** `DELETE /api/transactions/:id`

---

## Pengujian API

Gunakan **Postman** atau **cURL** untuk menguji semua endpoint ini.
Pastikan server berjalan dengan:

```sh
npm run dev
```

---
