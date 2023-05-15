const url = "zodiac.json";	// 読み込むJSONファイル

// 12星座情報を整形して表示する
function formatJSON(json){
	console.log(json);

	// JSONファイルを整形して表示
	let html = "";
	for(let zodiac of json){
		html += "<p>" + zodiac.ja + "/" + zodiac.latin + "</p>";
	}
	document.getElementById("result").innerHTML = html;
}

// 起動時の処理
window.addEventListener("load", ()=>{

	// 12星座情報を取得して表示
	fetch(url)
		.then( response => response.json())
		.then( data => formatJSON(data));

});
