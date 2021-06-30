#pragma strict

var isActionGUIEnabled: boolean = true;

private var actionGUIBox: Rect = Rect(Screen.width - 150,0,Screen.width - (Screen.width - 75),25);
private var buttonSize: Vector2 = Vector2(50,25);

private var toolbarInt : int = 0;
var toolbarTextures : Texture[];
//var toolbarStrings : String[] = ["Toolbar1", "Toolbar2", "Toolbar3"];


function OnGUI()
{
	if(isActionGUIEnabled)
	{
		GUI.Box(actionGUIBox, "");
		toolbarInt = GUI.Toolbar (Rect (Screen.width-buttonSize.x*3,0,buttonSize.x,buttonSize.y), toolbarInt, toolbarTextures);
		
	}
}

