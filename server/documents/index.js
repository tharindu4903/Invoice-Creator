
module.exports = ({ name, price1, price2, receiptId }) => {
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
        <p style="text-align: right: ;">invoice no</p>
        <p style="text-align: right: ;">date</p>
     </div>
         <table align="center" >
            <tr>
               <td width=50%>Description</td>
               <td width=48px >price</td>
               <td width=45px style="text-align:center ;">qty</td>
               <td width=48px style="text-align:right ;">total</td>
            </tr>
            <tr>
              <td width=50% >Description</td>
              <td width=48px>price</td>
              <td width=45px style="text-align:center ;">qty</td>
              <td width=48px style="text-align:right ;">total</td>
           </tr>
           <tr>
              <td width=50%>Description</td>
              <td width=48px>price</td>
              <td width=45px style="text-align:center ;">qty</td>
              <td width=48px style="text-align:right ;">total</td>
           </tr>
           <tr>
              <td width=50%>Description</td>
              <td width=48px>price</td>
              <td width=45px style="text-align:center ;">qty</td>
              <td width=48px style="text-align:right ;">total</td>
           </tr>
           <tr>
              <td width=50%>Description</td>
              <td width=48px>price</td>
              <td width=45px style="text-align:center ;">qty</td>
              <td width=48px style="text-align:right ;">total</td>
           </tr>
           <tr>
              <td width=50%>Description</td>
              <td width=48px>price</td>
              <td width=45px style="text-align:center ;">qty</td>
              <td width=48px style="text-align:right ;">total</td>
           </tr>
           
         </table>
         <div class="price">
           <p style="text-align: right ;">subtatal</p>
           <p style="text-align: right ;">discount</p>
        </div>
        <div class="fullAmount">
           <p style="text-align: right ;">total</p>
        </div>
        <div class="to">
           <p style="text-align: left ;">client</p>
        </div>
         
      </div>
     </div>
   </body>
</html>
    `;
};