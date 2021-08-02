from flask import Flask, request, Response, jsonify
from flask_cors import CORS
app=Flask(__name__)
CORS(app)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False