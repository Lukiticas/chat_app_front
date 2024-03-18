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
    avatar: ?string;
}

interface ChatListItem extends Chat {
    lastMessage: string;
    lastMessageTime: string;
    isRead: boolean;
    unreadCount: number;
}

type ChatMessageActivityStatus = "typing" | "recording" | "idle" | "online" | "offline";

interface ChatMessageActivity {
    userId: string;
    user: ChatMember;
    status: ChatMessageActivityStatus;
}

interface BaseOption {
    name: string;
    value: string;
}

interface OrderOption extends BaseOption {}
