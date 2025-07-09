package com.ai.chatBot.repo;

import com.ai.chatBot.entity.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatHistoryRepo  extends JpaRepository<ChatMessage,Long> {
}
