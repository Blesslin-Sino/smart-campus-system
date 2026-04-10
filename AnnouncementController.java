package com.smartcampus.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/announcements")
@CrossOrigin(origins = "http://localhost:3000")
public class AnnouncementController {

    @GetMapping("/")
    public List<Map<String, String>> getAnnouncements() {
        List<Map<String, String>> announcements = new ArrayList<>();

        announcements.add(Map.of(
                "title", "Exam Notice",
                "message", "Mid-semester exams begin next Monday."));
        announcements.add(Map.of(
                "title", "Workshop",
                "message", "AI workshop on Friday at 2 PM in Seminar Hall."));
        announcements.add(Map.of(
                "title", "Holiday",
                "message", "Campus will remain closed on Tuesday."));

        return announcements;
    }
}