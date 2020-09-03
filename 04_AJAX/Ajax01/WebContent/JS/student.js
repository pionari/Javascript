
function getParametervalues(){
	var name = "name=" + $("#name").val();
	var kor = "kor=" + $("#kor").val();
	var eng = "eng=" + $("#eng").val();
	var math = "math=" + $("#math").val();
	
	var queryString = "?" + name + "&" + kor + "&" + eng + "&" + math;
	console.log(queryString);
	
	return queryString;
}

$(function(){
	$("#process").click(function() {
		$.ajax({
			url:"score.do" + getParametervalues(),
			dataType:"json",
			success:function(msg){
				//alert(msg.name);
//				컨트롤러 에서는 jsonString으로 보냈는데
//				ajax에서 받을 땐 json(객체자체)로 받아서
//				alert이 object가뜬다
				$("#result").html(msg.name+"님의 총점은 " + msg.sum + "이고, 평균은" + msg.avg + " 입니다")
			},
			error:function(){
				alert("통신실패");
			}
		});
	});
});

//버튼 눌렀을 때 ajax 통신 요청