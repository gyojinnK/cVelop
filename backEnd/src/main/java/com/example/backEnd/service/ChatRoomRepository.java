package com.example.backEnd.service;


import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;



@Repository
public class ChatRoomRepository {
    private Map<String,ChatRoom> chatRoomMap;

    @PostConstruct
    private void init() {
        chatRoomMap = new LinkedHashMap<>();
    }

    public List<ChatRoom> findAllRoom() {
        // 채팅방 생성순서를 최근 순으로 반환
        List chatRooms = new ArrayList<>(chatRoomMap.values());
        Collections.reverse(chatRooms);
        return chatRooms;
    }

    // 채팅방 번호로 조회
    public ChatRoom findRoomById(String roomid) {
        return chatRoomMap.get(roomid);
    }

    // 채팅방 생성 : 고유의 채팅방 id를 가진 채팅방객체 생성
    public ChatRoom createChatRoom(String name) {
        ChatRoom chatRoom  = ChatRoom.create(name);
        chatRoomMap.put(chatRoom.getRoomId(), chatRoom);
        return chatRoom;
    }
}
