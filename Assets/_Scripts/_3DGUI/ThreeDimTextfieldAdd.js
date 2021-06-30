#pragma strict

var txfield: Transform;
private var scriptGO: GameObject;
private var cursorCtrlScript: CursorCtrl;
private var alreadyInstantiated: boolean = false;
private var isButtonDown: boolean = false;
@HideInInspector
var idx: int=1;

function Start()
{
	scriptGO = GameObject.FindWithTag("ScriptGO");
	cursorCtrlScript = scriptGO.GetComponent(CursorCtrl) as CursorCtrl;

}

function Update ()
{
	var ray: Ray = Camera.main.ScreenPointToRay (cursorCtrlScript.cursorPos);
	var hit: RaycastHit;
	
	if(collider.Raycast(ray, hit, 100.0))
	{
		if(Input.GetMouseButtonDown(0))
		{
			if(!alreadyInstantiated) IntantiateTxfield();
		}
		if(Input.GetMouseButtonUp(0))
		{
			if(alreadyInstantiated) alreadyInstantiated = false;
		}
	}
}

function IntantiateTxfield()
{
	alreadyInstantiated =true;
	var all3DTexts: GameObject [] = GameObject.FindGameObjectsWithTag("3DTextfield");
	var count = Count3DTextsInSameHeirarchy(all3DTexts);
	
	if(count<8)
	{
		idx++;
		var temp: GameObject = GameObject.FindWithTag("3DTextfield");
		var ob = Instantiate(txfield,Vector3(temp.transform.position.x,transform.position.y,temp.transform.position.z),Quaternion.identity);
		ob.transform.parent = transform.root;
		ob.gameObject.name = "3DTextfield"+idx;
		transform.position.y-=0.25;
	}
}

function Count3DTextsInSameHeirarchy(p: GameObject[]): int
{
	var c: int;
	for (var go: GameObject in p)
	{
		if(transform.root.gameObject == go.transform.root.gameObject) c++;
		
	}
	
	return c;
}
