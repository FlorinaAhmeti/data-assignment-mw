from settings import *
import json
import pandas as pd

class Order(object):
    def __init__(self):
        # read csv file
        self.data = pd.read_csv('data/orders_clean.csv')
    # GET request on the url will hit this function
    def get_all(self, page):
        page = int(page) if page else 1
        data = self.data.iloc[: , 1:]
        if page > 0:            
            # get all orders from csv file
            data_found=data.iloc[((page-1)*10)+10:(page*10)+10].to_json(orient='records') 
        else:
            data_found=data.iloc[page:page+10].to_json(orient='records')
        # return data found in csv
        return data_found
    def get_one(self, ID):
        data = self.data.iloc[: , 1:]
        # find data from csv based on user input
        data_found=data.iloc[ID].to_dict()
        # return data found in csv
        return data_found
    def delete_one(self, ID):
        # Id it present delete data from csv
        self.data = self.data.drop(ID)
        self.data.to_csv("orders_clean.csv", index=False)
        return {"message": 'Deleted successfully'}