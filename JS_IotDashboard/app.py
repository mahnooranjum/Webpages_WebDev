########  imports  ##########
from flask import Flask, jsonify, request

from flask_cors import CORS

app = Flask(__name__)
CORS(app)


fname = 'data.csv'

@app.route('/', methods=['GET', 'POST'])
def index():
    var1 = []
    var2 = []
    var3 = []
    with open(fname) as file:
        for line in (file.readlines() [-10:]):
            line = line[:-1]
            line = line.split(',')
            if len(line) == 3:
                # print(line)
                var1.append(line[0])
                var2.append(line[1])
                var3.append(line[2])
                
    return jsonify({"data1": var1, "data2": var2, "data3":var3})

######################################  run app  #########
app.run( port=5000)