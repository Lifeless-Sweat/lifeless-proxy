FROM python:3.12-alpine

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir flask

EXPOSE 8080

CMD ["python", "-c", "import os; from flask import Flask; app=Flask(__name__); app.route('/')(lambda: 'Lifeless Proxy is online'); app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))"]
