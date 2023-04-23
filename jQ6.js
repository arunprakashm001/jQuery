$(document).ready(function(){

    var table = $('#taccess').DataTable();

    $.validator.addMethod('lettersonly', function(value, element){
        return this.optional(element)||/^[A-Za-z\.]+$/.test(value);    
    },'Alphabets only');

    $.validator.addMethod('emailval', function(value,element){
        return this.optional(element)|| /^[a-z0-9]+@gmail+(?:\.com+)$/.test(value);
    },'Enter a valid email like(abcd@gmail.com)');

    $.validator.addMethod('addval', function(value,element){
        return this.optional(element)|| /^[a-zA-Z0-9\.\/\,\ ]+$/.test(value);
    },'Enter a valid address with(, / space a-z A-Z 0-9)');

    $.validator.addMethod('dateval', function(value,element){
        return this.optional(element)||/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value);
    },"Enter a Date in correct format (dd-mm-yyyy)");

    $("#add_faccess").validate({
        rules:{
            name : {
                required:true,
                minlength:4,
                maxlength:25,
                lettersonly:true
                
            },
            age : {
                required:true,
                number:true,
                min:18,
                max:100

            },
            id : {
                required:true,
                number:true,
                minlength:6,
                maxlength:6
            },
            email : {
                required:true,
                minlength:14,
                maxlength:40,
                emailval:true
            },
            date : {
                required:true,
                dateval:true
            },
            address : {
                required:true,
                addval:true

            },
            gender : {
                required:true
            },
            adfshifts : {
                required:true
            },
            adfskills : {
                required:true
            }
        },
        messages : {
            name : {
                required:"Name is required",
                minlength:"Minimum 4 characters is required",
                maxlength:"Maximum 25 characters only allowed"
            },
            age : {
                required:"Please Enter your age",
                number:"Enter Numbers only",
                min:"Please Enter Acceptable age(18)",
                max:"Enter a valid age(18-100)"
            },
            id : {
                required:"Employee Id is required",
                number:"Numbers only",
                minlength:"Enter your correct ID with 6 numbers(e.g:221122)",
                maxlength:"Enter a valid ID(Maximum 6 numbers only allowed)"
            },
            email : {
                required:"Email field is required",
                minlength:"Minimum 14 characters is required for valid email",
                maxlength:"Maximum 40 characters only allowed"
            },
            address : {
                required:"Address is required",

            },
            gender : {
                required:"Please select gender"
            },
            adfshifts : {
                required: "Please select your working shift",
            },
           
        },
        errorPlacement: function(error, element){
            if (element.attr('type')==="radio" || element.attr('type') === 'checkbox'){
                error.appendTo(element.closest('div'));
            }
            else{
                error.appendTo(element.next('div'));
            }
        }
    });


    $("#ed_faccess").validate({
        rules:{
            f2name : {
                required:true,
                minlength:4,
                maxlength:25,
                lettersonly:true
                
            },
            f2age : {
                required:true,
                number:true,
                min:18,
                max:100

            },
            f2id : {
                required:true,
                number:true,
                minlength:6,
                maxlength:6
            },
            f2email : {
                required:true,
                minlength:14,
                maxlength:40,
                emailval:true
            },
            f2address : {
                required:true,
                addval:true

            },
            f2date : {
                required:true,
                dateval:true
            },
            f2gender : {
                required:true
            },
            f2shifts : {
                required:true
            },
            f2skills : {
                required:true
            }
        },
        messages : {
            f2name : {
                required:"Name is required",
                minlength:"Minimum 4 characters is required",
                maxlength:"Maximum 25 characters only allowed"
            },
            f2age : {
                required:"Please Enter your age",
                number:"Enter Numbers only",
                min:"Please Enter Acceptable age(18)",
                max:"Enter a valid age(18-100)"
            },
            f2id : {
                required:"Employee Id is required",
                number:"Numbers only",
                minlength:"Enter your correct ID with 6 numbers(e.g:221122)",
                maxlength:"Enter a valid ID(Maximum 6 numbers only allowed)"
            },
            f2email : {
                required:"Email field is required",
                minlength:"Minimum 14 characters is required for valid email",
                maxlength:"Maximum 40 characters only allowed"
            },
            f2address : {
                required:"Address is required",

            },
            f2gender : {
                required:"Please select gender"
            },
            f2shifts : {
                required: "Please select your working shift",
            },
        },
        errorPlacement: function(error, element){
            if (element.attr('type')==="radio" || element.attr('type') === 'checkbox'){
                error.appendTo(element.closest('div'));
            }
            else{
                error.appendTo(element.next('div'));
            }
        }

    });


    $('#adfsubmit').click(function(){
        var form;
        $('#add_faccess').each(function(){
            form=$("input,textarea,select",this)
        });
        if($("#add_faccess").valid()){
           var checking = $.fn.dataRead(form);
           $.fn.arrayfun(checking);
           $.fn.tableinsert();
           alert("Data's are successfully inserted on table");
        }

    });

    $('#edfupdate').click(function(){
        var form2;
        $('#ed_faccess').each(function(){
            form2=$("input,textarea,select",this)
            // console.log(form2)
        });

        if($("#ed_faccess").valid()){
            $.fn.dataRead(form2);
            $.fn.onUpdate();
            alert("Data's are successfully updated on table :-) ");
        }

    });

    
     $.fn.dataRead = function(form_id){
            var info = {};
            var loop = form_id;
            // console.log(loop);
            for(var i=0; i<loop.length; i++){
                var getform = loop.get([i]);
                // console.log(getform);
                // console.log(getform.name);

                if(getform.type=="text"){
                    var txtval = getform.value;
                    var alphabets=/^[A-Za-z\.]+$/;

                    if(txtval.match(alphabets)){
                        info.name=txtval;
                    }
                    else{
                        info.dateofbirth=txtval; 
                    }
                    
                }

                if(getform.type=="number"){
                    var numval = getform.value;
                    if(getform.id=="empid"){
                        info.id=numval;
                    }
                    else{
                        info.age=numval;
                    }
                }

                if(getform.type=="email"){
                    var emailval=getform.value;
                    info.email=emailval;
                }

                if(getform.type=="textarea"){
                    var addressval = getform.value;
                    info.address=addressval;
                }

                if(getform.type=="radio"){
                    var radios = $("[type=radio]");
                    for(let i=0; i<radios.length; i++){
                        var radiocheck = radios.get([i]);
                        if(radiocheck.checked){
                            var rval=radiocheck.value;
                            info.gender=rval;
                        }
                    }
                }

                if(getform.name=="adfshifts"){
                    let dropdown =  $('[name="addsht"]');
                    // console.log(dropdown)
        
                    for(let n=0; n<dropdown.length; n++){
                        if(dropdown[n].selected){
                            var dropval=dropdown[n].value;
                            info.shift=dropval;
                        }

                    }
                }
                else if(getform.name=="f2shifts"){
                    let dropdown =  $('[name="edsht"]');
                    // console.log(dropdown)
                    for(let n=0; n<dropdown.length; n++){
                        if(dropdown[n].selected){
                            var dropval=dropdown[n].value;
                            info.shift=dropval;
                        }

                    }
                }

                if(getform.type=="checkbox"){
                    var cbox = $("[type=checkbox]");
                    var carray=[];
                    for(let i=0; i<cbox.length; i++){
                        var cbcheck= cbox.get([i]);
                        if(cbcheck.checked){
                            carray.push(cbcheck.value);
                            info.skills=carray;
                        }                    
                    }
                }

            }
            // console.log(info);
            return info;
        }

        var arraydata=[];
        $.fn.arrayfun = function(employee){
            arraydata.push(employee)
            console.log(arraydata)
        }

    
        $.fn.tableinsert = function(){
           
           table.clear();
           $("#tbodyaccess").html(" "); 

           for(var i=0; i<arraydata.length; i++){
            
            var tabledata = "<tr><td>" + arraydata[i].name + "</td><td>" + arraydata[i].age + "</td><td>"+arraydata[i].id+ "</td><td>"+arraydata[i].email+"</td><td>"+arraydata[i].dateofbirth+"</td><td>"+arraydata[i].address+"</td><td>"+arraydata[i].gender+"</td><td>"+arraydata[i].shift+"</td><td>"+arraydata[i].skills+"</td><td>"+"<button class='btn btn-warning' onclick='$.fn.onEdit("+arraydata[i].id+")' >EDIT</button> <button class= 'btn btn-danger' onclick='$.fn.onDelete("+arraydata[i].id+")'>DELETE</button>" +"</td></tr>";
            // $('#tbodyaccess').append(tabledata);
            // $('#taccess').DataTable().row.add($(tabledata).get(0)).draw(); //This row inserting method also works 
            table.row.add($(tabledata)).draw();
            $("#add_faccess")[0].reset();
           }
          
    
        }

        $.fn.onEdit = function(td){
            $("#ed_faccess")[0].reset();
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
                    $("#edfdate").val(arraydata[j].dateofbirth);
    
                    var radioed = arraydata[j].gender;
                    var radios = $("[type=radio]");
                    for(var l=0; l<radios.length; l++){
                        var radiocheck = radios.get([l]);
                        if(radioed==radiocheck.value){
                            radiocheck.checked=true;
                        } 
                    }
    
                    var droped = arraydata[j].shift;
                    var dropdownval =  $('[name="edsht"]');
                    for(var m=0; m<dropdownval.length; m++){
                        var ddcheck = dropdownval.get([m]);
                        if(droped==ddcheck.value){
                            ddcheck.selected=true;
                        }
                    }
    
                    var cboxed = arraydata[j].skills;
                    var cvalue=cboxed.toString();
                    var cboxval = $("[name=f2skills]");
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
            let dateget = $("#edfdate").val();
      
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
      
            var cboxval = $("[name=f2skills]");
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
                  arraydata[i].dateofbirth=dateget
                  arraydata[i].gender=get6;
                  arraydata[i].shift=get7;
                  arraydata[i].skills=get8;
                  
                  console.log(arraydata);
                  $.fn.tableinsert();
              }
            }
            $("#ed_faccess")[0].reset();
            
      
          }

          $.fn.onDelete = function(td){

            for(let i=0; i<arraydata.length; i++){
                if(td==arraydata[i].id){
                    arraydata.splice(i,1);
                    alert("Selected table row has been Deleted successfully!");
                    console.log(arraydata);
                    // table.row( $(this).parents('tr') ).remove().draw();
                    // table.row( this ).delete();
                    // table.row($(this).parents('tr')).remove().draw(false);
                    $.fn.tableinsert();
                    break;
                }
            }
        }

        
        var addressauto=["Alangulam","Aruppukottai","Devathanam","Thalavaipuram","Rajapalayam","Sangalingapuram","Mamsapuram","Sattur","Seithur","Sivakasi","Srivilliputhur","Sundarapandiyapuram","Thayilpatti","viswanatham","Virudhunagar","Vembakottai","Murambu","Kalavasal","Karivalam","Muhavoor"];

            $("#adfaddress").autocomplete({
                source:addressauto,
                appendTo:$("#autoadd"),
                minLength:2,
                autoFocus:true
            });

            $("#edfaddress").autocomplete({
                source:addressauto,
                appendTo:$("#autoed"),
                minLength:2,
                autoFocus:true
            });

            $(function(){
                $('#adfdate').datepicker({
                    dateFormat: 'dd-mm-yy'
                });
            });

            $(function(){
                $('#edfdate').datepicker({
                    dateFormat: 'dd-mm-yy'
                });
            });
          







});