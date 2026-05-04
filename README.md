# SkillSphere - Online Learning Platform

A modern online learning platform built with Next.js, featuring MIT OpenCourseWare courses, user authentication, and a Vercel-inspired design system.

**Live Demo:** [https://b-13-a8.vercel.app](https://b-13-a8.vercel.app)

## Features

- **Course Catalog** — Browse, search, and explore MIT OpenCourseWare courses
- **Course Details** — View full course info, instructor details, rating, and curriculum modules
- **Authentication** — Email/password and Google OAuth sign-in via Better Auth
- **User Profile** — Edit name, profile picture, and view account details
- **Responsive Design** — Clean Vercel-inspired UI with dark mode support
- **Toast Notifications** — Success/error feedback with react-toastify

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Auth | Better Auth + MongoDB |
| Styling | Tailwind CSS v4 |
| UI Icons | Lucide React |
| Notifications | React Toastify |
| Forms | React Hook Form |
| Font | Geist (Sans + Mono) |

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas (or local MongoDB)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd b-13-a8
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_DB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/?appName=Cluster0
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

| Variable | Description |
|---|---|
| `BETTER_AUTH_SECRET` | Secret key for session encryption |
| `BETTER_AUTH_URL` | Auth base URL (use Vercel URL in production) |
| `NEXT_PUBLIC_APP_URL` | Public app URL for client-side auth |
| `AUTH_DB_URI` | MongoDB connection string |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create an OAuth 2.0 Client ID
3. Add Authorized Redirect URI:
   - Local: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://your-project.vercel.app/api/auth/callback/google`

## Project Structure

```
src/
├── app/
│   ├── auth/
│   │   ├── login/page.jsx
│   │   └── register/page.jsx
│   ├── courses/
│   │   ├── page.jsx
│   │   └── [id]/page.jsx
│   ├── profile/
│   │   └── page.jsx
│   ├── layout.js
│   ├── page.js
│   ├── not-found.jsx
│   └── globals.css
├── components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── CourseCard.jsx
│   ├── Topcourses.jsx
│   ├── Topinstructors.jsx
│   ├── Profile.jsx
│   └── ToastProvider.jsx
├── lib/
│   ├── auth.js
│   └── auth-client.js
└── assets/
    └── MIT-Logo.jpg
```

## Deployment

Deploy on [Vercel](https://vercel.com) by connecting your GitHub repository and adding the required environment variables in Vercel Settings.

## License

MIT
