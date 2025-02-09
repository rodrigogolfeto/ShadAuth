# Projeto Laravel com Breeze e shadcn para Template de Autenticação

Este é um projeto Laravel que utiliza o Breeze como solução inicial de autenticação e o shadcn como base para os
componentes de interface do usuário. O objetivo é oferecer uma fundação simples e flexível para projetos com um
front-end moderno, construído com TailwindCSS e Vue.js.

## Tecnologias Utilizadas

### Backend

- **[Laravel](https://laravel.com/)**: Framework PHP para desenvolvimento web.
- **Breeze**: Starter kit do Laravel para autenticação, que fornece scaffolding básico para login, registro, reset de
  senha, etc.

### Frontend

- **[Vue.js](https://vuejs.org/)**: Framework JavaScript utilizado para construção da interface do usuário. Está
  integrado ao Breeze para gerenciar a parte interativa do front-end.
- **[shadcn/ui](https://www.shadcn-vue.com)**: Biblioteca para construção de componentes dinâmicos com estilo moderno, sendo
  utilizada para criar o design e os componentes de UI.

### Estilização

- **[TailwindCSS](https://tailwindcss.com/)**: Utilizado para estilização baseada em utilitários, possibilitando criação
  rápida de interfaces.

## Bibliotecas Externas no `package.json`

### Principais Dependências

- **[maska](https://beholdr.github.io/maska/)**: Biblioteca para mascaramento de inputs (como CPF, telefone, etc.).
- **[@vueuse/core](https://github.com/vueuse/vueuse)**: Utilitária para Vue.js, com funcionalidades otimizadas.

## Como Iniciar

1. **Instalar Dependências**:
   ```bash
   npm install
   composer install
   ```

2. **Configurar o ambiente**:
   Renomeie ou crie um arquivo `.env` baseado no modelo `.env.example`. Configure o banco de dados e outras variáveis
   conforme necessário.

3. **Gerar Chave da Aplicação**:
   ```bash
   php artisan key:generate
   ```

4. **Executar Migrações**:
   ```bash
   php artisan migrate
   ```

5. **Rodar o Servidor**:
   ```bash
   php artisan serve
   npm run dev
   ```

6. Acesse o projeto em [`http://localhost:8000`](http://localhost:8000).

---

## Conclusão

Este projeto serve como ponto de partida ideal para aplicações Laravel modernas, combinando autenticação pronta com uma
interface elegante desenvolvida com Vue.js e Shadcn-vue. Se você tiver dúvidas, consulte
a [documentação oficial do Laravel](https://laravel.com/docs) e as outras ferramentas mencionadas acima.
