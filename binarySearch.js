function BinarySearch(array,target){
  let  leftIndex = 0;
  let  rightIndex = array.length - 1;

    while( leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/ 2 );
     
        if( target === array[middleIndex]){
            return middleIndex;
        }
        if(target < array[middleIndex]){
          
            rightIndex = middleIndex -  1 ;

        }else{

            leftIndex = middleIndex +  1;
        }
    }
    return -1
     
}
const array = [2,5,6,12,15,23,25];
const target = 15;
const result = BinarySearch(array,target);
console.log("result:",result);