.PHONY: install dev build start lint format format-write

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

format:
	npm run format

format-write:
	npm run format:write
