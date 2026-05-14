
# Numbers

---

We use only **integer**, **percentage** and **currency** numbers. Numbers will be displayed in English and Arabic in the same way.

  
**Examples**  
> Be warned:  
> Brackets () are only used to visualize properly the arabic content order in documentation. It must not be visible in the UI.  
### Integer  
  
  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Thousands | Millions | Billions |  
| Number to format: 1567<br>Display in English: 1,567<br>Display in Arabic: Show Standard | Number to format: 1567000<br>Display in English: 1,567,000<br>Display in Arabic: Show Standard | Number to format: 1567000000<br>Display in English: 1,567,000<br>Display in Arabic: Show Standard |  
  
  
  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Thousands | Millions | Billions |  
| Number to format: 1567<br>Display in English: 1.57K<br>Display in Arabic: (ألف) (1.57) | Number to format: 1567000<br>Display in English: 1.57M<br>Display in Arabic: (مليون) (1.57) | Number to format: 1567000000<br>Display in English: 1,57B<br>Display in Arabic: (مليار) (1.57) |  
  
  
  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Thousands | Millions | Billions |  
| Number to format: 1567<br>Display in English: 1.57 thousand<br>Display in Arabic: (ألف) (1.57) | Number to format: 1567000<br>Display in English: 1.57 million<br>Display in Arabic: (مليون) (1.57) | Number to format: 1567000000<br>Display in English: 1.57 billion<br>Display in Arabic: (مليار) (1.57) |  
  
  
**Code**  
To implement each different number format use `UniNumberService`  
```plain  
UniNumberService.formatNumber
UniNumberService.formatShortNumber
UniNumberService.formatLongNumber  
```  
