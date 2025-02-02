"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Favourites,Posts, Comments
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/users/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_user(id):
    user = Users.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': f'User {id} deleted'}), 200

@api.route('/users', methods=['GET'])
def get_users():
    users = Users.query.all()  
    return jsonify([user.serialize() for user in users])

@api.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = Users.query.get_or_404(id)
    return jsonify(user.serialize())

@api.route('/register', methods=['POST'])
def create_user():
    data = request.get_json()
    username = data.get('username', None)
    email = data.get('email', None)
    password = data.get('password', None)  
    
    if not username or not email or not password:
        return jsonify({'message': 'Todos los campos son necesarios'}), 400
    
    exist_email = Users.query.filter_by(email=email).first()
    if exist_email:
        return jsonify({"message": "Ya existe un usuario con ese email"}), 400
    exist_username = Users.query.filter_by(username=username).first()
    if exist_username:
        return jsonify({"message": "Ya existe un usuario con ese nombre"}), 400
    
    hashed_password = generate_password_hash(password)
    
    new_user = Users(email=email, username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    token = create_access_token(identity=new_user.id)
    
    return jsonify({"message": "Usuario creado exitosamente", "token": token}), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email', None)
    password = data.get('password', None)  
    
    if not email or not password:
        return jsonify({'message': 'Todos los campos son necesarios'}), 400
    
    exist = Users.query.filter_by(email=email).first()
    if not exist:
        return jsonify({"message": "Usuario no encontrado"}), 404
    
    if not check_password_hash(exist.password, password):
        return jsonify({"message": "email/password incorrectos"}), 401
    
    token = create_access_token(identity=str(exist.id))
    
    return jsonify({"message": "Inicio de sesión exitoso", "token": token}), 200

# ----------------- POSTS -------------------- #
@api.route('/posts', methods=['GET'])
def get_posts():
    posts = Posts.query.all()
    return jsonify([post.serialize() for post in posts])

@api.route('/posts/<int:id>', methods=['GET'])
def get_post(id):
    post = Posts.query.get_or_404(id)
    return jsonify(post.serialize())

@api.route('/posts', methods=['POST'])
@jwt_required()
def create_post():
    data = request.get_json()
    title = data.get('title')
    body = data.get('body')
    image = data.get('image')
    if not title or not body or not image:
        return jsonify({'message': 'Todos los campos son necesarios'}), 400
    return jsonify({'message': 'Post creado exitosamente'}), 201

@api.route('/posts/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_post(id):
    post = Posts.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return jsonify({'message': f'Post {id} deleted'}), 200


# ----------------- COMMENTS ------------------ #
@api.route('/comments', methods=['GET'])
def get_comments():
    all_comments = Comments.query.all()
    return jsonify([comment.serialize() for comment in all_comments])

@api.route('/comments/<int:id>', methods=['GET'])
def get_comment(id):
    comment = Comments.query.get_or_404(id)  
    return jsonify(comment.serialize())


@api.route('/comments', methods=['POST'])
@jwt_required()
def create_comment():  
    
    id = get_jwt_identity()

    data = request.get_json() 
    comment_text = data.get('comment_text')
  
    
    if not comment_text: 
        return jsonify({'message': 'El campo comment_text es necesario'}), 400

    
    comment = Comments(user_id=id, comment_text=comment_text, post_id= data["post_id"])
    db.session.add(comment)
    db.session.commit()
    return jsonify({'message': 'Comentario creado exitosamente'}), 201


@api.route('/comments/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_comment(id):  
    comment = Comments.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()

    return jsonify({'message': f'Comment {id} deleted'}), 200

# ----------------- FAVOURITES ----------------- #
@api.route('/favourites', methods=['GET'])
@jwt_required()
def get_favourites():
    all_favourites = Favourites.query.all()
    return jsonify([favourite.serialize() for favourite in all_favourites])

@api.route('/favourites/<int:id>', methods=['GET'])
@jwt_required()
def get_favourite(id):
    favourite = Favourites.query.get_or_404(id) 
    return jsonify(favourite.serialize())

@api.route('/favourites', methods=['POST'])
@jwt_required()
def add_favourite():
    current_user_id = get_jwt_identity()
    
    data = request.get_json()
    user_id = data.get('user_id')
    post_id = data.get('post_id')

    if not user_id or not post_id:
        return jsonify({'error': 'user_id and post_id are required'}), 400

    if current_user_id != user_id:
        return jsonify({'error': 'You are not authorized to add to another user\'s favourites'}), 403

    user = Users.query.get(user_id)
    post = Posts.query.get(post_id)

    if not user:
        return jsonify({'error': 'User not found'}), 404
    if not post:
        return jsonify({'error': 'Post not found'}), 404

    new_favourite = Favourites(user_id=user_id, post_id=post_id)
    db.session.add(new_favourite)
    db.session.commit()

    return jsonify({'message': 'Favourite added successfully'}), 201

@api.route('/favourites/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_favourite(id): 
    favourite = Favourites.query.get(id)  
    if not favourite:
        return jsonify({'error': 'Favourite not found'}), 404
    db.session.delete(favourite)
    db.session.commit()
    
    return jsonify({'message': f'Favourite with id={id} deleted'}), 200



#random password generator
def password_generator():
    
    #list of characters
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV1234567890!@#_"
    #variable to store the password
    password = ""
    #loop to generate password, 8 is the ammount of characters in the password, can be change to anything you want
    for c in range(8):
        password += random.choice(chars)
    return password




@api.route('/reset_password', methods=['POST'])
def reset_password():
    data = request.get_json()
    email = data.get('email')
    user = Users.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "Restablecimiento erróneo"}), 400
    password = password_generator()
    
    user.password = password
    # user.password = generate_password_hash(password)
    db.session.commit()
    send_email(email, password)
    return jsonify({"msg": "Contraseña nueva generada"})

    