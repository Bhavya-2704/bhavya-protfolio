package com.ai.chatBot;

import com.ai.chatBot.entity.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/qna")
public class AIController {
  @Autowired
  private qnAService  qnAService;
@PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payload){
        String question = payload.get("question");
        String answer = qnAService.getAnswer(question);
        return  ResponseEntity.ok(answer);
    }
    @GetMapping("/history")
    public ResponseEntity<List<ChatMessage>> getHistory() {
        return ResponseEntity.ok(qnAService.getAllMessages());
    }



}
