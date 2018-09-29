import time
from websocket import create_connection
import random

def ingest():
    print('Booting...')
    time.sleep(3)
    conn = create_connection("ws://0.0.0.0:2020")
    conn.send('CONN_ROLE:SENDER')
    console.log('moving on')
    while(True):
        time.sleep(3)
        console.log('send')
        packet = '%030x' % random.randrange(16**30)
        conn.send('CAN PACKET:' + packet)

ingest()