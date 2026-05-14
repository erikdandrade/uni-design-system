---
title: "Currency"
sidebar:
  order: 4
---

---

The Unifonic Platform supports only two currencies, USD and SAR. The currency format standard used is [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217).

> Be warned:  
> Brackets () are only used to visualize properly the arabic content order in documentation. It must not be visible in the UI.

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Format | English | SAR |  
| Short | “Value&lowbar;Decimal” + “Currency” | “Currency” + “Value&lowbar;Decimal” |  
| Standard | “Value&lowbar;Thousands” + “Currency” | “Currency” + “Value&lowbar;Thousands”  |  
| Long | “Value&lowbar;Decimal” + Denomination + “Currency” | “Currency” + Denomination + “Value&lowbar;Decimal” |  


### Currency format

  
**Examples**  
  
  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| USD | Thousands | Millions | Billions |  
| Number to format | 1567 | 1567000 | 1567000000 |  
| Display in English | 1.57K USD | 1.57M USD | 1.57B USD |  
| Display in Arabic | (ألف دولار) (1.57) | (مليون دولار) (1.57) | (مليار دولار) (1.57) |  
  
  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| SAR | Thousands | Millions | Billions |  
| Number to format | 1567 | 1567000 | 1567000000 |  
| Display in English | 1.57K SAR | 1.57M SAR | 1.57B SAR |  
| Display in Arabic | (ألف ر.س) (1.57) | (مليون ر.س) (1.57) | (مليار ر.س) (1.57) |  
  
  
  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| USD | Thousands | Millions | Billions |  
| Number to format | 1567 | 1567000 | 1567000000 |  
| Display in English | 1,567 USD | 1,570,000 USD | 1,570,000,000 USD |  
| Display in Arabic | (دولار) (1,577) | (دولار) (1,570,000) | (دولار) (1,570,000,000) |  
  
  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| SAR | Thousands | Millions | Billions |  
| Number to format | 1567 | 1567000 | 1567000000 |  
| Display in English | 1,577 SAR | 1,570,000 SAR | 1,570,000,000 SAR |  
| Display in Arabic | (ر.س) (1,577) | (ر.س) (1,570,000) | (ر.س) (1,570,000,000) |  
  
  
  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| USD | Thousands | Millions | Billions |  
| Number to format | 1567 | 1567000 | 1567000000 |  
| Display in English | 1.57 thousand USD | 1.57 million USD | 1.57 billion USD |  
| Display in Arabic | (ألف دولار) (1.57) | (مليون دولار) (1.57) | (مليار دولار) (1.57) |  
  
  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| SAR | Thousands | Millions | Billions |  
| Number to format | 1567 | 1567000 | 1567000000 |  
| Display in English | 1.57 thousand SAR | 1.57 million SAR | 1.57 billion SAR |  
| Display in Arabic | (ألف ر.س) (1.57) | (مليون ر.س) (1.57) | (مليار ر.س) (1.57) |  
  
  
**Code**  
Service responsible for price formatting  
```plain  
UniPriceService  
```  
Price formats  
```plain  
UniPriceService.getShortPrice
UniPriceService.getPrice
UniPriceService.getLongPrice  
```  
