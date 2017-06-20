from flask import Flask, request, render_template
from config import DevConfig
from flask.ext.mongoalchemy import MongoAlchemy





app = Flask(__name__)

app.config['MONGOALCHEMY_DATABASE'] = 'library'
db = MongoAlchemy(app)







@app.route('/', methods=['GET'])
def show_homepage():
	return render_template('home.html')


if __name__ == "__main__":
	# YOU CAN CHOOSE WHICH PORT IS BEST
	app.run(debug=True, port=8000, host='0.0.0.0')