PROTO­VERES — CHAT NOTIFICATIONS + VIDEO

Base: Protoveres_Auth_Session_FINAL_FULL_CHAT_AUDITED_REPAIRED

Bổ sung nhỏ trên hệ thống chat đang hoạt động:
- Thông báo tin nhắn mới theo từng người gửi.
- Thông báo cho text, ảnh, GIF và video.
- Nút "Đến đoạn chat" mở đúng cuộc trò chuyện.
- Có badge NEW cho thông báo chưa đọc.
- Gửi video từ máy tính hoặc điện thoại.
- Nút Video trên điện thoại dùng camera capture nếu trình duyệt hỗ trợ.
- Video lưu ở Firebase Storage, metadata tin nhắn lưu Firestore.
- Không thay đổi cấu trúc Trang chủ/Login/Tài khoản/Community cũ.

FIREBASE RULES:
1) Firestore → Rules: publish firestore.rules trong gói này.
2) Storage → Rules: publish storage.rules trong gói này.
