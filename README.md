# blockchain

B1Mở CMD / Terminal tại thư mục gốc 
rồi gõ npm create vite@latest frontend
Tiếp đến Chọn:
Framework: React
Variant: JavaScript
B2 chạy:
cd frontend
npm install
npm install ethers
sau bước này sẽ tự tạo 
frontend/
├── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
Tiếp đến tạo thủ công các folder, file theo structure đã để ở 
sau đó chạy tiếp : npm run dev
sau khi chạy sẽ dính lỗi (InvoiceToken) : FRONTEND đang đòi ABI của smart contract, nhưng BACKEND chưa có, bạn sẽ phải match chúng lại 
