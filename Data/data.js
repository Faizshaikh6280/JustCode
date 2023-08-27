const questions = [
  {
    questionName: "Enter the array from user and display all the values",
    code: `int main() {
  int arr[5];
  printf("Enter the 5 values in array: ");
  for(int i = 0;i<5;i++){
      scanf("%d",&arr[i]);
  }
  printf("Yours values are : ");
  for(int j =0;j<5;j++){
      printf("%d ",arr[j]);
  }
  
      return 0;
  }`,
    output: `Enter the 5 values in array: 1 2 3 4 5
Yours values are : 1 2 3 4 5 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName: "Enter an array from user and print it in reverse order",
    code: `int main() {
  int n;
  printf("Enter the size of an array : ");
  scanf("%d",&n);
  int arr[n];
  for(int i = 0;i<n;i++){
      printf("Enter the value : ");
      scanf("%d",&arr[i]);
  }
  printf("array in reverse order : ");
  for(int j = n-1;j>=0;j--){
      printf("%d ",arr[j], " ");
  }
  }`,
    output: `Enter the size of an array : 3
  Enter the value : 1
  Enter the value : 2
  Enter the value : 3
  array in reverse order : 3 2 1 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName: "Enter an array form user and copy it into another array",
    code: `int main(){
      int n;
          printf("Enter the size of array : ");
          scanf("%d",&n);
          int arr1[n],arr2[n],i;
      
          printf("Enter array elemnts : ");
          for(i = 0;i<n;i++){
              scanf("%d",&arr1[i]);
          }
      
           for(i = 0;i<n;i++){
              arr2[i] = arr1[i];
          }
          printf("Second array elements : ");
           for(i = 0;i<n;i++){
              printf("%d ",arr2[i]);
          }
      
          return 0;
      }`,
    output: `Enter the size of array : 2
Enter array elemnts : 1 2 
Second array elements : 1 2 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName:
      "Enter an array form user and copy it into another array in reverse order",
    code: `int main(){
      int n;
          printf("Enter the size of array : ");
          scanf("%d",&n);
          int arr1[n],arr2[n],i;
      
          printf("Enter array elemnts : ");
          for(i = 0;i<n;i++){
              scanf("%d",&arr1[i]);
          }
      
           for(i = 0;i<n;i++){
              arr2[i] = arr1[i];
          }
          printf("Second array elements in reverse order: ");
           for(i = n-1;i>=0;i--){
              printf("%d ",arr2[i]);
          }
      
          return 0;
      }`,
    output: `Enter the size of array : 3
    Enter array elemnts : 1 2 3
    Second array elements  in reverse order: 3 2 1 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName:
      "Enter an array from user and print the number which is even ",
    code: `int main() {
      int n;
      printf("Enter the size of array : ");
      scanf("%d",&n);
      
      int arr[n],i;
      printf("Enter array elemnts : ");
      for(i = 0;i<n;i++){
          scanf("%d",&arr[i]);
      }
      printf("Even value present in the array : ");
      for(i = 0;i<n;i++){
          if(arr[i] % 2 == 0){
           printf("%d ",arr[i]);
          }
      }
      return 0;
  }`,
    output: `Enter the size of array : 4
    Enter array elemnts : 1 2 3 4
    Even value present in the array : 2 4 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName:
      "Enter an array from user and print the number which is positive",
    code: `int main() {
      int n;
       printf("Enter the size of array : ");
       scanf("%d",&n);
   
       int arr[n],i;
       printf("Enter array elemnts : ");
       for(i = 0;i<n;i++){
           scanf("%d",&arr[i]);
       }
       //print if num is positive
       for(i = 0;i<n;i++){
           if(arr[i] > 0){
               printf("Positive value at %d : %d",i,arr[i]);
           }
       }
       return 0;
   }`,
    output: `Enter the size of array : 3
    Enter array elemnts : -5 3 6
    Positive value at 1 : 3
    Positive value at 2 : 6 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName: "Enter an array from user and square all the values of array",
    code: `int main() {
      int n;
          printf("Enter the size of array : ");
          scanf("%d",&n);
      
          int arr[n],i;
          printf("Enter array elemnts : ");
          for(i = 0;i<n;i++){
              scanf("%d",&arr[i]);
          }
          //print if num is even
          for(i = 0;i<n;i++){
                  printf("Square of array value : %d",arr[i] * arr[i]);
           }
           return 0;
      }`,
    output: `Enter the size of array : 3
    Enter array elemnts : 1 2 3
    Square of array value : 1 
    Square of array value : 4 
    Square of array value : 9  `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName: "Enter an array from user and find maximum and minimum value",
    code: `int main() {
      // Write C code here
      int n;
      printf("Enter the size of array : ");
      scanf("%d",&n);
  
      int arr[n],i;
      printf("Enter array elemnts : ");
      for(i = 0;i<n;i++){
          scanf("%d",&arr[i]);
      }
      int min = arr[0];
      int max = arr[0];
      for(i = 0;i<n;i++){
          if(arr[i] > max) max = arr[i];
          if(arr[i]<min) min = arr[i];
      }
      printf("max & min value present in the array %d %d",max,min);
      return 0;
  }`,
    output: `Enter the size of array : 4
    Enter array elemnts : 1 2 3 4
    max & min value present in the array 4 1 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName: "Enter an array from user and find the k-th smallest value",
    code: `int main() {
      // Write C code here
      int n;
      printf("Enter the size of array : ");
      scanf("%d",&n);
  
      int arr[n],i;
      printf("Enter array elemnts : ");
      for(i = 0;i<n;i++){
          scanf("%d",&arr[i]);
      }
      int min = arr[0];
      int max = arr[0];
      for(i = 0;i<n;i++){
          if(arr[i] > max) max = arr[i];
          if(arr[i]<min) min = arr[i];
      }
      printf("max & min value present in the array %d %d",max,min);
      return 0;
  }`,
    output: `Enter the size of array : 4
    Enter array elemnts : 1 2 3 4
    max & min value present in the array 4 1 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName: "Find the kth smallest element in the array enter by user",
    code: `// Main Logic
    int findKthSmall(int arr[],int k,int size){
      int count = 1,val = arr[0];
  
      for(int i = 1;i < size;i++){
          if(arr[i] > val){
              val = arr[i];
              count++;
          }
          if(count == k) return val;
      }
  
  }
  // sorting 
  void bubbleSort(int arr[],int size){
      for(int i = 0;i < size - 1;i++){
          for(int j = 0;j < size - 1 - i;j++){
              if(arr[j] > arr[j+1]){
                  int temp = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = temp;
              }
          }
      }
  }
  
  void main(){
  
      int size,k;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      int arr[size];
      printf("Enter the elements of an array : ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
  
      printf("Enter a value of K : ");
      scanf("%d",&k);
  
      bubbleSort(arr,size);
      int kthSmall = findKthSmall(arr,k,size);
      printf("The kth Smallest value is : %d",kthSmall);
  
  }
  `,
    output: `Enter a size of array : 5
    Enter the elements of an array : 20 40 56 78 45
    Enter a value of K : 3
    The kth Smallest value is : 45 `,
    type: "array",
    bookmarked: false,
    difficulty: "medium",
  },
  {
    questionName: "Enter an array from user and add all values ",
    code: `int addValuesOfArray(int arr[],int size){
      int sum = 0;
      for(int i = 0;i < size;i++){
          sum += arr[i];
      }
      return sum;
  }
  
  void main(){
  
      int size;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      int arr[size];
      printf("Enter the elements of an array : ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
      int sum = addValuesOfArray(arr,size);
      printf("sum of array is : %d",sum);
  
  }
  `,
    output: `Enter a size of array : 5
    Enter the elements of an array : 1 2 3 4 5
    sum of array is : 15`,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
  },
  {
    questionName: "Enter an array from user and find the duplicate values ",
    code: `void findDublicates(int arr[],int size){
        int count[size + 1];
    
        for(int i = 0; i < size;i++) count[i] = 0;
        for(int i = 0;i < size;i++) count[arr[i]]++;
        printf("Dublicates Elems are : ");
        for(int i = 0;i < size;i++){
            if(count[i] > 1) printf("%d ",i);
        }
    }
    
    void main(){
    
        int size;
        printf("Enter a size of array : ");
        scanf("%d",&size);
        int arr[size];
        printf("Enter the elements of an array : ");
        for(int i = 0; i < size;i++){
            scanf("%d",arr+i);
        }
        findDublicates(arr,size);
    }
  `,
    output: `Enter a size of array : 5 
    Enter the elements of an array : 2 1 2 4 1
    Dublicates Elems are : 1 2 `,
    type: "array",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(N)`,
  },
  {
    questionName:
      "Enter an array from user and remove the duplicate values and fill with zero",
    code: `void removeDublicatesFilledWithZero(int arr[],int size){
      bubbleSort(arr,size);
      int prev = arr[0];
      for(int i = 1;i < size;i++){
          if(arr[i] == prev){
              arr[i]  = 0;
          }else prev = arr[i];
      }
  }
  
  
  void main(){
  
      int size;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      int arr[size];
      printf("Enter the elements of an array : ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
      removeDublicatesFilledWithZero(arr,size);
      for(int i = 0;i < size;i++){
          printf("%d ",arr[i]);
      }
  }  
  `,
    output: `Enter a size of array : 5
    Enter the elements of an array : 1 2 2 3 5
    1 2 0 3 5  `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N^2) \n Space Complexity is O(1)`,
  },
  {
    questionName: "Enter an array from user and count the duplicate values",
    code: `int countDublicates(int arr[],int size){
      int count = 0;
      bubbleSort(arr,size);
      int prev = arr[0];
      for(int i = 1;i<size;i++){
          if(arr[i] == prev) {
              count++;
          }else prev = arr[i];
      }
      return count;
  }
  void main(){
  
      int size;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      int arr[size];
      printf("Enter the elements of an array : ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
      printf("No. of dublicates in array is : %d",countDublicates(arr,size));
  }
  `,
    output: `Enter a size of array : 10
    Enter the elements of an array : 1 2 3 2 5 6 5 4 5 4
    No. of dublicates in array is : 4`,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N^2) \n Space Complexity is O(1)`,
  },
  {
    questionName:
      "Enter an array from user and print all possible combinations of the elements",
    code: `void printAllCombinations(int arr[],int size){
      for(int i = 0;i <size;i++){
          for(int j = i+1; j <size;j++){
              for(int k = i; k <= j;k++){
                  printf("%d ",arr[k]);
              }
               printf("\n");
          }
          printf("\n");
      }
  }
  
  void main(){
  
      int size;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      int arr[size];
      printf("Enter the elements of an array : ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
      printAllCombinations(arr,size);
  }
  `,
    output: `Enter a size of array : 5 
    Enter the elements of an array : 1 2 3 4 5
    1 2       
    1 2 3     
    1 2 3 4   
    1 2 3 4 5 
    
    2 3       
    2 3 4     
    2 3 4 5   
    
    3 4       
    3 4 5     
    
    4 5  `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N^3) \n Space Complexity is O(1)`,
  },
  {
    questionName:
      "Enter an array from user and print all the palindrone numbers ",
    code: `int reverseNum(int num){
      int rev = 0;
      while(num > 0)    {
          int ld = num % 10;
          rev = rev*10 + ld;
          num /= 10;
      }
      return rev;
  }
  
  int isPallindrom(int num){
      if(num == reverseNum(num)) return 1;
      else return 0;
  }
  
  
  void main(){
  
      int size;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      int arr[size];
      printf("Enter the elements of an array : ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
      /// printing pallindorm 
      for(int i = 0;i < size;i++){
          if(isPallindrom(arr[i]) == 1) printf("%d ",arr[i]);
      }
  }  
  `,
    output: `Enter a size of array : 5
    Enter the elements of an array : 121 520 1221 320 101
    121 1221 101 `,
    type: "array",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName:
      "Enter two arrays from the user and check they are same or not",
    code: `int isArraySame(int arr1[],int arr2[],int size1,int size2){
      if(size1 != size2) return 0;
      for(int i = 0; i < size1;i++){
          if(arr1[i] != arr2[i])  return 0;
      }
      return 1;
  }
  
  void main(){
  
      int size1,size2;
      printf("Enter a size of array 1 : ");
      scanf("%d",&size1);
      int arr1[size1];
      printf("Enter the elements of an array1 : ");
      for(int i = 0; i < size1;i++){
          scanf("%d",arr1+i);
      }
      printf("Enter a size of array 2: ");
      scanf("%d",&size2);
      int arr2[size2];
      printf("Enter the elements of an array2 : ");
      for(int i = 0; i < size2;i++){
          scanf("%d",arr2+i);
      }
  
      if(isArraySame(arr1,arr2,size1,size2) == 1) printf("Both Array are same!");
      else printf("Arrays are not same!");
      
  }   
  `,
    output: `Enter a size of array 1 : 5
    Enter the elements of an array1 : 1 2 3 4 5
    Enter a size of array 2: 5
    Enter the elements of an array2 : 1 2 3 4 5 
    Both Array are same! `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName:
      "Merge the two sorted arrays into one array but in sorted order ",
    code: `// sorting 
    void bubbleSort(int arr[],int size){
        for(int i = 0;i < size - 1;i++){
            for(int j = 0;j < size - 1 - i;j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    //Main Logic
    void mergeSort(int arr1[],int arr2[],int size1,int size2,int mergeArr[]){
      int size3 = size1 + size2;
      int i = 0,j = 0,k = 0;
  
      bubbleSort(arr1,size1);
      bubbleSort(arr2,size2);
  
      while(i < size1 && j < size2){
          if(arr1[i] < arr2[j]){
              mergeArr[k] = arr1[i];
              i++;
          }else {
              mergeArr[k] = arr2[j];
              j++;
          }
          k++;
      }
  
    while(i < size1 ){
      mergeArr[k] = arr1[i];
      i++;
      k++;
     }
    while(j < size2 ){
      mergeArr[k] = arr2[j];
      j++;
      k++;
     }
  
  }
  
  void main(){
  
      int size1,size2;
      printf("Enter a size of array 1 : ");
      scanf("%d",&size1);
      int arr1[size1];
      printf("Enter the elements of an array1 : ");
      for(int i = 0; i < size1;i++){
          scanf("%d",arr1+i);
      }
      printf("Enter a size of array 2: ");
      scanf("%d",&size2);
      int arr2[size2];
      printf("Enter the elements of an array2 : ");
      for(int i = 0; i < size2;i++){
          scanf("%d",arr2+i);
      }
  
      int size3 = size1  + size2;
      int mergeArr[size3];
  
      mergeSort(arr1,arr2,size1,size2,mergeArr);
  
      printf("Merged Array : ");
      for(int i = 0;i < size3; i++){
          printf("%d ",mergeArr[i]);
      }
  
  
  }
    
  `,
    output: `Enter a size of array 1 : 5
    Enter the elements of an array1 : 4 52 65 85 45
    Enter a size of array 2: 3
    Enter the elements of an array2 : 5 0 7
    Merged Array : 0 4 5 7 45 52 65 85  `,
    type: "array",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N^2) \n Space Complexity is O(N)`,
  },
  {
    questionName: "Find the local maxima in the array ",
    code: `int localMaxima(int arr[],int size){
      for(int i = 1; i < size - 1;i++){
          if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) return arr[i];
      }
  }
  
  void main(){
  
      int size;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      int arr[size];
      printf("Enter the elements of an array: ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
      printf("First local maxima of array is  : %d",localMaxima(arr,size));
  }
  `,
    output: `Enter a size of array : 5
    Enter the elements of an array: 1 2 3 2 5
    First local maxima of array is  : 3 `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "Find the local minima in the array ",
    code: `int localMinima(int arr[],int size){
      for(int i = 1; i < size - 1;i++){
          if(arr[i] < arr[i-1] && arr[i] < arr[i+1]) return arr[i];
      }
  }
  void main(){
  
      int size;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      int arr[size];
      printf("Enter the elements of an array: ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
      printf("First local minima of array is  : %d",localMinima(arr,size));
  }
    
  `,
    output: `Enter a size of array : 5
    Enter the elements of an array: 4 2 1 3 5
    First local maxima of array is  : 1
  `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "Trapping Rain Water Problem (Bonus)",
    code: `#include <math.h>
    int calcTrappedWater(int arr[],int leftBound[],int rightBound[],int size,int width){
      int trappedWaterSum = 0;
      for(int i = 0;i < size;i++){
          int trappedWater = (fmin(leftBound[i],rightBound[i]) - arr[i]) * width;
          trappedWaterSum += trappedWater;
      }
  
      return trappedWaterSum;
  }
  void main(){
  
      int size,width;
      printf("Enter a size of array : ");
      scanf("%d",&size);
      printf("Enter a width of bar : ");
      scanf("%d",&width);
      int arr[size];
      printf("Enter the height of an bars: ");
      for(int i = 0; i < size;i++){
          scanf("%d",arr+i);
      }
      int leftBound[size];
      int rightBound[size];
      leftMaxBound(arr,leftBound,size);
      rightMaxbound(arr,rightBound,size);
      
      int ans = calcTrappedWater(arr,leftBound,rightBound,size,width);
  
      printf("Total amount of water that can be trapped is : %d",ans);
  }
  `,
    output: `Enter a size of array : 7
    Enter a width of bar : 1
    Enter the height of an bars: 4 2 0 6 3 2 5
    Total amount of water that can be trapped is : 11
  `,
    type: "array",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
];

questions.forEach((ques, indx) => {
  ques.id = indx + 1;
});
export { questions };
