# NextJS & TailwindCSS Template

## Introdução

Este template é baseado em [Create T3 App](https://create.t3.gg/).

Tecnologias & Framework:
- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [@next/font](https://nextjs.org/docs/api-reference/next/font)

A fonte padrão é [Montserrat](https://fonts.google.com/specimen/Montserrat).

## Como adicionar a um projeto T3 já existente

### Instalando @next/font
- Instale a dependência em seu projeto
```bash
npm install @next/font
```

### Atualizando _app.tsx
- Vá ao arquivo _app.tsx localizado em `src/pages/_app.tsx`
- Adicione o seguinte código logo após a chama pelos módulos
```ts
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], display: "fallback" });
```
- Englobe seu `Component` com a seguinte div
```jsx
<div className={montserrat.className}></div>
```

### Criando _document.tsx
- Crie um arquivo `_document.tsx` na pasta `src/pages`
- Adicione o seguinte código
```jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### Tudo pronto!
