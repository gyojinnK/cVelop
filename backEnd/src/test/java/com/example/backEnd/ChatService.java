/* package com.example.backEnd;

import com.example.backEnd.service.ChatRoom;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.*;


@Slf4j
@RequiredArgsConstructor        // 의존성 주입
@Service
public class ChatService {
    private final ObjectMapper objectMapper;
    private Map<String, ChatRoom> chatRooms;        // 채팅방 정보

    @PostConstruct              // 의존성 주입 후 초기화 하는 메서드
    private void init() {
        chatRooms = new LinkedHashMap<>();
    }

    // 채팅방 전체조회 --> 채팅방 map 에 담긴 정보 조회
    public List<ChatRoom> findAllRoom() {
        return new ArrayList<>(chatRooms.values());
    }

    // 채팅방 번호로 조회
    public ChatRoom findRoomById(String roomid) {
        return chatRooms.get(roomid);
    }

    // 채팅방 생성 --> 고유의 채팅방 id 를 가진 채팅방 객체 생성하고, 채팅방 map 에 추가
    public ChatRoom createRoom(String name) {
        String randomid = UUID.randomUUID().toString();         // UUID 객체를 사용해 랜덤한 고유값 생성
        ChatRoom chatRoom = ChatRoom.builder()
                .roomId(randomid)
                .name(name)
                .build();
        chatRooms.put(randomid, chatRoom);
        return chatRoom;
    }
    // 메시지 전송 --> 지정한 websocket 에 메세지 발송
    public <T> void sendMessage(WebSocketSession session, T message) {
        try {
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        }   catch (IOException e) {
            e.printStackTrace();
            log.error(e.getMessage(), e);
        }
    }
}
 */