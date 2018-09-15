FROM python:3.4-alpine
ADD . /ingestion
WORKDIR /ingestion
RUN pip install -r requirements.txt
CMD ["python", "ingest.py"]