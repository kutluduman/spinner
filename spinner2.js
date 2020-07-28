
let symbolsArr =  (['\r|  ', '\r/  ', '\r-  ', '\r\\   ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|   ']);
let time = 0;
let incremental = 150;

for(const symbol in symbolsArr) {
  setTimeout(() => {
    process.stdout.write(symbolsArr[symbol]);
  },time += incremental);
}