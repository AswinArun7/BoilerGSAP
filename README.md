# Boiler

A boilerplate backend project built with [NestJS](https://nestjs.com/).

## Features

- Modular architecture
- RESTful API structure
- Ready for integration and extension
- Includes example controller, service, and test setup

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd boiler
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development

```bash
npm run start:dev
```

#### Production

```bash
npm run build
npm run start:prod
```

### Testing

#### Unit Tests

```bash
npm run test
```

#### End-to-End (E2E) Tests

```bash
npm run test:e2e
```

### Project Structure

```
src/
  app.controller.ts      # Main controller
  app.service.ts         # Main service
  app.module.ts          # Root module
  main.ts                # Entry point
  images/                # Project images/assets
    build-icon.png
    ...
test/                    # E2E tests
```

### Linting

```bash
npm run lint
```

## License

[MIT](LICENSE) (or specify your license)
