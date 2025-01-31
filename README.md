# Smart Notes

[![Unit Tests](https://github.com/sunderhus/smart-notes/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sunderhus/smart-notes/actions/workflows/unit-test.yml)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Clean Architecture](#clean-architecture)
- [Getting Started](#getting-started)
- [License](#license)
- [Author](#author)

## Overview

Smart Notes is a modern note-taking application designed with a focus on simplicity and efficiency. The project follows the principles of Clean Architecture to ensure maintainability, scalability, and testability.

## Features

- Create, edit, and delete notes
- Organize notes with tags
- Search notes by content or tags
- Responsive design for mobile and desktop

## Clean Architecture

The project is structured following the Clean Architecture principles, which separates the code into different layers:

- **Domain Layer**: Contains the business logic and entities.
- **Data Layer**: Contains use cases and application-specific logic.
- **Infrastructure Layer**: Contains implementations for external services and frameworks.
- **Presentation Layer**: Contains the UI and user interaction logic.
- **Main Layer**: Contains the application setup and dependency injection.
- **Validation Layer**: Contains validation logic for user inputs and other data.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/sunderhus/smart-notes.git
   cd smart-notes
   ```
2. Install dependencies:

   ```sh
   yarn install
   ```

3. Run the development server:

   ```sh
   yarn dev
   ```

4. Run unit tests:

   ```sh
    yarn test:unit
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

This project was created by [sunderhus](https://github.com/sunderhus).
