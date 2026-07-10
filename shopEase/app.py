from flask import Flask, render_template, request, redirect, session, flash
import sqlite3
app = Flask(__name__)
app.secret_key = "shopease123"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():

    if request.method == "POST":

        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()

        cursor.execute(
            "SELECT * FROM users WHERE email=? AND password=?",
            (email, password)
        )

        user = cursor.fetchone()

        conn.close()

        if user:
            session["user"] = user[1]
            return redirect("/")

        flash("Invalid Email or Password")
        return redirect("/login")

    return render_template("login.html")
@app.route('/signup', methods=['GET', 'POST'])
def signup():

    if request.method == "POST":

        name = request.form["name"]
        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()

        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            (name, email, password)
        )

        conn.commit()
        conn.close()

        flash("Account Created Successfully!")
        return redirect("/login")

    return render_template("signup.html")

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')
@app.route('/shop')
def shop():
    return render_template('products.html')


@app.route('/categories')
def categories():
    return render_template('index.html')



@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/wishlist')
def wishlist():
    return render_template('wishlist.html')


@app.route('/profile')
def profile():
    return render_template('login.html')

@app.route('/product-details')
def product_details():
    return render_template('product_details.html')

@app.route("/offers")
def offers():
    return render_template("offers.html")

@app.route("/logout")
def logout():
    session.pop("user", None)
    flash("Logged out successfully!")
    return redirect("/login")

@app.route('/category/<category>')
def category(category):
    return render_template(
        'category.html',
        category=category
    )

if __name__ == "__main__":
    app.run(debug=True)