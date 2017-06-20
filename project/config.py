class Config:
	# PUT IN YOUR DATABSE BELOW
	MONGOALCHEMY_DATABASE_URI = 'mongodb://localhost/scrubs.db'
	SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevConfig(Config):
	DEBUG = True


class ProdConfig(Config):
	DEBUG = False
	ALLOWED_HOSTS = ["*"]