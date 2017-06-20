from flask import Flask, requests, render_template
from config import DevConfig






app = Flask(__name__)

app.config.from_object("config.DevConfig")

db = SQLAlchemy(app)







@app.route('/', methods=['GET'])
def show_homepage():
	return render_template('home.html')


if __name__ == "__main__":
	# YOU CAN CHOOSE WHICH PORT IS BEST
	app.run(debug=True, port=8000)