# Bản vá phần công thức Ô 2 — O-Ta-Ko Theory

Bản vá này được chuẩn bị cho repo `Protoveres1secon/Otako-Theory-Research`, file `index.html`.

## Cách ghép vào index.html

1. Mở `index.html`.
2. Trong phần `<style> ... </style>`, dán toàn bộ `o2-styles.css` ngay trước thẻ `</style>`.
3. Tìm dòng bắt đầu phần công thức:
   `<section class="section" id="formulas"><h2>5. Formulas & Measurement</h2>`
   Dán toàn bộ `o2-section.html` ngay sau thẻ `</h2>`.
4. Dán nội dung `o2-script.js` trước `</body>`, sau các script hiện có.
5. Lưu và thử phần Công thức trên máy tính/điện thoại. Ô 2 có biểu thức chính xác, giá trị thập phân và máy tính nhập chu vi.

## Công thức được thêm

`K₂ = √2/2 + (9/4)·arcsin(1/3) − 1/2`

`A₂ = s² = C²/(9π²)`

`S₂ = K₂·A₂`

`T₂ = S₂/A₂ = K₂ ≈ 97,1739827458322%`

Máy tính dùng cùng đơn vị cho chu vi, bán kính, đường kính và cạnh ô; diện tích sẽ hiển thị theo đơn vị bình phương.

**Trạng thái:** đây là bản vá mã nguồn; nó chưa được tự động đưa lên Firebase Hosting. Cần lưu thay đổi trong repo và deploy `index.html` lên hosting để cập nhật app đang chạy.
