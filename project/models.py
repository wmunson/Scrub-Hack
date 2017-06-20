from app import db
from flask.ext.mongoalchemy import MongoAlchemy
from datetime import datetime, date


class Participant(db.Document):
	zip_code = db.StringField()
	id = db.StringField()
	state = db.StringField()
	date_added = db.StringField()
	dob = db.StringField()
	gender = db.StringField()
	collection_id = db.StringField()
	

class Policy(db.Document):
	parcticipant_id = db.StringField()
	product = db.StringField()
	plan db.StringField()
	id = db.StringField()
	start_date = db.StringField()
	collection_id = db.StringField()


class Activity(db.Document):
	target_count = db.StringField()
	activity_typpe = db.StringField()
	initiative = db.StringField()
	comment = db.StringField()
	collection_id = db.StringField()