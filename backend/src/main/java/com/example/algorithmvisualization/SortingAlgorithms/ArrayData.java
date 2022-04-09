package com.example.algorithmvisualization.SortingAlgorithms;

import lombok.Getter;

import java.util.Random;

public class ArrayData {

    public static int[] fillArray() {
        Random random = new Random();
        int[] array = new int[310];
        for (int i = 0; i < 310; i++) {
            array[i] = random.nextInt(5,730);
        }
        return array;
    }

    public static void swap(int i, int j, int[] array) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
