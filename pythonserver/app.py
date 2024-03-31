from flask import Flask, send_from_directory

app = Flask(__name__)

# Serve static files from the 'dist' directory
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('dist', path)

# Serve the index.html file for all other routes
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory('dist', 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9877)