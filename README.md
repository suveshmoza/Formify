# Formify: Drag and Drop Form Builder

A dynamic and user-friendly drag and drop form builder, powered by Next.js and DnD Kit, for quickly creating forms with ease. This project is built with modern web technologies and libraries, making it easy for developers to integrate and customize.

## Features

- Intuitive drag and drop interface for form creation.
- Integration with Clerk for user authentication.
- Various UI components from Shadcn.
- Form validation.
- Prisma for efficient database operations.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:suveshmoza/Formify.git
   cd Formify
   ```
2. Install the project dependencies:

```bash
npm install
```

3. Setup env variables
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
```

4. Run the development server:

```bash
npm run dev
```
Visit http://localhost:3000 in your browser to start using the form builder.
