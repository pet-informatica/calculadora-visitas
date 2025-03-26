from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def soma(a, b):
    return a + b

def subtracao(a, b):
    return a - b

def multiplicacao(a, b):
    return a * b

def divisao(a, b):
    return a / b

def potencia(a, b):
    return a ** b

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        data = request.get_json()
        
        expression = data['expression']

        result = 0

        if expression.find('+') != -1:
            result = soma(int(expression.split('+')[0]), int(expression.split('+')[1]))
        elif expression.find('-') != -1:
            result = subtracao(int(expression.split('-')[0]), int(expression.split('-')[1]))
        elif expression.find('*') != -1:
            result = multiplicacao(int(expression.split('*')[0]), int(expression.split('*')[1]))
        elif expression.find('/') != -1:
            result = divisao(int(expression.split('/')[0]), int(expression.split('/')[1]))
        elif expression.find('w') != -1:
            result = potencia(int(expression.split('w')[0]), int(expression.split('w')[1]))
        else:
            raise Exception('Operação inválida')

        return jsonify({
            'result': result
        })
    except Exception as e:
        return jsonify({
            'error': str(e)
        })

if __name__ == '__main__':
    app.run(debug=True, port=5000)