"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Favourites,Posts, Comments
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# ----------------- USERS -------------------- #
@api.route('/users/<int:id>', methods=['DELETE'])
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

@api.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    if not username or not email or not password:
        return jsonify({'message': 'Todos los campos son necesarios'}), 400
    return jsonify({'message': 'Usuario creado exitosamente'}), 201

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
def create_post():
    data = request.get_json()
    title = data.get('title')
    body = data.get('body')
    image = data.get('image')
    if not title or not body or not image:
        return jsonify({'message': 'Todos los campos son necesarios'}), 400
    return jsonify({'message': 'Post creado exitosamente'}), 201

@api.route('/posts/<int:id>', methods=['DELETE'])
def delete_post(id):
    post = Posts.query.get_or_404(id)
    db.session.delete(post)
=======
    username = data.get('username')  
    email = data.get('email')        
    password = data.get('password')  

    if not username or not email or not password:
        return jsonify({'message': 'Todos los campos son necesarios'}), 400

    
    return jsonify({'message': 'Usuario creado exitosamente'}), 201



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
def create_post():
    data = request.get_json()
    title = data.get('title')
    body = data.get('body')
    image = data.get('image')

    if not title or not body or not image:
        return jsonify({'message': 'Todos los campos son necesarios'}), 400

   
    return jsonify({'message': 'Post creado exitosamente'}), 201

@api.route('/posts/<int:id>', methods=['DELETE'])
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
def create_comment():  
    data = request.get_json() 
    comment_text = data.get('comment_text')
  
    if not comment_text: 
        return jsonify({'message': 'El campo comment_text es necesario'}), 400

   
    return jsonify({'message': 'Comentario creado exitosamente'}), 201

@api.route('/comments/<int:id>', methods=['DELETE'])
def delete_comment(id):  
    comment = Comments.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()

    return jsonify({'message': f'Comment {id} deleted'}), 200

# ----------------- FAVOURITES ----------------- #
@api.route('/favourites', methods=['GET'])
def get_favourites():
    all_favourites = Favourites.query.all()
    return jsonify([favourite.serialize() for favourite in all_favourites])

@api.route('/favourites/<int:id>', methods=['GET'])
def get_favourite(id):
    favourite = Favourites.query.get_or_404(id) 
    return jsonify(favourite.serialize())

@api.route('/favourites', methods=['POST'])
def add_favourite():
    data = request.get_json()
    user_id = data.get('user_id')
    post_id = data.get('post_id')

    if not user_id or not post_id:
        return jsonify({'error': 'user_id and post_id are required'}), 400

    user = User.query.get(user_id)
    post = Posts.query.get(post_id)

    if not user:
        return jsonify({'error': 'User not found'}), 404
    if not post:
        return jsonify({'error': 'Post not found'}), 404

    new_favourite = Favourites(user_id=user_id, post_id=post_id)
    db.session.add(new_favourite)
    db.session.commit()

    return jsonify({
        'message': 'Favourite added successfully',
        'favourite': {
            'user_id': new_favourite.user_id,
            'post_id': new_favourite.post_id
        }
    }), 201

@api.route('/favourites', methods=['DELETE'])
def delete_favourite():
    data = request.get_json()
    user_id = data.get('user_id')
    post_id = data.get('post_id')

    if not user_id or not post_id:
        return jsonify({'error': 'user_id and post_id are required'}), 400

    favourite = Favourites.query.filter_by(user_id=user_id, post_id=post_id).first()

    if not favourite:
        return jsonify({'error': 'Favourite not found'}), 404

    db.session.delete(favourite)

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
    return jsonify({'message': 'Favourite deleted successfully'}), 200

@api.route('/comments', methods=['POST'])
def create_comment():
    data = request.get_json()
    comment_text = data.get('comment_text')
    if not comment_text:
        return jsonify({'message': 'El campo comment_text es necesario'}), 400
    return jsonify({'message': 'Comentario creado exitosamente'}), 201

@api.route('/comments/<int:id>', methods=['DELETE'])
def delete_comment(id):
    comment = Comments.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()
    return jsonify({'message': f'Comment {id} deleted'}), 200
# ----------------- FAVOURITES ----------------- #
@api.route('/favourites', methods=['GET'])
def get_favourites():
    all_favourites = Favourites.query.all()
    return jsonify([favourite.serialize() for favourite in all_favourites])

@api.route('/favourites/<int:id>', methods=['GET'])
def get_favourite(id):
    favourite = Favourites.query.get_or_404(id)
    return jsonify(favourite.serialize())

@api.route('/favourites', methods=['POST'])
def add_favourite():
    data = request.get_json()
    user_id = data.get('user_id')
    post_id = data.get('post_id')
    if not user_id or not post_id:
        return jsonify({'error': 'user_id and post_id are required'}), 400
    user = Users.query.get(user_id)
    post = Posts.query.get(post_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    if not post:
        return jsonify({'error': 'Post not found'}), 404
    new_favourite = Favourites(user_id=user_id, post_id=post_id)
    db.session.add(new_favourite)
    db.session.commit()
    return jsonify({
        'message': 'Favourite added successfully',
        'favourite': {
            'user_id': new_favourite.user_id,
            'post_id': new_favourite.post_id
        }
    }), 201

@api.route('/favourites', methods=['DELETE'])
def delete_favourite():
    data = request.get_json()
    user_id = data.get('user_id')
    post_id = data.get('post_id')
    if not user_id or not post_id:
        return jsonify({'error': 'user_id and post_id are required'}), 400
    favourite = Favourites.query.filter_by(user_id=user_id, post_id=post_id).first()
    if not favourite:
        return jsonify({'error': 'Favourite not found'}), 404
    db.session.delete(favourite)
    db.session.commit()
    return jsonify({'message': 'Favourite deleted successfully'}), 200
