FROM python:3.4-alpine

WORKDIR .

COPY requirements.txt .

COPY /src .

RUN pip install -r requirements.txt
CMD ["python", "-u", "ingest.py"]