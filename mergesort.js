function mergeSort(arr) {
    if (arr.length === 1) return arr
    let mitadIzq = mergeSort(arr.splice(0,Math.trunc(arr.length / 2)))
    let mitadDer = mergeSort(arr)
    return merge(mitadIzq, mitadDer)
}

function merge(izq, der) {
    let datos = []
    while (izq.length && der.length) {        
        datos.push((izq[0] < der[0]) ? izq.shift() : der.shift())
    }
    return datos.concat(izq).concat(der)
}

console.log(mergeSort([4,3,2,1,32,31,15,40,10]));

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
