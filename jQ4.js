var errors={
    "name":{
        "required":{"msg":"Name field will not be empty"},
        "minlength":{
            "val":4,
            "msg":"Minimum 4 characters is required"
        },
        "maxlength":{
            "val":25,
            "msg":"Maximum 25 characters only allowed"
        },
        "pattern":{
            "val":/^[a-zA-Z\.]+$/,
            "msg":"Enter a valid Name(Alphabets only! No space allowed)"
        }
    },
    "age":{
        "required":{"msg":"Age field will not be empty"},
        "minlength":{
            "val":2,
            "msg":"minimum 2 character is required(18-100)"
        },
        "maxlength":{
            "val":3,
            "msg":"Maximum 3 characters is allowed(upto 100)"
        },
        "pattern":{
            "val":/^[0-9]+$/,
            "msg":"Enter a valid age(18-100 only!)"
        }
    },
    "idno":{
        "required":{"msg":"Employee Id is required"},
        "minlength":{
            "val":6,
            "msg":"Minimum 6 characters is required"
        },
        "maxlength":{
            "val":6,
            "msg":"Maximum 6 characters is allowed"
        },
        "pattern":{
            "val":/^[0-9]{6,6}$/,
            "msg":"Enter a valid data (Number only! No space allowed)"
        }
    },
    "email":{
        "required":{"msg":"Email field will not be empty"},
        "minlength":{
            "val":15,
            "msg":"Minimum 15 characters is required"
        },
        "maxlength":{
            "val":40,
            "msg":"Maximum 40 characters is allowed"
        },
        "pattern":{
            "val":/^[a-z0-9]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/,
            "msg":"Enter a valid mail(by using a-z, 0-9, @ . only! )"
        }
    },
    "address":{
        "required":{"msg":"Address field will not be empty"},
        "pattern":{
            "val":/^[A-Za-z0-9 \.\/\,]+$/,
            "msg":"A-Z,a-z,0-9, space and / only allowed"}
    },
    "gender":{
        "required":{"msg":"Please select your gender"}
    },
    "dropdown":{
        "required":{"msg":"Please select your alloted shift"}
    },
    "checkbox":{
        "required":{"msg":"Please select your skills"}
    }

}


$(document).ready(function(){

    $("#adfsubmit").click(function(){
        var inputs;
        $("#add_faccess").each(function(){
          inputs = $("input, textarea, select", this);
        //   console.log(inputs)
         });

        var adfdetails = $.fn.validation(inputs)
        if((!adfdetails.name=="")&& (!adfdetails.age=="") &&  (!adfdetails.id=="")&& (!adfdetails.email=="") && (!adfdetails.address=="") && (!adfdetails.gender=="") && (!adfdetails.shitf=="")&&(!adfdetails.skills=="")){
            $.fn.arrayfun(adfdetails)
            $.fn.tableinsert();
            alert("Data's are inserted in table :-)");

            for(var i=0; i<arraydata.length; i++){
                console.log(arraydata[i].id);
            }
        }
         
    });

    $("#edfupdate").click(function(){
        var edfinputs;
        $("#Ed_faccess").each(function(){
          edfinputs = $("input, textarea, select", this);
        //   console.log(edfinputs)
         });

        var edfdetails = $.fn.validation(edfinputs);
        if((!edfdetails.name=="")&& (!edfdetails.age=="") &&  (!edfdetails.id=="")&& (!edfdetails.email=="") && (!edfdetails.address=="") && (!edfdetails.gender=="") && (!edfdetails.shitf=="")&&(!edfdetails.skills=="")){
            $.fn.onUpdate();
            alert("Successfully! updateded on Table :-)");
        }

    });

    $.fn.validation = function(form_id){
        var employee={};

        var loop = form_id;
        // console.log(loop)

        for(var i=0; i<loop.length; i++){
            var  getform=loop.get([i]);
            // console.log(getform);

            var id_s = getform.id;
            // console.log(id_s);

            var name_s = getform.name;
            // console.log(name_s);

            var key=Object.keys(errors);
             // console.log(key);
            
            for(var j=0; j<key.length; j++){
                var getkey=Object.values(errors[key[j]]);
                for(var k=0; k<getkey.length; k++){
                    var getval = Object.values(errors);
                    // console.log(getval);
            
           if(getform.type=="text"){
            var txtval = getform.value;
            if(getkey[k]){
                if(txtval==""){
                    $('#'+id_s+'error').html(errors.name.required.msg);
                }
                else if(txtval.length<getval[i].minlength.val ){
                    $('#'+id_s+'error').html(errors.name.minlength.msg);
                }
                else if(txtval.length>getval[i].maxlength.val){
                    $('#'+id_s+'error').html(errors.name.maxlength.msg);
                }
                else if(txtval.match(getval[i].pattern.val)){
                    $('#'+id_s+'error').html(" ");
                    employee.name=txtval;
                }
                else{
                        $('#'+id_s+'error').html(errors.name.pattern.msg);
                }
            }

        }


        if(getform.type=="number"){
            var ageval = getform.value;
            // console.log(ageval);

            if(getkey[k]){


                if(ageval.match(getval[i].pattern.val)){
                    if(ageval>=18 && ageval<=100){
                        $('#'+id_s+'error').html(" ");
                        employee.age=ageval;
                    }
                    else if(ageval.length==getval[i].minlength.val && ageval>18){
                        $('#'+id_s+'error').html(" ");
                        employee.id=ageval;
                    }
                    else{
                        $('#'+id_s+'error').html(getval[i].pattern.msg);
                    }

                }
                else if(ageval==""){
                    $('#'+id_s+'error').html(getval[i].required.msg)
                }
                else if(ageval.length<getval[i].minlength.val){
                    $('#'+id_s+'error').html(getval[i].minlength.msg)
                }
                else if(ageval.length>getval[i].maxlength.val){
                    $('#'+id_s+'error').html(getval[i].maxlength.msg)
                }

            }

        }

        if(getform.type=="email"){
            var mailvalue = getform.value;
        if(getkey[k]){
            if(mailvalue==""){
                $('#'+id_s+'error').html(errors.email.required.msg);
            }
            else if(mailvalue.length<getval[i].minlength.val ){
                $('#'+id_s+'error').html(errors.email.minlength.msg);
            }
            else if(mailvalue.length>getval[i].maxlength.val){
                $('#'+id_s+'error').html(errors.email.maxlength.msg);
            }
            else if(mailvalue.match(getval[i].pattern.val)){
                $('#'+id_s+'error').html(" ");
                employee.email=mailvalue;
                }
                else{
                    $('#'+id_s+'error').html(errors.email.pattern.msg);
                }
        }  
        }

        if(getform.type=="textarea"){
            var addval = getform.value;
            // console.log(addval);
            if(getkey[k]){
                if(addval==""){
                    $('#'+id_s+'error').html(errors.address.required.msg)
                }
                else if(addval.match(getval[i].pattern.val)){
                    $('#'+id_s+'error').html(" ")
                     employee.address=addval;
                }
                else{
                    $('#'+id_s+'error').html(errors.address.pattern.msg)
                }
                
            }
        }

        if(getform.type=="radio"){
            var radios = $("[type=radio]");
            // console.log(radios);
            for(var l=0; l<radios.length; l++){
                var radiocheck = radios.get([l]);
                // console.log(get1)
                if(getkey[k]){
                    if(radiocheck.checked){
                        var rval = radiocheck.value;
                        // console.log(rval)
                        $('#'+name_s+'error').html(" ");
                        employee.gender=rval;
                        break;
                    }
                    else{
                        $('#'+name_s+'error').html(errors.gender.required.msg);
                    }
                }
                
            }
        }

        if(getform.name=="adfshits"){
            var dropdown =  $('[name="addsht"]');
            // console.log(dropdown);
            var frstval =  $('[name="addsht"]')[0].value;
            // console.log(frstval)

            for(var n=0; n<dropdown.length; n++){
            if(getkey[k]){
                if(dropdown[n].selected){
                    var dropval=dropdown[n].value;
                    employee.shitf = dropval;
                    $('#'+name_s+'error').html(" ");
                    // console.log(dropval);
                }
                else{
                    if(frstval==dropval){
                        $('#'+name_s+'error').html(errors.dropdown.required.msg);
                    }
                }
            }
            
            }
        }
        else if(getform.name=="edfshits"){
            var dropdown =  $('[name="edsht"]');
            // console.log(dropdown);
            var frstval =  $('[name="edsht"]')[0].value;
            // console.log(frstval)

            for(var n=0; n<dropdown.length; n++){
            if(getkey[k]){
                if(dropdown[n].selected){
                    var dropval=dropdown[n].value;
                    employee.shitf = dropval;
                    $('#'+name_s+'error').html(" ");
                    // console.log(dropval);
                }
                else{
                    if(frstval==dropval){
                        $('#'+name_s+'error').html(errors.dropdown.required.msg);
                    }
                }
            }
            
            }
        }
        

        
        if(getform.type=="checkbox"){
            var cbox = $("[type=checkbox]");
            // console.log(cbox)
            var carray=[];
            var status=false;
            for(var m=0; m<cbox.length; m++){
                var skills = cbox.get([m]);
                // console.log(shifts);
                if(getkey[k]){
                    if(skills.checked){
                        status=true;
                        carray.push(skills.value)
                        employee.skills=carray;
                        // console.log(carray);
                    }
                    else{
                        if(status==true){
                            $('#'+name_s+'error').html(" ");
                        }
                        else{
                            $('#'+name_s+'error').html(errors.checkbox.required.msg);
                        }
                        
                    }
                }
                
            }
            
        }
         }
       }

     }
     return employee;
    }

    var arraydata=[];
    $.fn.arrayfun = function(employee){
        arraydata.push(employee)
        console.log(arraydata)
    }

    $.fn.tableinsert = function(){
        $("#tbodyaccess").html(" ");
        
       for(var i=0; i<arraydata.length; i++){
        
        var tabledata = "<tr><td>" + arraydata[i].name + "</td><td>" + arraydata[i].age + "</td><td>"+arraydata[i].id+ "</td><td>"+arraydata[i].email+"</td><td>"+arraydata[i].address+"</td><td>"+arraydata[i].gender+"</td><td>"+arraydata[i].shitf+"</td><td>"+arraydata[i].skills+"</td><td>"+"<button class='btn btn-warning'                    onclick='$.fn.onEdit("+arraydata[i].id+")' >EDIT</button> <button class= 'btn btn-danger' onclick='$.fn.onDelete("+arraydata[i].id+")'>DELETE</button>" +"</td></tr>";

        $('#tbodyaccess').append(tabledata);

        $("#add_faccess")[0].reset();
       }

    }

    $.fn.onEdit = function(td){

        // console.log(td);
        alert("Click Edit form! button to change your details");

        for(var j=0; j<arraydata.length; j++){
            if(td==arraydata[j].id){
                $("#edfname").val(arraydata[j].name);
                $("#edfage").val(arraydata[j].age);
                $("#edfid").val(arraydata[j].id);
                $("#edfage").val(arraydata[j].age);
                $("#edfemail").val(arraydata[j].email);
                $("#edfaddress").val(arraydata[j].address);

                var radioed = arraydata[j].gender;
                var radios = $("[type=radio]");
                for(var l=0; l<radios.length; l++){
                    var radiocheck = radios.get([l]);
                    if(radioed==radiocheck.value){
                        radiocheck.checked=true;
                    } 
                }

                var droped = arraydata[j].shitf;
                var dropdownval =  $('[name="edsht"]');
                for(var m=0; m<dropdownval.length; m++){
                    var ddcheck = dropdownval.get([m]);
                    if(droped==ddcheck.value){
                        ddcheck.selected=true;
                    }
                }

                var cboxed = arraydata[j].skills;
                var cvalue=cboxed.toString();
                var cboxval = $("[name=edfskills]");
                var skillsary = cvalue.split(',');
                for(let n=0; n<cboxval.length; n++){
                    var demo1 = cboxval.get([n]);
                    for(let p=0; p<skillsary.length; p++){
                        if(skillsary[p]==demo1.value){
                            demo1.checked=true;
                        }
                    }
                }
                
            }
        }
        
       
    }

    $.fn.onUpdate = function(){

      let get1 =  $("#edfname").val();
      let get2 =  $("#edfage").val();
      let get3 =  $("#edfid").val();
      let get4 =  $("#edfemail").val();
      let get5 =  $("#edfaddress").val();

      var r = $("[type=radio]")
      for(let j=0; j<r.length; j++){
        var rcheck = r.get([j]);
          if(rcheck.checked){
             var get6 = rcheck.value;
          }
      }

      var dropdownval =  $('[name="edsht"]');
      for(var m=0; m<dropdownval.length; m++){
          var ddcheck = dropdownval.get([m]);
          if(ddcheck.selected){
              var get7 = ddcheck.value
            //   console.log(get8)
          }
      }

      var cboxval = $("[name=edfskills]");
      var skillsary = [];
      for(let n=0; n<cboxval.length; n++){
          var demo1 = cboxval.get([n]);
          if(demo1.checked){
            skillsary.push(demo1.value);
            var get8 = skillsary;
            // console.log(get9);
            
          }
      }

      for(let i=0; i<arraydata.length; i++){
        if(arraydata[i].id==get3){
            arraydata[i].name=get1;
            arraydata[i].age=get2;
            arraydata[i].email=get4;
            arraydata[i].address=get5;
            arraydata[i].gender=get6;
            arraydata[i].shitf=get7;
            arraydata[i].skills=get8;
            
            console.log(arraydata);
            $.fn.tableinsert();
        }
      }
      $("#Ed_faccess")[0].reset();

    }

    $.fn.onDelete = function(td){
        // console.log(td.rowIndex);

        for(let i=0; i<arraydata.length; i++){
            if(td==arraydata[i].id){
                arraydata.splice(i,1);
                alert("Table has been Deleted successfully!");
                console.log(arraydata);
                $.fn.tableinsert();
                break;
            }
        }
    }



});





    
