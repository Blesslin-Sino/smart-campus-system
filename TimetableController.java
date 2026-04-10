package com.smartcampus.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/timetable")
@CrossOrigin(origins = "http://localhost:3000")
public class TimetableController {

    @GetMapping("/")
    public List<Map<String, String>> getTimetable() {

        List<Map<String, String>> timetable = new ArrayList<>();

        timetable.add(Map.of("day", "Monday", "subject", "Math", "time", "9:00 AM"));
        timetable.add(Map.of("day", "Tuesday", "subject", "Physics", "time", "10:00 AM"));
        timetable.add(Map.of("day", "Wednesday", "subject", "Chemistry", "time", "11:00 AM"));
        timetable.add(Map.of("day", "Thursday", "subject", "AI", "time", "12:00 PM"));
        timetable.add(Map.of("day", "Friday", "subject", "Lab", "time", "2:00 PM"));

        return timetable;
    }
}