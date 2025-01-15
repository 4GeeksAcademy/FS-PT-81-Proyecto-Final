"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favourites, POI, Post, Comments, Category
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


# Metodo GET #

# Metodo POST #

@api.route('/favourites/POI/<int:poi_id>', methods=['POST'])
def handle_fav_poi(poi_id):
    user_id = 1

    existing_favourites = Favourites.query.filter_by(user_id = user_id, poi_id = poi_id).first()
    if existing_favourites:
        return jsonify({'error': 'poi already in favourites'}), 400
    

    new_favourite_poi = Favourites(user_id = user_id, poi_id = poi_id)
    db.session.add(new_favourite_poi)
    db.session.commit()

    return jsonify({"msg": "Poi added to favourites"})



