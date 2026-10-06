FROM python:3.12-alpine

WORKDIR /app

RUN pip install --no-cache-dir flask

COPY . .

RUN cat > app.py <<'PY'
import os
from flask import Flask

app = Flask(__name__)

@app.get("/")
def home():
    return "Lifeless Proxy is ONLINE"

@app.get("/health")
def health():
    return "OK"

port = int(os.environ.get("PORT", "8080"))

print(f"Starting Lifeless Proxy test server on 0.0.0.0:{port}", flush=True)

app.run(host="0.0.0.0", port=port)
PY

CMD ["python", "app.py"]
