此專案是在資策會與四人共同開發的網站</br>
gosport是運動為主的社群網站</br>
不管你要找人打球還是要聊天.租場地還是要組建球隊通通沒問題</br>
我負責的部分是首頁的所有部分</br>
主要是以react來輸出畫面</br>
後端則是以nodejs來撰寫api再到mysql抓資料</br>
----------以下功能介紹---------</br>
1.會員註冊以及gmail驗證</br>
如果資料庫已經有重複帳號或格式不正確就無法註冊</br>
![註冊xx](https://user-images.githubusercontent.com/121070963/232817425-b3a71e48-5b24-4c2c-8ce7-1f059e06ad4b.jpg)

2.登入
資料庫確定有註冊過的帳號才能登入
![登入](https://user-images.githubusercontent.com/121070963/232817604-69e12892-4fc9-49ce-b433-3342c7dddbfd.jpg)

3.頭貼
抓取資料庫裡的頭貼顯示出來(沒設定頭像則是顯示系統圖示)
![頭貼](https://user-images.githubusercontent.com/121070963/232818057-b7c521f6-79a4-4c93-a072-2efcee8be8ae.jpg)

4.即時聊天
使用socket.io來達成 client端與surver端的即時雙向通訊
![即時聊天](https://user-images.githubusercontent.com/121070963/232818293-b71870ef-5cc6-471b-bb0f-5b36e7e69dd6.jpg)

5. 訊息跑馬燈
即時聊天送出訊息會以跑馬燈方式顯示在上方
![聊天跑馬燈](https://user-images.githubusercontent.com/121070963/232818655-302efae3-fcef-45d6-a0a5-f74da3d99e59.jpg)

以下為另一位使用者視角
![即時聊天2](https://user-images.githubusercontent.com/121070963/232818782-a34b0bae-fc2b-4a98-b69c-88961bb37e1f.jpg)

6.及時天氣
依照使用者選擇的地取透過opendataapi來抓取當下的氣象溫度並顯示在畫面上
![天氣](https://user-images.githubusercontent.com/121070963/232819087-bee75eab-b0a3-476a-9f4e-6a8d8e6f0967.jpg)

7.使用者選好條件後透過cookie來傳遞使用者選擇條件給另一位夥伴
![cooke](https://user-images.githubusercontent.com/121070963/232819501-ba242b8c-86ee-4d8f-9653-8240598d55ba.jpg)

