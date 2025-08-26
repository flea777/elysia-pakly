# 📦 Pakly - Sistema de Gerenciamento de Pacotes para Condomínios

## Elysia with Bun runtime

### Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

### Development
To start the development server run:
```bash
bun run dev
```

### Como Rodar a Aplicação com Docker

O projeto utiliza **Docker** e **Docker Compose** para criar um ambiente de desenvolvimento completo e isolado, incluindo a aplicação e o banco de dados PostgreSQL.

#### Pré-requisitos
Certifique-se de que o **Docker Desktop** esteja instalado e em execução na sua máquina.

#### Passos para a Execução

##### 1. Subir os Contêineres
Na raiz do projeto, execute o comando abaixo. Ele construirá a imagem da sua aplicação, baixará a imagem do PostgreSQL e iniciará ambos os serviços.

```bash
docker-compose up --build -d
```

Acessar a URL da API ```http://localhost:3000/``` 