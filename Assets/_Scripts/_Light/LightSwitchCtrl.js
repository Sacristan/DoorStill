#pragma strict

private var scriptGO: GameObject;
private var cursorCtrlScript: CursorCtrl;

var lightGOs: GameObject[];

private var player: GameObject;
private var myTransform: Transform;
private var dist: float;

function Start()
{
	player=GameObject.FindWithTag("Player");
	myTransform=transform;
	
	scriptGO = GameObject.FindWithTag("ScriptGO");
	cursorCtrlScript = scriptGO.GetComponent(CursorCtrl) as CursorCtrl;
}

function Update()
{
	dist=Vector3.Distance(myTransform.position,player.transform.position);

	//print("From "+gameObject.name+" to Player distance: "+dist);
	
	var ray: Ray = Camera.main.ScreenPointToRay (cursorCtrlScript.cursorPos);
	var hit: RaycastHit;
	
	if(collider.Raycast(ray, hit, 100.0))
	{
		if(Input.GetMouseButtonUp(0)&&dist<5)
		{
			for (var lightGO: GameObject in lightGOs)
			{  
				if(lightGO.active)
				{
					lightGO.active=false;
					GameObject.FindWithTag("Player").SendMessage("SetFlashLightEnabled",true );
				}
				else
				{
					lightGO.active=true;
					GameObject.FindWithTag("Player").SendMessage("SetFlashLightEnabled",false);
				}
			}
		}
	}
}