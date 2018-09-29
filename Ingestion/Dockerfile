# TODO: FIX. Hot reload is broken
FROM sccgatech/python-node

RUN npm i -g nodemon

WORKDIR /

COPY requirements.txt .
COPY nodemon.json .

COPY ./src ./

RUN pip install -r requirements.txt

CMD ["nodemon", "--exec", "python", "-u", "ingest.py"]