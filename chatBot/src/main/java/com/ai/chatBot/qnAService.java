package com.ai.chatBot;

import com.ai.chatBot.entity.ChatMessage;
import com.ai.chatBot.repo.ChatHistoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
public class qnAService {
    @Autowired
    private ChatHistoryRepo chatHistoryRepo;
    @Value("${gemini.api.url}")
 private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;

    public qnAService(WebClient webClient) {
        this.webClient  = WebClient.builder().build();
    }

  public  String getAnswer(String question) {
        Map<String, Object> requestBody = Map.of(
          "contents",new Object[]{
                  Map.of("parts",new Object[]{
                          Map.of("text",question)
                  })
                }
        );

         String response=   webClient.post()
                    .uri(geminiApiUrl)
                    .header("Content-Type", "application/json")
                    .header("X-goog-api-key", geminiApiKey)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

      ChatMessage message = ChatMessage.builder()
              .question(question)
              .answer(response)
              .timestamp(LocalDateTime.now())
              .build();
      chatHistoryRepo.save(message);

        return response;
    }
    public List<ChatMessage> getAllMessages() {
        return chatHistoryRepo.findAll();
    }
}
