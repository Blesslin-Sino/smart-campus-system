package com.smartcampus.backend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendanceController {

    private List<String> attendanceList = new ArrayList<>();

    @PostMapping("/mark")
    public String markAttendance(@RequestBody Map<String, String> data) {
        String name = data.get("name");
        attendanceList.add(name + " - Present");
        return "Attendance marked for " + name;
    }

    @GetMapping("/")
    public List<String> getAttendance() {
        return attendanceList;
    }
}