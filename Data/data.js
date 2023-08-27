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
];

questions.forEach((ques, indx) => {
  ques.id = indx + 1;
});
export { questions };
