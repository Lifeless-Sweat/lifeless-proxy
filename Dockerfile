FROM python:3.12-alpine

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir flask

EXPOSE 8080

CMD ["sh", "-c", "python - <<'PY'\nimport os\nfrom flask import Flask, send_from_directory\n\napp = Flask(__name__, static_folder='web', static_url_path='')\n\n@app.route('/', defaults={'path': ''})\n@app.route('/<path:path>')\ndef serve(path):\n    full = os.path.join('/app/web', path)\n    if path and os.path.isfile(full):\n        return send_from_directory('/app/web', path)\n    index = '/app/web/index.html'\n    if os.path.isfile(index):\n        return send_from_directory('/app/web', 'index.html')\n    return 'Lifeless Proxy is running, but web/index.html was not found.', 200\n\nport = int(os.environ.get('PORT', '8080'))\napp.run(host='0.0.0.0', port=port)\nPY"]
