var way="contents/", down=false;

function home()
{
	window.open('','_self').close();
	window.open("../메인.html");
}

function first() 
{
	down=true;
}

function list()
{
	var data=document.getElementById("search");
	data.innerHTML='<option value="검"><option value="색"><option value="해"><option value="봐"><option value="------">';
}


function search()
{
	alert('니알아서 검색해');
	window.open("https://www.naver.com/");
}