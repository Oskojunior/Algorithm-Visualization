package com.example.algorithmvisualization.SortingAlgorithms;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ArrayDataTest {
    @Test
    void shouldSwapTwoAndEight() {
        //Given
        int[] array = {2, 8};
        //When
        ArrayData.swap(0, 1, array);
        //Then
        assertArrayEquals(new int[]{8, 2}, array);
    }

    @Test
    void shouldSwapOneAndTwenty() {
        //Given
        int[] array = {2, 8, 7, 12, 20, 5, 3, 2, 1, 7, 5, 7};
        //When
        ArrayData.swap(8, 4, array);
        //Then
        assertArrayEquals(new int[]{2, 8, 7, 12, 1, 5, 3, 2, 20, 7, 5, 7}, array);
    }
}