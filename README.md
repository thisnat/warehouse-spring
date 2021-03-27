# warehouse project
**warehouse project** เป็น project ของวิชา ``01418471 Introduction to Software Engineering``
เป็น web application ที่ช่วยในการบริหารจัดการ การนำเข้า/ส่งออกสินค้าในคลังสินค้า (warehouse) โดยมี feature หลักดังนี้
- แสดงรายการสินค้าในคลังทั้งหมด
- สามารถเพิ่มสินค้าเข้าไปในคลัง/update จำนวนสินค้าในคลังได้
- สามารถส่งออกสินค้าในคลังได้ทีละหลายรายการ
- มีการเก็บประวัติการนำเข้า/ส่งออก สินค้าในคลัง
- เมื่อ user ทั่วไป (guest) ทำการนำเข้า/ส่งออกสินค้าจะติดสถานะ `PENDING` ไว้ต้องรอให้ผู้ดูแลระบบอนุมัติรายการนั้นๆ
- ผู้ดูแลระบบสามารถนำเข้า/ส่งออก สินค้าได้ทันที

## setup
- setup backend [warehouse-node](https://github.com/thisnat/warehouse-node)
- clone this project
- import project with your ide
- run the project by your ide `or` by command line using 
#### with maven
```bash
mvn spring-boot:run
```
#### without maven
```bash
chmod +x mvnw
./mvnw spring-boot:run
```
- access at http://localhost:8080/
## admin user
username | password
------------ | -------------
admin | warehouse
admin2 | warehouse
## ui flow
![Ui Flow](https://i.imgur.com/BkSsY97.jpg)
