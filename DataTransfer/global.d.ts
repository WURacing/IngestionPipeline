declare namespace Transfer {

    type IncomingPacket = {
        timestamp: number,
        canPacket: {
            msgId: number,
            data: number
        },
        messageName: string,
        signalName: string, // unsure as to diff bwtn this and messageName
        signalValue: string,
        units: string
    }

    type Session = {
        id: number,
        startTime: number,
        endTime: number
    };

    type CANData = {
        id: number,
        timestamp: number,
        msgId: number,
        data: number,
        sessionId: number
    };

    type ParsedData = {
        id: number,
        timestamp: number,
        canPacket: number,
        sessionId: number,
        messageName: string,
        signalName: string,
        signalValue: string,
        units: string
    };
}