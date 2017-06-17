from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)



import os


from config import basedir
#from flask.ext.openid import OpenID
#from flask.ext.login import LoginManager

from flask_login import LoginManager
lm = LoginManager()
lm.init_app(app)
lm.login_view = 'login'

from flask_openid import OpenID
oid = OpenID(app, os.path.join(basedir, 'tmp'))

from app import views, models