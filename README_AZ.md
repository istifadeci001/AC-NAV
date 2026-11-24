# AC Nav

## Nə edir
- GPS naviqasiya (OSRM marşrut, Nominatim axtarış, Overpass: STOP, yol ver, piyada keçidi, svetofor, dairə, zolaq və sürət limiti).
- Səsli xəbərdarlıq (Android TTS, yoxdursa brauzer səsi, ən sonda siqnal).
- 📷 Kamera (telefonun içində, API açarı yoxdur):
  - COCO-SSD: 80 obyekt (maşın, adam, svetofor, heyvan və s.), adını və harada olduğunu (solda / qabaqda / sağda) deyir. "🧠 Hər şey" düyməsi ilə hamısı, "🛣 Yalnız yol" ilə yalnız yol obyektləri.
  - YOLO12n (StreetSignSense): 63 yol nişanı. Hər nişan üçün sürücüyə nə etməli olduğu deyilir və ekranda rəngli lövhə çıxır.
  - Ekranın altındakı yaşıl sətir diaqnostikadır: nişan modelinin yüklənib-yüklənmədiyi, çıxış formatı və ən yüksək skor.

## Məlum məhdudiyyətlər
- COCO-SSD çəkiləri (model faylı) hələ internetdən yüklənir; tf.js kitabxanası və Leaflet APK-ya daxildir.
- Nişan modeli Avropa nişanları üzərində öyrədilib, Azərbaycan nişanlarını səhv tanıya bilər.
- Kamera yaxından gələn maşının sürətini və istiqamətini bilmir, yalnız harada göründüyünü deyir.

## APK
GitHub → **Actions → AC Nav Android APK → Run workflow**. Hazır fayl **Artifacts → AC-Nav-apk**.
Real telefonda GPS, kamera, səs və naviqasiya ayrıca yoxlanmalıdır.
