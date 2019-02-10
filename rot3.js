var en="abcdefghijklmnopqrstuvwxyz";
var EN="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ru="абвгдеёжзийклмнопрстуфхчшщьыъэюя";
var RU="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЧШЩЬЫЪЭЮЯ";
var numbers="0123456789";
var step=3;
var inpuText=document.getElementById("input_text");
var output=document.getElementById("output_text");
function crypt() {
	var outpuText="";
	for (symbol of inpuText.value) {
		var position=en.indexOf(symbol);
		if (position > -1) {
			position += step;
			if (position >= en.length) {
				position -= en.length; }
			outpuText += en.substr(position,1);
		} else {
			var position=ru.indexOf(symbol);
			if (position > -1) {
				position += step;
				if (position >= ru.length) {
					position -= ru.length; }
				outpuText += ru.substr(position,1);
			} else {
				var position=numbers.indexOf(symbol);
				if (position > -1) {
					position += step;
					if (position >= numbers.length) {
						position -= numbers.length; }
					outpuText += numbers.substr(position,1);
				} else {
					var position=EN.indexOf(symbol);
					if (position > -1) {
						position += step;
						if (position >= EN.length) {
							position -= EN.length; }
						outpuText += EN.substr(position,1);
					} else {
						var position=RU.indexOf(symbol);
						if (position > -1) {
							position += step;
							if (position >= RU.length) {
								position -= RU.length; }
							outpuText += RU.substr(position,1);
						} else {
							outpuText += symbol;
						}
					}
				}
			}
		}
	}
	output.innerText = outpuText;
}
inpuText.addEventListener("keyup",crypt,false);
