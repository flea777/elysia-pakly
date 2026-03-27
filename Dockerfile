FROM oven/bun:1.1.18

WORKDIR /src/app

COPY package.json bun.lock ./

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "src/server.ts"]