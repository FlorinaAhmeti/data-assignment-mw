from settings import *
import json
import pandas as pd

class Department(object):
    def __init__(self):
        # read csv file
        self.data = pd.read_csv('data/departments.csv')
    # GET request on the url will hit this function
    def get_all(self):
        data = self.data.iloc[: , 1:]
        # get all departments from csv file
        data_found=data.to_dict(orient='records')
        # return data found in csv
        return data_found
    def get_one(self, ID):
        data = self.data.iloc[: , 1:]
        # find data from csv based on user input
        data_found=data[str(ID)].to_dict()
        # return data found in csv
        return data_found[0]