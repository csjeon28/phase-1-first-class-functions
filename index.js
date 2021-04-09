let createSpy = () => {`spy`}; 
function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    let funct = () => {'function'};
    return funct;
}

function returnsAnAnonymousFunction() {
    return function() {return `function`};
}