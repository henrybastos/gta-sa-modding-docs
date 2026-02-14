# GTA SA Modding Documentation

A personal note-taking documentation project for **GTA San Andreas modding**, focusing on **GTA3Script** and **CLEO mods**.

## Purpose

This project serves as a central repository for notes, snippets, and guides related to modding Grand Theft Auto: San Andreas. It covers:
- **GTA3Script**: The language used for mission and script coding in GTA SA.
- **CLEO Mods**: Creating and managing custom scripts that extend the game's functionality.
- **General Modding**: Documentation on props, spawning, and game mechanics.

The contents might be incomplete, lacking some information, as the project is acting more like a knowledge base than a full documentation with guides and API references.

## Tech Stack

This documentation site is built with modern web technologies:
- **[Next.js](https://nextjs.org/)**: React framework for building the application.
- **[Fumadocs](https://fumadocs.dev/)**: Powerful documentation framework for Next.js.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[Shiki](https://shiki.style/)**: High-speed syntax highlighter (configured in `source.config.ts`).

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed.

### Installation

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Build

Build the production application:

```bash
pnpm build
```

## Related Context

### GTA3Script
GTA3Script is the original scripting language used by Rockstar North to create game logic for the 3D era GTA games. This project documents common commands, patterns, and best practices.

### CLEO
CLEO is a popular plugin for GTA San Andreas that allows the execution of custom scripts (`.cs` files) without modifying the main game script (`main.scm`). It's the standard for modern script modding.
