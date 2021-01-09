// Copyright @ ColorCodedLyrics
var syl;
function hanToRom () {
syl = document.romanization.han.value + " ";
syl = syl.replace(/꽂히는/g, "kkochineun");

	
document.romanization.rom.value=syl;
}
