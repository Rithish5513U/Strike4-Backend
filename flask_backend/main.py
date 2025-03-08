from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_backend.news import News

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to FlowFi!"

@app.route('/financialInsights', methods = ['POST', 'GET'])
def extract_news():
    if request.method == 'POST':
        data = request.json
        preferences = data['preferences']
        news_data = News.get_top_headlines(preferences)
        return jsonify(news_data)
    return "Hello"

if __name__ == '__main__':
    app.run(debug = True, port = 8080)