package com.example.algorithmvisualization.Controllers;

import com.example.algorithmvisualization.SortingAlgorithms.ArrayData;
import com.example.algorithmvisualization.SortingAlgorithms.QuickSort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/algorithms")
public class AlgorithmController {

    @GetMapping("/quicksort")
    public int[] getQuickSortPattern() {
        int[] array = ArrayData.getInstance().getArray();
        return QuickSort.quickSortOut(array);
    }
}
