# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
pnpm dev                    # Start Astro development server
pnpm build                  # Build for production (SSG + sitemap generation)
pnpm start                  # Start Astro preview server

# Code Quality
pnpm lint                   # Run Biome linter and formatter (auto-fix enabled)
pnpm typecheck              # Run Astro + TypeScript type checking

# Testing
pnpm test                   # Run Vitest tests
pnpm test:watch             # Run tests in watch mode
pnpm test:cov               # Run tests with coverage

# Component Development
pnpm storybook              # Start Storybook on port 6006
pnpm build-storybook        # Build Storybook for deployment

# Utilities
pnpm ts <file>              # Run TypeScript files with esbuild
```

## Architecture Overview

### Content Management System

- **MicroCMS Integration**: Headless CMS configured in `src/lib/micro-cms-client.ts`
- **Content Types**: Posts, Series, and Tags with recursive fetching and pagination
- **Domain Layer**: Business logic in `src/domain/` transforms raw CMS data into clean types

### Astro File-based Routing

- **Static Generation**: 全ページ SSG（`output: 'static'`）
- **Route Organization**: `src/pages/posts/[slug].astro`, `src/pages/series/[slug].astro`, `src/pages/tags/[slug].astro`
- **Layout**: `src/layouts/Layout.astro` がルートレイアウト（`<head>` メタデータ管理含む）
- **Static Paths**: `getStaticPaths()` でスラッグ一覧を生成

### Component Organization

- **Astro Components** (`src/layouts/`): ルートレイアウト
- **Server Components** (`src/components/server/`): 静的コンテンツ表示（React）
- **Client Components** (`src/components/client/`): インタラクティブなナビゲーション・埋め込み・アナリティクス（`client:load` で hydrate）
- **Page Components** (`src/components/page/`): ルート固有のコンポジション
- **Component Development**: 全コンポーネントに Storybook ストーリーあり

### Content Processing Pipeline

1. **Markdown Processing**: Unified/Rehype エコシステムによる構文ハイライト・KaTeX 数式処理
2. **Static HTML Generation**: `markdownToStaticHtml.ts` でビルド時に静的 HTML を生成（OGP データも含む）
3. **Rich Embeds**: Twitter、YouTube、GitHub の埋め込みと OGP リンクプレビュー（ビルド時プリフェッチ）
4. **RSS Feed**: `src/lib/feed.ts` でビルド時に `public/rss/` へ生成

### Key Integrations

- **Analytics**: Google Analytics 4（`BaseLayout.astro` にインラインスクリプトで組み込み）
- **SEO**: `@astrojs/sitemap` による自動サイトマップ生成 + RSS フィード
- **Image**: `<img>` タグ + カスタムローダー関数（`src/lib/image-loader.ts`）で Imgur CDN に対応
- **Amazon Links**: アフィリエイトリンク処理

## Development Guidelines

### Code Quality

- **Linting**: Biome を使用 — コミット前に `pnpm lint` を実行
- **Type Safety**: TypeScript を徹底使用。`pnpm typecheck` は `astro check` を実行
- **Component Standards**: Astro ページ内で React クライアントコンポーネントを使う場合は `client:load` を付与

### Content Development

- **Environment Variables**: MicroCMS API の設定が必要（`MICRO_CMS_API_KEY` 等）
- **Static Generation**: コンテンツ変更は再ビルドが必要
- **Rich Content**: Markdown で数式（KaTeX）、コードハイライト、HTML 埋め込みをサポート

### Performance Considerations

- **Static First**: コンテンツページはすべて SSG
- **Client Components**: 真のインタラクティビティが必要な場合のみ使用
- **Embed Pre-fetching**: OGP データはビルド時に取得済み（ランタイム API 不要）

## Pre-completion Checklist

Before considering any work completed, ensure all of the following commands execute successfully:

### Dependency Installation

```bash
pnpm install
```

Installs all required dependencies and updates lock file if needed.
Important: If `pnpm-lock.yaml` file is updated, commit the changes immediately.

### Build and Compilation

```bash
pnpm build
pnpm build-storybook
```

Ensures the project compiles without errors and generates production-ready assets.

### Code Quality and Linting

```bash
pnpm lint
```

Validates code follows project standards and style guidelines.

### Type Checking

```bash
pnpm typecheck
```

Confirms TypeScript types are correct and no type errors exist.

### Testing

```bash
pnpm test
pnpm test:cov  # Ensure coverage thresholds are met
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