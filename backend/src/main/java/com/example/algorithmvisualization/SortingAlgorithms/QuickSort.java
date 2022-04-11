package com.example.algorithmvisualization.SortingAlgorithms;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class QuickSort {

    public static void quickSort(int[] array, int startIdx, int endIdx, List<Animation> animationList) {
        if (startIdx >= endIdx) {
            return;
        }

        int pivotIdx = startIdx;
        int leftIdx = startIdx + 1;
        int rightIdx = endIdx;

        animationList.add(new Animation(pivotIdx, leftIdx, rightIdx, 0));

        while(rightIdx >= leftIdx) {
            if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
                ArrayData.swap(leftIdx, rightIdx, array);

                animationList.add(new Animation(pivotIdx, leftIdx, rightIdx, 2));
            }
            if(array[leftIdx] <= array[pivotIdx]){
                leftIdx += 1;

                animationList.add(new Animation(pivotIdx, leftIdx, rightIdx, 0));
            }
            if(array[rightIdx] >= array[pivotIdx]) {
                rightIdx -= 1;

                animationList.add(new Animation(pivotIdx, leftIdx, rightIdx, 0));
            }
        }
        ArrayData.swap(pivotIdx, rightIdx, array);

        animationList.add(new Animation(pivotIdx, leftIdx, rightIdx, 1));

        boolean smallerLeftSubarray = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
        if(smallerLeftSubarray) {
            quickSort(array, startIdx, rightIdx - 1, animationList);
            quickSort(array, rightIdx + 1, endIdx, animationList);
        }
        else {
            quickSort(array, rightIdx + 1, endIdx, animationList);
            quickSort(array, startIdx, rightIdx - 1, animationList);
        }
    }

    public static List<Animation> quickSortOut(int [] array) {
        List<Animation> animations = new ArrayList<Animation>();
        quickSort(array, 0, array.length - 1, animations);
        return animations;
    }

}
