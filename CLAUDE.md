# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
yarn dev                    # Start development server with Tailwind watch mode
yarn build                  # Build for production with sitemap generation
yarn start                  # Start production server

# Code Quality
yarn lint                   # Run Biome linter and formatter (auto-fix enabled)
yarn typecheck              # Run TypeScript type checking

# Testing
yarn test                   # Run Vitest tests
yarn test:watch             # Run tests in watch mode
yarn test:cov               # Run tests with coverage

# Component Development
yarn storybook              # Start Storybook on port 6006
yarn build-storybook        # Build Storybook for deployment

# Utilities
yarn clean                  # Clear Next.js fetch cache
yarn ts <file>              # Run TypeScript files with esbuild
```

## Architecture Overview

### Content Management System

- **MicroCMS Integration**: Headless CMS configured in `src/lib/micro-cms-client.ts`
- **Content Types**: Posts, Series, and Tags with recursive fetching and pagination
- **Domain Layer**: Business logic in `src/domain/` transforms raw CMS data into clean types

### Next.js App Router Structure

- **Static Generation**: All content pages use SSG with ISR capability
- **Route Organization**: `/posts/[slug]`, `/series/[slug]`, `/tags/[slug]` patterns
- **API Routes**: OGP metadata generation in `/api/ogp/route.ts`

### Component Organization

- **Server Components** (`src/components/server/`): Layout, post rendering, static content
- **Client Components** (`src/components/client/`): Interactive navigation, embeds, analytics
- **Page Components** (`src/components/page/`): Route-specific compositions
- **Component Development**: All components have Storybook stories for isolation

### Content Processing Pipeline

1. **Markdown Processing**: Unified/Rehype ecosystem with syntax highlighting and KaTeX math
2. **HTML to React**: Safe transformation via rehype-react with custom link components
3. **Rich Embeds**: Twitter, YouTube, GitHub integration with OGP link previews
4. **Caching**: 24-hour TTL for external content via node-cache

### Key Integrations

- **Analytics**: Google Analytics 4 with privacy-compliant tracking
- **SEO**: Automatic sitemap and RSS feed generation
- **Image Optimization**: Custom loader supporting Imgur CDN
- **Amazon Links**: Special handling with affiliate link processing

## Development Guidelines

### Code Quality

- **Linting**: Biome replaces ESLint/Prettier - use `yarn lint` before commits
- **Type Safety**: Comprehensive TypeScript usage required
- **Component Standards**: Follow server/client component separation patterns

### Content Development

- **Environment Variables**: MicroCMS API configuration required for content fetching
- **Static Generation**: Content changes require rebuild for production updates
- **Rich Content**: Markdown supports math (KaTeX), code highlighting, and HTML embeds

### Performance Considerations

- **Static First**: Prefer SSG over SSR for content pages
- **Client Components**: Use sparingly, only for true interactivity
- **Image Loading**: Leverage custom image loader for external content optimization

## Pre-completion Checklist

Before considering any work completed, ensure all of the following commands execute successfully:

### Dependency Installation

```bash
yarn install
````

Installs all required dependencies and updates lock file if needed.
Important: If `yarn.lock` file is updated, commit the changes immediately.

### Build and Compilation

```bash
yarn build # for production build
yarn build-storybook # for Storybook
```

Ensures the project compiles without errors and generates production-ready assets.

### Code Quality and Linting

```bash
yarn lint # Auto-fix linting issues where possible
```

Validates code follows project standards and style guidelines.

### Type Checking

```bash
yarn type-check
```

Confirms TypeScript types are correct and no type errors exist.

### Testing

```bash
yarn test
yarn test:cov  # Ensure coverage thresholds are met
```

Runs all test suites and validates functionality works as expected.

## Success Criteria

- All commands above must exit with status code 0
- No error messages in console output
- All tests passing with adequate coverage
- Build artifacts generated successfully

## Notes

- Run commands in the order listed above
- Fix any issues before proceeding to the next command
- Document any exceptions or skipped commands with justification