<p align="center">
	<h1 align="center"><b>Solana Starter</b></h1>
<p align="center">
    An open-source Solana starter using Next 15, Turbopack, Tanstack, Shadcn, Tailwind, Solana 2.0, Wallet Stadard, and Plausible.
    <br />
    <br />
    <a href="https://v1.run"><strong>Website</strong></a> ·
    <a href="https://github.com/midday-ai/v1/issues"><strong>Issues</strong></a> ·
    <a href="#whats-included"><strong>What's included</strong></a> ·
    <a href="#prerequisites"><strong>Prerequisites</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#how-to-use"><strong>How to use</strong></a>
  </p>
</p>

Everything you need to start building a production ready Solana dApp , it's a
lightweight starter using the latest Next.js framework.

## What's included

[Next.js](https://nextjs.org/) - Framework<br>
[TurboPack](https://turbo.build) - Bundler<br>
[Tanstack Query](https://tanstack.com/query/latest) - API queries<br>
[TailwindCSS](https://tailwindcss.com/) - Styling<br>
[Shadcn](https://ui.shadcn.com/) - UI components<br>
[Solana](https://github.com/solana-labs/solana-web3.js) - Web3 Framework<br>
[Wallet Standard](https://github.com/wallet-standard/wallet-standard) - Wallet
connector Framework<br> [TypeScript](https://www.typescriptlang.org/) - Type
safety<br> [Plausible](https://plausible.io/sites) - Analytics<br>
[Polar](https://polar.sh) - Billing (coming soon)<br>
[next-themes](https://next-themes-example.vercel.app/) - Theme manager<br>

## Prerequisites

Bun<br> Plausible (optional)<br>

## Getting Started

Install bun if you don't have it

Mac

```bash
curl -fsSL https://bun.sh/install | bash
```

Windows

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

Clone this repo locally with the following command:

```bash
bunx degit stevesarmiento/solana-starter my-solana-app
```

1. Install dependencies using bun:

```sh
bun i
```

2. Start the development server from either bun or turbo:

```ts
bun dev // starts everything in development mode
```

## How to use

This boilerplate is inspired by our work on Midday, and it's designed to serve
as a reference for real-world apps. Feel free to dive into the code and see how
we've tackled various features. Whether you're looking to understand
authentication flows, database interactions, or UI components, you'll find
practical, battle-tested implementations throughout the codebase. It's not just
a starting point; it's a learning resource that can help you build your own
applications.

With this, you have a great starting point for your own project.
