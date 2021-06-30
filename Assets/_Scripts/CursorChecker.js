#pragma strict

private var isMouseDown: boolean=false;
private var scriptGO: GameObject;
private var cursorCtrlScript: CursorCtrl;
private var justFoundTag: boolean = false;

function Start()
{
	scriptGO = GameObject.FindWithTag("ScriptGO");
	cursorCtrlScript = scriptGO.GetComponent(CursorCtrl) as CursorCtrl;
	
}

function Update()
{
	//var fwd = Camera.main.transform.forward;
	var ray: Ray = Camera.main.ScreenPointToRay (cursorCtrlScript.cursorPos);
	var hit: RaycastHit;
		
	if(Input.GetMouseButtonUp(0)) isMouseDown = false;
	if(isMouseDown) scriptGO.SendMessage("SetCursorState",CursorState.Clicked);
		
	if(Physics.Raycast (ray, hit, 100.0))
	{
		if(hit.collider.gameObject.tag == "InteractionObject")
		{
			if(!isMouseDown) scriptGO.SendMessage("SetCursorState",CursorState.Over);
				
			if(Input.GetMouseButtonDown(0))
			{
				isMouseDown = true;
				scriptGO.SendMessage("SetCursorState",CursorState.Clicked);
			}
				
		}	
		else if(hit.collider.gameObject.tag == "3DGUI" || hit.collider.gameObject.tag == "TriggerObject")
		{
			scriptGO.SendMessage("SetCursorState",CursorState.OverThreeDimGUI);
		}
			
		else
		{	
			if(!isMouseDown) scriptGO.SendMessage("SetCursorState",CursorState.None);
		}
	}
	
		
}


