#pragma strict
enum CursorState {None, Over, Clicked, OverThreeDimGUI}

var defCursor: Texture;
var idleCursor: Texture;
var overCursor: Texture;
var clickedCursor: Texture;
var overThreeDimGUICursor: Texture;

private var cursorImage : Texture;
private var cursorState: CursorState = CursorState.None;
private var cursorSize: Vector2 = Vector2(25,25);
@HideInInspector
var cursorPos: Vector2;
private var isCursorEnabled: boolean = false;

function OnGUI()
{
	GUI.depth = -1;
    if(!isCursorEnabled)
    {
    	var pos : Rect = Rect(Screen.width/2 -cursorSize.x/2,Screen.height/2 - cursorSize.y/2,cursorSize.x,cursorSize.y);
    	cursorPos = Vector2(pos.x,pos.y);
    	GUI.Label(pos,cursorImage);
	}
	else
	{
		var mousePos : Vector3 = Input.mousePosition;
    	var pos1 : Rect = Rect(mousePos.x,Screen.height - mousePos.y,cursorSize.x,cursorSize.y);
    	GUI.Label(pos1,defCursor);
	}
}

function Update()
{
	if(Input.GetKeyUp(KeyCode.C)) isCursorEnabled = !isCursorEnabled;
	
	if(isCursorEnabled) EnableFPCMouseLook(false);
	else
	{
		EnableFPCMouseLook(true);
		switch(cursorState)
		{
			case CursorState.Over:
				cursorImage = overCursor;
			break;
			
			case CursorState.Clicked:
				cursorImage = clickedCursor;
			break;
			
			case CursorState.None:
				cursorImage = idleCursor;
			break;
			
			case CursorState.OverThreeDimGUI:
				cursorImage = overThreeDimGUICursor;
			break;
		}
	}
}

function EnableFPCMouseLook(p: boolean)
{
	var camML: MouseLook = Camera.main.gameObject.GetComponent(MouseLook) as MouseLook;
	var fpcML: MouseLook = GameObject.FindWithTag("Player").GetComponent(MouseLook) as MouseLook;
	
	camML.enabled = p;
	fpcML.enabled = p;
}

function SetCursorState(p: CursorState)
{
	cursorState = p;
}

function Start()
{
	Screen.showCursor = false;
}