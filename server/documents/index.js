
module.exports = ({ invoiceNo, customerName, des1, qty1, pr1, tot1, des2, qty2, pr2, tot2, des3, qty3, pr3, tot3, des4, qty4, pr4, tot4, des5, qty5, pr5, tot5, des6, qty6, pr6, tot6, total, discount }) => {
   const today = new Date();
   if (tot2 != 0) {
      tot2 = tot2;
   } else
      tot2 = '';

   if (tot3 === 0) {
      tot3 = "";
   } else
      tot3 = tot3;
   if (tot4 === 0) {
      tot4 = "";
   } else
      tot4 = tot4;
   if (tot5 === 0) {
      tot5 = "";
   } else
      tot5 = tot5;
   if (tot6 === 0) {
      tot6 = "";
   } else
      tot6 = tot6;



   return `
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>D'Front Creations</title>
      <style>
 
      .frame {
         height: 750px;
         width: 550px;
         max-width: 550px;
         margin: auto;
         
         background-image: url("https://github.com/tharindu4903/Invoice-Creator/blob/master/server/documents/invoice%20temp-min.jpg?raw=true");
         background-repeat: no-repeat;
         background-position: center;
         background-size: 550px 750px;

      }

      .invoice-box {
         position: relative;
        
         width: 550px;
         height: 750px;
         max-width: 550px;
        
         box-shadow: 0 0 10px rgba(0, 0, 0, .15);
         font-size: 9px;
         line-height: 24px;
         font-family: 'Helvetica Neue', 'Helvetica';
         color: #555;
      }

      .justify-center {
         text-align: center;
      }

      table {
         position: relative;
         top: 250px;
         left: -4px;
         border-collapse: collapse;
         width: 83%;
         
      }

      th,
      td {
         padding: 4px;
      }

      .details {
         position: relative;
         top: 173px;
         left: 379px;

      }

      .details p {
         
         height: 5px;

      }

      .price {
         position: relative;
         top: 159px;
         right: 55px;
      }

      .price p {
         height: 8.5px;
         text-align: right;
      }

      .fullAmount {
         position: relative;
         top: 175px;
         right: 53px;
      }

      .fullAmount p {
         margin: 4px;
         text-align: right;
      }

      .to {
         position: relative;
         top: 110px;
         left: 56px;
      }

      .to p {
         margin: 4px;
         text-align: right;
      }

      .tablebox {
         width: 100%;
         height: 280px;
      }

  
   </style>
   </head>
   <body>
   <div class="resize">
      <div class="frame">
      <div class="invoice-box">
       <div class="details">
        <p >${invoiceNo}</p>
        <p >${`0${today.getDate()}. 0${today.getMonth() + 1}. ${today.getFullYear()}`}</p>
     </div>
     <div class="tablebox">
         <table align="center" >
            <tr>
               <td width=50%>${des1}</td>
               <td width=48px >${pr1}</td>
               <td width=45px style="text-align:center ;">${qty1}</td>
               <td width=48px style="text-align:right ;">${tot1}</td>
            </tr>
            <tr class="hide">
              <td width=50% >${des2}</td>
              <td width=48px>${pr2}</td>
              <td width=45px style="text-align:center ;">${qty2}</td>
              <td width=48px style="text-align:right ;">${tot2}</td>
           </tr>
           <tr>
              <td width=50%>${des3}</td>
              <td width=48px>${pr3}</td>
              <td width=45px style="text-align:center ;">${qty3}</td>
              <td width=48px style="text-align:right ;">${tot3}</td>
           </tr>
           <tr>
              <td width=50%>${des4}</td>
              <td width=48px>${pr4}</td>
              <td width=45px style="text-align:center ;">${qty4}</td>
              <td width=48px style="text-align:right ;">${tot4}</td>
           </tr>
           <tr>
              <td width=50%>${des5}</td>
              <td width=48px>${pr5}</td>
              <td width=45px style="text-align:center ;">${qty5}</td>
              <td width=48px style="text-align:right ;">${tot5}</td>
           </tr>
           <tr>
              <td width=50%>${des6}</td>
              <td width=48px>${pr6}</td>
              <td width=45px style="text-align:center ;">${qty6}</td>
              <td width=48px style="text-align:right ;"> ${tot6}</td>
           </tr>
           
         </table>
         </div>
         <div class="price">
           <p style="text-align: right ;">Rs. ${total}</p>
           <p style="text-align: right ;">Rs. ${discount}</p>
        </div>
        <div class="fullAmount">
           <p style="text-align: right ;">Rs. ${total - discount}</p>
        </div>
        <div class="to">
           <p style="text-align: left ;">${customerName}</p>
        </div>
         
      </div>
     </div>
     </div>
   </body>
</html>
    `;
};