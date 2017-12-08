function answerString( i,j){
return '<div class="form-group"  id="Answer'+i+'Question'+j+'"deleted="no" >'
+'<div class="input-group" id="Answer'+i+'">'
+'<input type="text" id="input'+i+'Q'+j+'" name="Answer'+i+'"class="form-control " placeholder="Enter the option" required>'
+'<div class="btn input-group-addon btn-danger addonRemove" >x</div>'
+'</div>'
+'</div>';
}
function questionString(i) {
  return '  <div id="Question'+i+'" >'
  +'<div class=" container">'
  +'<div class="form-group">'
  +'<label for="Question'+i+'-text">Enter The Quesion</label>'
  +'<input type="text" class="form-control" id="Question'+i+'-name" placeholder="Enter the Question" Required>'
  +'</div>'
  +'<div class="form-group" >'
  +'<label for="Quesion'+i+'-type">Select Type</label>'
  +'<select class="form-control" id="Question'+i+'-type" quesion="'+i+'" name="Question-type" Required>'
  +'<option value="" disabled selected>Select your option</option>'
  +'<option value="MSQ">MCQ</option>'
  +'<option value="ToF">True/False</option>'
  +'<option value="ShortAnswer">Short Answer</option>'
  +'<option value="MC">Multiple Choices</option>'
  +'</select>'
  +'</div>'
  +'<div class="answers" ansnumber="1" number="'+i+'" id="answers'+i+'" hidden="true">'
  +'<label >Enter Answer</label>'
  +'<button type="button" title="add new Answer"class="btn btn-info btn-sm addnewAnswer float-xl-right">+</button>'
  +'<button type="button" title="add new Answer"class="btn btn-danger btn-sm removeAnswer float-xl-right">-</button>'
  +'<div class="form-group"id="Answer1Question'+i+'"deleted="no" >'
  +'<div class="input-group" id ="Answer1">'
  +'<input type="text" id="input1Q'+i+'" name="Answer1"class="form-control "  placeholder="Enter the option">'
  +'<div class="btn input-group-addon btn-danger addonRemove disabled" >x</div>'
  +'</div>'
  +'</div>'
  +'</div>'
  +'<div class="form-check">'
  +'<label class="form-check-label">'
  +'<input type="checkbox" name="Question'+i+'-requirement"class="form-check-input">Required'
  +'</label>'
  +'</div>'
  +'</div>'
  +'<hr>'
  +'</div>';
}

$(document).on("click","select",function(){
   if(this.value == 'MC' || this.value == 'MSQ'){
     $('#answers'+$(this).attr('quesion')).attr('hidden',false  );
     $('#input'+1+'Q'+$(this).attr('quesion')).prop('required',true);
   }else{
     $('#answers'+$(this).attr('quesion')).attr('hidden',true );
   }
});
$(document).on("click",".removeAnswer",function(){
  var x =parseInt($(this).parent().attr("ansnumber"));
  console.log("removing item");
  if(x>1){
    console.log(x);
    var y='#Answer'+ x+'Question'+$(this).parent().attr("number");
    console.log(y);
      $(y).remove();
      $(this).parent().attr("ansnumber",parseInt($(this).parent().attr("ansnumber"))-1);
      console.log($(this).parent().attr("ansnumber"));
  }
  console.log("remove out");
});
$(document).on("click",".addnewAnswer",function(){
    console.log("Adding answer");
    console.log($(this).parent().attr("ansnumber"));
    $(this).parent().attr("ansnumber",parseInt($(this).parent().attr("ansnumber"))+1);
    var y= answerString($(this).parent().attr("ansnumber"),$(this).parent().attr("number"));
    console.log(y);
    $(this).parent().append(y);
    console.log("adding out");
});
$(document).on("click","#addnewQuestion",function(){
    console.log("adding Question");
    console.log($("#Questions").attr("number"));
    $("#Questions").attr("number",parseInt($("#Questions").attr("number"))+1);
    console.log($("#Questions").attr("number"));
    var y=questionString($("#Questions").attr("number"));
    console.log(y);
    $("#Questions").append(y);
    console.log("adding out ");
});
$(document).on("click","#removeQuestion",function(){
  var x=parseInt($("#Questions").attr("number"));
  console.log(x);
  if(x>1  ){
    var y="#Question"+x;
    console.log(y);
    $(y).remove();
  }
});
$(document).on("click",".addonRemove",function(){
  var x=$(this).parent().attr("id");
  console.log(x);

  if(x=== "Answer1"){
    $(this).prop("required",true);
      $(this).val('');
  }else{

    $(this).parent().parent().attr("deleted","yes");
    $(this).prev().prop("required",false);
    $(this).parent().parent().hide();

  }
})
