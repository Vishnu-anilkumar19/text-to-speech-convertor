from flask import Flask, request, render_template
from gtts import gTTS
import os
from playsound import playsound

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    text = request.form['text']
    
    # Delete the existing voice.mp3 file if it exists
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    
    # Generate speech
    speech = gTTS(text=text, lang='en', slow=False)
    speech.save("voice.mp3")
    
    # Play the generated speech
    playsound("voice.mp3")
    
    # After processing, render the form again with the textbox cleared
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
