package com.example.algorithmvisualization.SortingAlgorithms;

import lombok.Getter;

import java.util.Random;

public class ArrayData {

    private static ArrayData arrayData = null;

    @Getter
    private int[] array;

    private ArrayData() {
    }

    public static ArrayData getInstance(){
        if(arrayData == null){
            arrayData = new ArrayData();
        }
        return arrayData;
    }

    public int[] fillArray() {
        Random random = new Random();
        int[] array = new int[310];
        for (int i = 0; i < 310; i++) {
            array[i] = random.nextInt(5,730);
        }
        this.array = array;
        return this.array;
    }

    public static void swap(int i, int j, int[] array) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
