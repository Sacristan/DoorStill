#pragma strict

function OnMouseUp() 
{
	Application.ExternalEval("window.open('http://www.youtube.com','_blank')");
}

function OnMouseOver()
{
	if(renderer) renderer.material.color=Color.red;
}

function OnMouseExit()
{
	if(renderer) renderer.material.color=Color.white;
}