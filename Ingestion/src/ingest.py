import time
import asyncio
import websockets
import random

# TODO handle faliure to connect/send gracefully

async def transmit(uri):
    async with websockets.connect(uri) as websocket:
        await websocket.send('CONN_ROLE:SENDER')
        print('Advancing to send routine')
        while(True):
            time.sleep(3)
            packet = '%030x' % random.randrange(16**30)
            print('Send ' + packet)
            await websocket.send(packet)

time.sleep(10)
asyncio.get_event_loop().run_until_complete(
    transmit('ws://transfer:2020'))