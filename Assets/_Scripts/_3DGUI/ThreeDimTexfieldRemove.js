#pragma strict

private var scriptGO: GameObject;
private var cursorCtrlScript: CursorCtrl;
private var alreadyCalled: boolean = false;
private var addGO: GameObject;

function Start()
{
	scriptGO = GameObject.FindWithTag("ScriptGO");
	cursorCtrlScript = scriptGO.GetComponent(CursorCtrl) as CursorCtrl;
	addGO = transform.root.gameObject.Find("Add");
}

function Update ()
{
	var ray: Ray = Camera.main.ScreenPointToRay (cursorCtrlScript.cursorPos);
	var hit: RaycastHit;
	
	if(collider.Raycast(ray, hit, 100.0))
	{
		if(Input.GetMouseButtonDown(0))
		{
			if(!alreadyCalled) Remove();
		}
		if(Input.GetMouseButtonUp(0))
		{
			if(alreadyCalled) alreadyCalled = false;
		}
	}
}

function Remove()
{
	alreadyCalled = true;
	var all3DTexts: GameObject [] = GameObject.FindGameObjectsWithTag("3DTextfield");
	var count: int;
	
	count = Count3DTextsInSameHeirarchy(all3DTexts);
	
	if(count>1)
	{
		var txtfldAdd: ThreeDimTextfieldAdd = addGO.GetComponent(ThreeDimTextfieldAdd) as ThreeDimTextfieldAdd;
		txtfldAdd.idx--;
		MoveAllOneBlockUpwards(all3DTexts);
		addGO.transform.position.y+=0.25;
		Destroy(transform.parent.gameObject);
	}
}

function MoveAllOneBlockUpwards(p: GameObject[])
{	
	var localName: String = transform.parent.gameObject.name;
	var localIdx: int = System.Int32.Parse(localName[localName.Length-1].ToString());
	
	print("Localname "+localName);
	
	for (var go: GameObject in p)
	{
		if(transform.root.gameObject == go.transform.root.gameObject)
		{
			var goName: String = transform.parent.gameObject.name;
			var goIdx: int = System.Int32.Parse(goName[goName.Length-1].ToString());
			//print("goName "+goName);
			print(goName[goName.Length-1]+"/"+goIdx+".."+localIdx);
			
			if(goIdx>localIdx)
			{
				go.name="3DTextfield"+(goIdx-1);
			 	go.transform.position.y+=0.25;
			}
		}
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