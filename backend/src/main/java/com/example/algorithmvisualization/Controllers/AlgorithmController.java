package com.example.algorithmvisualization.Controllers;

import com.example.algorithmvisualization.SortingAlgorithms.ArrayData;
import com.example.algorithmvisualization.SortingAlgorithms.QuickSort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AlgorithmController {


    @GetMapping
    public int[] getQuickSortPatter() {
        int[] array = ArrayData.fillArray();
        return QuickSort.quickSortOut(array);
    }
}
