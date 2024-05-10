function towerOfHanoi(numOfDisks, source, aux, dest) {
    if (numOfDisks === 1) {
      console.log(`Move disk 1 from ${source} to ${dest}`);
      return;
    }
    
    towerOfHanoi(numOfDisks - 1, source, dest, aux);
    console.log(`Move disk ${numOfDisks} from ${source} to ${dest}`);
    towerOfHanoi(numOfDisks - 1, aux, source, dest);
  }
  
  const numOfDisks = 3;
  const source = 'Source';
  const aux = 'Auxiliary';
  const dest = 'Destination';
  
  towerOfHanoi(numOfDisks, source, aux, dest);
  