var al = document.getElementsByTagName('a');
for(var i=0; i<al.length; i++)
{
	al[i].onmouseover=pod;
	al[i].onmouseout=od;
}
function pod(e)
{
	e.target.style.color="#FFF973";
}
function od(e)
{
	e.target.style.color="gold";
}