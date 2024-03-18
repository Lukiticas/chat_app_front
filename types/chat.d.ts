type MessageStatus = "sent" | "delivered" | "read" | "error";
type MessageContentTypes = "text" | "image" | "audio" | "video" | "file" | "location" | "contact";

interface Chat {
    id: string;
    name: string;
    isGroup: boolean;
}

interface User {
    id: string;
    name: string;
    avatar: string;
}

interface ChatMember extends User {
    isOnline: boolean;
}

interface Message {
    id: string;
    chatId: string;
    senderId: string;
    content: string;
    color: string;
    contentType: MessageContentTypes;
    timestamp: string;
    status: MessageStatus;
}

interface ChatBody extends Chat {
    messages: Message[];
    members: ChatMember[];
    color: string;
}

interface ChatListItem extends Chat {
    lastMessage: string;
    lastMessageTime: string;
    isRead: boolean;
    unreadCount: number;
}

interface BaseOption {
    name: string;
    value: string;
}

interface OrderOption extends BaseOption {}
