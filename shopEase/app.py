from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

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


@app.route('/offers')
def offers():
    return render_template('products.html')


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

@app.route('/category/<category>')
def category(category):
    return render_template(
        'category.html',
        category=category
    )

if __name__ == "__main__":
    app.run(debug=True)