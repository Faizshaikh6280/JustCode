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
    int leftMaxBound(int arr[],int leftBound[],int size){
        leftBound[0] = arr[0];
        int max = leftBound[0];
        for(int i = 1;i < size;i++){
            if(arr[i] > max){
                max = arr[i];
            }
            leftBound[i] = max;
        }
    }
    int rightMaxbound(int arr[],int rightBound[],int size){
        rightBound[size - 1] = arr[size - 1];
        int max = rightBound[size - 1];
        for(int i = size - 2;i >= 0;i--){
            if(arr[i] > max){
                max = arr[i];
            }
            rightBound[i] = max;
        }
    }
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
    questionName:
      "Create a dictionary with search create and delete operations.",
    code: `void dictionary(){
        char words[10][100];
        char meanings[10][100];
    
    
        char word[30],meaning[30];
        int i = 0;
        char choice;
        while(choice != '4'){
          printf("\n****MENU*****\n1.Create\n2.Delete\n3.Search\n4.Exit\n");
          fflush(stdin);
          choice = getchar();
          switch(choice){
            case '1':
            printf("Add a word : ");
            scanf("%s",word);
            printf("Add meaning of word : ");
            scanf("%s",meaning);
            strcpy(words[i],word);
            strcpy(meanings[i],meaning);
            i++;
            break;
            case '2':
            printf("\nEnter a word to be deleted: \n");
            char word[30];
            scanf("%s",word);
            int delIndx = -1;
            for(int i = 0; i < 10;i++){
                if(strcmp(words[i],word) == 0) {
                    delIndx = i;
                    break;
                }
            }
            if(delIndx == -1) {
                printf("Word does not exits!");
                break;
            }
            // left shifting elements.
            for(int i = delIndx;i < 9;i++){
                strcpy(words[i],words[i+1]);
                strcpy(meanings[i],meanings[i+1]);
            }
            i--;
            break;
            case '3':
            printf("Enter a word to be searched : ");
            scanf("%s",word);
            int indx = -1;
            for(int i = 0; i < 10;i++){
                if(strcmp(words[i],word) == 0) {
                    indx = i;
                    break;
                }
            }
            if(indx != -1) printf("\\n\ Meaning of the %s is : %s\\n\ ",word,meanings[indx]);
            else  printf("Word does not exits!");
            break;
          }
        }
    }
    
    void main(){
        dictionary();
    }   
    
    
  `,
    output: `****MENU*****
    1.Create     
    2.Delete     
    3.Search     
    4.Exit       
    1
    Add a word : apple
    Add meaning of word : saib
    
    ****MENU*****
    1.Create     
    2.Delete     
    3.Search     
    4.Exit       
    1
    Add a word : mango
    Add meaning of word : aam
    
    ****MENU*****
    1.Create     
    2.Delete     
    3.Search     
    4.Exit       
    3
    Enter a word to be searched : grapes
    Word does not exits!
    ****MENU*****       
    1.Create
    2.Delete
    3.Search
    4.Exit
    3
    Enter a word to be searched : chiko
    Word does not exits!
    ****MENU*****
    1.Create
    2.Delete
    3.Search
    4.Exit
    3
    Enter a word to be searched : mango
    
    Meaning of the mango is : aam
  `,
    type: "string",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName:
      "Count the no. of characters,words,spaces and lines in string",
    code: `#include <math.h>
    void main(){
      char str1[20],c;
      int indx = 0;
     while((c = getchar()) != ';'){
        str1[indx++] = c;
     }
      str1[indx] = '\0';
      int numChar = 0,numWord = 0,numSpace = 0,numlines = 0,j = 0;
      int i = 0;
      while(str1[i]){
          if(str1[i] != ' ' && str1[i] != 10) {
              numChar++;
              j++;
          }
          else{
              if(str1[i] != 10) numSpace++;
              if(numChar > 0){
              numWord++;
              numChar = 0;
              };
              
          };
          if(str1[i] == 10) numlines++;
          i++;
      }
      printf("Number of characters is : %d \n", j);
      printf("Number of Words is : %d \n", numWord+1);
      printf("Number of spaces is : %d \n", numSpace);
      printf("Number of lines is : %d \n", numlines+1);
  }   
  `,
    output: `hi faiz
    how     
    are 
    you;
    Number of characters is : 15 
    Number of Words is : 5       
    Number of spaces is : 1      
    Number of lines is : 4
  `,
    type: "string",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName: "Trim the spaces from both end",
    code: `#include <stdio.h>
    #include <string.h>
    void trimSpace(char str[]){
    
        int ch = 0,startSpace = 0,endSpace = 0;
        for(int i = 0; i < strlen(str);i++){
            if(str[i] == ' ' && ch == 0){
                startSpace++;
            }
            if(str[i] != ' '){
                ch++;
            }
        }
        int strCpy[strlen(str)];
        for(int i = 0; i < strlen(str);i++){
            if(str[i] == ' ' && i >= startSpace+ch){
                endSpace++;
            }
            strCpy[i] = str[i];
        }
        int actualString = strlen(str) - (startSpace+endSpace);
        int j = 0;
        for(int i=0;i < strlen(str);i++){
            if((strCpy[i] != ' ') || (strCpy[i] == ' ' && i > startSpace && i < actualString)){
                str[j] = strCpy[i];
                j++;
            }
        }
        str[j] = '\\0\';
    }
    
    void main(){
        char str[] = "   Faiz Alam   ";
        printf("Before->%s\\n\",str);
        trimSpace(str);
        printf("After->%s ",str);
    }   
        
  `,
    output: `Before->   Faiz Alam   
    After->Faiz Alam 
  `,
    type: "string",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \n Space Complexity is O(1)`,
  },
  {
    questionName:
      " ENTER THE STRING FROM USER AND CONVERT CHARACTERS INTO THEIR ASCII VALUES IN THE INTEGER ARRAY. [FOR EXAMPLE TAKE 10 CHARACTERS]",
    code: `#include <stdio.h>
    #include <string.h>
    void convertIntoAscii(char str[],int arr[],int n){
        for(int i = 0;i < n;i++){
            arr[i] = (int)str[i];
        }
    }
    void printArr(int arr[],int n){
        for(int i = 0; i < n;i++){
          printf("%d ",arr[i]);
      }
  }
  void main(){
      char str[50];
      printf("Enter a string : ");
      scanf("%s",str);
      int n = strlen(str);
      int arr[n];
      convertIntoAscii(str,arr,n);
      printArr(arr,n);
  }
  
  `,
    output: `Enter a string : faiz
    102 97 105 122 
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
    questionName:
      " ENTER THE STRING FROM USER AND SPLITS THE FIRST WORD AND SECOND WORD AND RETURN THE START INDEX OF THE SECOND WORD.",
    code: `int splitWord(char str[]){
        for(int i=0;i < strlen(str);i++){
            if(i >= 1 && str[i] == ' '){
                return i+1;
            }
        }
    }
    void main(){
        char str[50];
        printf("Enter a string : ");
        gets(str);
        printf("%d",splitWord(str));
    }
    
    
  `,
    output: `Enter a string : faiz alam
    5
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
    questionName: "convert into char to string (for example take 10 character)",
    code: `#include <conio.h>
    void charToString(){
        char ch;
        int choice;
        char str[11];
        int i = 0;
        while(i < 10){
            printf("\\n\ 1.Add charachter\\n\ 2.Exit\\n\");
            scanf("%d",&choice);
            if(choice == 1){
              printf("\\n\Enter a character : \\n\");
              ch = getche();
              str[i++] = ch;
            }
            else if(choice == 2){
                break;
            }
            else {
                printf("\\n\Invalid choice");
            }
        }
        str[i] = '\0';
        printf("Your character string is : %s",str);
    }
    
    void main(){
    
        charToString();
    }   
    
    
  `,
    output: `1.Add charahter
    2.Exit
    1
    
    Enter a character : 
    a
    1.Add charahter
    2.Exit
    1
    
    Enter a character : 
    b
    1.Add charahter
    2.Exit
    
    1
    
    Enter a character : 
    c
    1.Add charahter
    2.Exit
    
    2
    Your character string is : abc   
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
    questionName:
      "DISPLAY THE STRING ON THE OUTPUT SCREEN BUT ASK THE TEXT ALIGNMENT OPTION GIVEN BY THE USER (1 FOR LEFT, 2 FOR CENTER, 3 RIGHT)",
    code: `
    void centerText(char *text, int fieldWidth) {
        int padlen = (fieldWidth - strlen(text)) / 2;
        printf("|");
        printf("%*s%s%*s", padlen, "", text, padlen, "");
        printf("|\\n\ ");
    
    } 
    void rightAlign(char *text,int fieldWidth){
        int spaces = (fieldWidth - strlen(text));
        printf("|");
        printf("%*s",spaces,text);
        printf("|\\n\ ");
    
    }
    void textAlignment(){
        int choice;
        int fieldWidth;
        char str[] = "hello world";
        while(1){
          printf("\\n\ ---Select your choice---\\n\ 1.Left Align\\n\ 2.Center align\\n\ 3.Right align\\n\ 4.exit\\n\ ");
          scanf("%d",&choice);
          if(choice == 1){
            printf("\\n\ %s",str);
          }else if(choice == 2){
            printf("\\n\ Enter field wdth");
            scanf("%d",&fieldWidth);
            centerText(str,fieldWidth);
          }else if(choice == 3){
            printf("\\n\ Enter field wdth");
            scanf("%d",&fieldWidth);
            rightAlign(str,fieldWidth);
          }else if(choice == 4){
            break;
          }else {
            printf("\\n\ Invalid choice!");
          }
    
        }
    }
    void main(){
        textAlignment();
    }
    
    
  `,
    output: `---Select your choice---
    1.Left Align
    2.Center align
    3.Right align
    4.exit
    3
    
    Enter field wdth10
    |hello world|
    
    ---Select your choice---
    1.Left Align
    2.Center align
    3.Right align
    4.exit
    3
    
    Enter field wdth50
    |                            hello world|
    
    ---Select your choice---
    1.Left Align
    2.Center align
    3.Right align
    4.exit
    2
    
    Enter field wdth20
    |    hello world    |   
    
    ---Select your choice---
    1.Left Align
    2.Center align
    3.Right align
    4.exit
    3
    
  `,
    type: "string",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\  Space Complexity is O(1)`,
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
    difficulty: "hard",
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
    difficulty: "hard",
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
    difficulty: "hard",
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
    difficulty: "hard",
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
  {
    questionName:
      "IMPLEMENT THE OPERATIONS OF DOUBLE ENDED QUEUE IN AN STRING ARRAY (INSERT, DELETE, PEEK, ISEMPTY, ISFULL)",
    code: `#include <stdio.h>
    #define MAX 5
    int front = -1;
    int rear = -1;
    int size = 0;
    int queue[MAX];
    
    void enque(int val){
        if(size == MAX){
            printf("Queue is Full!");
            return;
        }
        size++;
        if(front == -1 && rear == -1){
            //adding first time
            front = rear = 0;
            queue[rear] = val;
            return;
        }
        rear++;
        queue[rear] = val;
    }
    
    int deque(){
        if(size == 0) {
            printf("Queue is Empty!");
            return __INT16_MAX__;
        }
        if(size == 1){
            int val = queue[front];
            front = rear = -1;
            return val;
        }
        //shifting items towards left.
        int val = queue[front];
        for(int i = front+1; i <= rear;i++){
            queue[i-1] = queue[i];
        }
        rear--;
        size--;
        return val;
    }
    
    void display(){
        if(size == 0) {
         printf("Queue is Empty!");
         return ;
        }
        for(int i = front; i <= rear;i++){
            printf("%d ",queue[i]);
        }
    }
    
    int peek(){
         if(size == 0) {
            printf("Queue is Empty!");
            return __INT16_MAX__;
        }
        return queue[front];
    }
    
    void main(){
         enque(10);
         enque(20);
         enque(30);
         enque(40);
         enque(50);
         deque();
         display();
    }
  `,
    output: `
    20 30 40 50 
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement a dynamic  doubly ended queue of string",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    struct Node {
        char data[100];
        struct Node *next;
    };
    
    struct Node *front = NULL,*rear = NULL;
    
    void addLast(char str[]){
        if(rear == NULL){
            rear = (struct Node*)malloc((sizeof(struct Node)));
            strcpy(rear->data,str);
            rear->next = NULL;
            front = rear;
            return;
        }
        struct Node *temp = (struct Node*)malloc((sizeof(struct Node)));
        if(temp == NULL){
            printf("Queue if FULL!");
            return;
        }
        strcpy(temp->data,str);
        temp->next = NULL;
        rear->next = temp;
        rear = temp;
    }
    void addFirst(char str[]){
         if(rear == NULL){
            rear = (struct Node*)malloc((sizeof(struct Node)));
             strcpy(rear->data,str);
            rear->next = NULL;
            front = rear;
            return;
        }
        struct Node *temp = (struct Node*)malloc((sizeof(struct Node)));
        if(temp == NULL){
            printf("Queue if FULL!");
            return;
        }
         strcpy(rear->data,str);
         temp->next = front;
         front = temp;
    }
    
    char* removeFirst(){
        if(front == NULL){
            printf("Queue is Empty!");
            return NULL;
        }
        char val[100];
        strcpy(val,front->data);
        struct Node *temp = front;
        front = front->next;
        free(temp);
        return val;
    }
    
    char* removeLast(){
        if(front == NULL){
            printf("Queue is Empty!");
            return NULL;
        }
        char val[100];
        strcpy(val,front->data);
        struct Node *temp = front;
        while(temp->next !=NULL && temp->next->next != NULL){
            temp = temp->next;
        }
        temp->next = NULL;
        rear = temp;
        return val;
    }
    
    char* getFirst(){
        if(front == NULL){
            printf("Queue is Empty!");
            return NULL;
        }
        return front->data; 
    }
    char* getLast(){
        if(front == NULL){
            printf("Queue is Empty!");
            return NULL;
        }
        return rear->data; 
    }
    void display(){
        if(front == NULL) return;
        struct Node *temp = front;
        while(temp!=NULL){
            printf("%s ",temp->data);
            temp = temp->next;
        }
    }
    void main(){
        addFirst("India is");
        addLast("best country");
        addLast("It's our pleasure to live here");
        display();
        removeFirst();
        removeLast();
        printf("\\n\");
        display();
    
    }
  `,
    output: `
    India is best country It's our pleasure to live here 
    best country
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Priority queue of integer using array",
    code: `#include <stdio.h>
    #define MAX 10
    int size = 0;
    int queue[MAX];
    int priority[MAX];
    
    void rightShift(int index){
        for(int j = size - 1;j >= index;j--){
            queue[j+1] = queue[j];
        }
        for(int j = size-1;j >= index;j--){
            priority[j+1] = priority[j];
        }
    }
    int isEmpty(){
        if(size == 0) return 1;
        return 0;
    }
    int isFull(){
        if(size == MAX) return 1;
        return 0;
    }
    void add(int val,int pri){
        if(size >= MAX ){
            printf("Queue is Full!");
            return;
        }
        if(size == 0){
            queue[0] = val;
            priority[0] = pri;
            size++;
            return;
        }
        for(int j = 0;j < MAX;j++){
            if(priority[j] > pri){
                rightShift(j);
                queue[j] = val;
                priority[j] = pri;
                break;
            }else {
                // empty slot.
                if(priority[j] == -1){
                    queue[j] = val;
                    priority[j] = pri;
                    break;
                }
            }
        }
        size++;
        return;
    }
    void leftShift(){
        for(int i = 1;i < size;i++){
            queue[i-1] = queue[i];
            priority[i-1] = priority[i];
        }
    }
    int delete(){
        if(size == 0){
            printf("Queue is Empty!");
            return -1;
        }
        int val = queue[0];
        leftShift();
        size--;
        return val;
    }
    int peek(){
        if(size == 0){
            printf("Queue is Empty!");
            return -1;
        }
        return queue[0];
    }
    void display(){
        for(int i = 0;i < MAX;i++) printf("%d ",queue[i]);
        printf("\n");
    }
    
    void main(){
        for(int i = 0;i < MAX;i++){
        priority[i] = -1;
        }
        add(10,5);
        add(20,7);
        add(30,8);
        add(40,2);
        add(50,3);
        add(60,1);
        add(70,0);
        add(80,4);
        delete();
        delete();
        delete();
        display();
    }
  `,
    output: `
    50 80 10 20 30 
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "IMPLEMENT THE OPERATIONS OF CIRCULAR QUEUE IN AN STRING ARRAY (INSERT, DELETE, PEEK, ISEMPTY, ISFULL)",
    code: `#include <stdio.h>
    #include <string.h>
    #define MAX 5
    
    int front = -1;
    int rear = -1;
    int size = 0;
    char queue[MAX][100];
    
    void enque(char str[]){
        if(front == 0 && rear == MAX-1 || front == rear+1){
            printf("\nQueue is Full!\n");
            return;
        }else if(rear == -1){
            front = rear = 0;
        }else rear = (rear+1)%MAX;
        strcpy(queue[rear],str);
    }
    
    char* deque(){
        if(front == -1){
            printf("\nQueue is Empty!\n");
            return NULL;
        }
        char val[100];
         strcpy(val,queue[front]);
        if(front == rear){
          front = rear = -1;
          return &val[0];
        }
        front = (front+1)%MAX;
        return &val[0];
    }
    char* peek(){
        if(front == -1){
            return NULL;
        }
        return queue[front];
    }
    
    void display(){
      if(front == rear){
        if(front != -1){
            printf("%d",queue[front]);
        }
        printf("Queue is Empty");
        return;
      }
      int i = front;
      while(i != rear){
        printf("%s ",queue[i]);
        i = (i+1)%MAX;
      }
      printf("%s",queue[rear]);
    }
    
    int isFull(){
        if(size == MAX){
            return 1;
        }
        return 0;
    }
    
    int isEmpty(){
        if(size == 0) {
            return 1;
        }
        return 0;
    }
    
    void main(){
        enque("hello");
        enque("faiz");
        enque("how are you?");
        enque("I'm fine bro");
        display();
        deque();
        printf("\\n\");
        display();
    }
  `,
    output: `
    hello faiz how are you? I'm fine bro
    faiz how are you? I'm fine bro      
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement Dynamic Integer queue",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node {
        int data;
        struct Node *next;
    };
    
    struct Node *front = NULL,*rear = NULL;
    
    void add(int val){
        if(rear == NULL){
            rear = (struct Node*)malloc((sizeof(struct Node)));
            rear->data = val;
            rear->next = NULL;
            front = rear;
            return;
        }
        struct Node *temp = (struct Node*)malloc((sizeof(struct Node)));
        if(temp == NULL){
            printf("Queue if FULL!");
            return;
        }
        temp->data = val;
        temp->next = NULL;
        rear->next = temp;
        rear = temp;
    }
    
    int remove1(){
        if(front == NULL){
            printf("Queue is Empty!");
            return -1;
        }
        int val = front->data;
        struct Node *temp = front;
        front = front->next;
        free(temp);
        return val;
    }
    
    int peek(){
        if(front == NULL){
            printf("Queue is Empty!");
            return -1;
        }
        return front->data; 
    }
    
    void main(){
        add(10);
        add(20);
        add(30);
        printf("%d",remove1());
    
    }
  `,
    output: `
    10
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement Circular Integer queue",
    code: `#include <stdio.h>
    #define MAX 5
    
    int front = -1;
    int rear = -1;
    int size = 0;
    int queue[MAX];
    
    void enque(int val){
        if(front == 0 && rear == MAX-1 || front == rear+1){
            printf("\nQueue is Full!\n");
            return;
        }else if(rear == -1){
            front = rear = 0;
        }else rear = (rear+1)%MAX;
        queue[rear] = val;
    }
    
    int deque(){
        if(front == -1){
            printf("\nQueue is Empty!\n");
            return -1;
        }
        int val = queue[front];
        if(front == rear){
            front = rear = -1;
            return val;
        }
        front = (front+1)%MAX;
        return val;
    }
    int peek(){
        if(front == -1){
            return -1;
        }
        return queue[front];
    }
    
    void display(){
      if(front == rear){
        if(front != -1){
            printf("%d",queue[front]);
        }
        printf("Queue is Empty");
        return;
      }
      int i = front;
      while(i != rear){
        printf("%d ",queue[i]);
        i = (i+1)%MAX;
      }
      printf("%d",queue[rear]);
    }
    
    int isFull(){
        if(size == MAX){
            return 1;
        }
        return 0;
    }
    
    int isEmpty(){
        if(size == 0) {
            return 1;
        }
        return 0;
    }
    
    void main(){
        enque(10);
        enque(20);
        enque(30);
        enque(40);
        deque();
        display();
    }
  `,
    output: `
    20 30 40
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement doubly ended Integer queue",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node {
        int data;
        struct Node *next;
    };
    
    struct Node *front = NULL,*rear = NULL;
    
    void addLast(int val){
        if(rear == NULL){
            rear = (struct Node*)malloc((sizeof(struct Node)));
            rear->data = val;
            rear->next = NULL;
            front = rear;
            return;
        }
        struct Node *temp = (struct Node*)malloc((sizeof(struct Node)));
        if(temp == NULL){
            printf("Queue if FULL!");
            return;
        }
        temp->data = val;
        temp->next = NULL;
        rear->next = temp;
        rear = temp;
    }
    void addFirst(int val){
         if(rear == NULL){
            rear = (struct Node*)malloc((sizeof(struct Node)));
            rear->data = val;
            rear->next = NULL;
            front = rear;
            return;
        }
        struct Node *temp = (struct Node*)malloc((sizeof(struct Node)));
        if(temp == NULL){
            printf("Queue if FULL!");
            return;
        }
         temp->data = val;
         temp->next = front;
         front = temp;
    }
    
    int removeFirst(){
        if(front == NULL){
            printf("Queue is Empty!");
            return -1;
        }
        int val = front->data;
        struct Node *temp = front;
        front = front->next;
        free(temp);
        return val;
    }
    int removeLast(){
        if(front == NULL){
            printf("Queue is Empty!");
            return -1;
        }
        int val = rear->data;
        struct Node *temp = front;
        while(temp->next !=NULL && temp->next->next != NULL){
            temp = temp->next;
        }
        temp->next = NULL;
        rear = temp;
        return val;
    }
    
    int getFirst(){
        if(front == NULL){
            printf("Queue is Empty!");
            return -1;
        }
        return front->data; 
    }
    int getLast(){
        if(front == NULL){
            printf("Queue is Empty!");
            return -1;
        }
        return rear->data; 
    }
    void display(){
        if(front == NULL) return;
        struct Node *temp = front;
        while(temp!=NULL){
            printf("%d ",temp->data);
            temp = temp->next;
        }
    }
    void main(){
        addLast(10);
        addLast(20);
        addFirst(5);
        addFirst(2);
        addLast(30);
        removeLast();
        display();
        // printf("%d",removeFirst());
    
    }
  `,
    output: `
    2 5 10 20 
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement a priority queue of string using array",
    code: `#include <stdio.h>
    #include <string.h>
    #define MAX 10
    int size = 0;
    char queue[MAX][100];
    int priority[MAX];
    
    void rightShift(int index){
        for(int j = size - 1;j >= index;j--){
            strcpy(queue[j+1],queue[j]);
        }
        for(int j = size-1;j >= index;j--){
            priority[j+1] = priority[j];
        }
    }
    int isEmpty(){
        if(size == 0) return 1;
        return 0;
    }
    int isFull(){
        if(size == MAX) return 1;
        return 0;
    }
    void add(char val[],int pri){
        if(size >= MAX ){
            printf("Queue is Full!");
            return;
        }
        if(size == 0){
            strcpy(queue[0],val);
            priority[0] = pri;
            size++;
            return;
        }
        for(int j = 0;j < MAX;j++){
            if(priority[j] > pri){
                rightShift(j);
                 strcpy(queue[j],val);
                priority[j] = pri;
                break;
            }else {
                // empty slot.
                if(priority[j] == -1){
                    strcpy(queue[j],val);
                    priority[j] = pri;
                    break;
                }
            }
        }
        size++;
        return;
    }
    void leftShift(){
        for(int i = 1;i < size;i++){
           strcpy(queue[i-1],queue[i]);
            priority[i-1] = priority[i];
        }
    }
    char* delete(){
        if(size == 0){
            printf("Queue is Empty!");
            return NULL;
        }
        char *val = queue[0];
        leftShift();
        size--;
        return val;
    }
    char* peek(){
        if(size == 0){
            printf("Queue is Empty!");
            return NULL;
        }
        return queue[0];
    }
    void display(){
        for(int i = 0;i < size;i++) printf("%s ",queue[i]);
        printf("\n");
    }
    
    void main(){
        for(int i = 0;i < MAX;i++){
        priority[i] = -1;
        }
        add("by",40);
        add("faiz",30);
        add("hi",1);
        add("hmm,",0);
        delete();
        display();
    }
  `,
    output: `
    hi faiz by 
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement a priority queue of integer dynamically",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node{
        int data;
        int priority;
        struct Node *next;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(int val,int pri){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            head->data = val;
            head->priority = pri;
            tail = head;
            tail->next = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = val;
        newNode->priority = pri;
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    void insertLast(int val,int pri){
        if(head == NULL){
           insertFirst(val,pri);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = val;
        newNode->priority = pri;
        newNode->next = NULL;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(int val,int pri,int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(val,pri);
            return;
        }
         if(pos == size){
           insertLast(val,pri);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        newNode->data = val;
        newNode->data = pri;
        newNode->next = prev->next;
        prev->next = newNode;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    int deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        int data = head->data;
        if(size == 1){
            head = tail = NULL;
            size--;
            return data;
        }
        head = head->next;
        size--;
        return data;
    }
    int deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        if(size == 1){
            return deleteFirst();
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        int data = tail->data;
        prev->next = NULL;
        tail = prev;
        size--;
        return data;
    }
    int deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return -1;
        }
        if(pos == 1) {
            return deleteFirst();
        }
        if(pos == size){
            return deleteLast();
        }
        if(pos > size){
            printf("Invalid pos!");
            return -1;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        if(temp != NULL && temp->next != NULL){
            int data = temp->next->data;
            temp->next = temp->next->next;
            return data;
        }
        return -1;
    }
    
    void display(){
        struct Node *temp = head;
        while(temp != NULL){
            printf("%d->",temp->data);
            temp = temp->next;
        }
        printf("null");
    }
    
    
    void add(int val,int pri){
        if(size == 0){
            insertFirst(val,pri);
            return;
        }
        int i = 1;
        struct Node *temp = head;
        while(temp != NULL){
            if(temp->priority > pri){
                insertInMiddle(val,pri,i);
                break;
              }
              i++;
              temp = temp->next;
        }
        if(temp == NULL){
            insertLast(val,pri);
        }
    }
    
    int delete(){
      return deleteFirst();
    }
    void main(){
        add(10,5);
        add(50,10);
        add(50,0);
        add(60,3);
        add(80,2);;
        add(90,80);
        display();
    }
  `,
    output: `
    50->80->2->3->10->50->null
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement a priority queue string dynamically",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    struct Node{
        char data[100];
        int priority;
        struct Node *next;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(char val[],int pri){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            strcpy(head->data,val);
            head->priority = pri;
            tail = head;
            tail->next = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        strcpy(newNode->data,val);
        newNode->priority = pri;
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    void insertLast(char val[],int pri){
        if(head == NULL){
           insertFirst(val,pri);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        strcpy(newNode->data,val);
        newNode->priority = pri;
        newNode->next = NULL;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(char val[],int pri,int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(val,pri);
            return;
        }
         if(pos == size){
           insertLast(val,pri);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        strcpy(newNode->data,val);
        newNode->priority = pri;
        newNode->next = prev->next;
        prev->next = newNode;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    char* deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return NULL;
        }
        char *data = head->data;
        if(size == 1){
            head = tail = NULL;
            size--;
            return data;
        }
        head = head->next;
        size--;
        return data;
    }
    
    
    void display(){
        struct Node *temp = head;
        while(temp != NULL){
            printf("%s->",temp->data);
            temp = temp->next;
        }
        printf("null");
    }
    
    
    void add(char val[],int pri){
        if(size == 0){
            insertFirst(val,pri);
            return;
        }
        int i = 1;
        struct Node *temp = head;
        while(temp != NULL){
            if(temp->priority > pri){
                insertInMiddle(val,pri,i);
                break;
              }
              i++;
              temp = temp->next;
        }
        if(temp == NULL){
            insertLast(val,pri);
        }
    }
    
    char* delete(){
      return deleteFirst();
    }
    char *peek(){
        return head->data;
    }
    void main(){
        add("by",5);
        add("faiz",2);
        add("hello!",1);
        add("hmm",0);
        delete();
        display();
    }
  `,
    output: `
    hello!->faiz->by->null
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Next greater element",
    code: `//Next greater element
    void nextGreater(int arr[],int ans[],int n){
        int i,j = n-1;
        for(i = n-1; i >=0;i--){
            while(isEmptySt() == 0 && peek() <= arr[i]){
                pop();
            }
            if(isEmptySt()) ans[j--] = -1;
            else {
                ans[j--] = peek();
            };
            push(arr[i]);
        }
    }
    
    //Queue reversal
    void main(){
       int arr[] = {6,8,1,0,1,3};
       int ans[6];
       nextGreater(arr,ans,6);
       for(int i = 0; i< 6;i++){
        printf("%d ",ans[i]);
       }
    }
  `,
    output: `
    8 -1 3 1 3 -1 
  `,
    type: "Stack",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Rottan oranges",
    code: `#include <stdio.h>
    #include <stdlib.h>
    struct NodeQ {
        int data[2];
        struct NodeQ *next;
    };
    struct NodeQ *front = NULL,*rear = NULL;
    int sizeQ = 0;
    void add(int val[]){
        if(rear == NULL){
            rear = (struct NodeQ*)malloc((sizeof(struct NodeQ)));
            rear->data[0] = val[0];
            rear->data[1] = val[1];
            front = rear;
            sizeQ++;
            return;
        }
        struct NodeQ *temp = (struct NodeQ*)malloc((sizeof(struct NodeQ)));
        if(temp == NULL){
            printf("Queue if FULL!");
            return;
        }
        temp->data[0] = val[0];
        temp->data[1] = val[1];
        temp->next = NULL;
        rear->next = temp;
        rear = temp;
        sizeQ++;
    }
    
    int* remove1(){
        if(sizeQ == 0){
            printf("Queue is Empty!");
            return NULL;
        }
        int *val = &(front->data)[0];
        struct NodeQ *temp = front;
        front = front->next;
        free(temp);
        sizeQ--;
        return val;
    }
    
    int* peek1(){
        if(sizeQ == 0){
            printf("Queue is Empty!");
            return NULL;
        }
        return &(front->data)[0]; 
    }
    void displayQ(){
        if(front == NULL) return;
        struct NodeQ *temp = front;
        while(temp != NULL){
            printf("%d ",temp->data);
            temp = temp->next;
        }
    }
    
    int isEmptyQ(){
     if(front == NULL) return 1;
     return 0;
    }
 
    int rottanOrange(int mat[][3],int n){
        // putting all rottan orange in queue.
        for(int i = 0; i < n;i++){
            for(int j = 0; j < n;j++){
                if(mat[i][j] == 2) {
                    int arr[] = {i,j};
                    add(arr);
                }
            }
        }
        struct NodeQ *track = front;
        int temp[] = {-1,-1};
        int time = 0;
        add(temp);
    
        while(track != NULL){
          int r = (track->data)[0];
          int c = (track->data)[1];
        //   printf("[%d,%d] ",r,c);
          track = track->next;
          // queue empty condition
          if(r == -1 && c == -1 && track == NULL){
            break;
          }else if(r == -1 && c == -1 && track != NULL){
            time++;
            int temp[] = {-1,-1};
            add(temp);
          }
          // rooting all four sides.
          //up
          if(r > 0 && mat[r-1][c] == 1){
            mat[r-1][c] = 2;
            int arr[] = {r-1,c};
            add(arr);
          }
          // down
          if(r < n-1 && mat[r+1][c] == 1){
            mat[r+1][c] = 2;
            int arr[] = {r+1,c};
            add(arr);
          }
          // left
          if(c > 0  && mat[r][c-1] == 1){
            mat[r][c-1] = 2;
            int arr[] = {r,c-1};
            add(arr);
          }
          // right
          if(c < n-1  && mat[r][c+1] == 1){
            mat[r][c+1] = 2;
            int arr[] = {r,c+1};
            add(arr);
          }
        }
        return time;
    }
    
    void display(){
        struct NodeQ *temp = front;
        do{
        printf("[%d,%d] ",(temp->data)[0],(temp->data)[1]);
        temp = temp->next;
        }while(temp  != NULL);
    }
    void main(){
        int mat[][3] = {
            {0,1,2},
            {0,1,2},
            {2,1,1}
        };
        printf("Total unit time is  to rote all oranges is : %d\n",rottanOrange(mat,3));
    }
  `,
    output: `
    Total unit time is  to rote all oranges is : 1
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Next smaller element",
    code: `//Next Smaller element
    void nextSmaller(int arr[],int ans[],int n){
        int i,j = n-1;
        for(i = n-1; i >=0;i--){
            while(isEmptySt() == 0 && peek() >= arr[i]){
                pop();
            }
            if(isEmptySt()) ans[j--] = -1;
            else {
                ans[j--] = peek();
            };
            push(arr[i]);
        }
    }
    
    void main(){
       int arr[] = {6,8,1,0,1,3};
       int ans[6];
       nextSmaller(arr,ans,6);
       for(int i = 0; i< 6;i++){
        printf("%d ",ans[i]);
       }
    }
  `,
    output: `
    1 1 0 -1 -1 -1  
  `,
    type: "Stack",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "First non-repeating characther in a stream",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    #define MAX 20
    int front = -1;
    int rear = -1;
    int size = 0;
    char queue[MAX];
    
    void enqueue(char val){
        if(size == MAX){
            printf("Queue is Full!");
            return;
        }
        size++;
        if(front == -1 && rear == -1){
            //enqueueing first time
            front = rear = 0;
            queue[rear] = val;
            return;
        }
        rear++;
        queue[rear] = val;
    }
    
    char dequeue(){
        if(size == 0) {
            printf("Queue is Empty!");
            return ' ';
        }
        if(size == 1){
            char val = queue[front];
            front = rear = -1;
            size = 0;
            return val;
        }
        //shifting items towards left.
        char val = queue[front];
        for(int i = front+1; i <= rear;i++){
            queue[i-1] = queue[i];
        }
        rear--;
        size--;
        return val;
    }
    
    void display(){
        if(size == 0) {
         printf("Queue is Empty!");
         return ;
        }
        for(int i = front; i <= rear;i++){
            printf("%c ",queue[i]);
        }
    }
    
    char peek(){
         if(size == 0) {
            printf("Queue is Empty!");
            return ' ';
        }
        return queue[front];
    }
    int isEmpty(){
        if(size == 0){
            return 1;
        }
        return 0;
    }
    
    void firstNonRepeating(char str[],int n){
        int freq[26];
        for(int i = 0;i < 26;i++){
            freq[i] = 0;
        }
        for(int i = 0;i < n-1;i++){
          freq[str[i] - 'a']++;
          enqueue(str[i]);
          while(isEmpty() == 0 && freq[peek() - 'a'] > 1){
            dequeue();
          }
          if(isEmpty()) printf("-1 ");
          else printf("%c ",peek());
        }
    }
    
    void main(){
        char str[] = "aabbxxc";
        firstNonRepeating(str,strlen(str));
    
    }
  `,
    output: `
    a -1 b -1 x -1 
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      " IMPLEMENT THE OPERATIONS OF SIMPLE QUEUE IN AN STRING ARRAY (INSERT, DELETE, PEEK, ISEMPTY, ISFULL)",
    code: `#include <stdio.h>
    #include <string.h>
    #define MAX 10
    int front = -1;
    int rear = -1;
    int size = 0;
    char queue[MAX][100];
    
    void enque(char str[]){
        if(size == MAX){
            printf("Queue is Full!");
            return;
        }
        size++;
        if(front == -1 && rear == -1){
            //adding first time
            front = rear = 0;
            strcpy(queue[rear],str);
            return;
        }
        rear++;
        strcpy(queue[rear],str);
    }
    
    char* deque(){
        if(size == 0) {
            printf("Queue is Empty!");
            return NULL;
        }
        char val[100];
        if(size == 1){
            strcpy(val,queue[front]);
            queue[front];
            front = rear = -1;
            return &val[0];
        }
        //shifting items towards left.
         strcpy(val,queue[front]);
        for(int i = front+1; i <= rear;i++){
            strcpy(queue[i-1],queue[i]);
        }
        rear--;
        size--;
        return &val[0];
    }
    
    void display(){
        if(size == 0) {
         printf("Queue is Empty!");
         return ;
        }
        for(int i = front; i <= rear;i++){
            printf("%s ",queue[i]);
        }
    }
    
    char* peek(){
         if(size == 0) {
            printf("Queue is Empty!");
            return NULL;
        }
        return queue[front];
    }
    int isEmpty(){
        if(size == 0) return 1;
        return 0;
    }
    int isFull(){
        if(size == MAX) return 1;
        return 0;
    }
    
    
    void main(){
        enque("Hello");
        enque("faiz");
        enque("How are you ?");
        display();    
        dequeue();
        printf("\\n\");
        display();
    }
  `,
    output: `
    Hello faiz How are you ? 
    faiz How are you ?
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Reverse first k elements of a queue",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    #define MAX 20
    int front = -1;
    int rear = -1;
    int size = 0;
    char queue[MAX];
    
    void enqueue(char val){
        if(size == MAX){
            printf("Queue is Full!");
            return;
        }
        size++;
        if(front == -1 && rear == -1){
            //enqueueing first time
            front = rear = 0;
            queue[rear] = val;
            return;
        }
        rear++;
        queue[rear] = val;
    }
    
    char dequeue(){
        if(size == 0) {
            printf("Queue is Empty!");
            return ' ';
        }
        if(size == 1){
            char val = queue[front];
            front = rear = -1;
            size = 0;
            return val;
        }
        //shifting items towards left.
        char val = queue[front];
        for(int i = front+1; i <= rear;i++){
            queue[i-1] = queue[i];
        }
        rear--;
        size--;
        return val;
    }
    
    void display(){
        if(size == 0) {
         printf("Queue is Empty!");
         return ;
        }
        for(int i = front; i <= rear;i++){
            printf("%c ",queue[i]);
        }
    }
    
    char peek(){
         if(size == 0) {
            printf("Queue is Empty!");
            return ' ';
        }
        return queue[front];
    }
    int isEmpty(){
        if(size == 0){
            return 1;
        }
        return 0;
    }
    
    void reverseFirstK(int k,int size){
      int i = 0;
      int arr[k];
      while(i < k){
          arr[i] = remove1();
          i++;
      }
      for(int j = k-1;j >=0;j--){
          add(arr[j]);
      }
      for(int j=1;j <= size-k;j++){
          add(remove1());
      }
  }
    
    void main(){
       add(1);
       add(2);
       add(3);
       add(4);
       add(5);
       displayQ();
       reverseFirstK(3);
       printf("\\n\");
       displayQ();
    }
  `,
    output: `
    1 2 3 4 5 
    3 2 1 4 5 
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Reverse the queue",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    #define MAX 20
    int front = -1;
    int rear = -1;
    int size = 0;
    char queue[MAX];
    
    void enqueue(char val){
        if(size == MAX){
            printf("Queue is Full!");
            return;
        }
        size++;
        if(front == -1 && rear == -1){
            //enqueueing first time
            front = rear = 0;
            queue[rear] = val;
            return;
        }
        rear++;
        queue[rear] = val;
    }
    
    char dequeue(){
        if(size == 0) {
            printf("Queue is Empty!");
            return ' ';
        }
        if(size == 1){
            char val = queue[front];
            front = rear = -1;
            size = 0;
            return val;
        }
        //shifting items towards left.
        char val = queue[front];
        for(int i = front+1; i <= rear;i++){
            queue[i-1] = queue[i];
        }
        rear--;
        size--;
        return val;
    }
    
    void display(){
        if(size == 0) {
         printf("Queue is Empty!");
         return ;
        }
        for(int i = front; i <= rear;i++){
            printf("%c ",queue[i]);
        }
    }
    
    char peek(){
         if(size == 0) {
            printf("Queue is Empty!");
            return ' ';
        }
        return queue[front];
    }
    int isEmpty(){
        if(size == 0){
            return 1;
        }
        return 0;
    }
    
    // Reverse first K elements of a queue
    void reverseQueue(int size){
        int i = 0;
        int arr[size];
        while(i < size){
            arr[i] = deque();
            i++;
        }
        for(int j = size-1;j >=0;j--){
            enque(arr[j]);
        }
    }
    
    void main(){
       enque(1);
       enque(2);
       enque(3);
       enque(4);
       enque(5);
    
       display();
       reverseQueue(size);
       printf("\n");
       display();
    }
  `,
    output: `
    1 2 3 4 5 
    5 4 3 2 1 
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "IMPLEMENT THE OPERATIONS OF QUEUE DYNAMICALLY OF STRING (INSERT, DELETE, PEEK, ISEMPTY, ISFULL)",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    struct Node {
        char data[100];
        struct Node *next;
    };
    
    struct Node *front = NULL,*rear = NULL;
    int size = 0;
    int isEmpty(){
        if(size == 0) return 1;
        return 0;
    }
    void display(){
        struct Node *temp = front;
        while(temp != NULL){
            printf("%s ",temp->data);
            temp = temp->next;
        }
    }
    void add(char str[]){
        if(rear == NULL){
            rear = (struct Node*)malloc((sizeof(struct Node)));
            strcpy(rear->data,str);
            rear->next = NULL;
            front = rear;
            size++;
            return;
        }
        struct Node *temp = (struct Node*)malloc((sizeof(struct Node)));
        if(temp == NULL){
            printf("Queue if FULL!");
            return;
        }
        strcpy(temp->data,str);
        temp->next = NULL;
        rear->next = temp;
        rear = temp;
        size++;
    }
    
    char* remove1(){
        if(size == 0){
            printf("Queue is Empty!");
            return NULL;
        }
        char val[100];
        strcpy(val,front->data);
        struct Node *temp = front;
        front = front->next;
        free(temp);
        size--;
        return &val[0];
    }
    
    char* peek(){
        if(front == NULL){
            printf("Queue is Empty!");
            return NULL;
        }
        return &(front->data)[0]; 
    }
    
    
    
    void main(){
        add("hello");
        add("world");
        display();
        remove1();
        printf("\n");
        display();
    }
  `,
    output: `
    hello world 
    world
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Find a tour that visits all the stations",
    code: `#include <stdio.h>
    #include <stdlib.h>
    struct NodeQ {
        int data[2];
        int indx;
        struct NodeQ *next;
    };
    struct NodeQ *front = NULL,*rear = NULL;
    int sizeQ = 0;
    void add(int val[]){
        if(rear == NULL){
            rear = (struct NodeQ*)malloc((sizeof(struct NodeQ)));
            rear->data[0] = val[0];
            rear->data[1] = val[1];
            rear->data[2] = val[2];
            rear->next = NULL;
            front = rear;
            sizeQ++;
            return;
        }
        struct NodeQ *temp = (struct NodeQ*)malloc((sizeof(struct NodeQ)));
        if(temp == NULL){
            printf("Queue is FULL!");
            return;
        }
        temp->data[0] = val[0];
        temp->data[1] = val[1];
        temp->data[2] = val[2];
        temp->next = front;
        rear->next = temp;
        rear = temp;
        sizeQ++;
    }
    
    int* removeQ(){
        if(sizeQ == 0){
            printf("Queue is Empty!");
            return NULL;
        }
        int *val = &((front->data)[0]);
        struct NodeQ *temp = front;
        front = front->next;
        free(temp);
        sizeQ--;
        return val;
    }
    
    int* peekQ(){
        if(sizeQ == 0){
            printf("Queue is Empty!");
            return NULL;
        }
        return &(front->data)[0]; 
    }
    
    
    int isEmptyQ(){
     if(sizeQ) return 1;
     return 0;
    }
    
    int tour(int petrol[],int distance[]){
        for(int i = 0; i < 4;i++){
            int arr[]= {petrol[i],distance[i],i};
            add(arr);
        }
        struct NodeQ *start;
        rear = front;
        start = front;
        int bal = 0;
        do{
         int curPet = (rear->data)[0];
         int curdist = (rear->data)[1];
         bal += curPet - curdist;
         if(bal >= 0){
            rear = rear->next;
         }else {
            front = rear->next;
            start = front;
         }
         if(front == rear){
            break;
         }
        }while(rear != front);
        return (start->data)[2];
    }
    void display(){
        struct NodeQ *temp = front;
        do{
        printf("[%d,%d] ",(temp->data)[0],(temp->data)[1]);
        temp = temp->next;
        }while(temp  != front);
    }
    void main(){
        int petrol[] = {4,6,7,4};
        int distance[] = {6,5,3,5};
        printf("Circular tour can be started from petrol pupm %d.",tour(petrol,distance));
    }
  `,
    output: `Circular tour can be started from petrol pupm 1.
  `,
    type: "queue",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Longest Valid substring",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    int longestValidString(char str[]){
      int count = 0;
      int max = 0;
      for(int i = 0;i < strlen(str);i++){
          char ch = str[i];
          if(ch == '('){
              push(ch);
          }else {
              if((isEmpty() == 0) && (peek() == '(')){
                  pop();
                  count += 2;
              }else {
                  max = getMax(max,count);
                  count = 0;
              }
          }
      }
      max = getMax(max,count);
      return max;
  }  
  `,
    output: `6
  `,
    type: "Stack",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Linear Search using iteration",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    int linearSearch(int arr[],int n,int key){
      for(int i = 0;i < n;i++){
          if(arr[i] == key) return i;
      }
      return -1;
  }
  }  
  void main(){
    int arr[] = {4,5,2,1,3};
    printf("%d ",linearSearch(arr,5,5));
}
  `,
    output: `1
  `,
    type: "searching",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Linear Search using recursion",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    int linearSearchRec(int arr[],int n,int key,int i){
      if(i == n){
          return -1;
      }
      if(arr[i] == key) return i;
  
      return linearSearchRec(arr,n,key,i + 1);
  }
  
  void main(){
      int arr[] = {4,5,2,1,3};
      printf("%d ",linearSearchRec(arr,5,3,0));
  }
  `,
    output: `4 
  `,
    type: "searching",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Binary Search using iteration",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    int binarySearch(int arr[],int n,int key){
      int s = 0;
      int e = n-1;
      while(s < e){
          int mid = (s+e)/2;
          if(arr[mid] == key) return mid;
          else if(arr[mid] > key){
              e = mid - 1;
          }else s = mid + 1;
      }
      return -1;
  }
  `,
    output: `4 
  `,
    type: "searching",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Binary Search using recursion",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    int binarySearchRec(int arr[],int key,int s,int e){
      if(s > e) return -1;
      int mid = (s+e)/2;
      if(arr[mid] == key) return mid;
      if(arr[mid] > key){
          return binarySearchRec(arr,key,s,mid - 1);
      }else {
          return binarySearchRec(arr,key,mid + 1,e);
      }
  }
  `,
    output: `4 
  `,
    type: "searching",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Bubble sort using iteration",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    void bubbleSort(int arr[],int n){
      for(int i = 0;i<n-1;i++){
          for(int j = 0;j<n-1-i;j++){
              if(arr[j] > arr[j+1]){
                  int temp = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = temp;
              }
          }
      }
  }
  int arr[] = {4,5,2,1,3};
    bubbleSort(arr,5);
    printArray(arr,5);
  `,
    output: `1 2 3 4 5 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Bubble sort using recursion",
    code: `void buubleSortRe(int arr[],int r,int c,int n){
        if(r < n-1){
          if(c < n-1-r){
              if(arr[c] > arr[c+1]){
                  int temp = arr[c];
                  arr[c] = arr[c+1];
                  arr[c+1] = temp;
              }
              buubleSortRe(arr,r,c+1,n);
          }else {
              buubleSortRe(arr,r+1,0,n);
          }
        }
      }
      void main(){
          int arr[] = {5,4,2,3,1};
          buubleSortRe(arr,0,0,5);
          printArray(arr,5);
      }
  `,
    output: `1 2 3 4 5 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Selection sort using recursion",
    code: `void selectionSortRe(int arr[],int r,int c,int n,int min){
        if(r >= n-1) return;
        if(c < n){
            if(arr[c] < arr[min]){
                min = c;
            }
            selectionSortRe(arr,r,c+1,n,min);
        }else {
            int temp = arr[r];
            arr[r] = arr[min];
            arr[min] = temp;
            r = r+1;
            c = r+1;
            min = r;
            selectionSortRe(arr,r,c,n,min);
        }
    }
  `,
    output: `1 2 3 4 5 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Selection sort using iteration",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    void selectionSort(int arr[],int n){
      for(int i = 0;i < n-1;i++){
          int min = i;
          for(int j = i;j < n;j++){
              if(arr[j] < arr[min]) min = j;
          }
          int temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
      }
  }
  void main(){
    int arr[] = {4,5,2,1,3};
    selectionSort(arr,5);
    printArray(arr,5);
}
  `,
    output: `1 2 3 4 5 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Inserting sort using recursion",
    code: `void insertionSortRec(int arr[],int c,int n){
        if(c >= n) return;
        int cur = arr[c];
          int prev = c-1;
            while(prev >=0 && arr[prev] > cur){
                arr[prev + 1] = arr[prev];
                prev--;
            }
        arr[prev+1] = cur;
        insertionSortRec(arr,c+1,n);
    }
    void main(){
        int arr[] = {5,4,2,3,1};
        insertionSortRec(arr,0,5);
        printArray(arr,5);
    }
  `,
    output: `1 2 3 4 5 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Inserting sort using iteration",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    vvoid insertionSort(int arr[],int n){
      for(int i = 0; i < n;i++){
          int cur = arr[i];
          int prev = i-1;
          while(prev >=0 && arr[prev] > cur){
              arr[prev + 1] = arr[prev];
              prev--;
          }
          arr[prev+1] = cur;
      }
  }
  int arr[] = {4,5,2,1,3};
    insertionSort(arr,5);
    printArray(arr,5);
  `,
    output: `1 2 3 4 5 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Merge sort using recursion",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    //8. Merge Sort
void merge(int arr[],int s,int m,int e){
    int temp[e-s+1];
    int  i = s,j = m+1,k = 0;

    while(i <= m && j <= e){
        if(arr[i] < arr[j]){
            temp[k] = arr[i];
            i++;
        }else {
            temp[k] = arr[j];
            j++;
        }
        k++;
    }
    while(i <= m){
            temp[k] = arr[i];
            i++;
            k++;
    }
     while(j <= e){
        temp[k] = arr[j];
        j++;
        k++;
    }
    for(int i = 0; i < (e-s+1);i++){
        arr[s+i] = temp[i];
    }
}
void mergeSort(int arr[],int s,int e){
    if(s >= e) return;
    int mid = (s+e)/2;
    mergeSort(arr,s,mid);
    mergeSort(arr,mid+1,e);
    merge(arr,s,mid,e);
}

// Print array
void printArray(int arr[],int n){
    for(int i = 0;i < n;i++){
        printf("%d ",arr[i]);
    }
}

void main(){
    int arr[] = {4,5,2,1,3};
    mergeSort(arr,0,4);
    printArray(arr,5);
}
  `,
    output: `1 2 3 4 5 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Merge sort using recursion for string",
    code: `void merge(char arr[],int s,int m,int e){
        char temp[e-s+1];
        int  i = s,j = m+1,k = 0;
    
        while(i <= m && j <= e){
            if(arr[i] < arr[j]){
                temp[k] = arr[i];
                i++;
            }else {
                temp[k] = arr[j];
                j++;
            }
            k++;
        }
        while(i <= m){
                temp[k] = arr[i];
                i++;
                k++;
        }
         while(j <= e){
            temp[k] = arr[j];
            j++;
            k++;
        }
        for(int i = 0; i < (e-s+1);i++){
            arr[s+i] = temp[i];
        }
    }
    
    void mergeSort(char arr[],int s,int e){
        if(s >= e) return;
        int mid = (s+e)/2;
        mergeSort(arr,s,mid);
        mergeSort(arr,mid+1,e);
        merge(arr,s,mid,e);
    }
// Print array
void printArray(int arr[],int n){
    for(int i = 0;i < n;i++){
        printf("%d ",arr[i]);
    }
}

void main(){
    char arr[] = "zaif";
    mergeSort(arr,0,4);
    printString(arr,5);
}
  `,
    output: ` a f i z 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Quick sort using recursion",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    int partition(int arr[],int s,int e){
      int pivot = arr[e];
      // used to make space for element less than pivot element
      int i = s - 1;
      for(int j = s;j <= e;j++){
          if(arr[j] < pivot){
              i++;
              int temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  
      i++;
      int temp = pivot;
      arr[e] = arr[i];
      arr[i] = temp;
      return i;
  }
  
  void quickSort(int arr[],int s,int e){
      if(s >= e) return;
      int pivot = partition(arr,s,e);
  
      // sort for left part
      quickSort(arr,s,pivot - 1);
      quickSort(arr,pivot+1,e);
  }
  
  void main(){
      int arr[] = {4,5,2,1,3};
      quickSort(arr,0,4);
      printArray(arr,5);
  }
  `,
    output: `1 2 3 4 5 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Quick sort for string using recursion",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    int partition(char arr[],int s,int e){
      char pivot = arr[e];
      // used to make space for element less than pivot element
      int i = s - 1;
      for(int j = s;j <= e;j++){
          if(strcpm(arr[j],pivot) == -1){
              i++;
              int temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
      i++;
      int temp = pivot;
      arr[e] = arr[i];
      arr[i] = temp;
      return i;
  }
  
  void quickSort(char arr[],int s,int e){
      if(s >= e) return;
      int pivot = partition(arr,s,e);
  
      // sort for left part
      quickSort(arr,s,pivot - 1);
      quickSort(arr,pivot+1,e);
  }
  
  void main(){
      char arr[] = "faiz";
      quickSort(arr,0,4);
      printArray(arr,5);
  }
  
  `,
    output: ` a f i z 
  `,
    type: "sorting",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Sum of matrix",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
// sum of two matrix
void sumOfMatrix(int a[][3],int b[][3],int ans[][3],int rows,int cols){
    for(int i = 0;i < rows;i++){
        for(int j = 0;j < cols;j++){
            ans[i][j] = a[i][j] + b[i][j];
        }
    }
}

void printMatrix(int mat[][3],int rows,int cols){
      for(int i = 0;i < rows;i++){
        for(int j = 0;j < cols;j++){
            printf(" %d ",mat[i][j]);
        }
        printf("\n");
    }
}

void main(){

    int a[][3] = {
        {1,2,3},
        {4,5,6},
        {7,8,9,}
    };
    int b[][3] = {
        {1,2,3},
        {4,5,6},
        {7,8,9,}
    };
    int ans[3][3];
    sumOfMatrix(a,b,ans,3,3);
    printMatrix(ans,3,3);
}
  `,
    output: `
    2  4  6    
    8  10  12  
    14  16  18 
  `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Multiply of matrix",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    void printMatrix(int mat[][3],int rows,int cols){
      for(int i = 0;i < rows;i++){
        for(int j = 0;j < cols;j++){
            printf(" %d ",mat[i][j]);
        }
        printf("\n");
    }
}
// multiply of two matrix
void multiplyMatrix(int a[][3],int b[][3],int ans[][3],int rows,int cols){
    if(rows != cols) return;
      for(int i = 0;i < rows;i++){
        for(int j = 0;j < cols;j++){
            for(int k = 0; k < rows;k++){
                ans[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

void main(){

    int a[][3] = {
        {1,2,3},
        {4,5,6},
        {7,8,9,}
    };
    int b[][3] = {
        {1,2,3},
        {4,5,6},
        {7,8,9,}
    };
    int ans[3][3];
    for(int i = 0;i < 3;i++){
        for(int j = 0;j < 3;j++){
           ans[i][j] = 0;
        }
    }
    multiplyMatrix(a,b,ans,3,3);
    printMatrix(ans,3,3);
}
  `,
    output: `
    30  36  42    
    66  81  96    
    102  126  150 
  `,
    type: "array",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "subtraction of matrix",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    void subOfMatrix(int a[][3],int b[][3],int ans[][3],int rows,int cols){
      for(int i = 0;i < rows;i++){
          for(int j = 0;j < cols;j++){
              ans[i][j] = a[i][j] - b[i][j];
          }
      }
  }
  
  
  void main(){
  
      int a[][3] = {
          {1,2,3},
          {4,5,6},
          {7,8,9,}
      };
      int b[][3] = {
          {1,2,3},
          {4,5,6},
          {7,8,9,}
      };
      int ans[3][3];
      for(int i = 0;i < 3;i++){
          for(int j = 0;j < 3;j++){
             ans[i][j] = 0;
          }
      }
      subOfMatrix(a,b,ans,3,3);
      printMatrix(ans,3,3);
  }
  `,
    output: `
    0  0  0 
    0  0  0 
    0  0  0 
  `,
    type: "array",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Tic Tac Toe game",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
    char checkWinner(char board[][3]){
        // checking for all possibilties to win a game.
        // check for first row.
        if(board[0][0] == board[0][1] && board[0][1] == board[0][2]){
            return board[0][0];
        }
        // check for 2nd row.
        if(board[1][0] == board[1][1] && board[1][1] == board[1][2]){
            return board[1][0];
        }
        // check for 3rd row.
        if(board[2][0] == board[2][1] && board[2][1] == board[2][2]){
            return board[2][0];
        }
        // check for 1st col
        if(board[0][0] == board[1][0] && board[1][0] == board[2][0]){
            return board[0][0];
        }
        // check for 2nd col
        if(board[0][1] == board[1][1] && board[1][1] == board[2][1]){
            return board[0][1];
        }
        // check for 3rd col
        if(board[0][2] == board[1][2] && board[1][2] == board[2][2]){
            return board[0][2];
        }
        // check for diagonal left to right
        if(board[0][0] == board[1][1] && board[1][1] == board[2][2]){
            return board[0][0];
        }
        // check for diagonal right to left
        if(board[0][1] == board[1][1] && board[1][1] == board[2][0]){
            return board[0][1];
        }
        return '#';
    }
    
    void printBoard(char board[][3]){
          for(int i = 0;i < 3;i++){
            for(int j = 0;j < 3;j++){
                printf("%c | ",board[i][j]);
            }
            printf("\n------------\n");
        }
    }
    
    void main(){
        char board[3][3] = {
            {'1','2','3'},
            {'4','5','6'},
            {'7','8','9'},
        };
        int move = 0;
        char curPlayer;
        char choice;
        int r = -1,c = -1;
      
        while(1){
          curPlayer = move%2 == 0 ? 'X' : '0';
          printf("\n");
          printBoard(board);
          printf("\nCurrent player is -> %c \n",curPlayer);
          printf("Enter your position : ");
          choice = getchar();
          if(choice >= '1' && choice <= '9'){
            move++;
            switch(choice){
                case '1':
                r = 0;
                c = 0;
                break;
                case '2':
                r = 0;
                c = 1;
                break;
                case '3':
                r = 0;
                c = 2;
                break;
                case '4':
                r = 1;
                c = 0;
                break;
                case '5':
                r = 1;
                c = 1;
                break;
                case '6':
                r = 1;
                c = 2;
                break;
                case '7':
                r = 2;
                c = 0;
                break;
                case '8':
                r = 2;
                c = 1;
                break;            
                default: 
                r = 2;
                c = 2;
            }
            if(board[r][c] == 'X' || board [r][c] == '0'){
                move--;
                printf("position already marked! Try another");
                continue;
            }else {
                board[r][c] = curPlayer;
                fflush(stdin);
                if(checkWinner(board) == 'X') {
                    printf("Horray! Player X has won.");
                    break;
                }else if(checkWinner(board) == '0'){
                    printf("Horray! Player 0 has won.");
                    break;
                }else continue;
            }
          }else {
            printf("\nInvalid position!\n");
          }
        }
    }
  `,
    output: `
    1 | 2 | 3 |
    ------------
    4 | 5 | 6 |
    ------------
    7 | 8 | 9 |
    ------------
    
    Current player is -> X 
    Enter your position : 9
    
    1 | 2 | 3 |
    ------------
    4 | 5 | 6 |
    ------------
    7 | 8 | X |
    ------------
    
    Current player is -> 0 
    Enter your position : 8
    
    1 | 2 | 3 |
    ------------
    4 | 5 | 6 |
    ------------
    7 | 0 | X |
    ------------
    
    Current player is -> X 
    Enter your position : 5
    
    1 | 2 | 3 | 
    ------------
    4 | X | 6 | 
    ------------
    7 | 0 | X | 
    ------------
    
    Current player is -> 0
    Enter your position : 4
    
    1 | 2 | 3 |
    ------------
    0 | X | 6 |
    ------------
    7 | 0 | X |
    ------------
    
    Current player is -> X
    Enter your position : 1
    Horray! Player X has won.
  `,
    type: "array",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Insert a node at beggining in a linkedlist",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
    void insertFirst(int val){
      if(head == NULL){
          head = (struct Node*)malloc(sizeof(struct Node));
          head->data = val;
          tail = head;
          tail->next = NULL;
          size++;
          return;
      }
      struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
      newNode->data = val;
      newNode->next = head;
      head = newNode;
      size++;
  }
  void main(){
    insertFirst(10);
    insertLast(5);
    insertLast(4);
    insertLast(3);
    insertLast(2);
    insertLast(1);
    // sortList();
    // insertInMiddle(25,3);
    // deleteInMiddle(3);
    display();
  `,
    output: `
    10->5->4->3->2->1->
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "IMPLEMENT THE POLYNOMIAL MANIPULATION ADDING OPERATION",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <math.h>
    
    struct Node{
        int coffe;
        int pow;
        struct Node *next;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(int val,int pow){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            head->coffe = val;
            head->pow = pow;
            tail = head;
            tail->next = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    void insertLast(int val,int pow){
        if(head == NULL){
           insertFirst(val,pow);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = NULL;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(int val,int pow,int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(val,pow);
            return;
        }
         if(pos == size){
           insertLast(val,pow);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = prev->next;
        prev->next = newNode;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    int deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        int coffe = head->coffe;
        if(size == 1){
            head = tail = NULL;
            size--;
            return coffe;
        }
        head = head->next;
        size--;
        return coffe;
    }
    
    int deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        if(size == 1){
            return deleteFirst();
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        int coffe = tail->coffe;
        prev->next = NULL;
        tail = prev;
        size--;
        return coffe;
    }
    
    int deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return -1;
        }
        if(pos == 1) {
            return deleteFirst();
        }
        if(pos == size){
            return deleteLast();
        }
        if(pos > size){
            printf("Invalid pos!");
            return -1;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        if(temp != NULL && temp->next != NULL){
            int coffe = temp->next->coffe;
            temp->next = temp->next->next;
            return coffe;
        }
        return -1;
    }

    int getSum(int x){
        int sum = 0;
        struct Node *temp = head;
        while(temp != NULL){
            sum += temp->coffe * pow(x,temp->pow);
            temp = temp->next;
        }
        return sum;
    }
    
    void main(){
        insertLast(2,2);
        insertLast(3,1);
        insertLast(5,0);

        printf("Sum of polynomial is : %d",getSum(2));
    }
  `,
    output: `
    Sum of polynomial is : 19
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "IMPLEMENT THE POLYNOMIAL MANIPULATION SUBTRACTION OPERATION",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <math.h>
    
    struct Node{
        int coffe;
        int pow;
        struct Node *next;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(int val,int pow){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            head->coffe = val;
            head->pow = pow;
            tail = head;
            tail->next = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    void insertLast(int val,int pow){
        if(head == NULL){
           insertFirst(val,pow);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = NULL;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(int val,int pow,int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(val,pow);
            return;
        }
         if(pos == size){
           insertLast(val,pow);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = prev->next;
        prev->next = newNode;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    int deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        int coffe = head->coffe;
        if(size == 1){
            head = tail = NULL;
            size--;
            return coffe;
        }
        head = head->next;
        size--;
        return coffe;
    }
    
    int deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        if(size == 1){
            return deleteFirst();
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        int coffe = tail->coffe;
        prev->next = NULL;
        tail = prev;
        size--;
        return coffe;
    }
    
    int deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return -1;
        }
        if(pos == 1) {
            return deleteFirst();
        }
        if(pos == size){
            return deleteLast();
        }
        if(pos > size){
            printf("Invalid pos!");
            return -1;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        if(temp != NULL && temp->next != NULL){
            int coffe = temp->next->coffe;
            temp->next = temp->next->next;
            return coffe;
        }
        return -1;
    }
    
    void display(char var){
        struct Node *temp = head;
        while(temp != NULL){
            printf("(%d%c^%d) + ",temp->coffe,var,temp->pow);
            temp = temp->next;
        }
        printf("0");
    }
    
    

    
    int calcEqn(int x){
        int sum = 0;
        struct Node *temp = head;
        sum += temp->coffe * pow(x,temp->pow);
        temp = temp->next;
        while(temp != NULL){
            sum -= temp->coffe * pow(x,temp->pow);
            temp = temp->next;
        }
        return sum;
    }
    
    void main(){
        insertLast(2,2);
        insertLast(3,1);
        insertLast(-5,0);
        display('x');
        printf("\nAns of polynomial is : %d",calcEqn(2));
    }
  `,
    output: `
    (2x^2) + (3x^1) + (-5x^0) + 0
     Ans of polynomial is : 7
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "IMPLEMENT THE POLYNOMIAL MANIPULATION MULTIPLICATION  OPERATION",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <math.h>
    
    struct Node{
        int coffe;
        int pow;
        struct Node *next;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(int val,int pow){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            head->coffe = val;
            head->pow = pow;
            tail = head;
            tail->next = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    void insertLast(int val,int pow){
        if(head == NULL){
           insertFirst(val,pow);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = NULL;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(int val,int pow,int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(val,pow);
            return;
        }
         if(pos == size){
           insertLast(val,pow);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        newNode->coffe = val;
        newNode->pow = pow;
        newNode->next = prev->next;
        prev->next = newNode;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    int deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        int coffe = head->coffe;
        if(size == 1){
            head = tail = NULL;
            size--;
            return coffe;
        }
        head = head->next;
        size--;
        return coffe;
    }
    
    int deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        if(size == 1){
            return deleteFirst();
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        int coffe = tail->coffe;
        prev->next = NULL;
        tail = prev;
        size--;
        return coffe;
    }
    
    int deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return -1;
        }
        if(pos == 1) {
            return deleteFirst();
        }
        if(pos == size){
            return deleteLast();
        }
        if(pos > size){
            printf("Invalid pos!");
            return -1;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        if(temp != NULL && temp->next != NULL){
            int coffe = temp->next->coffe;
            temp->next = temp->next->next;
            return coffe;
        }
        return -1;
    }
    
    void display(char var){
        struct Node *temp = head;
        while(temp != NULL){
            printf("(%d%c^%d) + ",temp->coffe,var,temp->pow);
            temp = temp->next;
        }
        printf("0");
    }
    
    

    
    int calcEqn(int x){
        int sum = 0;
        struct Node *temp = head;
        sum += temp->coffe * pow(x,temp->pow);
        temp = temp->next;
        while(temp != NULL){
            sum *= temp->coffe * pow(x,temp->pow);
            temp = temp->next;
        }
        return sum;
    }
    
    void main(){
        insertLast(2,2);
        insertLast(3,1);
        insertLast(-5,0);
        printf("\nAns of polynomial is : %d",calcEqn(2));
    }
  `,
    output: `
    Ans of polynomial is : -240  
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Insert a node at last in a linkedlist",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
    void insertLast(int val){
      if(head == NULL){
         insertFirst(val);
          return;
      }
      struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
      newNode->data = val;
      newNode->next = NULL;
      tail->next = newNode;
      tail = newNode;
      size++;
  }
  void main(){
    insertFirst(10);
    insertLast(5);
    insertLast(4);
    insertLast(3);
    insertLast(2);
    insertLast(1);
    // sortList();
    // insertInMiddle(25,3);
    // deleteInMiddle(3);
    display();
  `,
    output: `
    10->5->4->3->2->1->
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Insert a node in between in a linkedlist",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
    void insertInMiddle(int val,int pos){
      if(pos == 0) {
          printf("Invalid pos");
          return;
      }
      if(pos == 1){
          insertFirst(val);
          return;
      }
       if(pos == size){
         insertLast(val);
         return;
      }
  
      if(pos > size+1){
          printf("Invalid pos");
          return;
      }
      struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
      if(newNode !=  NULL){
        struct Node *prev = head;
          for(int i = 1; i < pos-1;i++){
          prev = prev->next;
      }
      newNode->data = val;
      newNode->next = prev->next;
      prev->next = newNode;
      size++;
      }else {
          printf("LinkedList is Full!");
      }
     
  }
  void main(){
    insertFirst(10);
    insertLast(5);
    insertLast(4);
    insertLast(3);
    insertLast(2);
    insertLast(1);
    // sortList();
    // insertInMiddle(25,3);
    // deleteInMiddle(3);
    display();
  `,
    output: `
    10->5->25->4->3->2->1->
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Delete a node at begginng in a linkedlist",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
    int deleteFirst(){
      if(size == 0){
          printf("List is Empty!");
          return -1;
      }
      int data = head->data;
      if(size == 1){
          head = tail = NULL;
          size--;
          return data;
      }
      head = head->next;
      size--;
      return data;
  }
  void main(){
    insertFirst(10);
    insertFirst(20);
    insertFirst(30);
    // insertLast(5);
    // insertLast(4);
    // insertLast(3);
    // insertLast(2);
    // insertLast(1);
    deleteFirst();
    // sortList();
    // insertInMiddle(25,3);
    // deleteInMiddle(3);
    display();
}
  `,
    output: `
    20->10->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Delete a node at last in a linkedlist",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
    int deleteLast(){
      if(size == 0){
         printf("List is Empty!");
         return -1;
     }
     if(size == 1){
         return deleteFirst();
     }
     struct Node *prev = head;
     while(prev->next != tail){
         prev = prev->next;
     }
     int data = tail->data;
     prev->next = NULL;
     tail = prev;
     size--;
     return data;
 }
 void main(){
  insertFirst(10);
  insertFirst(20);
  insertFirst(30);
  // insertLast(5);
  // insertLast(4);
  // insertLast(3);
  // insertLast(2);
  // insertLast(1);
  // deleteFirst();
  deleteLast();
  // sortList();
  // insertInMiddle(25,3);
  // deleteInMiddle(3);
  display();
}
  `,
    output: `
    30->20->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Delete a node in between in a linkedlist",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
  }


  int deleteInMiddle(int pos){
      if(pos == 0) {
          printf("Invalid pos!");
          return -1;
      }
      if(pos == 1) {
          return deleteFirst();
      }
      if(pos == size){
          return deleteLast();
      }
      if(pos > size){
          printf("Invalid pos!");
          return -1;
      }
      struct Node *temp = head;
  
      for(int i = 1; i < pos - 1;i++){
          temp = temp->next;
      }
      if(temp != NULL && temp->next != NULL){
          int data = temp->data;
          temp->next = temp->next->next;
          return data;
      }
      return -1;
  }
  
  void main(){
    insertFirst(10);
    insertFirst(20);
    insertFirst(30);
    insertFirst(40);

    // deleteLast();
    // sortList();
    // insertInMiddle(25,3);
    deleteInMiddle(3);
    display();
}
  `,
    output: `
    40->30->10->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Search a node in a linkedlist",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
  }


  int search(int key){
    if(size == 0){
        printf("List is Empty!");
        return -1; 
    }
    int indx = 0;
    struct Node *temp = head;
    while(temp != NULL){
        if(temp->data == key){
            return indx;
        }
        temp = temp->next;
        indx++;
    }
    return -1;
}

  
void main(){
  insertFirst(10);
  insertFirst(20);
  insertFirst(30);
  insertFirst(40);
  printf("Found at indx %d \\n\",search(20));
  // deleteLast();
  // sortList();
  // insertInMiddle(25,3);
  display();
}
  `,
    output: `
    Found at indx 2 
    40->30->20->10->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement Integer doubly Linkedlist with all operations",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node{
        int data;
        struct Node *next;
        struct Node *prev;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(int val){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            head->data = val;
            tail = head;
            tail->next = NULL;
            head->prev = NULL;
            tail->prev = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = val;
        newNode->next = head;
        newNode->prev = NULL;
        head = newNode;
        size++;
    }
    
    void insertLast(int val){
        if(head == NULL){
           insertFirst(val);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = val;
        newNode->next = NULL;
        newNode->prev = tail;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(int val,int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(val);
            return;
        }
         if(pos == size){
           insertLast(val);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        newNode->data = val;
        newNode->next = prev->next;
        prev->next->prev = newNode;
        prev->next = newNode;
        newNode->prev = prev;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    int deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        int data = head->data;
        if(size == 1){
            head = tail = NULL;
            size--;
            return data;
        }
        head = head->next;
        head->prev = NULL;
        size--;
        return data;
    }
    int deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        if(size == 1){
            return deleteFirst();
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        int data = tail->data;
        prev->next = NULL;
        tail = prev;
        size--;
        return data;
    }
    
    int search(int key){
        if(size == 0){
            printf("List is Empty!");
            return -1; 
        }
        int indx = 0;
        struct Node *temp = head;
        while(temp != NULL){
            if(temp->data == key){
                return indx;
            }
            temp = temp->next;
            indx++;
        }
        return -1;
    }
    
    
    void sortList(){
        if(size == 0 || size == 1) return;
        for(int i = 0; i < size-1;i++){
            struct Node *cur = head;
            for(int j = 0;j < size - 1 - i;j++){
                if(cur->next != NULL){
                    if(cur->data > cur->next->data){
                        int t = cur->data;
                        cur->data = cur->next->data;
                        cur->next->data = t;
                    }
                }
                cur = cur->next;
            }
        }
    }
    
    int deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return -1;
        }
        if(pos == 1) {
            return deleteFirst();
        }
        if(pos == size){
            return deleteLast();
        }
        if(pos > size){
            printf("Invalid pos!");
            return -1;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        if(temp != NULL && temp->next != NULL){
            int data = temp->data;
            temp->next = temp->next->next;
            temp->next->next->prev = temp;
            return data;
        }
        return -1;
    }
    
    void display(){
        struct Node *temp = head;
        while(temp != NULL){
            printf("%d<->",temp->data);
            temp = temp->next;
        }
        printf("null");
    }
    
    void main(){
        insertFirst(10);
        insertFirst(20);
        insertFirst(30);
        insertFirst(40);
        insertInMiddle(25,3);
        deleteInMiddle(3);
        display();
    }
  `,
    output: `
    40<->30<->20<->10<->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Sort a linkedlist",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
  }


  void sortList(){
    if(size == 0 || size == 1) return;
    for(int i = 0; i < size-1;i++){
        struct Node *cur = head;
        for(int j = 0;j < size - 1 - i;j++){
            if(cur->next != NULL){
                if(cur->data > cur->next->data){
                    int t = cur->data;
                    cur->data = cur->next->data;
                    cur->next->data = t;
                }
            }
            cur = cur->next;
        }
    }
}
  

void main(){
  insertFirst(10);
  insertFirst(20);
  insertFirst(30);
  insertFirst(40);
  insertInMiddle(25,3);
  sortList();
  display();
}
  `,
    output: `
    10->20->25->30->40->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Soring  a String linkedlist ",
    code: `#include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    #include <stdio.h>
    #include <stdlib.h>
    
   
  }


  void sortList(){
    if(size == 0 || size == 1) return;
    for(int i = 0; i < size-1;i++){
        struct Node *cur = head;
        for(int j = 0;j < size - 1 - i;j++){
            if(strcmp(cur->data , cur->next->data) > 0){
                    char temp[100];
                    strcpy(temp,cur->data);
                    strcpy(cur->data,cur->next->data);
                    strcpy(cur->next->data,temp);
                }
            cur = cur->next;
        }
    }
}
  

void main(){
  insertFirst("you");
  insertFirst("are");
  insertFirst("how");
  insertLast("Faiz");
  insertInMiddle("?",4);
  display();
  printf("\n");
 sortList();
  display();

}
  `,
    output: `
    how->are->you->Faiz->?->null
    ?->Faiz->are->how->you->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement a doubly circular linkedlist with all operations",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    struct Node{
        char data[100];
        struct Node *next;
        struct Node *prev;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(char str[]){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            strcpy(head->data,str);
            tail = head;
            tail->next = NULL;
            head->prev = tail;
            tail->prev = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        printf("%s\n",str);
        strcpy(newNode->data,str);
        newNode->next = head;
        newNode->prev = tail;
        head = newNode;
        size++;
    }
    
    void insertLast(char str[]){
        if(head == NULL){
           insertFirst(str);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        strcpy(newNode->data,str);
        newNode->next = head;
        newNode->prev = tail;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(char str[],int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(str);
            return;
        }
         if(pos == size){
           insertLast(str);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        strcpy(newNode->data,str);
        newNode->next = prev->next;
        prev->next->prev = newNode;
        prev->next = newNode;
        newNode->prev = prev;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    void deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return;
        }
        if(size == 1){
            head = tail = NULL;
            size--;
            return;
        }
        head = head->next;
        head->prev = tail;
        size--;
    }
    void deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return;
        }
        if(size == 1){
            deleteFirst();
            return;
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        prev->next = head;
        tail = prev;
        size--;
    }
    
    int search(char str[]){
        if(size == 0){
            printf("List is Empty!");
            return -1; 
        }
        int indx = 0;
        struct Node *temp = head;
        while(temp != NULL){
            if(strcmp(temp->data,str) == 0){
                return indx;
            }
            temp = temp->next;
            indx++;
        }
        return -1;
    }
    
    
    void sortList(){
        if(size == 0 || size == 1) return;
        for(int i = 0; i < size-1;i++){
            struct Node *cur = head;
            for(int j = 0;j < size - 1 - i;j++){
                if(cur->next != NULL){
                    if(strcmp(cur->data , cur->next->data) > 0){
                        char temp[100];
                        strcpy(temp,cur->data);
                        strcpy(cur->data,cur->next->data);
                        strcpy( cur->next->data,temp);
                    }
                }
                cur = cur->next;
            }
        }
    }
    
    void deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return;
        }
        if(pos == 1) {
            return deleteFirst();
        }
        if(pos == size){
            deleteLast();
            return ;
        }
        if(pos > size){
            printf("Invalid pos!");
            return ;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        
        if(temp != NULL && temp->next != NULL){
            temp->next = temp->next->next;
            temp->next->next->prev = temp;
        }
    }
    
    void display(){
        struct Node *temp = head;
        while(temp->next != head){
            printf("%s<->",temp->data);
            temp = temp->next;
        }
        printf("%s<->",tail->data);
        printf("null");
    }
    
    void main(){
        insertLast("Hello");
        insertLast("Faiz");
        insertLast("what's");
        insertLast("your");
        insertLast("plan");
        insertLast("today?");
        deleteFirst();
        deleteLast();
        display();
    }
  `,
    output: `
    Faiz<->what's<->your<->plan<->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement a string singly linkedlist with all operations",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    struct Node{
        char data[100];
        struct Node *next;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(char str[]){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            strcpy(head->data,str);
            tail = head;
            tail->next = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        strcpy(newNode->data,str);
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    void insertLast(char str[]){
        if(head == NULL){
           insertFirst(str);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        strcpy(newNode->data,str);
        newNode->next = NULL;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(char str[],int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(str);
            return;
        }
         if(pos == size){
           insertLast(str);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
         strcpy(newNode->data,str);
        newNode->next = prev->next;
        prev->next = newNode;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    void deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return;
        }
        if(size == 1){
            head = tail = NULL;
            size--;
            return ;
        }
        head = head->next;
        size--;
        return ;
    }
    void deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return;
        }
        if(size == 1){
            deleteFirst();
            return;
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        prev->next = NULL;
        tail = prev;
        size--;
        return;
    }
    
    int search(char str[]){
        if(size == 0){
            printf("List is Empty!");
            return -1; 
        }
        int indx = 0;
        struct Node *temp = head;
        while(temp != NULL){
            if(strcmp(temp->data,str) == 0){
                return indx;
            }
            temp = temp->next;
            indx++;
        }
        return -1;
    }
    
    
    void sortList(){
        if(size == 0 || size == 1) return;
        for(int i = 0; i < size-1;i++){
            struct Node *cur = head;
            for(int j = 0;j < size - 1 - i;j++){
                if(strcmp(cur->data , cur->next->data) > 1){
                        char temp[100];
                        strcpy(temp,cur->data);
                        strcpy(temp,cur->data);
                        strcpy(cur->data,cur->next->data);
                        strcpy( cur->next->data,temp);
                    }
                cur = cur->next;
            }
        }
    }
    
    void deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return ;
        }
        if(pos == 1) {
            deleteFirst();
            return ;
        }
        if(pos == size){
            deleteLast();
            return ;
        }
        if(pos > size){
            printf("Invalid pos!");
            return ;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        if(temp != NULL && temp->next != NULL){
            temp->next = temp->next->next;
            return;
        }
        return;
    }
    
    void display(){
        struct Node *temp = head;
        while(temp != NULL){
            printf("%s->",temp->data);
            temp = temp->next;
        }
        printf("null");
    }
    
    void main(){
        insertFirst("you");
        insertFirst("are");
        insertFirst("how");
        insertLast("Faiz");
        insertInMiddle("?",4);
        display();
        printf("\n");
        if(search("Faiz") != -1){
            printf("Found!");
        }else {
            printf("Not found!");
        }
        printf("\n");
        if(search("Kasim") != -1){
            printf("Found!");
        }else {
            printf("Not found!");
        }
    }
  `,
    output: `
    how->are->you->Faiz->?->null
    Found!
    Not found!
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement a string doubly linkedlist with all operations",
    code: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    struct Node{
        char data[100];
        struct Node *next;
        struct Node *prev;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(char str[]){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            strcpy(head->data,str);
            tail = head;
            tail->next = NULL;
            head->prev = NULL;
            tail->prev = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        printf("%s\n",str);
        strcpy(newNode->data,str);
        newNode->next = head;
        newNode->prev = NULL;
        head = newNode;
        size++;
    }
    
    void insertLast(char str[]){
        if(head == NULL){
           insertFirst(str);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        strcpy(newNode->data,str);
        newNode->next = NULL;
        newNode->prev = tail;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(char str[],int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(str);
            return;
        }
         if(pos == size){
           insertLast(str);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        strcpy(newNode->data,str);
        newNode->next = prev->next;
        prev->next->prev = newNode;
        prev->next = newNode;
        newNode->prev = prev;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    void deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return;
        }
        if(size == 1){
            head = tail = NULL;
            size--;
            return;
        }
        head = head->next;
        head->prev = NULL;
        size--;
    }
    void deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return;
        }
        if(size == 1){
            deleteFirst();
            return;
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        prev->next = NULL;
        tail = prev;
        size--;
    }
    
    int search(char str[]){
        if(size == 0){
            printf("List is Empty!");
            return -1; 
        }
        int indx = 0;
        struct Node *temp = head;
        while(temp != NULL){
            if(strcmp(temp->data,str) == 0){
                return indx;
            }
            temp = temp->next;
            indx++;
        }
        return -1;
    }
    
    
    void sortList(){
        if(size == 0 || size == 1) return;
        for(int i = 0; i < size-1;i++){
            struct Node *cur = head;
            for(int j = 0;j < size - 1 - i;j++){
                if(cur->next != NULL){
                    if(strcmp(cur->data , cur->next->data) > 1){
                        char temp[100];
                        strcmp(temp,cur->data);
                        strcpy(temp,cur->data);
                        strcpy(cur->data,cur->next->data);
                        strcpy( cur->next->data,temp);
                    }
                }
                cur = cur->next;
            }
        }
    }
    
    void deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return;
        }
        if(pos == 1) {
            return deleteFirst();
        }
        if(pos == size){
            deleteLast();
            return ;
        }
        if(pos > size){
            printf("Invalid pos!");
            return ;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        if(temp != NULL && temp->next != NULL){
            temp->next = temp->next->next;
            temp->next->next->prev = temp;
        }
    }
    
    void display(){
        struct Node *temp = head;
        while(temp != NULL){
            printf("%s<->",temp->data);
            temp = temp->next;
        }
        printf("null");
    }
    
    void main(){
        insertLast("Hello");
        insertLast("Faiz");
        display();
    }
  `,
    output: `
    Hello<->Faiz<->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Implement circular integer Linkedlist with all operations",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node{
        int data;
        struct Node *next;
    };
    
    struct Node *head = NULL;
    struct Node *tail = NULL;
    
    int size = 0;
    
    void insertFirst(int val){
        if(head == NULL){
            head = (struct Node*)malloc(sizeof(struct Node));
            head->data = val;
            tail = head;
            tail->next = NULL;
            size++;
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = val;
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    void insertLast(int val){
        if(head == NULL){
           insertFirst(val);
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = val;
        newNode->next = head;
        tail->next = newNode;
        tail = newNode;
        size++;
    }
    
    void insertInMiddle(int val,int pos){
        if(pos == 0) {
            printf("Invalid pos");
            return;
        }
        if(pos == 1){
            insertFirst(val);
            return;
        }
         if(pos == size){
           insertLast(val);
           return;
        }
    
        if(pos > size+1){
            printf("Invalid pos");
            return;
        }
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        if(newNode !=  NULL){
          struct Node *prev = head;
            for(int i = 1; i < pos-1;i++){
            prev = prev->next;
        }
        newNode->data = val;
        newNode->next = prev->next;
        prev->next = newNode;
        size++;
        }else {
            printf("LinkedList is Full!");
        }
       
    }
    
    int deleteFirst(){
        if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        int data = head->data;
        if(size == 1){
            head = tail = NULL;
            size--;
            return data;
        }
        head = head->next;
        size--;
        return data;
    }
    int deleteLast(){
         if(size == 0){
            printf("List is Empty!");
            return -1;
        }
        if(size == 1){
            return deleteFirst();
        }
        struct Node *prev = head;
        while(prev->next != tail){
            prev = prev->next;
        }
        int data = tail->data;
        prev->next = head;
        tail = prev;
        size--;
        return data;
    }
    
    int search(int key){
        if(size == 0){
            printf("List is Empty!");
            return -1; 
        }
        int indx = 0;
        struct Node *temp = head;
        while(temp != NULL){
            if(temp->data == key){
                return indx;
            }
            temp = temp->next;
            indx++;
        }
        return -1;
    }
    
    
    void sortList(){
        if(size == 0 || size == 1) return;
        for(int i = 0; i < size-1;i++){
            struct Node *cur = head;
            for(int j = 0;j < size - 1 - i;j++){
                if(cur->next != head){
                    if(cur->data > cur->next->data){
                        int t = cur->data;
                        cur->data = cur->next->data;
                        cur->next->data = t;
                    }
                }
                cur = cur->next;
            }
        }
    }
    
    
    int deleteInMiddle(int pos){
        if(pos == 0) {
            printf("Invalid pos!");
            return -1;
        }
        if(pos == 1) {
            return deleteFirst();
        }
        if(pos == size){
            return deleteLast();
        }
        if(pos > size){
            printf("Invalid pos!");
            return -1;
        }
        struct Node *temp = head;
    
        for(int i = 1; i < pos - 1;i++){
            temp = temp->next;
        }
        if(temp != NULL && temp->next != NULL){
            int data = temp->data;
            temp->next = temp->next->next;
            return data;
        }
        return -1;
    }
    
    
    void display(){
        struct Node *temp = head;
        while(temp != NULL && temp->next != head){
            printf("%d->",temp->data);
            temp = temp->next;
        }
        printf("null");
    }
    
    void main(){
        insertFirst(10);
        insertFirst(20);
        insertFirst(30);
        insertFirst(40);
        insertInMiddle(25,3);
        display();
    }
  `,
    output: `
    40->30->25->20->10->null
  `,
    type: "linkedlist",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Construct a binary tree from inorder and preorder",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node{
        int data;
        struct Node *left;
        struct Node *right;
    };
    int indx = 0;
    struct Node *root;
    int findElem(int in[],int n,int elem){
        for(int i = 0;i < n;i++){
            if(in[i] == elem) return i;
        }
        return -1;
    }
    
    struct Node* buildTree(int in[],int pre[],int inOrderStart,int inOrderEnd,int n){
        // base case.
        if(inOrderStart > inOrderEnd || indx >= n) return NULL;
    
        struct Node *root = (struct Node*)malloc(sizeof(struct Node));
        int elem = pre[indx++];
        root->data = elem;
        int pos = findElem(in,n,elem);
        if(pos == -1) {
            printf("Invalid input !");
            return NULL;
        }
        root->left = buildTree(in,pre,inOrderStart,pos-1,n);
        root->right = buildTree(in,pre,pos + 1,inOrderEnd,n);
        return root;
    }
    
    
    void preorder(struct Node *node){
     if(node == NULL){
        return;
     }
     printf("%d ",node->data);
     preorder(node->left);
     preorder(node->right);
    }
    
    void main(){
        int in[] = {3,1,4,0,5,2};
        int pre[] = {0,1,3,4,2,5};
        int n = sizeof(in)/sizeof(int);
        root = buildTree(in,pre,0,n-1,n);
        printf("Preorder of build tree is : ");
        preorder(root);
    }
  `,
    output: `
    Preorder of build tree is : 0 1 3 4 2 5 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Construct a binary tree from inorder and postorder",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct Node{
        int data;
        struct Node *left;
        struct Node *right;
    };
    int indx;
    struct Node *root;
    int findElem(int in[],int n,int elem){
        for(int i = 0;i < n;i++){
            if(in[i] == elem) return i;
        }
        return -1;
    }
    
    struct Node* buildTree(int in[],int post[],int inOrderStart,int inOrderEnd,int n){
        // base case.
        if(inOrderStart > inOrderEnd || indx < 0) return NULL;
    
        struct Node *root = (struct Node*)malloc(sizeof(struct Node));
        int elem = post[indx--];
        root->data = elem;
        int pos = findElem(in,n,elem);
        if(pos == -1) {
            printf("Invalid input !");
            return NULL;
        }
        root->right = buildTree(in,post,pos + 1,inOrderEnd,n);
        root->left = buildTree(in,post,inOrderStart,pos-1,n);
        return root;
    }
    
    
    void preorder(struct Node *node){
     if(node == NULL){
        return;
     }
     printf("%d ",node->data);
     preorder(node->left);
     preorder(node->right);
    }
    
    void main(){
        int in[] =  {4,8,2,5,1,6,3,7};
        int post[] = {8,4,5,2,6,7,3,1};
        int n = sizeof(in)/sizeof(int);
        indx = n-1;
        root = buildTree(in,post,0,n-1,n);
        printf("Preorder of build tree is : ");
        preorder(root);
    }
  `,
    output: `
    Preorder of build tree is : 1 2 4 8 5 3 6 7 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Level order traversal on a Binary Tree",
    code: `#include <stdio.h>
    #include <stdlib.h>
    
    struct QNode {
        struct TNode *data;
        struct QNode *next;
    };
    
    struct QNode *front = NULL,*rear = NULL;
    int Qsize = 0;
    int isEmpty(){
        if(Qsize == 0){
            return 1;
        }
        return 0;
    }
    void add(struct TNode *val){
        if(rear == NULL){
            rear = (struct QNode*)malloc((sizeof(struct QNode)));
            rear->data = val;
            rear->next = NULL;
            front = rear;
            Qsize++;
            return;
        }
        struct QNode *temp = (struct QNode*)malloc((sizeof(struct QNode)));
        if(temp == NULL){
            printf("Queue if FULL!");
            return;
        }
        temp->data = val;
        temp->next = NULL;
        rear->next = temp;
        rear = temp;
        Qsize++;
    }
    
    struct TNode* remove1(){
        if(Qsize == 0){
            printf("Queue is Empty!");
            return NULL;
        }
        struct TNode *val = front->data;
        struct QNode *temp = front;
        front = front->next;
        free(temp);
        Qsize--;
        return val;
    }
    
    struct TNode* peek(){
        if(front == NULL){
            printf("Queue is Empty!");
            return NULL;
        }
        return front->data; 
    }
    int isQEmpty(){
        if(Qsize == 0) return 1;
        return 0;
    }
    void levelOrder(struct TNode *root){
        add(root);
        add(NULL);
        while(!isQEmpty()){
            struct TNode *cur = remove1();
            if(cur == NULL){
                if(isQEmpty() == 1) break;
                else {
                    add(NULL);
                }
            }else {
                printf("%d ",cur->data);
                if(cur->left != NULL) add(cur->left);
                if(cur->right != NULL) add(cur->right);
            }
        }
    
    }
    
    
    void main(){
        int in[] =  {4,8,2,5,1,6,3,7};
        int post[] = {8,4,5,2,6,7,3,1};
        int n = sizeof(in)/sizeof(int);
        indx = n-1;
        root = buildTree(in,post,0,n-1,n);
        levelOrder(root);
    }
    
  `,
    output: `
    1 2 3 4 5 6 7 8 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Left view of binary tree",
    code: `#include <stdio.h>
    #include <stdlib.h>
    struct TNode{
        int data;
        int level;
        struct TNode *left;
        struct TNode *right;
    };
    void updateLevel(struct TNode *node,int level){
        if(node == NULL){
           return;
        }
        node->level = level;
        updateLevel(node->left,level+1);
        updateLevel(node->right,level+1);
       }
    
    void leftView(struct TNode *root){
        int level = 1;
        add(root);
        add(NULL);
        while(!isQEmpty()){
            struct TNode *cur = remove1();
            if(cur == NULL){
                if(isQEmpty() == 1) break;
                else {
                    add(NULL);
                }
            }else {
                if(cur->level == level) {
                    printf("%d ",cur->data);
                    level++;
                }
                if(cur->left != NULL) add(cur->left);
                if(cur->right != NULL) add(cur->right);
            }
        }
    }
    void main(){
        int in[] =  {4,8,2,5,1,6,3,7};
        int post[] = {8,4,5,2,6,7,3,1};
        int n = sizeof(in)/sizeof(int);
        indx = n-1;
        root = buildTree(in,post,0,n-1,n);
        updateLevel(root,1);
        leftView(root);
    }
    
    
    
    
  `,
    output: `
    1 2 4 8
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Right view of binary tree",
    code: `#include <stdio.h>
    #include <stdlib.h>
    struct TNode{
        int data;
        int level;
        struct TNode *left;
        struct TNode *right;
    };
    void updateLevel(struct TNode *node,int level){
        if(node == NULL){
           return;
        }
        node->level = level;
        updateLevel(node->left,level+1);
        updateLevel(node->right,level+1);
       }
    
       //4. PRINT RIGHT VIEW OF BINARY TREE
       void rightView(struct TNode *root){
           int level = 1;
           add(root);
           add(NULL);
           while(!isQEmpty()){
               struct TNode *cur = remove1();
               if(cur == NULL){
                   if(isQEmpty() == 1) break;
                   else {
                       add(NULL);
                   }
               }else {
                   if(cur->level == level) {
                       printf("%d ",cur->data);
                       level++;
                   }
                   if(cur->right != NULL) add(cur->right);
                   if(cur->left != NULL) add(cur->left);
               }
           }
       }
       
    void main(){
        int in[] =  {4,8,2,5,1,6,3,7};
        int post[] = {8,4,5,2,6,7,3,1};
        int n = sizeof(in)/sizeof(int);
        indx = n-1;
        root = buildTree(in,post,0,n-1,n);
        updateLevel(root,1);
        rightView(root);
    }
    
  `,
    output: `
    1 3 7 8 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "FIND THE MAXIMUM DEPTH OF BINARY TREE",
    code: `#include <stdio.h>
    #include <stdlib.h>
    int getMax(int a,int b){
        if(a > b) return a;
        return b;
    }
    int maxDepth(struct TNode *root){
        if(root == NULL) return 0;
        int left = maxDepth(root->left);
        int right = maxDepth(root->right);
        return getMax(left,right) + 1;
    }
    
    
    void main(){
        int in[] =  {4,8,2,5,1,6,3,7};
        int post[] = {8,4,5,2,6,7,3,1};
        int n = sizeof(in)/sizeof(int);
        indx = n-1;
        root = buildTree(in,post,0,n-1,n);
        updateLevel(root,1);
        printf("Maximum depth of Binary Tree is : %d",maxDepth(root));
    }
    
    
  `,
    output: `
    Maximum depth of Binary Tree is : 4
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "CREATE BINARY SEARCH TREE USING ARRAYS WITH ALL OPERATIONS",
    code: `#include <stdio.h>
    #define MAX 30
    //7. CREATE BINARY SEARCH TREE USING ARRAYS (INSERT, DELETE, SEARCH, PREORDER, INORDER, POSTORDER, MINIMUM ELEMENT)
    int tree[MAX];
    int size = 0;
    
    void insert(int val){
        if(size == MAX){
            printf("Tree is Full!");
            return;
        }
        // add root value.
        if(size == 0){
            tree[0] = val;
            size++;
            return;
       }
       int i = 0;
       // getting correct index.
       while(i < MAX && tree[i] != -1){
        if(val < tree[i]){
            i = 2*i + 1;
        }else if(val > tree[i]){
            i = 2*i + 2;
        }else {
            printf("Duplicate is not allowed!");
            break;
        }
      }
      if(i < MAX){
        tree[i] = val;
        size++;
      }else {
        printf("Tree is Full!");
        return;
      }
    }
    
    int delete(int val){
        if(size == 0){
            printf("Tree is Empty!");
            return -1;
        }
        if(size == 1){
            size = 0;
            return 0;
        }
         int i = 0;
       // getting correct index.
       while(i < MAX && tree[i] != -1){
        if(tree[i] == val){
            break;
        }
        if(val < tree[i]){
            i = 2*i + 1;
        }else if(val > tree[i]){
            i = 2*i + 2;
        }
      }
      if(i < MAX && tree[i] != -1){
        size--;
        int val = tree[i];
        tree[i] = -1;
        return i;
      }else {
        printf("Value not found!");
        return -1;
      }
    
    }
    
    
    int search(int val){
        if(size == 0){
            printf("Tree is Empty!");
            return -1;
        }
         int i = 0;
       // getting correct index.
       while(i < MAX && tree[i] != -1){
        if(tree[i] == val){
            break;
        }
        if(val < tree[i]){
            i = 2*i + 1;
        }else if(val > tree[i]){
            i = 2*i + 2;
        }
      }
      if(i < MAX && tree[i] != -1){
        return i;
      }else {
        printf("Value not found!");
        return -1;
      }
    }
    
    
    void preOrder(int index){
     if(index >= MAX || index < 0){
        return;
     }
     printf("%d ",tree[index]);
     int leftIndx = 2*index + 1;
     int rightIndx = 2*index + 2;
     if(tree[leftIndx] != -1) preOrder(leftIndx);
     if(tree[rightIndx] != -1) preOrder(rightIndx);
    }
    
    void inOrder(int index){
     if(index >= MAX || index < 0){
        return;
     }
     int leftIndx = 2*index + 1;
     int rightIndx = 2*index + 2;
     if(tree[leftIndx] != -1) inOrder(leftIndx);
     printf("%d ",tree[index]);
     if(tree[rightIndx] != -1) inOrder(rightIndx);
    }
    
    void postOrder(int index){
     if(index >= MAX || index < 0){
        return;
     }
     int leftIndx = 2*index + 1;
     int rightIndx = 2*index + 2;
     if(tree[leftIndx] != -1) postOrder(leftIndx);
     if(tree[rightIndx] != -1) postOrder(rightIndx);
     printf("%d ",tree[index]);
    }
    
    int getMin(){
        if(size == 0){
            return -1;
        }
        int i = 0;
        int prev = -1;
         // getting correct index.
       while(i < MAX && tree[i] != -1){
            prev = i;
            i = 2*i + 1;
      }
      if(prev < MAX) return tree[prev];
    }
    
    void main(){
      for(int i = 0;i < MAX;i++){
        tree[i] = -1;
      }
      insert(100);
      insert(80);
      insert(85);
      insert(70);
      insert(110);
      insert(50);
      insert(40);
      insert(105);
      insert(120);
      delete(70);
      insert(60);
      printf("\nKey Found At Index : %d \n",search(60));
      printf("\nMin : %d \n",getMin());
      printf("\nPreOrder : ");
      preOrder(0);
      printf("\nInorder : ");
      inOrder(0);
      printf("\nPostOrder : ");
      postOrder(0);
      printf("\n");
     
    }
    
    
  `,
    output: `
    Key Found At Index : 3 

    Min : 40
    
    PreOrder : 100 80 60 50 40 85 110 105 120  
    Inorder : 40 50 60 80 85 100 105 110 120   
    PostOrder : 40 50 60 85 80 105 120 110 100 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "CREATE BINARY SEARCH TREE WITH DYNAMICALLY WITH ALL OPERATIONS",
    code: `#include <stdio.h>
    #include <stdlib.h>
    //8. CREATE BINARY SEARCH TREE DYNAMICALLY (INSERT, DELETE, SEARCH, PREORDER, INORDER, POSTORDER, MINIMUM ELEMENT)
    struct Tree{
        int data;
        struct Tree *left;
        struct Tree *right;
    };
    struct Tree *root = NULL,*newNode,*search,*prevSearch;
    void insert(int val){
        if(root == NULL){
            root = (struct Tree*)malloc(sizeof(struct Tree));
            root->data = val;
            root->left = NULL;
            root->right = NULL;
            return;
        }
        newNode = (struct Tree*)malloc(sizeof(struct Tree));
        if(newNode != NULL){
            prevSearch  = NULL;
            search = root;
            while(search != NULL){
                if(search->data > val){
                    prevSearch = search;
                    search = search->left;
                }else if(search->data < val){
                    prevSearch = search;
                    search = search->right;
                }else {
                    printf("Duplicate is not allowed!");
                    return;
                }
            }
             // inserting the node 
            if(prevSearch->data > val){
                prevSearch->left =  newNode;
                prevSearch->left->data = val;
              }
            if(prevSearch->data < val){
                prevSearch->right = newNode;
                prevSearch->right->data = val;
            }
            newNode->left = NULL;
            newNode->right = NULL;
        }
    }
    
    struct Tree *prevIS = NULL;
    struct Tree* findInorderSuccessor(struct Tree *node){
        if(node == NULL){
            return node;
        }
        while(node->left != NULL){
            prevIS = node;
            node = node->left;
        }
        return node;
    }
    
    int delete(int val){
        prevSearch = NULL;
        search = root;
        while(search != NULL){
            // search left move krega
            if(search->data > val){
                prevSearch = search;
                search = search->left;
            // search right move krega
            }else if(search->data < val){
                prevSearch = search;
                search = search->right;
            }else { // search eqaul hai value k
                // no child node.
                if(search->left == NULL && search->right == NULL){
                    if(prevSearch->data > val){
                        prevSearch->left = NULL;
                    }else if(prevSearch->data < val){
                        prevSearch->right = NULL;
                    }
                }
                // one-child node.
                if(search->left == NULL || search->right == NULL){
                    if(prevSearch->data > val){
                        // left side
                        if(search->left == NULL){
                            prevSearch->left = search->right;
                        }else{
                            prevSearch->left = search->left;
                        }
                    }else {
                        // right side
                         if(search->left == NULL){
                            prevSearch->right = search->right;
                        }else{
                            prevSearch->right = search->left;
                        }
                    }
                }
               // 2 child  
                if(search->left != NULL && search->right != NULL){
                //1. find successor.
                struct Tree *IS = findInorderSuccessor(search->right);
                //2. swap data of succsessor with node to be deleetd.
                 search->data = IS->data;
                //3. delete succsessor.
                prevIS->left = NULL;
            }
                break;
            }
        }
    }
    
    int searchFunc(int val){
        if(root == NULL){
            return 0;
        }
        search = root;
        while(search != NULL){
            if(search->data == val){
                return 1;
            }
            if(search->data > val){
                search = search->left;
            }else {
                search = search->right;
            }
        }
        return 0;
    }
    
    void preorder(struct Tree *node){
        if(node == NULL){
            return;
        }
        printf("%d ",node->data);
        preorder(node->left);
        preorder(node->right);
    }
    void inOrder(struct Tree *node){
        if(node == NULL){
            return;
        }
        inOrder(node->left);
        printf("%d ",node->data);
        inOrder(node->right);
    }
    void postOrder(struct Tree *node){
        if(node == NULL){
            return;
        }
        postOrder(node->left);
        postOrder(node->right);
        printf("%d ",node->data);
    }
    
    int getMin(){
        if(root == NULL){
            return -1;
        }
        search = root;
        while(search != NULL){
            prevSearch = search;
            search = search->left;
        }
        return prevSearch->data;
    }
    
    void main(){
        insert(100);
        insert(110);
        insert(120);
        insert(90);
        insert(105);
        insert(95);
        insert(94);
        insert(80);
        delete(100);
        printf("\nMin is : %d",getMin());
        printf("\nPreOrder : ");
        preorder(root);
        printf("\nInorder : ");
        inOrder(root);
        printf("\nPostOrder : ");
        postOrder(root);
    }
  `,
    output: `
    Min is : 80
    PreOrder : 105 90 80 95 94 110 120  
    Inorder : 80 90 94 95 105 110 120   
    PostOrder : 80 94 95 90 120 110 105 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "FIND INORDER PREDECESSOR AND INORDER SUCCESSOR OF BINARY SEARCH TREE (DYNAMICALLY REPRESENTED)",
    code: `#include <stdio.h>
    #include <stdlib.h>
  
        int data;
        struct Tree *left;
        struct Tree *right;
    };
    struct Tree *root = NULL,*newNode,*search,*prevSearch;
    struct Tree* findInSucessor(struct Tree *node){
        if(node == NULL){
            return node;
        }
        node = node->right;
        while(node->left != NULL){
            node = node->left;
        }
        return node;
    }
    struct Tree* findPrecedessor(struct Tree *node){
        if(node == NULL){
            return node;
        }
        node = node->left;
        while(node->right != NULL){
            node = node->right;
        }
        return node;
    }
    void main(){
        insert(100);
        insert(110);
        insert(120);
        insert(105);
        insert(85);
        insert(70);
        insert(80);
        printf("INORDER SUCCESSOR is : %d\n",(findInSucessor(root)->data));
        printf("PREDECESSOR  is : %d",(findPrecedessor(root)->data));
    }
  `,
    output: `
    INORDER SUCCESSOR is : 105
    PREDECESSOR  is : 85
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "FIND INORDER PREDECESSOR AND INORDER SUCCESSOR OF BINARY SEARCH TREE (DYNAMICALLY REPRESENTED)",
    code: `#include <stdio.h>
    #include <stdlib.h>
    struct Tree{
        int data;
        struct Tree *left;
        struct Tree *right;
    };
    struct Tree *root = NULL,*newNode,*search,*prevSearch;
    struct Tree* findInSucessor(struct Tree *node){
        if(node == NULL){
            return node;
        }
        node = node->right;
        while(node->left != NULL){
            node = node->left;
        }
        return node;
    }
    struct Tree* findPrecedessor(struct Tree *node){
        if(node == NULL){
            return node;
        }
        node = node->left;
        while(node->right != NULL){
            node = node->right;
        }
        return node;
    }
    void main(){
        insert(100);
        insert(110);
        insert(120);
        insert(105);
        insert(85);
        insert(70);
        insert(80);
        printf("INORDER SUCCESSOR is : %d\n",(findInSucessor(root)->data));
        printf("PREDECESSOR  is : %d",(findPrecedessor(root)->data));
    }
  `,
    output: `
    INORDER SUCCESSOR is : 105
    PREDECESSOR  is : 85
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "CREATE BINARY TREE TO BINARY SEARCH TREE THROUGH ARRAY.",
    code: `#include <stdio.h>
    #define MAX 30

    int tree[MAX];
    int size = 0;
    
    void insert(int val){
        if(size == MAX){
            printf("Tree is Full!");
            return;
        }
        // add root value.
        if(size == 0){
            tree[0] = val;
            size++;
            return;
       }
       int i = 0;
       // getting correct index.
       while(i < MAX && tree[i] != -1){
        if(val < tree[i]){
            i = 2*i + 1;
        }else if(val > tree[i]){
            i = 2*i + 2;
        }else {
            printf("Duplicate is not allowed!");
            break;
        }
      }
      if(i < MAX){
        tree[i] = val;
        size++;
      }else {
        printf("Tree is Full!");
        return;
      }
    }
    
    void convertIntoBST(int bt[],int n){
        for(int i = 0; i < n;i++){
          insert(bt[i]);
        }
    }
    
    void main(){
      for(int i = 0;i < MAX;i++){
        tree[i] = -1;
      }
      int BT[7];
      BT[0] = 100;
      BT[1] = 80;
      BT[2] = 110;
      BT[3] = 70;
      BT[4] = 85;
      BT[5] = 105;
      BT[6] = 120;
      convertIntoBST(BT,7);
      printf("\nPreOrder : ");
      preOrder(0);
      printf("\nInorder : ");
      inOrder(0);
      printf("\nPostOrder : ");
      postOrder(0);
      printf("\n");
     
    }
  `,
    output: `
    PreOrder : 100 80 70 85 110 105 120  
    Inorder : 70 80 85 100 105 110 120   
    PostOrder : 70 85 80 105 120 110 100 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "FIND KTH SMALLEST ELEMENT IN A BINARY SEARCH TREE THROUGH ARRAY",
    code: `#include <stdio.h>
    #define MAX 30

    int tree[MAX];
    int size = 0;
    
    int track = 0;
    int findKthSmall(int index,int k){
      if(index >= MAX || index < 0 || tree[index] == -1){
        return -1;
     }
     int leftIndx = 2*index + 1;
     int rightIndx = 2*index + 2;
     int left = findKthSmall(leftIndx,k);
      if(left != -1){
        return left;
      }
     track++;
     if(track == k){
        return tree[index];
     }
     return findKthSmall(rightIndx,k);
    }
    
    void main(){
      for(int i = 0;i < MAX;i++){
        tree[i] = -1;
      }
     insert(100);
     insert(80);
     insert(110);
     insert(70);
     insert(85);
     insert(105);
     insert(120);
   
      printf("\\n\Inorder : ");
      inOrder(0);
      printf("\\n\%d smallest elem is : %d",3,findKthSmall(0,3));
  
     
    }
  `,
    output: `
    Inorder : 70 80 85 100 105 110 120 
    3 smallest elem is : 85
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "FIND KTH Largest ELEMENT IN A BINARY SEARCH TREE THROUGH ARRAY",
    code: `#include <stdio.h>
    #define MAX 30

    int tree[MAX];
    int size = 0;

    int track = 0;
    int findKthLargest(int index,int k){
        if(index >= MAX || index < 0 || tree[index] == -1){
          return -1;
       }
       int leftIndx = 2*index + 1;
       int rightIndx = 2*index + 2;
       int left = findKthLargest(leftIndx,k);
        if(left != -1){
          return left;
        }
       track++;
       if(track == size-k+1){
          return tree[index];
       }
       return findKthLargest(rightIndx,k);
      }
      
      
    void main(){
      for(int i = 0;i < MAX;i++){
        tree[i] = -1;
      }
     insert(100);
     insert(80);
     insert(110);
     insert(70);
     insert(85);
     insert(105);
     insert(120);
   
      printf("\\n\Inorder : ");
      inOrder(0);
      printf("\\n\%d largest elem is : %d",3,findKthLargest(0,3));
  
     
    }
  `,
    output: `
    Inorder : 70 80 85 100 105 110 120 
    3 largest elem is : 105
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "CHECK WHETHER BINARY SEARCH TREE CONTAINS DEAD END",
    code: `#include <stdio.h>
    #define MAX 30

    int containsDeadEnd(struct Tree* root){
        if(root == NULL){
            return 0;
        }
        if(root->left == NULL && root->right == NULL){
            if(searchFunc(root->data - 1) == 1 && searchFunc(root->data + 1) == 1){
                return 1;
            }
        }
       return containsDeadEnd(root->left) ||  containsDeadEnd(root->right);
    }
    
    void main(){
        insert(8);
        insert(7);
        insert(10);
        insert(2);
        insert(9);
        insert(13);
        inOrder(root);
       
        if(containsDeadEnd(root)){
            printf("\\n\ yes dead end exist");
        }else {
            printf("\\n\ Dead end does not exists.");
        }
    }
  `,
    output: `
    2 7 8 9 10 13     
    yes dead end exist
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Print preorder and postorder of BST",
    code: `#include <stdio.h>
    void postOrder(struct Tree *node){
        if(node == NULL){
            return;
        }
        postOrder(node->left);
        postOrder(node->right);
        printf("%d ",node->data);
    }
    void preorder(struct Tree *node){
        if(node == NULL){
            return;
        }
        printf("%d ",node->data);
        preorder(node->left);
        preorder(node->right);
    }
    
    void main(){
        insert(8);
        insert(7);
        insert(10);
        insert(2);
        insert(9);
        insert(13);
        printf("\\n\Preorder of BST : ");
        preorder(root);
        printf("\\n\Postorder of BST : ");
        postOrder(root);
    
    }
  `,
    output: `
    Preorder of BST : 8 7 2 10 9 13  
    Postorder of BST : 2 7 9 13 10 8 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "CONSTRUCT BINARY SEARCH TREE FROM GIVEN PREORDER TRAVERSAL THROUGH ARRAYS",
    code: `#include <stdio.h>
    int tree[MAX];
    int size = 0;
    void buildBST(int pre[],int n){
      for(int i = 0; i < n;i++){
        insert(pre[i]);
      }
    }
    void preOrder(int index){
     if(index >= MAX || index < 0){
        return;
     }
     printf("%d ",tree[index]);
     int leftIndx = 2*index + 1;
     int rightIndx = 2*index + 2;
     if(tree[leftIndx] != -1) preOrder(leftIndx);
     if(tree[rightIndx] != -1) preOrder(rightIndx);
    }
    void main(){
      for(int i = 0;i < MAX;i++){
        tree[i] = -1;
      }
    
      int pre[] = {100,80,70,85,110,105,120};
      int n = sizeof(pre)/sizeof(int);
      buildBST(pre,n);
      printf("\\n\PreOrder : ");
      preOrder(0);
      
    }
  `,
    output: `
    PreOrder : 100 80 70 85 110 105 120
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "CONSTRUCT BINARY SEARCH TREE FROM GIVEN PostOrder TRAVERSAL THROUGH ARRAYS",
    code: `#include <stdio.h>
    int tree[MAX];
    int size = 0;
    void insert(int val){
        if(size == MAX){
            printf("Tree is Full!");
            return;
        }
        // add root value.
        if(size == 0){
            tree[0] = val;
            size++;
            return;
       }
       int i = 0;
       // getting correct index.
       while(i < MAX && tree[i] != -1){
        if(val < tree[i]){
            i = 2*i + 1;
        }else if(val > tree[i]){
            i = 2*i + 2;
        }else {
            printf("Duplicate is not allowed!");
            break;
        }
      }
      if(i < MAX){
        tree[i] = val;
        size++;
      }else {
        printf("Tree is Full!");
        return;
      }
    }
    void preOrder(int index){
     if(index >= MAX || index < 0){
        return;
     }
     printf("%d ",tree[index]);
     int leftIndx = 2*index + 1;
     int rightIndx = 2*index + 2;
     if(tree[leftIndx] != -1) preOrder(leftIndx);
     if(tree[rightIndx] != -1) preOrder(rightIndx);
    }

    void buildBST(int arr[],int n){
      for(int i = n-1; i >= 0 ;i--){
        insert(arr[i]);
      }
    }
    
    void main(){
      for(int i = 0;i < MAX;i++){
        tree[i] = -1;
      }
    
      int post[] = {70,85,80,105,120,110,100};
      int n = sizeof(post)/sizeof(int);
      buildBST(post,n);
      buildBST(pre,n);
      printf("\\n\ PreOrder : ");
      preOrder(0);
      printf("\\n\ PostOrder : ");
      postOrder(0);
    }
  `,
    output: `
   PreOrder : 100 80 70 85 110 105 120  
   PostOrder : 70 85 80 105 120 110 100   
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      " COUNT THE NUMBER OF NODES IN BINARY SEARCH TREE CONSTRUCTED DYNAMICALLY",
    code: `#include <stdio.h>
    int countNodes(struct Tree *root){
        if(root == NULL) return 0;
        int leftCount = countNodes(root->left);
        int rightCount = countNodes(root->right);
        return leftCount+rightCount+1;
    }
    
    void main(){
        insert(100);
        insert(80);
        insert(110);
        insert(85);
        insert(70);
        insert(105);
        insert(120);
        printf("\\n\ Preorder of BST : ");
        preorder(root);
        printf("\\n\ Total no. of nodes in BST : %d",countNodes(root));
    
    }
  `,
    output: `
    Preorder of BST : 100 80 70 85 110 105 120 
    Total no. of nodes in BST : 7
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "Morris Traversal on BST",
    code: `#include <stdio.h>
    void morisTraversal(struct Tree *root){ // (same as inorder traversal but s.c is O(1))
        struct Tree *cur = root;
        while(cur != NULL){
            if(cur->left == NULL){
                printf("%d ",cur->data);
                cur = cur->right;
            }else {
                struct Tree *pred = cur;
                pred = pred->left;
                while(pred->right != NULL && pred->right != cur){
                    pred = pred->right;
                }
                if(pred->right == NULL){
                    pred->right = cur;
                    cur = cur->left;
                }else {
                    pred->right = NULL;
                    printf("%d ",cur->data);
                    cur = cur->right;
                }
            }
        }
    }
    void main(){
        insert(100);
        insert(80);
        insert(110);
        insert(85);
        insert(70);
        insert(105);
        insert(120);
        printf("\\n\ Morris Traversal of BST : ");
        morisTraversal(root);
    }
  `,
    output: `
    Morris Traversal of BST : 70 80 85 100 105 110 120 
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "CREATE ALMOST COMPLETE BINARY TREE FROM THE GIVEN INPUT BY THE USER (DYNAMICALLY)",
    code: `struct TNode* findNode(){
        add(root);
        add(NULL);
        while(!isQEmpty()){
            struct TNode *cur = remove1();
            if(cur == NULL){
                if(isQEmpty() == 1) break;
                else {
                    add(NULL);
                }
            }else {
                if(cur->left == NULL || cur->right){
                    return cur;
                }
                if(cur->left != NULL) add(cur->left);
                if(cur->right != NULL) add(cur->right);
            }
        }
        return NULL;
    }
    void insertAtNode(struct TNode *par,int val){
        struct TNode *nn = (struct TNode*)malloc(sizeof(struct TNode));
        if(par != NULL){
            nn->data = val;
            if(par->left == NULL){
                par->left = nn;
            }else {
                par->right = nn;
            }
            nn->left = NULL;
            nn->right = NULL;
        }else {
            printf("\nParent val does not exist!");
        }
    }
    void inOrder(struct TNode *node){
        if(node == NULL){
            return;
        }
        inOrder(node->left);
        printf("%d ",node->data);
        inOrder(node->right);
    }
    int isQEmpty(){
        if(Qsize == 0) return 1;
        return 0;
    }
    void levelOrder(struct TNode *root){
        add(root);
        add(NULL);
        while(!isQEmpty()){
            struct TNode *cur = remove1();
            if(cur == NULL){
                if(isQEmpty() == 1) break;
                else {
                    add(NULL);
                }
            }else {
                printf("%d ",cur->data);
                if(cur->left != NULL) add(cur->left);
                if(cur->right != NULL) add(cur->right);
            }
        }
    
    }
    void buildAlmostBinaryTree(){
        int val,choice;
        printf("Enter a root node : ");
        scanf("%d",&val);
        if(root == NULL){
            root = (struct TNode*)malloc(sizeof(struct TNode));
            root->data = val;
            root->left = NULL;
            root->right = NULL;
        }
        while(1){
            printf("\\n\ 1.Insert\\n\ 2.Exit\\n\ ");
            scanf("%d",&choice);
            if(choice == 1){
            struct TNode *par = findNode();
            printf("\\n\ Enter value : ");
            scanf("%d",&val);
            insertAtNode(par,val);
            }else if(choice == 2){
                break;
            }else {
                printf("\\n\ Invalid choice!");
            }
        }
         printf("\\n\ Level order of Tree : ");
         levelOrder(root);
    }
    void main(){
        buildAlmostBinaryTree();
    }
    
  `,
    output: `
    Enter a root node : 1

    1.Insert
    2.Exit  
    1
    
    Enter value : 2
    
    1.Insert
    2.Exit  
    1
    
    Enter value : 3
    
    1.Insert
    2.Exit  
    1
    
    Enter value : 4
    
    1.Insert
    2.Exit  
    1
    
    Enter value : 5
    
    1.Insert
    2.Exit  
    1
    
    Enter value : 6
    
    1.Insert
    2.Exit
    2
    
    Level order of Tree : 1 2 3 4 5 6
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "CREATE STRICTLY BINARY TREE FROM THE GIVEN INPUT BY THE USER (DYNAMICALLY)",
    code: `#include <stdio.h>
    struct Tree* getNode(struct Tree* root,int val){
        if(root == NULL) return NULL;
        if(root->data == val) return root;
        struct Tree *left = getNode(root->left,val);
        if(left != NULL){
            return left;
        }
        return getNode(root->right,val);
    }
    void insertAtNode(struct Tree *par,int val){
        struct Tree *nn = (struct Tree*)malloc(sizeof(struct Tree));
        if(par != NULL){
            nn->data = val;
            if(par->left == NULL){
                par->left = nn;
            }else {
                par->right = nn;
            }
            nn->left = NULL;
            nn->right = NULL;
        }else {
            printf("\nParent val does not exist!");
        }
    }
    
    void buildStrictlyBinaryTree(){
        int val1,val2,parValue,choice;
        printf("Enter a root node : ");
        scanf("%d",&parValue);
        insert(parValue);
        while(1){
            printf("\\n\ 1.Insert\\n\ 2.Exit\\n\ ");
            scanf("%d",&choice);
            if(choice == 1){
            printf("\\n\ PreOrder of Tree : ");
            preorder(root);
            printf("\\n\ Where you want to insert : ");
            scanf("%d",&parValue);
            struct Tree *par = getNode(root,parValue);
            if(par == NULL){
                printf("\\n\ Parent val does not exist!");
                continue;
            }
            printf("\\n\ Enter value of left child : ");
            scanf("%d",&val1);
            printf("\\n\ Enter value of right child : ");
            scanf("%d",&val2);
            insertAtNode(par,val1);
            insertAtNode(par,val2);
            }else if(choice == 2){
                break;
            }else {
                printf("\\n\ Invalid choice!");
            }
        }
         printf("\\n\ Inorder of Tree : ");
         inOrder(root);
    }
    
    void main(){
       
        buildStrictlyBinaryTree();
    }
  `,
    output: `
    Enter a root node : 100

    1.Insert
    2.Exit  
    1
    
    PreOrder of Tree : 100     
    Where you want to insert : 100
    
    Enter value of left child : 80
    
    Enter value of right child : 110
    
    1.Insert
    2.Exit  
    1
    
    PreOrder of Tree : 100 80 110 
    Where you want to insert : 80 
    
    Enter value of left child : 70
    
    Enter value of right child : 85
    
    1.Insert
    2.Exit  
    1
    
    PreOrder of Tree : 100 80 70 85 110 
    Where you want to insert : 110
    
    Enter value of left child : 105
    
    Enter value of right child : 120
    
    1.Insert
    2.Exit
    2
    
    Inorder of Tree : 70 80 85 100 105 110 120
  `,
    type: "binarytree",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "ENTER THE VERTICES AND EDGES AND REPRESENT IN ADJACENCY MATRIX AND PRINT IT.",
    code: `#include <stdio.h>


    int findElem(int elem,int n,int arr[]){
        for(int i = 0;i < n;i++){
            if(arr[i] == elem) return 1;
        }
        return 0;
    }
    
    void adjacentMatrix(){
        int n = 5;
        int vertex[n];
        int matrix[n][n];
        for(int i = 0;i < n;i++){
             for(int j = 0;j < n;j++){
                matrix[i][j] = 0;
            }
        }
        int indx = 0,choice,src,dest;
        while(indx < n){
            printf("\\n\----Select Choice----\\n\ 1.Insert vertex\\n\ 2.Insert edge\\n\ 3.Exit\\n\");
            scanf("%d",&choice);
            if(choice == 1){
                printf("\\n\Enter value of vertex : ");
                scanf("%d",&vertex[indx]);
                indx++;
            }else if(choice == 2){
                printf("\\n\Enter src and destination vertex respectively : ");
                scanf("%d%d",&src,&dest);
                int isSrc = findElem(src,n,vertex);
                int isDest = findElem(dest,n,vertex);
                if(src >= n || dest >= n || src < 0 || dest < 0 || isSrc == 0 || isDest == 0){
                    printf("\\n\ Invalid path!");
                }else {
                    matrix[src][dest] = 1;
                    matrix[dest][src] = 1;
                }
            }else if(choice == 3){
                break;
            }
            else {
                printf("\\n\Invalid choice!");
            }
        }
        // print matrix
      for(int i = 0;i < n;i++){
             for(int j = 0;j < n;j++){
                printf("%d ",matrix[i][j]);
            }
            printf("\\n\");
        }
    }
    
    void main(){
        adjacentMatrix();
    }
  `,
    output: `
    ----Select Choice----
    1.Insert vertex      
    2.Insert edge        
    3.Exit
    1
    
    Enter value of vertex : 1
    
    ----Select Choice----
    1.Insert vertex      
    2.Insert edge        
    3.Exit
    1
    
    Enter value of vertex : 2
    
    ----Select Choice----
    1.Insert vertex      
    2.Insert edge        
    3.Exit
    1
    
    Enter value of vertex : 3
    
    ----Select Choice----
    1.Insert vertex      
    2.Insert edge        
    3.Exit
    1
    
    Enter value of vertex : 4
    
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Exit
    2
    
    Enter src and destination vertex respectively : 1 2
    
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Exit
    2
    
    Enter src and destination vertex respectively : 2 3
    
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Exit
    2
    
    Enter src and destination vertex respectively : 2 
    4
    
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Exit
    3
    0 0 0 0 0 
    0 0 1 0 0
    0 1 0 1 1
    0 0 1 0 0
    0 0 1 0 0
  `,
    type: "graph",
    bookmarked: false,
    difficulty: "easy",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName:
      "CREATE THE GRAPH AS A ADJACENCY LIST WITH OPERATIONS SUCH AS INSERTION, DELETION.",
    code: `#include <stdio.h>
    #include <stdlib.h>
    struct Edge{
        int data;
        struct Edge *next;
    };
    
    struct Vertex{
        struct Vertex *next;
        int data;
        struct Edge *edge;
    };
    
    struct Vertex *start = NULL;
    struct Vertex *end = NULL;
    int size = 0;
    
    int search(int val){
        if(size == 0) return 0;
        struct Vertex *temp = start;
        while(temp != NULL){
            if(temp->data == val) return 1;
            temp = temp->next;
        }
        return 0;
    }
    
    void insert(int val){
        if(start == NULL){
            start = (struct Vertex*)malloc(sizeof(struct Vertex));
            start->data = val;
            start->next = NULL;
            start->edge = NULL;
            end = start;
            size++;
            return;
        }
        if(search(val) == 0){
            struct Vertex *nn = (struct Vertex*)malloc(sizeof(struct Vertex));
            if(nn != NULL){
            nn->data = val;
            nn->next = NULL;
            nn->edge = NULL;
            end->next = nn;
            end = nn;
            size++;
            }
        }else {
            printf("\\n\ Dublicate vertex is not allowed!");
        }
    }
    
    struct Vertex* getNode(int val){
        struct Vertex *temp = start;
         while(temp != NULL){
            if(temp->data == val) return temp;
            temp = temp->next;
        }
        return NULL;
    }
    
    void insertEdge(int src,int dest){
        if(search(src) && search(dest)){
            printf("edge!");
            struct Vertex *srcVertex = getNode(src);
            struct Edge *temp = (struct Edge*)malloc(sizeof(struct Edge));
            struct Edge *e = (struct Edge*)malloc(sizeof(struct Edge));
            e->data = dest;
            e->next = NULL;
            if(srcVertex->edge == NULL){
                srcVertex->edge = e;
                return;
            }
            temp = srcVertex->edge;
            while(temp->next != NULL){
                temp = temp->next;
            }
            temp->next = e;
        }else {
            printf("\\n\ Invalid src and dest!");
        }
    }
    
    void printGraph(){
        struct Vertex *i = start;
        while(i != NULL){
            printf("%d->",i->data);
            struct Edge *j = i->edge;
            while(j != NULL){
                printf("%d ",j->data);
                j = j->next;
            }
            i = i->next;
            printf("\\n\ ");
        }
    }
    struct Vertex* getParent(int val){
         struct Vertex *temp = start;
         struct Vertex *prev = NULL;
         while(temp->data != val){
            prev = temp;
            temp = temp->next;
        }
        return prev;
    }
    void delete(int val){
        if(start->data == val){
            start = start->next;
        }
        struct Vertex *par = getParent(val);
        // delete vertex.
        if(par != NULL && par->next != NULL){
            par->next = par->next->next;
        }
        // delete edge.
        struct Vertex *i = start;
        while(i != NULL){
            if(i->edge != NULL && i->edge->data == val){
                i->edge = i->edge->next;
                return;
            }
            struct Edge *prev = NULL;
            struct Edge *j = i->edge;
            while(j != NULL && j->data != val){
                prev = j;
                j = j->next;
            }
            if(prev != NULL){
                prev->next = prev->next->next;
            }
            i = i->next;
        }
    }
    
    void adjacentList(){
        int choice;
        int src,dest,val;
        while(1){
         printf("\\n\ ----Select Choice----\\n\ 1.Insert vertex\\n\ 2.Insert edge\\n\ 3.Delete\\n\ 4.Exit\\n\ ");
         scanf("%d",&choice);
            if(choice == 1){
                printf("\\n\ Enter value of vertex : ");
                scanf("%d",&val);
                insert(val);
            }else if(choice == 2){
                printf("\\n\ Enter src and destination vertex respectively : ");
                scanf("%d%d",&src,&dest);
                insertEdge(src,dest);
            }else if(choice == 3){
                printf("\\n\ Enter value of vertex : ");
                scanf("%d",&val);
                delete(val);
            }else if(choice == 4) break;
            else {
                printf("\\n\ Invalid choice!");
            }
       }
       printGraph();
    }
    
    void main(){
        adjacentList();
    }
  `,
    output: `
    ----Select Choice----
    1.Insert vertex      
    2.Insert edge        
    3.Delete
    4.Exit
    1
    
    Enter value of vertex : 1
    
    ----Select Choice----
    1.Insert vertex      
    2.Insert edge        
    3.Delete
    4.Exit
    1
    
    Enter value of vertex : 2
    
    ----Select Choice----
    1.Insert vertex      
    2.Insert edge        
    3.Delete
    4.Exit
    1
    
    Enter value of vertex : 3
    
    ----Select Choice----
    1.Insert vertex      
    2.Insert edge        
    3.Delete
    4.Exit
    1
    
    Enter value of vertex : 4
    
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    2
    
    Enter src and destination vertex respectively : 1 4
    edge!
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    1 2
    
    Enter value of vertex :
    Dublicate vertex is not allowed!
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    2
    
    Enter src and destination vertex respectively : 1 2
    edge!
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    2
    
    Enter src and destination vertex respectively : 1 3
    edge!
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    2
    
    Enter src and destination vertex respectively : 2 3
    edge!
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    2
    
    Enter src and destination vertex respectively : 2 4
    edge!
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    2
    
    Enter src and destination vertex respectively : 2 1
    edge!
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    3
    
    Enter value of vertex : 3
    
    ----Select Choice----
    1.Insert vertex
    2.Insert edge
    3.Delete
    4.Exit
    4
    1->4 2 
    2->4 1
    4->    
  `,
    type: "graph",
    bookmarked: false,
    difficulty: "hard",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "TRAVERSE THE ADJACENT MATRIX WITH BREADTH FIRST SEARCH",
    code: `#include <stdio.h>
    #include <stdlib.h>
    //Queue
struct Node {
    int data;
    struct Node *next;
};

struct Node *front = NULL,*rear = NULL;
int Qsize = 0;
int isEmpty(){
    if(Qsize == 0){
        return 1;
    }
    return 0;
}
void add(int val){
    if(rear == NULL){
        rear = (struct Node*)malloc((sizeof(struct Node)));
        rear->data = val;
        rear->next = NULL;
        front = rear;
        Qsize++;
        return;
    }
    struct Node *temp = (struct Node*)malloc((sizeof(struct Node)));
    if(temp == NULL){
        printf("Queue if FULL!");
        return;
    }
    temp->data = val;
    temp->next = NULL;
    rear->next = temp;
    rear = temp;
    Qsize++;
}

int remove1(){
    if(Qsize == 0){
        printf("Queue is Empty!");
        return -1;
    }
    int val = front->data;
    struct Node *temp = front;
    front = front->next;
    free(temp);
    Qsize--;
    return val;
}

int peek(){
    if(front == NULL){
        printf("Queue is Empty!");
        return -1;
    }
    return front->data; 
}
    void createGraph(){
        matrix[0][1] = 1;
        matrix[0][2] = 1;
    
        matrix[1][3] = 1;
        matrix[1][2] = 1;
    
        matrix[2][4] = 1;
    
        matrix[3][4] = 1;
        matrix[3][5] = 1;
    
        matrix[4][5] = 1;
    
        matrix[5][6] = 1;
    }
    void BFS(){
        // entring first vertex
        for(int i = 0;i < SIZE;i++){
             for(int j = 0;j < SIZE;j++){
                if(matrix[i][j] != 0) {
                    add(i);
                    break;
                }
            }
        }
        // visited array;
        int visited[SIZE];
        for(int i = 0;i < SIZE;i++) visited[i] = 0;
        while(isEmpty() == 0){
            int cur = remove1();
            if(visited[cur] == 0) printf("%d ",cur);
            visited[cur] = 1;
            for(int j = 0;j < SIZE;j++){
                if(cur != j && matrix[cur][j] != 0 && visited[j] == 0){
                    add(j);
                }
            }
        }
    }
    
    void main(){
        createGraph();
        BFS();
    }
  `,
    output: `
    0 1 2 3 4 5 6 
  `,
    type: "graph",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "TRAVERSE THE ADJACENT MATRIX WITH DEPTH FIRST SEARCH",
    code: `#include <stdio.h>
    #include <stdlib.h>
    void DFSUtil(int src,int vis[]){
        if(vis[src] == 0){
            printf("%d ",src);
           vis[src] = 1;
          // visiting neghbours
        for(int dest = 0;dest < SIZE;dest++){
            if(src != dest && vis[dest] == 0 && matrix[src][dest] == 1){
            DFSUtil(dest,vis);
            }
        }
    }
    }
    
    void DFS(){
        int visited[SIZE];
        for(int i = 0;i < SIZE;i++) visited[i] = 0;
        for(int i = 0;i < SIZE;i++){
            if(visited[i] == 0) {
                DFSUtil(i,visited);
            }
        }
    }
    
    
    
    void main(){
        createGraph();
        printf("BFS : ");
        BFS();
        printf("\\n\ DFS : ");
        DFS();
    }
  `,
    output: `
    BFS : 0 1 2 3 4 5 6 
    DFS : 0 1 2 4 5 6 3 
  `,
    type: "graph",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "TRAVERSE THE ADJACENT List WITH DEPTH FIRST SEARCH",
    code: `#include <stdio.h>
    #include <stdlib.h>
    struct Vertex* getNode(int val){
        struct Vertex *temp = start;
         while(temp != NULL){
            if(temp->data == val) return temp;
            temp = temp->next;
        }
        return NULL;
    }
    
    void insertEdge(int src,int dest){
        if(search(src) && search(dest)){
            struct Vertex *srcVertex = getNode(src);
            struct Edge *temp = (struct Edge*)malloc(sizeof(struct Edge));
            struct Edge *e = (struct Edge*)malloc(sizeof(struct Edge));
            e->data = dest;
            e->next = NULL;
            if(srcVertex->edge == NULL){
                srcVertex->edge = e;
                return;
            }
            temp = srcVertex->edge;
            while(temp->next != NULL){
                temp = temp->next;
            }
            temp->next = e;
        }else {
            printf("\\\nInvalid src and dest!");
        }
    }
    
    void createGraph(){
        for(int i = 0; i < SIZE;i++){
            insert(i);
        } 
        insertEdge(0,1);
        insertEdge(0,2);
    
        insertEdge(1,2);
        insertEdge(1,3);
    
        insertEdge(2,4);
    
        insertEdge(3,4);
        insertEdge(3,5);
    
        insertEdge(4,5);
    
        insertEdge(5,6);
    }
    
   
    
    void createGraph(){
        for(int i = 0; i < SIZE;i++){
            insert(i);
        } 
        insertEdge(0,1);
        insertEdge(0,2);
    
        insertEdge(1,2);
        insertEdge(1,3);
    
        insertEdge(2,4);
    
        insertEdge(3,4);
        insertEdge(3,5);
    
        insertEdge(4,5);
    
        insertEdge(5,6);
    }
    
    void DFSUtil(int src,int vis[]){
        if(vis[src] == 0){
            printf("%d ",src);
        }
        vis[src] = 1;
        // visiting neighur
         struct Vertex *node = getNode(src);
         struct Edge *j = node->edge;
          while(j != NULL && j->data != src){
            DFSUtil(j->data,vis);
            j = j->next;
        }
    }
    void DFS(){
         int vis[SIZE];
        for(int i = 0;i < SIZE;i++) vis[i] = 0;
        for(int i = 0;i < SIZE;i++) {
            if(vis[i] == 0){
                DFSUtil(i,vis);
            }
         }
    }
    void main(){
        createGraph();
        DFS();
    }
  `,
    output: `
     0 1 2 4 5 6 3 
  `,
    type: "graph",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
  {
    questionName: "TRAVERSE THE ADJACENT List WITH Breadth FIRST SEARCH",
    code: `#include <stdio.h>
    void createGraph(){
        for(int i = 0; i < SIZE;i++){
            insert(i);
        } 
        insertEdge(0,1);
        insertEdge(0,2);
    
        insertEdge(1,2);
        insertEdge(1,3);
    
        insertEdge(2,4);
    
        insertEdge(3,4);
        insertEdge(3,5);
    
        insertEdge(4,5);
    
        insertEdge(5,6);
    }
    
    void BFS(){
        int vis[SIZE];
        for(int i = 0;i < SIZE;i++) vis[i] = 0;
        // adding first vertex.
        for(int i = 0;i < SIZE;i++) {
            if(vis[i] == 0){
                add(i);
                break;
            }
         }
        while(isEmpty() == 0){
            int cur = remove1();
            if(vis[cur] == 0){
              printf("%d ",cur);
            }
            vis[cur] = 1;
             //adding neighbour into queue.
               struct Vertex *node = getNode(cur);
               struct Edge *j = node->edge;
                 while(j != NULL && j->data != cur){
                    add(j->data);
                    j = j->next;
               }
        }
    }
    void main(){
        createGraph();
        BFS();
    }
  `,
    output: `
    0 1 2 3 4 5 6 
  `,
    type: "graph",
    bookmarked: false,
    difficulty: "medium",
    timeAndSpace: `Time Complexity is : O(N) \\n\ Space Complexity is O(1)`,
  },
];

questions.forEach((ques, indx) => {
  ques.id = indx + 1;
});

export { questions };
