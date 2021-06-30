#pragma strict

private var scriptGO: GameObject;
private var cursorCtrlScript: CursorCtrl;

function Start()
{
	scriptGO = GameObject.FindWithTag("ScriptGO");
	cursorCtrlScript = scriptGO.GetComponent(CursorCtrl) as CursorCtrl;

}

function Update ()
{
	
}