# Task Tracker with Next.js and Supabase

Welcome to the **Task Tracker** application! This is a simple web application built with [Next.js](https://nextjs.org/) to help users track their tasks. The project is designed as a learning experience to explore Next.js features, including routing, API integration, and server-side rendering, while leveraging [Supabase](https://supabase.com/) as the backend for user authentication and task management.

## Features

- **Pseudo User Authentication**: Sign up and log in to your personal account.
- **Task Management**: Create, view, and manage tasks securely.
- **Real-Time Updates**: Seamless interaction with the Supabase backend for CRUD operations.

## Next.js Features Explored

This project helped in learning several key features of Next.js:

- **Revalidation**: Implementing incremental static regeneration to keep data fresh.
- **Server Actions**: Leveraging server-side logic for task management.
- **Server and Client Components**: Utilizing both rendering paradigms for performance optimization.
- **Dynamic Routing**: Creating user-specific and task-specific routes.
- **API**: Setting up custom APIs for interacting with Supabase.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Supabase](https://supabase.com/) (PostgreSQL-based backend-as-a-service)
- **Styling**: Tailwind CSS (or your choice of styling framework)

## Setup Instructions

### Prerequisites

1. [Node.js](https://nodejs.org/) installed (recommended version: `16.x` or higher).
2. A Supabase account and project set up.
3. Your Supabase project's URL and API key (available in the Supabase dashboard).

### Setting Up Supabase

To replicate the database schema required for the Task Tracker application, follow these steps:

1. **Create a Supabase Project**
   - Sign in to your [Supabase account](https://supabase.com/) and create a new project.

2. **Set Up the Database Schema**
   - Navigate to the "SQL Editor" in the Supabase dashboard.
   - Run the following SQL commands to create the necessary tables:

     ```sql
     -- Create the 'users' table
     CREATE TABLE users (
         id SERIAL PRIMARY KEY,
         created_at TIMESTAMPTZ DEFAULT NOW(),
         username TEXT NOT NULL,
         email TEXT NOT NULL UNIQUE,
         password TEXT NOT NULL
     );

     -- Create the 'tasks' table
     CREATE TABLE tasks (
         id SERIAL PRIMARY KEY,
         created_at TIMESTAMPTZ DEFAULT NOW(),
         title TEXT NOT NULL,
         description TEXT,
         priority TEXT,
         due_date TIMESTAMPTZ,
         user_id INT REFERENCES users (id),
         is_completed BOOLEAN DEFAULT FALSE
     );
     ```

3. **Add API Keys**
   - Copy the `SUPABASE_URL` and `SUPABASE_ANON_KEY` from the "Settings > API" section of your Supabase dashboard.
   - Add these keys to your `.env.local` file as described in the "Set Up Environment Variables" section.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/nextjs-task-tracker.git
   cd nextjs-task-tracker
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env.local` file in the root of your project and add the following variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

   Replace `your-supabase-url` and `your-anon-key` with your Supabase project's URL and public API key.

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Deployment

To deploy the app, use platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Ensure that your environment variables are configured correctly in the deployment platform.

## Folder Structure

```plaintext
/
├── app/              # Main application directory for App Router
│   ├── api/          # API routes
│   │   └── auth/     # Authentication-related APIs
│   ├── application/  # Application-specific pages or components
│   ├── login/        # Login page
│   ├── signup/       # Signup page
│   ├── layout.js     # Root layout for the application
│   ├── page.js       # Home page of the application
│   └── globals.css   # Global styles
├── components/       # Reusable UI components
├── lib/              # Supabase client setup and utilities
├── public/           # Public assets like images or icons
├── styles/           # Additional styling if needed
├── .env.local        # Environment variables (ignored by Git)
└── README.md         # Project documentation
```

## Roadmap

This project is a work in progress with plans for additional features:

- [ ] Enhanced task categorization.
- [ ] Deadline reminders.
- [ ] Integration with third-party services (e.g., Google Calendar).
- [ ] Improved user authentication and authorization using next-js with certified providers. 

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Thank you for checking out my Task Tracker application! 🎉

