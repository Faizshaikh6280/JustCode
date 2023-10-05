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
               printf("\\n\");
          }
          printf("\\n\");
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
  {
    questionName: "convert in uppercase",
    code: `#include <math.h>
    char toUpperCase(char ch){
      return (char)(ch&'_');
  }
  
  void main(){
      int size;
      printf("Enter the size of the string : ");
      scanf("%d",&size);
  
      char str[size];
      printf("Enter a string : ");
      scanf("%s",str);
  
      for(int i = 0; i < size;i++){
          str[i] = toUpperCase(str[i]);
      }
      
      printf("Upper case form : %s",str);
  }
  `,
    output: `Enter the size of the string : 5
    Enter a string : faiz
    Upper case form : FAIZ
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "convert in lower",
    code: `char toLowerCase(char ch){
      return (char)(ch|' ');
  }
  
  void main(){
      int size;
      printf("Enter the size of the string : ");
      scanf("%d",&size);
  
      char str[size];
      printf("Enter a string : ");
      scanf("%s",str);
  
      int i = 0;
      while (str[i]){
          str[i] = toLowerCase(str[i]);
          i++;
      }
      printf("Lower case form : %s",str);
  }
  `,
    output: `Enter the size of the string : 5
    Enter a string : FaiZ
    Lower case form : faiz
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "convert into sentence case",
    code: `#include <conio.h>
    char toUpperCase(char ch){
      return (char)(ch&'_');
  }
  
  void main(){
    void main(){

      char str[50];
      printf("Enter a string : ");
      fgets(str,sizeof(str),stdin);
      int i = 0;
      str[0] =  toUpperCase(str[0]);
      printf("%s",str);
  }
  `,
    output: `Enter a string : faiz alam
    Faiz alam
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "convert into toggle case",
    code: `#include <conio.h>
    char toUpperCase(char ch){
      return (char)(ch&'_');
  }
  
 
  void main(){
    char str[50];
    printf("Enter a string : ");
    fgets(str,sizeof(str),stdin);
    int i = 0;
   while(str[i]){
    if(i%2 == 0){
        str[i] = toUpperCase(str[i]);
    }
    i++;
   }
    // str[0] = toUpperCase(str[0]);
    printf("Toggle case is : %s",str);
}   
  `,
    output: `Enter a string : hello world
    Toggle case is : HeLlO WoRlD    
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "convert into title case",
    code: `#include <conio.h>
    char toUpperCase(char ch){
      return (char)(ch&'_');
  }
  
 
void main(){
  char str[50];
  printf("Enter a string : ");
  fgets(str,sizeof(str),stdin);
  int i = 1;
 while(str[i]){
  if(str[i] == ' '){
      str[i+1] = toUpperCase(str[i+1]);
  }
  i++;
 }
  str[0] = toUpperCase(str[0]);
  printf("%s",str);
}   
  `,
    output: `Enter a string : how are you sir?
    How Are You Sir?    
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "final length of the string",
    code: `#include <conio.h>
    void main(){
    char str[50];
    printf("Enter a string : ");
    fgets(str,sizeof(str),stdin);
    int i = 0;
   while(str[i]) i++;   
    printf("Length is : %d",i-1);
}   
  `,
    output: `Enter a string : faiz alam                                              
    Length is : 9   
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "compare those string",
    code: `#include <conio.h>
    int getlen(char str[]){
      int l = 0;
      while(str[l]) l++;
      return l-1;
  }
  
  int isEqual(char str1[],char str2[]){
      if(getlen(str1) != getlen(str2)) return 0;
  
      int i = 0;
      while(str1[i] && str2[i]){
          if(str1[i] != str2[i]) return 0;
          i++;
      }
  
      return 1;
  }
  
  void main(){        
      char str1[50];
      char str2[50];
  
      printf("Enter a string 1: ");
      fgets(str1,sizeof(str1),stdin);
  
      printf("Enter a string 2: ");
      fgets(str2,sizeof(str2),stdin);
      
      if(isEqual(str1,str2)) printf("Strings are equal");
      else printf("Strings are not equal");
  
  }   
  `,
    output: `Enter a string 1: faiz alam

    Enter a string 2: faiz aalm
                                                                            
    Strings are not equal   
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "concatenate the string",
    code: `#include <conio.h>
    void main(){
      char str1[50];
      char str2[50];
      int i = 0,k = 0;
  
      printf("Enter a string 1: ");
      fgets(str1,sizeof(str1),stdin);
  
      printf("\nEnter a string 2: ");
      fgets(str2,sizeof(str2),stdin);
  
     int len = getlen(str1) + getlen(str2);
     char str3[len];
     while(i < getlen(str1)){
      str3[k] = str1[i];
      k++;
      i++;
     }
     i = 0;
     while(i < getlen(str2)){
      str3[k] = str2[i];
      k++;
      i++;
     }
     i = 0;
     printf("Concat of string  : ");
     while(i < getlen(str3)){
      printf("%c",str3[i]);
      i++;
     }
  }   
  `,
    output: `Enter a string 1: faiz

    Enter a string 2: alam
    Concat of string  : faizalam
  `,
    type: "string",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "copy that string into another string ",
    code: `#include <conio.h>
    void copyStr(int str1[],int str2[]){
      int i = 0;
      while(str1[i]){
         str2[i] = str1[i];
         i++;
      }
  }
  void main(){
      char str1[50],str2[50];
      printf("Enter the string : ");
      fgets(str1,sizeof(str1),stdin);
      copyStr(str1,str2);
      printf("Second string : %s",str2);
  }   
  `,
    output: `Enter the string : faiz
    Second string : faiz
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "Check whether a string pallindrom or not",
    code: `#include <conio.h>
    int getlen(char str[]){
      int l = 0;
      while(str[l]) l++;
      return l-1;
  }
    int isPallindrom(char str[]){
      int n = getlen(str);
      int s = 0,e = n-1;
      while(s < e){
          if(str[s] != str[e]) return 0;
          s++;
          e--;
      }
      return 1;
  }
  
  void main(){
      char str[50];
      printf("Enter the string : ");
      fgets(str,sizeof(str),stdin);
      
      if(isPallindrom(str)) printf("String is Pallindrom!");
      else printf("String is not pallindrom!");
  }  
  `,
    output: `Enter the string : madam
    String is Pallindrom!
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "Print each character in a new line.",
    code: `#include <conio.h>
    void main(){
      char str[50];
      printf("Enter the string : ");
      fgets(str,sizeof(str),stdin);
      int i = 0;
      while(str[i]){
          printf("%c\n",str[i]);
          i++;
      }
  } 
  `,
    output: `Enter the string : faiz
    f
    a
    i
    z
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "Copy reverse order into another string",
    code: `#include <conio.h>
    void copyStr(int str1[],int str2[]){
      int i = 0;
      while(str1[i]){
         str2[i] = str1[i];
         i++;
      }
  }
    void reverse(char str[]){
      int n = getlen(str);
      int s = 0,e = n-1;
      while(s < e){
       char temp = str[s];
       str[s] = str[e];
       str[e] = temp;
       s++;
       e--;
      }
  }
  
   void main(){
      char str1[50],str2[50];
      printf("Enter the string : ");
      fgets(str1,sizeof(str1),stdin);
      copyStr(str1,str2);
      reverse(str2);
      printf("Reverse is str2 : %s",str2);
  }   
  `,
    output: `Enter the string : Faiz
    Reverse is str2 : ziaF
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "Enter 2 string & print the difference ",
    code: `#include <conio.h>
    int difference(char str1[],char str2[],int i){
      return (int)(str1[i] - str2[i]);
  }
    void main(){
      char str1[50],str2[50];
      printf("Enter the string 1: ");
      fgets(str1,sizeof(str1),stdin);
      printf("\\n\ Enter the string 2: ");
      fgets(str2,sizeof(str2),stdin);
  
      printf("Diffrence of string \\n\");
      int i = 0;
      while(str1[i] && str2[i]){
         printf("%d\\n\", difference(str1,str2,i));
         i++;
      }
  }   
  `,
    output: `Enter the string 1: faiz

    Enter the string 2: faiz
    Diffrence of string
    0
    0
    0
    0
    0
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Check is character exists ",
    code: `#include <conio.h>
    int isCharExists(char str[],char ch){
      int i = 0;
      while(str[i]){
          if(str[i] == ch) return 1;
          i++;
      }
      return 0;
  }
  void main(){
      char str1[50],ch;
      printf("Enter the string 1: ");
      fgets(str1,sizeof(str1),stdin);
      printf("\\n\ Enter the character : ");
      ch = getche();
  
      if(isCharExists(str1,ch)) printf("\\n\ Character does exists ");
      else printf("Character does not exist");
  
  }   
  `,
    output: `Enter the string 1: faiz
    Enter the character : i
    Character does exists 
    Shabb@DESKTOP-PR3U0FG MING
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Count all vowels ",
    code: `#include <conio.h>
    int countVowel(char str[]){
      int i = 0;
      int count = 0;
      while(str[i]){
        if(str[i] == 'a' || str[i] == 'A' ||  str[i] == 'e' || str[i] == 'E' || str[i] == 'o' || str[i] == 'O' || str[i] == 'i' || str[i] == 'I' || str[i] == 'u' || str[i] == 'U'){
          count++;
        }
        i++;
      }
      return count;
  }
  void main(){
      char str1[50];
      printf("Enter the string : ");
      fgets(str1,sizeof(str1),stdin);
      printf("Number of vowels in string is : %d ",countVowel(str1));
  
  }   
  `,
    output: `Enter the string : Hello world how are you ?
    Number of vowels in string is : 8 
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Convert into Int ",
    code: `#include <conio.h>
    int convertIntoInt(char str1[]){
      int ans = 0;
      int i = 0;
      while(str1[i] != '\0'){
        ans = ans*10 + (str1[i] - '0');
        i++;
      }
  
      return ans;
  }
  void main(){
      char str1[5],c;
      printf("Enter a string \n");
      scanf("%s",str1);
      int ans = convertIntoInt(str1);
      printf("Addtion of 5 with given num : %d ",ans+5);
  
  }   
  `,
    output: `Enter a string 
15
Addtion of 5 with given num : 20 
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Convert into float ",
    code: `#include <conio.h>
    float convertIntoFloat(char str1[]){
      int integer = 0;
       int i = 0;
       while(str1[i] != 46){
         integer = integer*10 + (str1[i] - '0');
         i++;
       }
       float decimal = 0;
       i++;
       while(str1[i]){
         decimal = decimal*10 + (str1[i] - '0');
         i++;
       }
       while(decimal > 1){
           decimal /= 10;
       }
       float ans = integer + decimal;
       return ans;
   }
   void main(){
       char str1[10],c;
       printf("Enter a string \\n\");
       scanf("%s",str1);
       float ans = convertIntoFloat(str1);
       printf("After addition of 5 in given string %f",convertIntoFloat(str1) + 5);
   }    
  `,
    output: `Enter a string 
    20.578
    After addition of 5 in given string 25.577999
  `,
    type: "string",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Convert into Character ",
    code: `#include <conio.h>
    char convertIntoChar(char str[]){
      int sum = 0;
     int i = 0;
     while(str[i]){
         sum += (int)str[i];
         i++;
     }
     return (char)(sum);
 }
 void main(){
     char str1[50];
     printf("Enter the string : ");
     fgets(str1,sizeof(str1),stdin);
     printf("Charcter form is : %c ",convertIntoChar(str1));
 }   
  `,
    output: `Enter the string : abcd
    Charcter form is : ö 
  `,
    type: "string",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement the operations of stack using integer array.",
    code: `#include <stdio.h>
    #define MAX 4
    
    int stack[MAX];
    int top = -1;
    
    int isEmpty(){
        if(top == -1) return 1;
        return 0;
    }
    
    int isFull(){
        if(top == MAX-1) return 1;
        return 0;
    }
    
    void push(int val){
        if(isFull()){
            printf("Stack is full!");
            return;
        }
        stack[++top] = val;
    }
    
    int pop(){
        if(isEmpty()){
            printf("Stack is Empty!");
            return __INT_MAX__;
        }
        int data = stack[top--];
        return data;
    }
    int peek(){
         if(isEmpty()){
            printf("Stack is Empty!");
            return __INT_MAX__;
        }
        return stack[top];
    }
    
    
    void main(){
        push(10);
        push(20);
        push(30);
        push(30);
        // printf("%d ",peek());
    }
  `,
    output: `$ ./a.exe
    30 
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement the operations of stack using string array.",
    code: `#include <stdio.h>
    #define MAX 4
    
    char stack[MAX];
    int top = -1;
    
    int isEmpty(){
        if(top == -1) return 1;
        return 0;
    }
    
    int isFull(){
        if(top == MAX-1) return 1;
        return 0;
    }
    
    void push(int val){
        if(isFull()){
            printf("Stack is full!");
            return;
        }
        stack[++top] = val;
    }
    
    char pop(){
        if(isEmpty()){
            printf("Stack is Empty!");
            return ' ';
        }
        int data = stack[top--];
        return data;
    }
    char peek(){
         if(isEmpty()){
            printf("Stack is Empty!");
            return ' ';
        }
        return stack[top];
    }
    void main(){
        push('a');
        push('b');
        push('c');
        printf("%c ",peek());
    }
  `,
    output: `$ ./a.exe
    c 
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Reverse a string using stack",
    code: `#include <stdio.h>
    #include <string.h>
    #define MAX 10
    char stack[MAX];
    int top = -1;
    
    int isEmpty(){
        if(top == -1) return 1;
        return 0;
    }
    
    int isFull(){
        if(top == MAX-1) return 1;
        return 0;
    }
    
    void push(int val){
        if(isFull()){
            printf("Stack is full!");
            return;
        }
        stack[++top] = val;
    }
    
    char pop(){
        if(isEmpty()){
            printf("Stack is Empty!");
            return ' ';
        }
        int data = stack[top--];
        return data;
    }
    char peek(){
         if(isEmpty()){
            printf("Stack is Empty!");
            return ' ';
        }
        return stack[top];
    }
    
    // Reverse a string using stack.
    void reverseString(char str[]){
        int i = 0;
        push('#');
        while(i < strlen(str)){
            push(str[i]);
            i++;
        }
        i = 0;
        while(peek() != '#'){
            str[i] = pop();
            i++;
        }
        pop();
    }
    
    void main(){
        char str[] = "Faiz";
        reverseString(str);
        printf("%s ",str);
    }
  `,
    output: `ziaF 
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Bracket matching using stack.",
    code: `int isBracketMatch(char str[]){
      int i = 0;
      while(i < strlen(str)){
          if(str[i] == '('){
              push(str[i]);
          }else if(str[i] == ')'){
             if(isEmpty()) return 0;
             if(peek() != '(') return 0;
             pop();
          }
          i++;
      }
      if(i == strlen(str) && isEmpty() == 0) return 0;
      return 1;
  }
  
  void main(){
      char str[] = "(())";
      printf("%d ",isBracketMatch(str));
  }
  `,
    output: `1  
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Convert the expression into Infix to Postfix",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #define SIZE  50
    struct Node{
        char data;
        struct Node *next;
    };
    
    struct Node *top = NULL;
    
    void push(char val){
        if(top == NULL){
            top = (struct Node*)malloc(sizeof(struct Node));
            top->data = val;
            top->next = NULL;
            return;
        }
        struct Node *temp  = (struct Node*)malloc(sizeof(struct Node));
        if(temp == NULL){
            printf("Stack is Full!");
            return;
        }
        temp->data = val;
        temp->next = top;
        top = temp;
    }
    
    char pop(){
        if(top == NULL){
            printf("Stack is Empty!");
            return '#';
        }
        int item = top->data;
        struct Node *temp = top;
        top = top->next;
        free(temp);
        return item;
    }
    
    char peek(){
        if(top == NULL){
        return '#';
        }
        return top->data;
    }
    
    int precedence(char ch){
        switch(ch){
            case '#':
            return 0;
            case '+':
            case '-':
            return 1;
            case '*':
            case '/':
            return 2;
            case '^':
            return 3;
        }
    }
    
    int isOperator(char ch){
        if(ch == '+' || ch == '-' || ch == '/' || ch == '*' || ch == '^'){
            return 1;
        }
        return 0;
    }
    
    
    void infixToPostfix(char infix[],char postfix[]){
        int j = 0;
        push('#');
        for(int i = 0;i < strlen(infix);i++){
            char ch = infix[i];
            if(isOperator(ch)==0){
                postfix[j++] = ch;
            }else {
                if(ch == '(') {
                    push(ch);
                }else if(ch == ')'){
                    while(peek() != '('){
                        postfix[j++] = pop();
                    }
                    pop();
                }else {
                    if(precedence(ch) > precedence(peek())){
                       push(ch);
                    }else {
                        while(precedence(ch) <= precedence(peek())){
                            postfix[j++] = pop();
                        }
                        push(ch);
                    }
                }
            }
        }
    
        while(peek() != '#'){
            postfix[j++] = pop();
        }
        pop();
        postfix[j] = '\0';
    
    
    }
    
    void main(){
       char infix[SIZE],postfix[SIZE];
        fgets(infix,SIZE,stdin);
        infixToPostfix(infix,postfix);
        printf("%s ",postfix);
    }    
  `,
    output: `input : 5+6*2/5-8+6
   output: 562*5/+8-6+  
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "Hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Convert the expression into Infix to Prefix",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #define SIZE  50
    struct Node{
        char data;
        struct Node *next;
    };
    
    struct Node *top = NULL;
    
    void push(char val){
        if(top == NULL){
            top = (struct Node*)malloc(sizeof(struct Node));
            top->data = val;
            top->next = NULL;
            return;
        }
        struct Node *temp  = (struct Node*)malloc(sizeof(struct Node));
        if(temp == NULL){
            printf("Stack is Full!");
            return;
        }
        temp->data = val;
        temp->next = top;
        top = temp;
    }
    
    char pop(){
        if(top == NULL){
            printf("Stack is Empty!");
            return '#';
        }
        int item = top->data;
        struct Node *temp = top;
        top = top->next;
        free(temp);
        return item;
    }
    
    char peek(){
        if(top == NULL){
        return '#';
        }
        return top->data;
    }
    
    int precedence(char ch){
        switch(ch){
            case '#':
            return 0;
            case '+':
            case '-':
            return 1;
            case '*':
            case '/':
            return 2;
            case '^':
            return 3;
        }
    }
    
    int isOperator(char ch){
        if(ch == '+' || ch == '-' || ch == '/' || ch == '*' || ch == '^'){
            return 1;
        }
        return 0;
    }
    
    
    void infixToPostfix(char infix[],char postfix[]){
        int j = 0;
        push('#');
        for(int i = 0;i < strlen(infix);i++){
            char ch = infix[i];
            if(isOperator(ch)==0){
                postfix[j++] = ch;
            }else {
                if(ch == '(') {
                    push(ch);
                }else if(ch == ')'){
                    while(peek() != '('){
                        postfix[j++] = pop();
                    }
                    pop();
                }else {
                    if(precedence(ch) > precedence(peek())){
                       push(ch);
                    }else {
                        while(precedence(ch) <= precedence(peek())){
                            postfix[j++] = pop();
                        }
                        push(ch);
                    }
                }
            }
        }
    
        while(peek() != '#'){
            postfix[j++] = pop();
        }
        pop();
        postfix[j] = '\0';
    
    
    }
    // Reverse a string using stack.
    void reverseString(char str[]){
        int i = 0;
        push('#');
        while(i < strlen(str)){
            push(str[i]);
            i++;
        }
        i = 0;
        while(peek() != '#'){
            str[i] = pop();
            i++;
        }
        pop();
    }
    // Infix to Prefix.
    void infixToPrefix(char infix[],char prefix[]){
    //1. Reverse the infx expression.
    reverseString(infix);
    //2. Convert the reverse expression into postfix.
    infixToPostfix(infix,prefix);
    //3. reverse the postfix expression back.
    reverseString(prefix);
    
    }
    void main(){
        char infix[SIZE],prefix[SIZE];
        fgets(infix,SIZE,stdin);
        infixToPrefix(infix,prefix);
        printf("%s ",prefix);
    }       
  `,
    output: `input : 5+6*2/5
  output:  +5*6/25 
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "Hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Evaluation of postfix expression",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include <math.h>
    #define SIZE  20
    
    struct Node{
        int data;
        struct Node *next;
    };
    
    struct Node *top = NULL;
    
    void push(char val){
        if(top == NULL){
            top = (struct Node*)malloc(sizeof(struct Node));
            top->data = val;
            top->next = NULL;
            return;
        }
        struct Node *temp  = (struct Node*)malloc(sizeof(struct Node));
        if(temp == NULL){
            printf("Stack is Full!");
            return;
        }
        temp->data = val;
        temp->next = top;
        top = temp;
    }
    
    int pop(){
        if(top == NULL){
            printf("Stack is Empty!");
            return 0;
        }
        int item = top->data;
        struct Node *temp = top;
        top = top->next;
        free(temp);
        return item;
    }
    
    char peek(){
        if(top == NULL){
        return 0;
        }
        return top->data;
    }
    
    int precedence(char ch){
        switch(ch){
            case '#':
            return 0;
            case '+':
            case '-':
            return 1;
            case '*':
            case '/':
            return 2;
            case '^':
            return 3;
        }
    }
    
    int isOperator(char ch){
        if(ch == '+' || ch == '-' || ch == '/' || ch == '*' || ch == '^'){
            return 1;
        }
        return 0;
    }
    
    int evaluate(int op1,int op2,char operator){
        switch(operator){
            case '+':
            return op1+op2;
            case '-':
            return op1-op2;
            case '*':
            return op1*op2;
            case '/':
            return op1/op2;
            case '%':
            return op1%op2;
            case '^':
            return (int)pow(op1,op2);
        }
    }
    
    int reducePostfix(char postfix[]){
      int i = 0;
      while(postfix[i]){
        char ch = postfix[i];
        if(ch == '\n') {
            i++;
            continue;
        }
        if(isOperator(ch) == 0){
            push(ch - '0');
        }else {
            int op2 = pop();
            int op1 = pop();
            int n = evaluate(op1,op2,ch);
            push(n);
        }
        i++;
      }
       return pop();
    }
    
    void main(){
        char postfix[SIZE];
        fgets(postfix,SIZE,stdin);
        int ans = reducePostfix(postfix);
        printf("\nAnswer is : %d",ans);
    }    
  `,
    output: `63/2+
    Answer is : 4
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "Hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Evaluation of prefix expression",
    code: `int reducePrefix(char prefix[]){
      int i = strlen(prefix) - 1;
       while(i >= 0){
         char ch = prefix[i];
        if(ch == '\n') {
            i--;
        }
        else if(isOperator(ch) == 0){
            push(ch - '0');
            i--;
        }else {
            int op1 = pop();
            int op2 = pop();
            int n = evaluate(op1,op2,ch);
            push(n);
        i--;
        }
       }
       return pop();
      }
    
    void main(){
        char prefix[SIZE];
        fgets(prefix,SIZE,stdin);
        int ans = reducePrefix(prefix);
        printf("\nAnswer is : %d",ans);
    }    
  `,
    output: `/+552
    Answer is : 5
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "Hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implementation of dynamic stack of integers",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node{
        int data;
        struct Node *next;
    };
    
    struct Node *top = NULL;
    
    void push(int val){
        if(top == NULL){
            top = (struct Node*)malloc(sizeof(struct Node));
            top->data = val;
            top->next = NULL;
            return;
        }
        struct Node *temp  = (struct Node*)malloc(sizeof(struct Node));
        if(temp == NULL){
            printf("Stack is Full!");
            return;
        }
        temp->data = val;
        temp->next = top;
        top = temp;
    }
    
    int pop(){
        if(top == NULL){
            printf("Stack is Empty!");
            return -2;
        }
        int item = top->data;
        struct Node *temp = top;
        top = top->next;
        free(temp);
        return item;
    }
    
    int peek(){
        if(top == NULL){
        printf("Stack is Empty!");
        return -1;
        }
        return top->data;
    }
    
    void main(){
        int choice;
        int val;
        while(1){
         printf("\n****MENU******\n1.Push\n2.Pop\n3.Peek\n4.Exit\n");
          fflush(stdin);
          scanf("%d",&choice);
    
         switch(choice){
            case 1:
            printf("Enter a value : ");
            scanf("%d",&val);
            push(val);
            break;
    
            case 2:
            val = pop();
            if(val != -1) printf("\nItem at top of the stack is : %d",val);
            break;
            
            case 3:
            printf("\nItem at TOS is : %d",peek());
            break;
    
            case 4:
            exit(1);
            break;
    
            default:
            printf("\nInvalid input");
            break;
         }
    
        }
    }
  `,
    output: `
    ****MENU******
    1.Push        
    2.Pop
    3.Peek        
    4.Exit        
    1
    Enter a value : 10
    
    ****MENU******
    1.Push        
    2.Pop
    3.Peek        
    4.Exit        
    1
    Enter a value : 20
    
    ****MENU******
    1.Push        
    2.Pop
    3.Peek        
    4.Exit        
    2
    
    Item at top of the stack is : 20
    ****MENU******
    1.Push
    2.Pop
    3.Peek
    4.Exit
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implementation of dynamic stack of strings",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node{
        char data;
        struct Node *next;
    };
    
    struct Node *top = NULL;
    
    void push(char val){
        if(top == NULL){
            top = (struct Node*)malloc(sizeof(struct Node));
            top->data = val;
            top->next = NULL;
            return;
        }
        struct Node *temp  = (struct Node*)malloc(sizeof(struct Node));
        if(temp == NULL){
            printf("Stack is Full!");
            return;
        }
        temp->data = val;
        temp->next = top;
        top = temp;
    }
    
    char pop(){
        if(top == NULL){
            printf("Stack is Empty!");
            return ' ';
        }
        char item = top->data;
        struct Node *temp = top;
        top = top->next;
        free(temp);
        return item;
    }
    
    char peek(){
        if(top == NULL){
        printf("Stack is Empty!");
        return ' ';
        }
        return top->data;
    }
    
    void main(){
        push('a');
        push('b');
        push('c');
       printf("%c ", pop());
    }
  `,
    output: `
    c
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Sort the stack using recursion",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    void bubbleSort(int row,int col,int arr[],int n){
      if(row > n-2) return;
      if(col > n-2-row) bubbleSort(row+1,0,arr,n);
      else {
      if(arr[col] < arr[col+1]){
        int temp = arr[col];
        arr[col] = arr[col+1];
        arr[col+1] = temp;
      }
      bubbleSort(row,col+1,arr,n);
      }
  }
  // Sort the stack using recursion.
  void sortStack(int stack[]){
      bubbleSort(0,0,stack,top+1);
  }
  
  void main(){
      push(5);
      push(2);
      push(4);
      push(3);
      push(1);
      sortStack(stack);
      printf("%d ",pop());
      printf("%d ",pop());
      printf("%d ",pop());
  
  }
  `,
    output: `
    1 2 3
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement 2 Stack using an array",
    code: `#include <stdio.h>
    #define MAX 10
    
    int stack[MAX];
    int top1 = -1;
    int top2 = MAX;
    int size = 0;
    
    // Implement 2 stack using an array
    int isEmpty(){
        if(size == 0) return 1;
        return 0;
    }
    int isFull(){
        if(size == MAX) return 1;
        return 0;
    }
    void push(int val,int stNum){
        if(isFull()){
            printf("Stack is Full!");
            return;
        }
        if(stNum == 1){
            stack[++top1] = val;
        }else if(stNum == 2){
            stack[--top2] = val;
        }else {
            printf("Enter valid stack no.!");
        }
        size++;
        return;
    }
    int pop(int stNum){
        if(isEmpty()){
            printf("Stack is Empty!");
            return __INT_MAX__;
        }
        int data;
        if(stNum == 1){
            data = stack[top1--];
        }else if(stNum == 2){
            data = stack[top2++];
        }else {
            printf("Enter valid stack no.!");
        }
        size--;
        return data;
    }
    int peek(int stNum){
        if(isEmpty()){
            printf("Stack is Empty!");
            return __INT_MAX__;
        }
        if(stNum == 1){
            return stack[top1];
        }else if(stNum == 2){
            return stack[top2];
        }else {
            printf("Enter valid stack no.!");
        }
    }
    
    
    void main(){
        push(10,1);
        push(20,1);
        push(50,2);
        push(60,2);
        printf("%d ",peek(1));
        printf("%d ",peek(2));
    }
  `,
    output: `
    20 60 
  `,
    type: "stack",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
];

questions.forEach((ques, indx) => {
  ques.id = indx + 1;
});

export { questions };
