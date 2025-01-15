from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    profile_picture = db.Column(db.String(50), nullable=False)
    
    comments = db.relationship("Comments", backref='user', lazy=True)
    posts = db.relationship("Post", backref='user', lazy=True)
    favourites = db.relationship("Favourites", backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "profile_picture": self.profile_picture
        }

class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    title = db.Column(db.String(80), nullable=False)
    body = db.Column(db.String(), nullable=False)
    image = db.Column(db.String(800), nullable=False)
    created_at = db.Column(db.String(50), nullable=False)
    category_id = db.Column(db.Integer, ForeignKey('category.id'))
    
    comments = db.relationship("Comments", backref='post', lazy=True)
    favourites = db.relationship("Favourites", backref='post', lazy=True)

    def __repr__(self):
        return f'<Post {self.id}>'

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
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    post_id = db.Column(db.Integer, ForeignKey('post.id'))
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
    __tablename__ = 'favourites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    post_id = db.Column(db.Integer, ForeignKey('post.id'))

    def __repr__(self):
        return f'<Favourites {self.id}>'

    def serialize(self):
        return {
            "favourites_id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id
        }

class POI(db.Model):
    __tablename__ = 'poi'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    address = db.Column(db.String(250), nullable=False)
    city = db.Column(db.String(250), nullable=False)
    continent = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    pictures = db.Column(db.String(800), nullable=False)
    category_id = db.Column(db.Integer, ForeignKey('category.id'))

    def __repr__(self):
        return f'<POI {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "city": self.city,
            "continent": self.continent,
            "description": self.description,
            "pictures": self.pictures,
            "category_id": self.category_id
        }

class Category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    posts = db.relationship("Post", backref='category', lazy=True)
    pois = db.relationship("POI", backref='category', lazy=True)

    def __repr__(self):
        return f'<Category {self.name}>'
    
    def serialice(self):
        return {
            "id": self.id,
            "name": self.name,
            "posts": self.posts,
            "pois": self.pois
        }

# comments: [comment.serialize() for comment in self.comments]
    








    

    
