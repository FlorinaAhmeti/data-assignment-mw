from settings import *
import json
import pandas as pd

class DataFunc(object):
    def __init__(self):
        # read csv files
        self.departments = pd.read_csv('data/departments.csv')
        self.products = pd.read_csv('data/products_clean.csv')
        self.orders = pd.read_csv('data/orders_clean.csv')
    def number_of_products_by_department(self):
        products = self.products.groupby('department_id')['department_id'].count()
        products = products.to_dict()
        products_to_return = {}
        for department_id in products:
            department_name = self.departments[str(department_id)].values[0]
            products_to_return[department_name] = products[department_id]
        return products_to_return
    def number_of_orders_per_user(self):
        orders = self.orders.groupby('user_id')['user_id'].count().sort_values(ascending=False)
        orders = orders.iloc[ :10].to_json()
        return orders
    def number_of_orders_per_hour(self):
        orders = self.orders.groupby('order_hour_of_day')['order_hour_of_day'].count().sort_values(ascending=False)
        orders = orders.to_json()
        return orders
    def orders_daily(self):
        orders = self.orders.groupby('days_since_prior_order')['days_since_prior_order'].count().sort_index(ascending=False)
        orders = orders.to_json()
        return orders