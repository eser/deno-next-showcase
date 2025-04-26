# Deno 2, Next 15 and React 19 Showcase

## Getting Started

### Project Setup

First, clone the repository and install pre-commit hooks:

```bash
git clone https://github.com/eser/deno-next-showcase.git

cd deno-next-showcase
pre-commit install
```

### Installing Dependencies

Install required dependencies:

```bash
deno install
```

## Running the App

### Locally

Then, run the development server:

```bash
deno run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### In Docker (preferred)

```bash
docker compose -f ./ops/docker/compose.yml up -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### In Docker (old-school)

```bash
docker build -f ./ops/docker/Dockerfile -t deno-next-showcase .
docker run -it --rm -p 3000:3000 deno-next-showcase
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Apache 2.0, see [LICENSE](LICENSE) for more details.
