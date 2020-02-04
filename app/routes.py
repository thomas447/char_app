from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = '...'

socketio = SocketIO(app)

@app.route('/')
@app.route('/index')
def index():
	return render_template("index.html")

@socketio.on('connect')
def handle_connect():
	print("connected")

if __name__ == "__main__":
	socketio.run(app)
