const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (previousBatch, nextBatch) => previousBatch + nextBatch;

let totalBatteries = batteryBatches.reduce(reducer, 0);

