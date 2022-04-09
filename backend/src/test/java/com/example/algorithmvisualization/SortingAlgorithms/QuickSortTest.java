package com.example.algorithmvisualization.SortingAlgorithms;

import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class QuickSortTest {

    @Test
    void shouldSortArray() {
        //Given
        int[] array = {2, 8, 7, 12, 20, 5, 3, 2, 1, 7, 5, 7};
        //When
        int[] result = QuickSort.quickSortOut(array);
        Arrays.sort(array);
        //Then
        assertArrayEquals(array, result);
    }
}