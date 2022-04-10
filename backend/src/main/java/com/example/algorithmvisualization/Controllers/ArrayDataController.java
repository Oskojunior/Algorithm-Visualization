package com.example.algorithmvisualization.Controllers;


import com.example.algorithmvisualization.SortingAlgorithms.ArrayData;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/array_data")
public class ArrayDataController {

    @GetMapping("/reset")
    public int[] getData() {
        return ArrayData.getInstance().fillArray();
    }
}
