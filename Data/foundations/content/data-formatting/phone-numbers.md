
# Phone Numbers

---

Numbers must be stored in the following format after any component validation.

  
**Number format**  
Raw number to formats:   
  
Valid  
- 971543374384  
- +971543374384  
- +48 (12) 3/4/5/6/7/8/9  
  
Display:   
+971 54 337 4384  
  
**Code**  
Use pipe in the common library `UniPhoneNumberFormatPipe`  
  
**Usage example in the template**  
```plain  
<div>
  {{ phoneNumberVariable | uniPhoneNumberFormat }}
</div>  
```  
Utility function `PhoneNumberUtils.format(value);`  
