from flask import Flask, jsonify,render_template, request, redirect, url_for,flash
from config import config
from flask_login import LoginManager, login_user, logout_user,login_required

from flask_mysqldb import MySQL

#Models
from models.ModelUser import ModelUser

#Entities
from models.entities.User import User

from products import products



app=Flask(__name__)
#conexion 
db=MySQL(app)

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method=='POST':
        print(request.form ['username'])
        print(request.form['password'])
        user = User(0,request.form['username'],request.form['password'])
        logged_user=ModelUser.login(db,user)
        if logged_user != None:
            if logged_user.password:
                return redirect(url_for('home')) 
            else:
                flash ("Contraseña invalida...")
                return render_template('auth/login.html')

        else: 
            flash("Usuario no encontrado... ")
        return render_template('auth/login.html')
    else:
        return render_template('auth/login.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/ping')
def ping():
    return 'Pong'    

@app.route('/products')
def getProducts():
    return jsonify(products)

@app.route('/products/<string:product_nombre>')
def getProduct(product_nombre):
    productsFound = [product for product in products if product['nombre'] == product_nombre]
    print(product_nombre)
    if (len(productsFound) > 0):
        return jsonify ({"product": productsFound[0]})
    return jsonify ({"message ": "Product no encontrado :c"})


if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.run()
    