# Crypto Widget with Feature-Sliced Design


- React, Redux Toolkit, React Hook Form, Zod
- Vite, TypeScript, Postcss
- Feature Sliced Design


## О проекте

Тестовое задание. Крипто виджет. Гибкое переиспользуемая вставка виджета на любую страницу
### Способы прикрепления виджета
1.
- Для прикрепления виджета на любую страницу ТОЛЬКО в контексте данного приложения можно прокинуть в роут новую страницу в обертке `layoutWithWidget`
- см. файл `src/app/appRouter.tsx`

2.
- Добавить в index.html скрипт подключения виджета для всего сайта (Сейчас именно это используется )

## Запуск проекта 

1. Install dependencies

```bash
npm install
```

2. Copy `.env.example` to `.env.local`

```bash
cp .env.example .env.local
```

3. Start Vite development server

```bash
npm start
```

