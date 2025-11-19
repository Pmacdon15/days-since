# 🚀 Days Since Last VS Code Fork

[![Live Site](https://img.shields.io/badge/Live-dayssincelastvscodefork.patmac.ca-blue?style=for-the-badge)](https://dayssincelastvscodefork.patmac.ca)
[![GitHub](https://img.shields.io/badge/GitHub-Pmacdon15%2Fdays--since-181717?style=for-the-badge&logo=github)](https://github.com/Pmacdon15/days-since)

> A humorous Next.js project tracking the days since the last VS Code fork. Spoiler: it's **0** days. 😄

## ✨ Features

- **⚡ Blazing Fast**: Built with Next.js 16 and React 19
- **🎨 Beautiful UI**: Stunning gradient design with smooth animations
- **📊 Real-time Data**: Fetches actual fork data from GitHub API
- **🚀 Static Generation**: Uses **cached components** for optimal performance
- **📱 Responsive**: Looks great on all devices
- **🔍 SEO Optimized**: Complete meta tags and sitemap generation

## 🎯 Why This Exists

VS Code is one of the most forked repositories on GitHub. This project playfully tracks how long it's been since the last fork... which is basically always **0 days** because someone is constantly forking it! 

## 🏗️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Runtime**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [Biome](https://biomejs.dev/)

## ⚡ Performance Optimization

This project leverages **React Server Components with caching** to achieve static route generation:

```typescript
// Data fetching with cache for static generation
const fetchDaysSince = cache(async () => {
  // GitHub API call cached for build time
  const response = await fetch(
    "https://api.github.com/repos/microsoft/vscode/forks?sort=newest&per_page=1",
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  // ... process data
});
```

By using the `use cache` function from React, we ensure:
- ✅ Data is fetched once at build time
- ✅ Route can be statically generated
- ✅ Optimal performance with zero client-side JavaScript for data fetching
- ✅ Automatic revalidation every hour

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

```bash
# Clone the repository
git clone https://github.com/Pmacdon15/days-since.git

# Navigate to the project directory
cd days-since

# Install dependencies
bun install

# Run the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📦 Build & Deploy

```bash
# Create production build
bun run build

# Start production server
bun start
```

## 🛠️ Available Scripts

- `bun dev` - Start development server
- `bun build` - Create production build
- `bun start` - Start production server
- `bun run lint` - Run Biome linter with auto-fix
- `bun run format` - Format code with Biome

## 🌐 Live Site

Check out the live version at: **[dayssincelastvscodefork.patmac.ca](https://dayssincelastvscodefork.patmac.ca)**

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Pmacdon15/days-since/issues).

## 👨‍💻 Author

**Patrick MacDonald**

- GitHub: [@Pmacdon15](https://github.com/Pmacdon15)

---

<div align="center">
  Made with ❤️ and a sense of humor
</div>
