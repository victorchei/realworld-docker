# docker

## for lr2

docker build . -t node-my

docker run -p 49160:8080 -d node-my

http://localhost:49160/test

docker ps -a 

docker stop  + key from container 

docker rm + key from container

## lr3

docker image ls

docker compose up --build 
docker compose up

## lr4

docker compose -f docker-compose.yml -f docker-compose.dev.yml build

docker compose -f docker-compose.yml -f docker-compose.dev.yml up 

docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build