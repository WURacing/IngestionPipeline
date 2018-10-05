import time
import asyncio
import websockets
import random
import json

# TODO handle faliure to connect/send gracefully

async def transmit(uri):
    async with websockets.connect(uri) as websocket:
        await websocket.send('CONN_ROLE:SENDER')
        print('Advancing to send routine')
        while(True):
            time.sleep(0.5)
            packet = {}
            if random.random() < .2:
                # send bool val
                packet['sensorId'] = '001'
                packet['value'] = True
                packet['timestamp'] = int(time.time() * 1000)
            else:
                tmp = random.randint(0, 40) + 150
                packet['sensorId'] = '002'
                packet['value'] = tmp
                packet['timestamp'] = int(time.time() * 1000)
            #packet = '%030x' % random.randrange(16**30)
            #print('Send ' + packet)
            await websocket.send(json.dumps(packet))

time.sleep(10)
asyncio.get_event_loop().run_until_complete(
    transmit('ws://transfer:2020'))