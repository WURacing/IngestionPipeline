from websocket import create_connection
import time

def wsRun(iterations, msgPerIteration):
    conn = create_connection("ws://node:3030")
    while(iterations > 0):
        print('iterations remaining {}'.format(iterations))
        i = 0
        while(i < msgPerIteration):
            i = i + 1
            conn.send(str(int(round(time.time() * 1000))))
        iterations = iterations - 1
    print('testing complete')
    return