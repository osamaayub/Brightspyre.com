Brightspyre
A modern web application built with Next.js, TypeScript, Tailwind CSS, ShadCN UI, React Hook Form, and Zod. This project leverages a powerful tech stack to deliver a scalable, type-safe, and visually appealing user experience.

Table of Contents
Introduction

Tech Stack

Features

Installation

Usage

Project Structure

Configuration

Troubleshooting

Contributors

License

Introduction
Brightspyre is designed to showcase a clean and efficient architecture for modern web applications. It integrates several cutting-edge technologies to ensure rapid development, maintainability, and a seamless user interface.

Tech Stack
Next.js: Framework for server-rendered React applications.

TypeScript: Superset of JavaScript that adds static typing.

Tailwind CSS: Utility-first CSS framework for rapid UI development.

ShadCN UI: Accessible and customizable UI components built on Radix UI and Tailwind CSS.

React Hook Form: Performant, flexible, and extensible form library for React.

Zod: TypeScript-first schema declaration and validation library.
Medium
wasp.sh

Features
Type-Safe Forms: Utilizes React Hook Form and Zod for robust form handling and validation.

Responsive Design: Tailwind CSS ensures the application is mobile-friendly and responsive.

Modular Components: ShadCN UI provides a set of accessible and customizable components.

Server-Side Rendering: Next.js enables efficient server-side rendering for improved performance.
wasp.sh
wasp.sh
+5
YouTube
+5
YouTube
+5
GitHub

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/osamaayub/Brightspyre.git
cd Brightspyre
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
The application will be available at http://localhost:3000.

Usage
After starting the development server, navigate to http://localhost:3000 in your browser to view the application. You can begin developing new features or modifying existing ones as needed.

Project Structure
The project follows a modular structure for scalability and maintainability:

ruby
Copy
Edit

Brightspyre/
├── app/                # Next.js app directory
├── components/         # Reusable UI components
├── context/            # React context providers
├── helpers/            # Utility functions
├── hooks/              # Custom React hooks
├── lib/                # Library functions and configurations
├── public/             # Static assets
├── schemas/            # Zod schemas for validation
├── styles/             # Global and component-specific styles
├── types/              # TypeScript type definitions
├── .gitignore          # Git ignore file
├── README.md           # Project documentation
├── components.json     # ShadCN UI components configuration
├── next.config.mjs     # Next.js configuration
├── package.json        # Project metadata and scripts
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── ...                 # Additional configuration files
Configuration
Tailwind CSS: Configured via tailwind.config.ts and postcss.config.mjs.

TypeScript: Settings defined in tsconfig.json.

Next.js: Configuration in next.config.mjs.

ShadCN UI: Component settings in components.json.
GitHub
+1
GitHub
+1
GitHub

Troubleshooting
Issue: Application not starting.

Solution: Ensure all dependencies are installed by running npm install.

Issue: Styling not applied correctly.

Solution: Verify Tailwind CSS is properly configured and that classes are correctly applied in components.

Issue: Form validation not working as expected.

Solution: Check Zod schemas in the schemas/ directory and ensure they match the form fields.

Contributors
Osama Ayub - GitHub Profile

License
This project is licensed under the MIT License.

For more information, visit the Brightspyre GitHub Repository.