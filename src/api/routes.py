"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hola Alejandro"
    }

    return jsonify(response_body), 200

@api.route('/login', methods= ['POST'])
def handle_login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "El email y el password son requeridos"}), 400
    
    user = User.query.filter_by(email=email, password=password).first()

    if not user:
        return jsonify({"message": "No existe ese usuario"}), 404
    
    token = create_access_token(identity=user.email)
    return jsonify({"token": token})

@api.route('/payment', methods= ['POST'])
@jwt_required()
def pago():
    data = request.json
    amount = data.get('amount')
    current_user = get_jwt_identity()

    return jsonify({"ok": current_user})