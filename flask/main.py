from flask import Flask, request, jsonify
from flask_cors import CORS
from flask.news import News

app = Flask(__name__)
CORS(app)

@app.route('/financialInsights', methods = ['POST'])
def extract_news():
    if request.method == 'POST':
        data = request.json
        preferences = data['preferences']
        news_data = News.get_top_headlines(preferences)
        return jsonify(news_data)

if __name__ == '__main__':
    app.run(debug = True, port = 8080)