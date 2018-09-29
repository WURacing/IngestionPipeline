FROM sccgatech/python-node

RUN npm i -g nodemon

WORKDIR /

COPY requirements.txt .
COPY nodemon.json .

COPY ./src ./

RUN pip install -r requirements.txt

WORKDIR .

CMD ["nodemon", "--exec", "python", "-u", "ingest.py"]