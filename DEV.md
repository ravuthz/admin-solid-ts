# Development

## Create SolidJS with Typescript Project

1. Create SolidJS using Vite with Typescript template

   ```bash
   bun create vite@latest admin-solid-ts --template solid-ts && cd admin-solid-ts
   ```

2. Initialize git repository for tracking source code

   ```bash
   git init && git add . && git commit -m "Create SolidJS with Typescript Project"
   ```

3. Install dependencies via bun or any package manager (npm, yarn, pnpm, ...)

   ```bash
   bun install && git add . && git commit -m "Install dependencies with bun"
   ```

## Add TailwindCSS with DaisyUI plugin

1. Setup TailwindCSS with PostCSS and Autoprefixer

   ```bash
   bun add -D tailwindcss postcss autoprefixer
   bunx tailwindcss init -p
   git add . && git commit -m "Add TailwindCSS"
   ```

2. Setup DaisyUI plugin for TailwindCSS
   ```bash
   bun add -D daisyui@latest
   git add . && git commit -m "Add DaisyUI plugin for TailwindCSS"
   ```

## Screenshots
<img width="1511" alt="dark-theme" src="https://github.com/ravuthz/admin-solid-ts/assets/11207890/1fc3d012-a8ae-4ce1-bf85-f93fdbd55424">
<img width="1511" alt="light-theme" src="https://github.com/ravuthz/admin-solid-ts/assets/11207890/10f85c4e-ddbb-4341-9da0-bfcc505e539d">


