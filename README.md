Eye Optics Backend API

A backend API for managing an optical shop system — including users, patients, stock (lenses/frames), orders from suppliers, sales to customers (patients, outlets, companies), and expenses.

Built with Node.js, TypeScript, Express, and Prisma ORM.

🚀 Tech Stack

Node.js

TypeScript

Express

Prisma ORM

MySQL (via Prisma)

Zod (request validation)

JWT (authentication)

bcrypt (password hashing)

Nodemon (development)

📁 Project Structure
src/
├── lib/
│   └── prisma.ts
├── modules/
│   ├── auth/
│   ├── users/
│   ├── patients/
│   ├── customers/
│   ├── stocks/
│   ├── orders/
│   ├── sales/
│   └── expenses/
├── routes.ts
├── main.ts
└── config/


Each module follows:

module/
├── controller.ts
├── service.ts
├── repository.ts
├── routes.ts
└── schema.ts

🧠 Core Concepts
👤 Users

System users (admin, cashier, optometrist, etc.)

🧍 Patients

Patients who receive eye care services and prescriptions.

🏢 Customers

Entities that buy products:

Patients

Walk-in customers

Other outlets

Companies / institutions

📦 Stock

Inventory items (lenses, frames, accessories).

🛒 Orders

Purchases from suppliers/manufacturers.

Uses landedCost (not selling price)

Updates stock quantities

💰 Sales

Sales to customers (not suppliers).

Supports patients and non-patients

One sale → multiple sale items

💸 Expenses

Operational expenses (rent, utilities, salaries, etc.)

🔐 Authentication

JWT-based authentication

Passwords are hashed using bcrypt

Protected routes via middleware

🧪 Validation

All incoming requests are validated using Zod schemas:

Body

Params

Query

This ensures:

Type safety

Clean error handling

No invalid data reaches services

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/your-username/eyeopticsserver.git
cd eyeopticsserver

2️⃣ Install dependencies
npm install

3️⃣ Environment variables

Create a .env file:

DATABASE_URL="mysql://user:password@localhost:5432/eyeoptics"
JWT_SECRET="supersecretkey"
PORT=8080

4️⃣ Prisma setup
npx prisma generate
npx prisma migrate dev


(Optional) View DB:

npx prisma studio

5️⃣ Run the server
npm run dev


Server runs on:

http://localhost:8080


Health check:

GET /api/health

📌 API Routes

Base URL:

/api

Module	Route
Auth	/auth
Users	/users
Patients	/patients
Customers	/customers
Stock	/stocks
Orders	/orders
Sales	/sales
Expenses	/expenses
🛠 Development Notes

Type safety enforced end-to-end

Service layer contains business logic

Repository layer isolates Prisma access

Easy to extend (reports, invoices, analytics)

🧯 Common Issues
❌ TypeScript errors on optional fields

Ensure Prisma schema and TypeScript interfaces match exactly (especially password and nullable fields).

❌ Prisma type mismatch

Run:

npx prisma generate

📈 Future Enhancements

Role-based permissions

Sales reports & analytics

Supplier management

Invoice & receipt generation

Stock alerts

Audit logs

📜 License

MIT License