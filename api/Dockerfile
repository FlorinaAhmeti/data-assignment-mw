FROM python:3.9.1
COPY ./requirements.txt /app/requirements.txt
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
RUN pip install pandas
RUN pip install flask_cors
EXPOSE 5000
CMD [ "python", "api.py" ]