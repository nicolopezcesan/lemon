
KAFKA TOPIC MESSAGES
-
docker exec -it lemon-challenge-kafka-1 bash



# SEND MESSAGE - SWAP_TRANSACTION
echo '{"transactionId":"1000","transactionType":"SWAP_TRANSACTION","userId":"0001","status":"COMPLETED","createdAt":"1725045651739","data":{"amount":250,"baseCoin":"USDT","quoteCoin":"EHT","fee":0.10021}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction

# SEND MESSAGE - DEPOSIT_TRANSACTION
echo '{"transactionId":"2313","transactionType":"DEPOSIT_TRANSACTION","userId":"0001","status":"COMPLETED","createdAt":"1725045651739","data":{"depositAddress":"0xF742b8F05020203040040440404","amount":400,"currency":"EUR"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction

# SEND MESSAGE - WITHDRAWAL_TRANSACTION
echo '{"transactionId":"9876543210fedcba","transactionType":"WITHDRAWAL_TRANSACTION","userId":"user24680","status":"COMPLETED","createdAt":"timestamp","data":{"withdrawalAddress":"0xF742b8F0538446632924434546","tx_hash":"0x9f0c89d455cd13c18c4cb1934951126c6d7838342c65dc134930e274","amount":"1900","fee":0.0349901}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction


# SEND MESSAGE - BILL_PAYMENT_TRANSACTION
echo '{"transactionId":"1000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"COMPLETED","createdAt":"1725045651739","data":{"companyName":"Edenor","accountServiceId":"123456","amount":1000,"currency":"ARS"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction

# SEND MESSAGE - MASIVE BILL_PAYMENT_TRANSACTION
echo '{"transactionId":"7000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"IN_PROGRESS","createdAt":1641017600,"data":{"companyName":"Edenor","accountServiceId":"123456","amount":2000,"currency":"USD"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"8000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0002","status":"FAILED","createdAt":1643603200,"data":{"companyName":"Chimisay","accountServiceId":"789012","amount":1200,"currency":"EUR"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"9000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0003","status":"IN_PROGRESS","createdAt":1646188800,"data":{"companyName":"Edenor","accountServiceId":"123456","amount":1800,"currency":"GBP"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"10000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"COMPLETED","createdAt":1648774400,"data":{"companyName":"Gasnor","accountServiceId":"345678","amount":900,"currency":"CLP"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"11000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0002","status":"FAILED","createdAt":1651350000,"data":{"companyName":"Chimisay","accountServiceId":"789012","amount":600,"currency":"JPY"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"12000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0003","status":"IN_PROGRESS","createdAt":1653935400,"data":{"companyName":"Edenor","accountServiceId":"123456","amount":2200,"currency":"USD"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"13000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"FAILED","createdAt":1656521000,"data":{"companyName":"Chimisay","accountServiceId":"789012","amount":800,"currency":"EUR"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"14000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0002","status":"IN_PROGRESS","createdAt":1659106600,"data":{"companyName":"Edenor","accountServiceId":"123456","amount":1600,"currency":"GBP"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"15000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0003","status":"COMPLETED","createdAt":1661682200,"data":{"companyName":"Gasnor","accountServiceId":"345678","amount":700,"currency":"CLP"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"16000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"FAILED","createdAt":1664257800,"data":{"companyName":"Chimisay","accountServiceId":"789012","amount":400,"currency":"JPY"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"17000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0002","status":"IN_PROGRESS","createdAt":1666843400,"data":{"companyName":"Edenor","accountServiceId":"123456","amount":2400,"currency":"USD"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"18000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0003","status":"FAILED","createdAt":1669429000,"data":{"companyName":"Chimisay","accountServiceId":"789012","amount":1000,"currency":"EUR"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"19000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"IN_PROGRESS","createdAt":1672014600,"data":{"companyName":"Edenor","accountServiceId":"123456","amount":2000,"currency":"GBP"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"20000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0002","status":"COMPLETED","createdAt":1674590200,"data":{"companyName":"Gasnor","accountServiceId":"345678","amount":500,"currency":"CLP"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"21000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0003","status":"FAILED","createdAt":1677165800,"data":{"companyName":"Chimisay","accountServiceId":"789012","amount":300,"currency":"JPY"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"22000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"IN_PROGRESS","createdAt":1679751400,"data":{"companyName":"Edenor","accountServiceId":"123456","amount":2600,"currency":"USD"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"23000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0002","status":"FAILED","createdAt":1682337000,"data":{"companyName":"Chimisay","accountServiceId":"789012","amount":950,"currency":"EUR"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"24000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0003","status":"IN_PROGRESS","createdAt":1684922600,"data":{"companyName":"Edenor","accountServiceId":"123456","amount":1900,"currency":"GBP"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"25000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"COMPLETED","createdAt":1687508200,"data":{"companyName":"Gasnor","accountServiceId":"345678","amount":800,"currency":"CLP"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
echo '{"transactionId":"26000","transactionType":"BILL_PAYMENT_TRANSACTION","userId":"0001","status":"FAILED","createdAt":1690093800,"data":{"companyName":"Chimisay","accountServiceId":"123456","amount":450,"currency":"JPY"}}' | kafka-console-producer --broker-list localhost:9092 --topic new-transaction
