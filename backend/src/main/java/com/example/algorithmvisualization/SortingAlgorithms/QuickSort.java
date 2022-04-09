package com.example.algorithmvisualization.SortingAlgorithms;

public class QuickSort {

    public static void quickSort(int[] array, int startIdx, int endIdx) {
        if (startIdx >= endIdx) {
            return;
        }

        int pivotIdx = startIdx;
        int leftIdx = startIdx + 1;
        int rightIdx = endIdx;

        while(rightIdx >= leftIdx) {
            if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
                ArrayData.swap(leftIdx, rightIdx, array);
            }
            if(array[leftIdx] <= array[pivotIdx]){
                leftIdx += 1;
            }
            if(array[rightIdx] >= array[pivotIdx]) {
                rightIdx -= 1;
            }
        }
        ArrayData.swap(pivotIdx, rightIdx, array);
        boolean smallerLeftSubarray = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
        if(smallerLeftSubarray) {
            quickSort(array, startIdx, rightIdx - 1);
            quickSort(array, rightIdx + 1, endIdx);
        }
        else {
            quickSort(array, rightIdx + 1, endIdx);
            quickSort(array, startIdx, rightIdx - 1);
        }
    }

    public static int[] quickSortOut(int [] array) {
        quickSort(array, 0, array.length - 1);
        return array;
    }

}
