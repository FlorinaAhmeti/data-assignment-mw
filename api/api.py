from models.orders import *
from models.products import *
from models.departments import *
from models.data_functions import *
from flask import request

# route to get all orders
@app.route('/orders', methods=['GET'])
def get_orders():
    order = Order()
    page = request.args.get('page')
    return order.get_all(page)

# route to get order by id
@app.route('/orders/<int:id>', methods=['GET'])
def get_order_by_id(id):
    order = Order()
    return_value = order.get_one(id)
    return jsonify(return_value)

# route to delete order by id
@app.route('/orders/<int:id>', methods=['DELETE'])
def delete_order_by_id(id):
    order = Order()
    return_value = order.delete_one(id)
    return jsonify(return_value)


# route to get all products
@app.route('/products', methods=['GET'])
def get_products():
    product = Product()
    page = request.args.get('page')
    return product.get_all(page)

# route to get product by id
@app.route('/products/<int:id>', methods=['GET'])
def get_product_by_id(id):
    product = Product()
    return_value = product.get_one(id)
    return jsonify(return_value)

# route to delete order by id
@app.route('/products/<int:id>', methods=['DELETE'])
def delete_product_by_id(id):
    product = Product()
    return_value = product.delete_one(id)
    return jsonify(return_value)


# route to get all departments
@app.route('/departments', methods=['GET'])
def get_departments():
    department = Department()
    return jsonify({'departments': department.get_all()})

# route to get department by id
@app.route('/departments/<int:id>', methods=['GET'])
def get_department_by_id(id):
    department = Department()
    return_value = department.get_one(id)
    return return_value


# DATA MANIPULATION FUNCTIONS
# 
@app.route('/dataFunctions/number_of_products_by_department', methods=['GET'])
def number_of_products_by_department():
    data_functions = DataFunc()
    return_value = data_functions.number_of_products_by_department()
    return jsonify({'number_of_products_by_department': return_value})

@app.route('/dataFunctions/number_of_orders_per_user', methods=['GET'])
def number_of_orders_per_user():
    data_functions = DataFunc()
    return_value = data_functions.number_of_orders_per_user()
    return return_value

@app.route('/dataFunctions/number_of_orders_per_hour', methods=['GET'])
def number_of_orders_per_hour():
    data_functions = DataFunc()
    return_value = data_functions.number_of_orders_per_hour()
    return return_value

@app.route('/dataFunctions/orders_daily', methods=['GET'])
def orders_daily():
    data_functions = DataFunc()
    return_value = data_functions.orders_daily()
    return return_value


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)