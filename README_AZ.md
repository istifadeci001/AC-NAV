# AC Nav — yenilənmiş layihə

## Dəyişikliklər
- Claude/Anthropic API inteqrasiyası və API açarı sahəsi çıxarıldı.
- Kamera köməkçisi API-sizdir: canlı kamera görüntüsü cihazda açılır; istifadəçi nişan növünü seçdikdə Azərbaycan dilində izah və səsli xəbərdarlıq alır.
- Kamera rejimi avtomatik süni intellektlə nişan tanımır. Bunun üçün ayrıca offline model və onun lisenziyalı model faylları lazımdır.
- Leaflet xəritə kitabxanası APK yığımı zamanı tətbiqin özünə əlavə olunur; Leaflet-in CDN-dən yüklənməsindən asılılıq aradan qaldırıldı.
- Simulyasiya/naviqasiya başladılarkən əvvəlki timer və GPS izləməsi təmizlənir.
- Dayandır düyməsi əlavə edildi.
- Android manifest üçün internet, GPS və ekranı oyaq saxlamaq icazələri əlavə edildi.

## Pulsuz xidmətlər və internet
- GPS, Android TTS və simulyasiya üçün API açarı tələb olunmur.
- Xəritə plitələri OpenStreetMap, ünvan axtarışı Nominatim, marşrut OSRM, yol nişanı/yol detalları Overpass ictimai xidmətlərindən istifadə edir.
- Bu ictimai serverlər üçün internet lazımdır; istifadə limitləri və əlçatanlıq zəmanəti yoxdur.
- Offline kamera izahı internet tələb etmir, lakin avtomatik obyekt/nişan tanıma etmir.

## APK necə yığılır
GitHub-a layihəni push etdikdən sonra **Actions → APK → Run workflow** seç. Workflow debug APK yaradır. Hazır fayl workflow-un **Artifacts** bölməsində `AC-Nav-apk` adı ilə görünəcək.

## Yoxlama
JavaScript sintaksisi `node --check` ilə yoxlanılıb. Bu mühitdə Android SDK/Gradle build işlədilmədiyi üçün APK burada yaradılmayıb; real Android telefonda GPS, kamera icazəsi, TTS və naviqasiya ayrıca sınaqdan keçirilməlidir.
