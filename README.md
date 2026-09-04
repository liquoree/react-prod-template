# React TS SCSS Template

Шаблон для быстрого старта React-приложений с использованием TypeScript, SCSS и модульной архитектуры.

Проект включает базовую настройку роутинга, алиасов, ESLint, Prettier, проверки типов и структуру, готовую для масштабирования.

## Установка

Клонируйте репозиторий:

```bash
git clone <repository-url>
```

Перейдите в директорию проекта:

```bash
cd <project-name>
```

Установите зависимости:

```bash
npm install
```

Запустите проект:

```bash
npm run dev
```

## Основные команды

Запуск dev-сервера:

```bash
npm run dev
```

Сборка проекта:

```bash
npm run build
```

Проверка проекта:

```bash
npm run checks
```

Команда `checks` выполняет:

- форматирование кода через Prettier
- проверку ESLint
- проверку TypeScript-типов

---

## Структура проекта

```text
src
│
├── app
│   ├── App.tsx
│   └── router.tsx
│
├── modules
│   └── example
│       ├── pages
│       ├── components
│       ├── hooks
│       ├── api
│       ├── store
│       ├── types
│       └── utils
│
├── shared
│   ├── ui
│   ├── api
│   ├── hooks
│   ├── types
│   └── utils
│
├── styles
│   ├── globals.scss
│   ├── reset.scss
│   ├── variables.scss
│   └── mixins.scss
│
└── main.tsx
```

---

## Архитектура

Проект использует модульный подход.

### modules

Содержит отдельные функциональные части приложения.

Например:

```text
modules
├── auth
├── products
├── orders
└── users
```

Каждый модуль содержит собственные:

- страницы
- компоненты
- хуки
- API-запросы
- состояние
- типы

Пример:

```text
products
├── pages
├── components
├── api
├── hooks
├── store
└── types
```

### shared

Содержит переиспользуемые элементы, которые не относятся к конкретной бизнес-логике.

Например:

- UI-компоненты
- общий API-клиент
- утилиты
- общие хуки
- глобальные типы

---

## Импорты

В проекте настроен alias `@`, который указывает на папку `src`.

Вместо:

```ts
import Button from "../../../shared/ui/Button";
```

используйте:

```ts
import Button from "@/shared/ui/Button";
```

---

## Стилизация

Проект использует SCSS.

Глобальные стили находятся в:

```text
src/styles
```

Включают:

- `reset.scss` — сброс стандартных стилей браузера
- `variables.scss` — глобальные переменные
- `mixins.scss` — переиспользуемые миксины
- `globals.scss` — основной файл стилей

Для компонентов рекомендуется использовать CSS Modules:

```text
Component.tsx
Component.module.scss
```

---

## API

Общий API-клиент находится в:

```text
shared/api
```

Здесь хранится:

- настройка Axios
- base URL
- interceptors

API-запросы конкретных функций должны находиться внутри соответствующих модулей:

```text
modules/products/api
modules/auth/api
```

---

## Технологии

- React
- TypeScript
- Vite
- SCSS
- React Router
- Zustand
- Axios
- ESLint
- Prettier

---

# React TS SCSS Template

A starter template for building React applications with TypeScript, SCSS, and a modular architecture.

The project includes preconfigured routing, aliases, ESLint, Prettier, type checking, and a scalable project structure.

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd <project-name>
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

## Main commands

Start development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Check the project:

```bash
npm run checks
```

The `checks` command runs:

- code formatting with Prettier
- ESLint validation
- TypeScript type checking

---

## Project structure

```text
src
│
├── app
│   ├── App.tsx
│   └── router.tsx
│
├── modules
│   └── example
│       ├── pages
│       ├── components
│       ├── hooks
│       ├── api
│       ├── store
│       ├── types
│       └── utils
│
├── shared
│   ├── ui
│   ├── api
│   ├── hooks
│   ├── types
│   └── utils
│
├── styles
│   ├── globals.scss
│   ├── reset.scss
│   ├── variables.scss
│   └── mixins.scss
│
└── main.tsx
```

---

## Architecture

The project uses a modular architecture approach.

### modules

Contains independent application features.

Example:

```text
modules
├── auth
├── products
├── orders
└── users
```

Each module contains its own:

- pages
- components
- hooks
- API requests
- state
- types

Example:

```text
products
├── pages
├── components
├── api
├── hooks
├── store
└── types
```

### shared

Contains reusable elements that are not related to specific business logic.

Examples:

- UI components
- common API client
- utilities
- shared hooks
- global types

---

## Imports

The project uses the `@` alias pointing to the `src` directory.

Instead of:

```ts
import Button from "../../../shared/ui/Button";
```

use:

```ts
import Button from "@/shared/ui/Button";
```

---

## Styling

The project uses SCSS.

Global styles are located in:

```text
src/styles
```

Includes:

- `reset.scss` — browser style reset
- `variables.scss` — global variables
- `mixins.scss` — reusable mixins
- `globals.scss` — main stylesheet

CSS Modules are recommended for components:

```text
Component.tsx
Component.module.scss
```

---

## API

The common API client is located in:

```text
shared/api
```

It contains:

- Axios configuration
- base URL
- interceptors

Feature-specific API requests should be stored inside corresponding modules:

```text
modules/products/api
modules/auth/api
```

---

## Technologies

- React
- TypeScript
- Vite
- SCSS
- React Router
- Zustand
- Axios
- ESLint
- Prettier
