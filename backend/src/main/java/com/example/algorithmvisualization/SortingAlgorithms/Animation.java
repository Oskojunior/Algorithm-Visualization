package com.example.algorithmvisualization.SortingAlgorithms;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
@Builder
public class Animation {
    private int pivot;
    private int numA;
    private int numB;
    private int action;

    public Animation(int pivot, int numA, int numB, int action) {
        this.pivot = pivot;
        this.numA = numA;
        this.numB = numB;
        this.action = action;
    }

    @Override
    public String toString() {
        return "Animation{" +
                "pivot=" + pivot +
                ", numA=" + numA +
                ", numB=" + numB +
                ", action=" + action +
                '}';
    }
}
