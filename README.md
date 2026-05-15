# liff-next

Production-ready LIFF starter kit powered by Next.js.

Built for scalable LINE LIFF applications, SaaS platforms, enterprise systems, and modern cloud-native architecture.

---

## Features

### Authentication
- LINE Login
- LIFF SDK Integration
- JWT Authentication
- HttpOnly Secure Cookie Session
- Session Refresh Flow
- Protected Routes
- Auth Guards
- RBAC (Role-Based Access Control)
- Permission-based Authorization

### Frontend
- Next.js App Router
- TypeScript
- Tailwind CSS
- Modular Feature-based Architecture
- Reusable Components
- Clean Separation of Concerns

### Backend
- API Route Handlers
- Prisma ORM
- PostgreSQL
- Secure Session Lifecycle
- Token Validation
- Middleware Authorization

### Infrastructure
- Docker Support
- Environment Validation
- ESLint + Prettier
- Husky Git Hooks
- Production-ready Structure

---

# Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Authentication | LIFF + JWT |
| Database | PostgreSQL |
| ORM | Prisma |
| Runtime | Node.js |
| Infrastructure | Docker |

---

# Architecture

```txt
LIFF App
   ↓
Next.js Frontend
   ↓
Auth Layer
   ├── JWT
   ├── Session
   ├── Permissions
   └── Cookies
   ↓
API Layer
   ↓
PostgreSQL
```

---

# Project Structure

```txt
src/
 ├── app/
 ├── components/
 ├── config/
 ├── features/
 │
 ├── server/
 │    ├── auth/
 │    │    ├── jwt.ts
 │    │    ├── session.ts
 │    │    ├── permissions.ts
 │    │    └── cookies.ts
 │
 ├── lib/
 ├── types/
 └── utils/
```

---

# Authentication Architecture

```txt
features/auth/
 ├── components/
 │    ├── LoginButton.tsx
 │    ├── LogoutButton.tsx
 │    └── AuthGuard.tsx
 │
 ├── hooks/
 │    ├── useAuth.ts
 │    └── useSession.ts
 │
 ├── providers/
 │    ├── AuthProvider.tsx
 │    └── SessionProvider.tsx
 │
 ├── middleware/
 │    └── protect-route.ts
 │
 └── services/
      ├── login.ts
      ├── logout.ts
      └── session.ts
```

---

# Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/your-username/liff-next.git
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Setup Environment Variables

Create `.env.local`

```env
DATABASE_URL=

JWT_SECRET=
JWT_REFRESH_SECRET=

NEXT_PUBLIC_LIFF_ID=
```

---

## 4. Setup Database

```bash
npx prisma migrate dev
```

---

## 5. Start Development Server

```bash
npm run dev
```

---

# Docker

## Run with Docker

```bash
docker compose up --build
```

---

# Session Lifecycle

```txt
Login
  ↓
Create JWT
  ↓
Store Secure Cookie
  ↓
Validate Session
  ↓
Refresh Token
  ↓
Logout / Expire
```

---

# Security

- HttpOnly Secure Cookies
- JWT Verification
- Session Validation
- Role-based Authorization
- Permission Validation
- CSRF-aware Cookie Strategy
- Environment Variable Validation

---

# RBAC Example

```ts
canAccess(user, {
  roles: ["admin"],
  permissions: ["manage_users"],
});
```

---

# Environment Variables

| Variable | Description |
|---|---|
| DATABASE_URL | PostgreSQL connection |
| JWT_SECRET | Access token secret |
| JWT_REFRESH_SECRET | Refresh token secret |
| NEXT_PUBLIC_LIFF_ID | LIFF application ID |

---

# Scripts

```bash
npm run dev
npm run build
npm run lint
npm run format
```

---

# Roadmap

- [ ] Refresh Token Rotation
- [ ] Multi-device Sessions
- [ ] OAuth Providers
- [ ] Tenant-based Access Control
- [ ] Audit Logs
- [ ] Feature Flags
- [ ] Admin Dashboard
- [ ] Analytics
- [ ] SaaS Workspace Support

---

# Future Vision

This project aims to become a production-grade starter kit for:

- LIFF SaaS Applications
- Enterprise Internal Systems
- CRM Platforms
- Employee Systems
- Loyalty Platforms
- E-commerce Mini Apps
- Cloud-native LINE Applications

---

# License

MIT

---

# Author

Built with Next.js, LIFF, and scalable architecture principles.