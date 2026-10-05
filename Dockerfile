FROM alpine:latest

WORKDIR /app

COPY . /app

CMD ["sh", "-c", "echo 'Lifeless Proxy container initialized'; sleep infinity"]
