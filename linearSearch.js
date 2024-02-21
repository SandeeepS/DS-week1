//given a array and target elemt, find the index of the target elemnt ,return -1 if not target is present
function linearSearch(arr,target){
       for(let i = 0 ; i < arr.length ; i ++){
         if(target == arr[i]){
            return i
         }
       }
       return -1;
}

const arr = [2,6,5,4,5];
const target = 4;
console.log(linearSearch(arr,target));