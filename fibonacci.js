function fibonacci(rep,init = [0,1]) {
    let fibonacciSeq = init;
    if (rep <= 2) {
        if (rep == 1) return fibonacciSeq[0];
        if (rep <= 0) return 'Debe especificar un valor mayor a 0';
        return fibonacciSeq;
    }else{
        fibonacciSeq.push(fibonacciSeq[fibonacciSeq.length-1] + fibonacciSeq[fibonacciSeq.length-2]);    
        return fibonacci(rep-1,fibonacciSeq);
    }
}

console.log(fibonacci(15));
