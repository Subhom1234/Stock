
{
  function success() {
    // Tab to edit
    
    var value1 = parseInt(document.querySelector('input[name="Value"]:checked').value);
    var performence = parseInt(document.querySelector('input[name="Performence"]:checked').value);
var growth = parseInt(document.querySelector('input[name="Growth"]:checked').value);
var profitability = parseInt(document.querySelector('input[name="Profitability"]:checked').value);
var entry_point = parseInt(document.querySelector('input[name="Entry Point"]:checked').value);
var red_flag = parseInt(document.querySelector('input[name="Red Flag"]:checked').value);



var industry_revenue_growth = parseInt(document.querySelector('input[name="Industry Revenue Growth"]:checked').value);

var market_share = parseInt(document.querySelector('input[name="Market Share"]:checked').value);

var valution_according_rivel_compines = parseInt(document.querySelector('input[name="Valution According Rivel Compines"]:checked').value);

var promoter_holding_trend = parseInt(document.querySelector('input[name="Promoter Holding Trend"]:checked').value);

var pledge_holding_trend = parseInt(document.querySelector('input[name="Pledge Holding Trend"]:checked').value);

var mutual_fund_and_forign_institutions_enter_or_not = parseInt(document.querySelector('input[name="Mutual Fund And Forign Institutions Enter or Not"]:checked').value);

var foreign_institutional_holding_trend = parseInt(document.querySelector('input[name="Foreign Institutional Holding Trend"]:checked').value);

var retail_other_holding_trend = parseInt(document.querySelector('input[name="Retail & Other Holding Trend"]:checked').value);

var mutual_fund_holding_trend = parseInt(document.querySelector('input[name="Mutual Fund Holding Trend"]:checked').value);

var market_grip = parseInt(document.querySelector('input[name="Market grip"]:checked').value);


var pe_ratio = parseFloat(document.getElementById('PE Ratio').value);
var output_pe_ratio;
if (pe_ratio <= 0) {
  output_pe_ratio = 0;
}
else if (pe_ratio <= 10) {
  output_pe_ratio = 4;
}
else if (pe_ratio <= 20) {
  output_pe_ratio = 3;
}
else if (pe_ratio < 22) {
  output_pe_ratio = 0.5;
}
else if (pe_ratio >= 22) {
  output_pe_ratio = 0;
}



var sector_pe_ratio = parseFloat(document.getElementById('Sector PE Ratio').value);
var output_sector_pe_ratio;
if (sector_pe_ratio <= 0) {
  output_sector_pe_ratio = 0;
}
else if (sector_pe_ratio <= 10) {
  output_sector_pe_ratio = 4;
}
else if (sector_pe_ratio <= 20) {
  output_sector_pe_ratio = 3;
}
else if (sector_pe_ratio < 22) {
  output_sector_pe_ratio = 0.5;
}
else if (sector_pe_ratio >= 22) {
  output_sector_pe_ratio = 0;
}



var pb_ratio = parseFloat(document.getElementById('PB Ratio').value);
var output_pb_ratio;
if (pb_ratio < 0) {
  output_pb_ratio = 0;
}
else if (pb_ratio <= 1) {
  output_pb_ratio = 3;
}
else if (pb_ratio <= 2) {
  output_pb_ratio = 2;
}
else if (pb_ratio <= 3) {
  output_pb_ratio = 1;
}
else if (pb_ratio <= 3.2) {
  output_pb_ratio = 0.5;
}
else if (pb_ratio >= 3.2) {
  output_pb_ratio = 0;
}



var sector_pb_ratio = parseFloat(document.getElementById('Sector PB Ratio').value);
var output_sector_pb_ratio;
if (sector_pb_ratio < 0) {
  output_sector_pb_ratio = 0;
}
else if (sector_pb_ratio <= 1) {
  output_sector_pb_ratio = 3;
}
else if (sector_pb_ratio <= 2) {
  output_sector_pb_ratio = 2;
}
else if (sector_pb_ratio <= 3) {
  output_sector_pb_ratio = 1;
}
else if (sector_pb_ratio <= 3.2) {
  output_sector_pb_ratio = 0.5;
}
else if (sector_pb_ratio >= 3.2) {
  output_sector_pb_ratio = 0;
}



var debt_to_equite_ratio = parseFloat(document.getElementById('Debt to Equite Ratio').value);
    var debt_to_equite_ratio_industry_average = parseFloat(document.getElementById('Debt to Equite Ratio Industry average').value);
    
    var result1 = debt_to_equite_ratio_industry_average/debt_to_equite_ratio;
    
    var output3;
    if (result1 < 1) {
      output3 = 0;
    }
    else if (result1 >= 1) {
      output3 = 1;
    }
    else if (result1 >= 2) {
      output3 = 2;
    }
    else if (result1 >= 3) {
      output3 = 3;
    }
    
    
    
    var current_ratio = parseFloat(document.getElementById('Current Ratio').value);
    var current_ratio_industry_average = parseFloat(document.getElementById('Current Ratio Industry Average').value);
    
    var result2 = current_ratio / current_ratio_industry_average;

var output4;
if (result2 < 1.5) {
  output4 = 0;
}
else if (result2 >= 1.5 ) {
  output4 = 1;
}
else if (result2 < 3.2) {
  output4 = 2;
}
else if (result2 >= 3.2) {
  output4 = 3;
}



var net_income = parseFloat(document.getElementById('Net Income').value);

var output7; 
if (net_income < 100) {
  output7 = 0;
}
else if (net_income >= 100) {
  output7 = 1;
}
else if (net_income >= 1000) {
  output7 = 2;
}
else if (net_income > 2000) {
  output7 = 3;
}
else if (net_income >= 3000) {
  output7 = 4;
}
else if (net_income >= 5000) {
  output7 = 5;
}



var total_assets = parseFloat(document.getElementById('Total Assets').value);
var total_libilities = parseFloat(document.getElementById('Total Libilities').value);

var result100 = total_assets - total_libilities;
var result5 = result100*100;



var result6 = result5/total_libilities;
var output6;
if (result6 > 300) {
  output6 = 10;
}
else if (result6 > 200) {
  output6 = 7.5;
}
else if (result6 > 100) {
  output6 = 5;
}
else if (result6 > 0) {
  output6 = 2.5;
}
else if (result6 <= 0) {
  output6 = 0;
}



var free_cash_flow_rate = parseFloat(document.getElementById('Free Cash Flow Rate').value);
    var free_cash_flow_average_rate = parseFloat(document.getElementById('Free Cash Flow Average Rate').value);
    

    var output9; 
    if (free_cash_flow_rate < free_cash_flow_average_rate) {
      output9 = 0;
    }
    else if (free_cash_flow_rate > free_cash_flow_average_rate) {
      output9 = 6;
    }
   else if (free_cash_flow_rate == free_cash_flow_average_rate) {
      output9 = 2;
    }
    
    
    
    
    
    var year1 = parseFloat(document.getElementById('1 Year').value);
var output20;
if (year1 < 50) {
  output20 = 0;
}
else if (result6 < 100) {
  output20 = 1;
}
else if (result6 < 150) {
  output20 = 2;
}
else if (result6 < 200) {
  output20 = 3;
}
else if (result6 < 250) {
  output20 = 4;
}
else if (result6 < 300) {
  output20 = 5;
}
else if (result6 >= 300) {
  output20 = 6;
}




    var year1 = parseFloat(document.getElementById('1 Year').value);
    var year5 = parseFloat(document.getElementById('5 Year').value);
    var result = year5/year1;
    
    var output1;  
    if (result<=0) {
      output1 = 0;
    }
   else if (result<=1) {
      output1 = 4;
    }
    else if (result <= 2) {
      output1 = 8;
    }
    else if (result <= 3) {
      output1 = 12;
    }
    else if (result <= 4) {
      output1 = 16;
    }
    else if (result <= 5) {
      output1 = 20;
    }
    else if (result > 5) {
      output1 = 24;
    }
    
    
    var c;
    c = value1+performence+growth+profitability+entry_point+red_flag+output1+industry_revenue_growth+market_share+valution_according_rivel_compines+promoter_holding_trend+pledge_holding_trend+mutual_fund_and_forign_institutions_enter_or_not+foreign_institutional_holding_trend+retail_other_holding_trend+mutual_fund_holding_trend+market_grip+output_pe_ratio+output_sector_pe_ratio+output_pb_ratio+output_sector_pb_ratio+output3+output4+output7+output6+output9+output20;
    console.log("value1"+value1);
    console.log("performence"+performence);
    console.log("growth"+growth);
    console.log("profitability"+profitability);
    console.log("entry_point"+entry_point);
    console.log("red_flag"+red_flag);
    console.log("industry_revenue_growth"+industry_revenue_growth);
    console.log("market_share"+market_share);
    console.log("valution_according_rivel_compines"+valution_according_rivel_compines);
    console.log("promoter_holding_trend"+promoter_holding_trend);
    console.log("pledge_holding_trend"+pledge_holding_trend);
    console.log("mutual_fund_and_forign_institutions_enter_or_not"+mutual_fund_and_forign_institutions_enter_or_not);
    console.log("foreign_institutional_holding_trend"+foreign_institutional_holding_trend);
    console.log("mutual_fund_holding_trend"+mutual_fund_holding_trend);
    console.log("retail_other_holding_trend"+retail_other_holding_trend);
    console.log("market_grip"+market_grip);
    console.log("output_pe_ratio "+output_pe_ratio);
    console.log("output_sector_pe_ratio "+output_sector_pe_ratio);
    console.log("output_pb_ratio "+output_pb_ratio);
    console.log("output_sector_pb_ratio "+output_sector_pb_ratio);
    console.log("Debt : "+output3);
    console.log("Current : "+output4);
    console.log("net income : "+output7);
    console.log("total Assets : "+output6);
    console.log("free cash flow : "+output9);
    console.log("1 year return : "+output20);
    console.log("total 5 years return rate : "+output1);
    console.log("Total : "+c);
    
    console.log("calculation output100 : "+result100);
    console.log("calculation output5 : "+result5);
    var persentage;
    
         persentage=(c*100)/141;
         console.log("Persentage:- " +persentage);
    
    var grade;
    if (persentage<45) {
      grade="Very High Risky ";
      document.getElementById('colorjs').style.display = 'block';
      document.getElementById('colorjs1').style.display = 'none';
      document.getElementById('colorjs2').style.display = 'none';
      document.getElementById('colorjs3').style.display = 'none';
      
      document.getElementById('res').textContent= "Result : " + persentage + "% ( " + grade + ") " ;
      
    }
    else if (persentage<60) {
      grade="High Risky ";
      document.getElementById('colorjs1').style.display = 'block';
      document.getElementById('colorjs').style.display = 'none';
      document.getElementById('colorjs2').style.display = 'none';
      document.getElementById('colorjs3').style.display = 'none';
      document.getElementById('res1').textContent= "Result : " + persentage + "% ( " + grade + ") " ;
      
    }
        else if (persentage < 80) {
          grade = "Risky ";
document.getElementById('colorjs2').style.display = 'block';

document.getElementById('colorjs1').style.display = 'none';
document.getElementById('colorjs').style.display = 'none';
document.getElementById('colorjs3').style.display = 'none';

document.getElementById('res2').textContent= "Result : " + persentage + "% ( " + grade + ") " ;

        }
        else if (persentage>=80) {
          grade = "Good For Buy ";
          document.getElementById('colorjs3').style.display = 'block';
          document.getElementById('colorjs1').style.display = 'none';
          document.getElementById('colorjs2').style.display = 'none';
          document.getElementById('colorjs').style.display = 'none';
          document.getElementById('res3').textContent= "Result : " + persentage + "% ( " + grade + ") " ;
        }
    
    
    
    
  }
}
{
  
}
