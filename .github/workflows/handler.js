function handler(payload) {
    var input = JSON.parse(payload);
    console.log("Input: ", input.a, input.b);
}

handler(process.argv[2]);