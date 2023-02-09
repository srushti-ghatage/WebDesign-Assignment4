var mailformat = /^[\w.+\-]+@northeastern\.edu$/;
let phRegex = /\d\d\d-\d\d1-9\d\d\d/;
let zipReg = /\d\d\d\d\d/;

$(document).ready(function(){
    $('#lblPhone').hide();
    $('#lblEmail').hide();
    $('#lblZipCode').hide();
    $('#checkMeLabel').hide();
    $('#checkBox').hide();
    $('#checkText').hide();
  
    $( "select" )
  .change(function() {
    switch($(":selected").val()) {
        case "movie_tickets":
            $('#checkMeLabel').html("Movie : Sherlock. Want Other movie?").show();
            $('#checkBox').show();
            $("#checkBox").change(function() {
                if( $("#checkBox").is(':checked')) {
                     
                    $('#checkText').show();
                }
                else{
                    $('#checkText').hide();
                }
            });
           
         
          break;
        case "dunkin_coupons":
            $('#checkMeLabel').html("Default:Dunkin Cash.Other? ").show();
            $('#checkBox').show();
            $("#checkBox").change(function() {
                if( $("#checkBox").is(':checked')) {
                     
                    $('#checkText').show();
                }
                else{
                    $('#checkText').hide();
                }
            });
           
          break;
          case "cashinwallet":
            $('#checkMeLabel').html("Default Currency is $. Choose other Currency?").show();
            $('#checkBox').show();
            $("#checkBox").change(function() {
                if( $("#checkBox").is(':checked')) {
                     
                    $('#checkText').show();
                }
                else{
                    $('#checkText').hide();
                }
            });
           
              break;
              case "cryptorewards":
                $('#checkMeLabel').html("Default:Dogecoin. Select Other Coin?").show();
                $('#checkBox').show();
                $("#checkBox").change(function() {
                    if( $("#checkBox").is(':checked')) {
                         
                        $('#checkText').show();
                    }
                    else{
                        $('#checkText').hide();
                    }
                });
               
                  break;
                  case "noreward":
                    $('#checkMeLabel').html("Reason : Poor service . Other Reason?").show();
                    $('#checkBox').show();
                    $("#checkBox").change(function() {
                        if( $("#checkBox").is(':checked')) {
                             
                            $('#checkText').show();
                        }
                        else{
                            $('#checkText').hide();
                        }
                    });
                   
                      break;
        default:
          // code block
      }

  });

    $("#emailId").on("input", function() {
       if( $("#emailId").val().match(mailformat))
       {   $('#lblEmail').hide();
    }
    else
       {
           $('#lblEmail').show().css("color", "red");;
           console.log($("#emailId").val())
        }
     });

     $("#phoneNumber").on("input", function() {
         let ph=$("#phoneNumber").val();
        if( ph.match(phRegex)&&ph.length<13){  $('#lblPhone').hide();
    }
    else
    {
        $('#lblPhone').show().css("color", "red");;
            console.log($("#phoneNumber").val())
        }
      });
 
      $("#zipcode").on("input", function() {
          let zip = $("#zipcode").val()
        if( zip.match(zipReg) && zip.length===5){
        $('#lblZipCode').hide();
    }else{
            
            $('#lblZipCode').show().css("color", "red");;
            console.log($("#zipcode").val())
        }
      });
});



let addNewCheckbox=()=>{

}

let  addCheckBox=()=>{
    const rewardSelect = document.getElementById("rewards");
    let check = document.createElement("INPUT");
    var newlabel = document.createElement("Label");
    check.setAttribute("type", "checkbox");
    check.id="checkbox";
    newlabel.id="checkLabel"
    let input = document.createElement('input'); 
    input.type = "text"; 
    input.required=true;
    newlabel.setAttribute("for","checkbox");
    newlabel.innerHTML = "Here goes the text";
    let rewardParent = rewardSelect.parentElement;
    check.addEventListener('change', function() {
        if (this.checked) {
            modifyLabel(newlabel);
            
        } else {
          console.log("Checkbox is not checked..");
        }
    });
     
    rewardParent.appendChild(input);
    rewardParent.appendChild(check);
    rewardParent.appendChild(newlabel);

}

function toggleTextField(){

}

function clearForm(){
    $('#firstName').val('');
     $('#lastName').val('');
     $('#emailId').val('');
     $('#emailId').val('');
     $('#phoneNumber').val('');
     $('#streetAddress1').val('');
     $('#streetAddress2').val('');
     $('#city').val('');
     $('#state').val('');
      $('#zipcode').val('');
      $('#comments').val('');
     $('#checkText').val('');
}

function createTable()
{ 
  if(validateSubmit()) {
    const body = document.getElementById('tableDiv');
    if($('#tableCreated').length){
       var  tbl =document.getElementById('tableCreated');
    }else{
    
    var  tbl = document.createElement('table');
    tbl.id='tableCreated';
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    }
    
const tr = tbl.insertRow();
if(tbl.rows.length <2 )
{
    preFillTableHeaders(tr);
}

capturevalues(tbl);
body.appendChild(tbl);
  }
 
}

function preFillTableHeaders(tr){
    const t0 = tr.insertCell();
    t0.style.border = '1px solid black';
    t0.appendChild(document.createTextNode(`Title`));
    const td = tr.insertCell();
    td.style.border = '1px solid black';
    td.appendChild(document.createTextNode(`First Name`));
    const td2 = tr.insertCell();
    td2.style.border = '1px solid black';
    td2.appendChild(document.createTextNode(`Last Name`));
    const td3 = tr.insertCell();
    td3.style.border = '1px solid black';
    td3.appendChild(document.createTextNode(`Email ID`));
    const td4 = tr.insertCell();
    td4.style.border = '1px solid black';
    td4.appendChild(document.createTextNode(`Phone Number`));
    const td5 = tr.insertCell();
    td5.style.border = '1px solid black';
    td5.appendChild(document.createTextNode(`Street Address 1`));
    const td6 = tr.insertCell();
    td6.style.border = '1px solid black';
    td6.appendChild(document.createTextNode(`Street Address 2`));
    const td7 = tr.insertCell();
    td7.style.border = '1px solid black';
    td7.appendChild(document.createTextNode(`State`));
    const td8 = tr.insertCell();
    td8.style.border = '1px solid black';
    td8.appendChild(document.createTextNode(`Zipcode`));
    const td9 = tr.insertCell();
    td9.style.border = '1px solid black';
    td9.appendChild(document.createTextNode(`How did you hear about us?`));
    const td10 = tr.insertCell();
    td10.style.border = '1px solid black';
    td10.appendChild(document.createTextNode(`Comments`));
    const td11 = tr.insertCell();
    td11.style.border = '1px solid black';
    td11.appendChild(document.createTextNode(`Reward Claimed`));
    const td12 = tr.insertCell();
    td12.style.border = '1px solid black';
    td12.appendChild(document.createTextNode(`Reward Comments`));
}



function capturevalues(tbl){
    const tr = tbl.insertRow();
    var element = $("#firstName");
    const t0 = tr.insertCell();
    t0.style.border = '1px solid black';
  if( document.getElementById('miss').checked){
    t0.appendChild(document.createTextNode(`Miss`));
  }else if(document.getElementById('mr').checked){
    t0.appendChild(document.createTextNode(`Mr`));
  }else{
    t0.appendChild(document.createTextNode(`Mrs`));
  };
  
  


    while(element.attr('id')!=='zipcode')
    {
    const td = tr.insertCell();
    td.style.border = '1px solid black';
    td.appendChild(document.createTextNode(element.val()));
    element = element.nextAll('input');
    }
   
    var arr=[];
    if(document.getElementById('fb').checked)
    {
    arr.push('facebook');
    }
    if(document.getElementById('yelp').checked)
    {
     arr.push('yelp');
    }
    if(document.getElementById('goo').checked)
    {
    arr.push('google');
    }
    const td = tr.insertCell();
    td.style.border = '1px solid black';
    td.appendChild(document.createTextNode(arr.toString()));   
    const td2 = tr.insertCell();
    td2.style.border = '1px solid black';
    td2.appendChild(document.createTextNode($('#comments').val()));   
    const td3 = tr.insertCell();
    td3.style.border = '1px solid black';
    td3.appendChild(document.createTextNode($('#rewards').val()));   
    const td4 = tr.insertCell();
    td4.style.border = '1px solid black';
    td4.appendChild(document.createTextNode($('#checkText').val()));   

    clearForm();
}

function checkBoxexists(){
    if($('#checkbox').length){return true;}return false;
}


function validateSubmit(){
    if($('#firstName').val() === ''){
        alert('Input firstName can not be left blank');
        return false;
     }
     if($('#lastName').val() === ''){
        alert('Input lastName can not be left blank');
        return false;
     }
     if($('#emailId').val() === ''){
        alert('Input emailId can not be left blank');
        return false;
     }
     if($('#emailId').val() === ''){
        alert('Input emailId can not be left blank');
        return false;
     }
     
     if($('#phoneNumber').val() === ''){
        alert('Input emailId can not be left blank');
        return false;
     }
     if($('#streetAddress1').val() === ''){
        alert('Input emailId can not be left blank');
        return false;
     }
     if($('#city').val() === ''){
        alert('Input City can not be left blank');
        return false;
     }
     if($('#state').val() === ''){
        alert('Input State can not be left blank');
        return false;
     }
     if($('#zipcode').val() ===''){
        alert('Input Zipcode can not be left blank');
        return false;
     }
     if($('#comments').val() === ''){
        alert('Input comments can not be left blank');
        return false;
     }
     if($('#checkText').val() === ''&&$("#checkBox").is(':checked')){
        alert('Input reward custom can not be left blank');
        return false;
     }
     return true;
}

// function capturevalues(tbl){
// const tr = tbl.insertRow();
// const td = tr.insertCell();
// var str = $("#lastName").val();
// alert(str);
// td.style.border = '1px solid black';
// var x= $('#firstname').val();
// td.appendChild(document.createTextNode($("#firstName").val()));
// const td2 = tr.insertCell();
// td2.style.border = '1px solid black';
// td2.appendChild(document.createTextNode($("#lastName").val()));
// const td3 = tr.insertCell();
// td3.style.border = '1px solid black';
// td3.appendChild(document.createTextNode(document.getElementById("emailId").value));
// const td4 = tr.insertCell();
// td4.style.border = '1px solid black';
// td4.appendChild(document.createTextNode(document.getElementById("phoneNumber").value));
// const td5 = tr.insertCell();
// td5.style.border = '1px solid black';
// td5.appendChild(document.createTextNode(document.getElementById("streetAddress1").value));
// const td6 = tr.insertCell();
// td6.style.border = '1px solid black';
// td6.appendChild(document.createTextNode(document.getElementById("streetAddress2").value));
// const td7 = tr.insertCell();
// td7.style.border = '1px solid black';
// td7.appendChild(document.createTextNode(document.getElementById("state").value));
// }