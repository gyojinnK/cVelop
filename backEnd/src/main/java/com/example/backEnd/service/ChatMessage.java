package com.example.backEnd.service;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatMessage {
    // 메시지 타입 : 입장, 채팅
    public enum MessageType {
        ENTER,TALK
    }
    private MessageType type;
    private String roomid;
    private String sender;
    private String message;
}
