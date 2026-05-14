---
title: "Date & Time"
sidebar:
  order: 1
---

---

> Some extra info:  
> Time and date strings should never be localized manually by a translator as time and date strings should be tied to a user’s locale (country and language) not their language. Hardcoding time and date content is bad practice and creates a bad international customer experience.

### Abbreviations

Use these abbreviations when the space is limited in English. Arabic Days and Months doesn’t use abbreviation and must be written complete.

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Days | Abbreviation English | Abbreviation Arabic |  
| Monday  | Mon | الإثنين |  
| Tuesday  | Tue | الثلاثاء |  
| Wednesday  | Wed | الأربعاء |  
| Thursday  | Thu | الخميس |  
| Friday | Fri | الجمعة |  
| Saturday | Sat | السبت |  
| Sunday | Sun | الأحد |  


  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Months | Abbreviation English | Abbreviation Arabic |  
| January | Jan | يناير |  
| February  | Feb | فبراير |  
| March | Mar | مارس |  
| April  | Apr | أبريل |  
| May | May | مايو |  
| June | Jun | يونيو |  
| July | Jul | يوليو |  
| August | Aug | أغسطس |  
| September | Sep | سبتمبر |  
| October | Oct | أكتوبر |  
| November | Nov | نوفمبر |  
| December | Dec | ديسمبر |  


---

### Date formats

> Be warned:  
> Brackets () are only used to visualize properly the arabic content order in documentation. It must not be visible in the UI.

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
|  | English | Arabic |  
| Longest  | Tuesday, September 12, 1952 | الثلاثاء، 12 سبتمبر 1952 |  
| Long | Tuesday, Sept 12, 1952 | 1952 (سبتمبر) (12) |  
| Medium | Sept 12, 1952 | Use long date |  
| Short | Sep 12 | (سبتمبر) (12) |  


[Storybook documentation](http://storybook.dev.unifonic.com.s3-website.me-south-1.amazonaws.com/?path=/docs/data-formats-date--docs)

---

### Numerical dates

If it’s absolutely necessary to express a date in numerical date format, use the format `DD/MM/YYYY`, and separate the elements by using slash.

`08/04/2022`

[Storybook documentation](http://storybook.dev.unifonic.com.s3-website.me-south-1.amazonaws.com/?path=/docs/data-formats-date--docs)

---

### Using “From” and “To”

  
| Column 1 | Column 2 |  
| --- | --- |  
| English | Arabic |  
| From 2015 to 2019<br> | من 2015 إلى 2019 |  
| *When dates belong to the current year*<br><br><br>From Jan 9 to Sept 12 | *When dates belong to the current year*<br>EN: *From Jan 9 to Sept 12*<br><br>من 9 يناير إلى 12 سبتمبر |  
| *When dates belong to a different year*<br><br><br>From Jan 8, 2006 to Sept 12, 2007 | *When dates belong to a different year*<br>EN: *From January 8, 2006 to September 12, 2007*<br><br>من 8 يناير 2006 إلى 12 سبتمبر 2007 |  


[From to date (Date Range) Storybook documentation](http://storybook.dev.unifonic.com.s3-website.me-south-1.amazonaws.com/?path=/docs/data-formats-date-range--docs)

---

### Using date and time together

This is used when displaying both the date and the time of day. For example, in historical versions of pages. To do this use the following formats (Time is displayed in 24 hours format)

> Be warned:  
> Brackets () are only used to visualize properly the arabic content order in documentation. It must not be visible in the UI.

  
| Column 1 | Column 2 |  
| --- | --- |  
| English | Arabic |  
| MMM dd, yyyy HH:mm<br>Example in English: Sep 14, 2006 - 18:35<br>Example in Arabic: (18:35) - (2006) (سبتمبر) (14) | Month dd, yyyy HH:mm<br>Example in English: September 14, 2006 - 18:35<br>Example in Arabic: (18:35) - (2006) (سبتمبر) (14) |  
| dd, HH:mm<br>Example in English: Mon, 18:35<br>Example in Arabic: 18:35 ،الإثنين | Day, HH:mm<br>Example in English: Monday, 18:35<br>Example in Arabic: 18:35 ،الإثنين |  


[Storybook documentation](http://storybook.dev.unifonic.com.s3-website.me-south-1.amazonaws.com/?path=/docs/data-formats-datetime--docs)

---

### Relative date and time

It’s important that you express date and time information as you would speak in conversation when the situation allows for it. Use relative date and time when the user doesn’t need exact date of the event happening.

> Be warned:  
> Brackets () are only used to visualize properly the arabic content order in documentation. It must not be visible in the UI.

  
| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |  
| --- | --- | --- | --- | --- |  
| Description | Display English | Display Arabic | When limited space (English) | When limited space (Arabic) |  
| Within the last few seconds | just now | الآن | now | الآن |  
| Within the last minute | a minute ago | منذ دقيقة | 1 m | (د) (1) |  
| Within 59 minutes | x minutes ago | منذ () دقيقة | X m | (د) (10) |  
| 60 - 120 minutes ago | 1 hour ago | منذ ساعة | 1 h | (س) (1) |  
| x hours ago | x hours ago | منذ () ساعة | X h | (س) (10) |  
| 1 day ago | yesterday | أمس | 1 d | (يوم) (1) |  
| 1 day ago (with time) | yesterday at 5:05 pm | أمس الساعة 5:05 مساءً | n/a |  |  
| 2 days ago < 7 days | x days ago | منذ () أيام | Use the truncated date (Aug 8) | (أغسطس) (8) |  
| 7 days ago | 1 week ago | منذ () أسبوع | Use the truncated date (Aug 8) | (أغسطس) (8) |  
| > 7 days ago | Date stamp: "August 8, 2018" | (2018) (أغسطس) (8) | Use the truncated date (Aug 8) | (أغسطس) (8) |  


[Relative date Storybook documentation](http://storybook.dev.unifonic.com.s3-website.me-south-1.amazonaws.com/?path=/docs/data-formats-relative-date--docs)

  
| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |  
| --- | --- | --- | --- | --- |  
| Description | Display English | Display Arabic | When limited space (English) | When limited space (Arabic) |  
| Within the next few seconds | shortly | قريبا | now | الآن |  
| In the next minute | In 1 minute | خلال ١ دقيقة | in 1 m | خلال 1 د |  
| In the next 60 minutes | In x minutes | خلال () دقيقة | in X m | خلال () د |  
| In x hours | In 1 hour | خلال ١ ساعة | in 1 hr | خلال 1 |  
| x hours ago | In x hours | خلال () ساعة | in X hr | خلال () س |  
| In 1 day (by date, not hours) | tomorrow | غداََ | Use the truncated date (Aug 8) | في 1 يوم |  
| In 2 to 7 days | In x days | خلال () أيام |  |  |  
| In 7 days | In 1 week | خلال () أسبوع |  |  |  
| In > 7 days | Date stamp: "August 8, 2018" | في 8 أغسطس 2018 |  |  |  
| > 7 days ago | Date stamp: "August 8, 2018" | قبل 8 أغسطس 2018 |  |  |  


[Relative date Storybook documentation](http://storybook.dev.unifonic.com.s3-website.me-south-1.amazonaws.com/?path=/docs/data-formats-relative-date--docs)

---

### Time

Time will always be displayed in 24-hour time format in English and Arabic

`20:34`