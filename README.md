# 🍕 Pizza Shop Dashboard

A modern, full-featured dashboard built to simplify and enhance restaurant management. This tool provides a real-time overview of your pizza shop’s performance, allowing for efficient tracking of sales, orders, and customer activity.

## 🚀 Features

- 📈 **Sales Analytics**
  - Track **monthly** and **daily** revenue
  - Compare sales across different time periods
  - Visualize trends with **interactive graphs**

- 🧾 **Order Management**
  - View all orders in **real time**
  - Detailed order information including:
    - Customer details
    - Itemized list with individual prices
    - Total cost
    - Order status (Pending, In Preparation, Out for Delivery, Completed)
  - **Update status with a single click**

- 🔐 **Passwordless Authentication**
  - Users log in via a **secure one-click email link**
  - Simplifies access and improves user experience

- 💡 **User Experience**
  - Smooth **loading screens**
  - Clean and responsive **UI**
  - Built with performance and usability in mind

## 🛠 Tech Stack

- **Frontend:** React 18
- **Backend:** Elysia (Bun)
- **Database ORM:** Drizzle ORM
- **Authentication:** JWT + Magic Link via Email (Resend)
- **Database:** PostgreSQL
- **Date Handling:** Day.js
- **Type Checking & Validation:** TypeScript + Zod
- **Dev Tools:** ESLint, Faker, Drizzle Kit

## 📦 Scripts

| Command        | Description                        |
|----------------|------------------------------------|
| `bun dev`      | Start the development server       |
| `bun migrate`  | Run database migrations            |
| `bun seed`     | Seed the database with mock data   |
| `bun generate` | Generate Drizzle ORM config/schema |

## 📧 Authentication Flow

1. User enters their email on the login screen.
2. They receive a secure magic link in their inbox.
3. Clicking the link logs them in — no passwords needed.

## 📊 Visualization

Data is presented with clean, interactive graphs to make insights easier to grasp and decisions quicker to take.

## 🧑‍🍳 Why This Project?

This dashboard is designed to streamline the day-to-day operations of a restaurant, making it easy for staff to:
- Stay on top of current orders
- Track sales performance
- Offer better service with real-time updates

