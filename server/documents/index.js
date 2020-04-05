
module.exports = ({ invoiceNo,customerName ,des1 ,qty1 ,pr1,tot1 ,des2 ,qty2 ,pr2,tot2 ,des3 ,qty3 ,pr3,tot3 ,des4 ,qty4 ,pr4 ,tot4,des5 ,qty5 ,pr5,tot5 ,des6 ,qty6 ,pr6 ,tot6,discount,total}) => {
    const today = new Date();
return `
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>D'Front Creations</title>
      <style>
         .frame{           
         height:1100px;
         width: 750px;           
         max-width: 750px;
         margin: auto;
         padding: 30px;
         background-image: url("https://github.com/tharindu4903/invoice/blob/master/invoice%20temp.jpg?raw=true");
         background-repeat: no-repeat;
         background-position: center;
         background-size: cover;
       
         }
          
         .invoice-box {
         position: relative;
         top: -32px;
         left: -30px;
         width: 750px;
         height: 1100px;
         max-width: 750px;
         padding: 30px;
         box-shadow: 0 0 10px rgba(0, 0, 0, .15);
         font-size: 16px;
         line-height: 24px;
         font-family: 'Helvetica Neue', 'Helvetica';
         color: #555;
         }
        
         .justify-center {
         text-align: center;
         }
        table {
           position: relative;
           top: 360px;
           left: -4px;
           border-collapse: collapse;
           width: 90.5%;
        }
        th,td {
           padding: 11.9px;
        }
        .details{
           position: relative;
           top: 244px;
           left: 528px;
           
        }
        .details p{
           margin: .5px;
        

        }
        .price{
           position: relative;
           top: 382px;
           right:49px;    
        }
        .price p{
           margin: 4px;
           text-align: right;
        }
        .fullAmount{
           position: relative;
           top: 407px;
           right:49px;    
        }
        .fullAmount p{
           margin: 4px;
           text-align: right;
        }
        .to{
           position: relative;
           top: 330px;
           left: 52px;    
        }
        .to p{
           margin: 4px;
           text-align: right;
        }

         @media only screen and (max-width: 600px) {
         .invoice-box table tr.top table td {
         width: 100%;
         
         text-align: center;
         }
         .invoice-box table tr.information table td {
         width: 100%;
        
         text-align: center;
         }
         }
      </style>
   </head>
   <body>
      <div class="frame">
      <div class="invoice-box">
       <div class="details">
        <p style="text-align: right: ;">${invoiceNo}</p>
        <p style="text-align: right: ;">${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</p>
     </div>
         <table align="center" >
            <tr>
               <td width=50%>${des1}</td>
               <td width=48px >${pr1}</td>
               <td width=45px style="text-align:center ;">${qty1}</td>
               <td width=48px style="text-align:right ;">${tot1}</td>
            </tr>
            <tr>
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
         <div class="price">
           <p style="text-align: right ;">Rs. ${total}</p>
           <p style="text-align: right ;">Rs. ${discount}</p>
        </div>
        <div class="fullAmount">
           <p style="text-align: right ;">Rs. ${total-discount}</p>
        </div>
        <div class="to">
           <p style="text-align: left ;">${customerName}</p>
        </div>
         
      </div>
     </div>
   </body>
</html>
    `;
};