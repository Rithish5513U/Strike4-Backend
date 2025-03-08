from flask import Flask, request, jsonify
from flask_cors import CORS
from src.news import News


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to FlowFi!"

@app.route('/financialInsights', methods = ['POST'])
def extract_news():
    if request.method == 'POST':
        data = request.json
        preferences = data['preferences']
        news = News()
        news_data = news.get_everything(preferences)
        return jsonify(news_data)

@app.route('/upload', methods = ['POST'])
def upload_file():
    if request.method == 'POST':
        if "file" not in request.files:
            return jsonify({"error": "No file part"})
        
        file = request.files["file"]
        
        if file.filename == "":
            return jsonify({"error": "No selected file"})
        
        
        
        

if __name__ == '__main__':
    app.run(debug = True, port = 8080)