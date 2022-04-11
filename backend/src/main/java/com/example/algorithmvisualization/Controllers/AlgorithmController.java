package com.example.algorithmvisualization.Controllers;

import com.example.algorithmvisualization.SortingAlgorithms.Animation;
import com.example.algorithmvisualization.SortingAlgorithms.ArrayData;
import com.example.algorithmvisualization.SortingAlgorithms.QuickSort;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/algorithms")
public class AlgorithmController {

    @Autowired
    private QuickSort quickSort;

    @GetMapping("/quicksort")
    public List<Animation> getQuickSortPattern() throws JsonProcessingException {
        List<Animation> animations = quickSort.quickSortOut(ArrayData.getInstance().getArray());
        return animations;
    }
}
