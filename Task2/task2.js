let timeStore = localStorage;
let time;

if (timeStore.getItem("time") != null){
	time = parseInt(timeStore.getItem("time"));
}
else{
	time = 300;
	timeStore.setItem("time", time);
}






let answer = [
	["гаррі поттер", "гарри поттер","harry potter"],
	[" nm,.","sponge bob", "spongebob", "губка боб квадратные штаны", "губка боб квадратні штани"],
	["пірати", "пірати карибского моря", "капитан джек горобець", "пираты","пираты карибского моря", "капитан джек воробей", "pirates of the caribbean"],
	["сімпсони", "симпсоны","simpsons", "the simpsons"],
	["зоряні війни", "звездные войны","star wars", "имперский марш", "імперский марш"],
	["lion king","the lion king", "король лев", "симба", "сімба"],
	["frozen","холодное сердце", "холодне серце", "эльза", "ельза"],
	["shrek","шрек"],
	["shrek","шрек"],
	["rocky","рокки", "роккі"],
	["индиана джонс","indiana jones"],
	["один вдома", "один дома","home alone"],
	["термінатор", "терминатор","terminator"],
	["назад у майбутнє", "назад в будущее", "back to the future", "марти макфлай"],
	["мисливці за привидами", "охотники за привидениями","ghost busters"]
];

let was = [];

let progress = 0;

let num = Math.floor(1 + Math.random() * 12);

$(document).ready(function  () {
    $(".progress").knob({
        'min' : 0,
        'max' : 10,
        'angleOffset' : -60,
        'angleArc' : 120,
        'readOnly' : true,
        'width' : '100%',
        'thickness' : 0.2,
        'lineCap' : 'round',
        'displayInput' : false,
        'bgColor' : 'white',
        'fgColor' : 'blue'
    });
		$(".time").knob({
			'min' : 0,
			'max' : 300,
			'angleOffset' : 0,
			'angleArc' : 360,
			'readOnly' : true,
			'width' : '100%',
			'thickness' : 0.2,
			'lineCap' : 'butt',
			'displayInput' : false,
			'bgColor' : 'white',
			'fgColor' : 'blue'
	
		});

		$(".slideRules").click(function(){
			$("#rules").slideToggel();

		});

		$("#start").click(function(){
			$("#start").css('display', 'none');
			$(".sound").css('display','block');
			startRebus(num);
			startTime();

		});

		$("#btnTask").click(function(){
			if (answer[num-1].indexOf($("#inputTask").val().toLowerCase()) != -1) {
			alertify.success("відповідь вірна");
			$("inputTask").val("");
			progress++;
			$(".progress").val(progress).trigger('change');
			was.push(num);
			console.log(was);
		
			if (progress < 10){
				do{
					num = Math.floor(1 + Math.random() * 15);
				}while(was.includes(num));
				console.log(num);
				startRebus(num);
			}
			else{
				$(".sound, #btnTask, #inputTask1").css({
					'display' : 'none'
				});
				$("#nextTask").css({
					'display' : 'flex'
				});
				localStorage.removeItem("time");
			}
			}
			else{
				alertify.error("псіна неправільна");
			}
		   });

});


function startTime (){
	setInterval(function(){
		time = parseInt(timeStore.getItem("time")) -1;
		$(".time").val(time).trigger('change');
		if (time == 0) {
			alertify.error("time is over");
			setTimeout(() => window.open("../Task1/index.html", "_self", false), 2000);
			timeStore.removeItem("time");
		}
		else if (time > 0){
			timeStore.setItem("time", time);
		}

	}, 1000);
}

function startRebus(arg){
	$("#melody").attr("src", `sound/${arg}.mp3`);


}





























































