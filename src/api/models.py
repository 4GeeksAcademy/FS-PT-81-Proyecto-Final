from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
db = SQLAlchemy()


class Users(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    #profile_picture = db.Column(db.String(50), nullable=True)

    comments = db.relationship("Comments", backref='user', lazy=True)
    posts = db.relationship("Posts", backref='user', lazy=True)
    favourites = db.relationship("Favourites", backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

def serialize(self):
    return {
        "id": self.id,
        "username": self.username,
        "email": self.email,
    }

class Posts(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    title = db.Column(db.String(80), nullable=False)
    body = db.Column(db.String(), nullable=False)
    image = db.Column(db.String(800), nullable=False)
    #created_at = db.Column(db.String(50), nullable=False)

    comments = db.relationship("Comments", backref='post', lazy=True)
    favourites = db.relationship("Favourites", backref='post', lazy=True)

    def __repr__(self):
        return f'<Posts {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "body": self.body,
            "image": self.image,
            "created_at": self.created_at,
            "category_id": self.category_id
        }
    
class Comments(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    post_id = db.Column(db.Integer, ForeignKey('posts.id'))
    comment_text = db.Column(db.String(500), nullable=False)

    def __repr__(self):
        return f'<Comments {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "comment_text": self.comment_text
        }
    
class Favourites(db.Model):
    __tablename__ = 'favourite'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    post_id = db.Column(db.Integer, ForeignKey('posts.id'))

    def __repr__(self):
        return f'<Favourites {self.id}>'
    
    def serialize(self):
        return {
            "favourites_id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id
        }








    

    
