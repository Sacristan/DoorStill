#pragma strict

private var scriptGO: GameObject;
private var cursorCtrlScript: CursorCtrl;
@HideInInspector
var linkedGO: LinkedGameObject;

function Awake()
{	
	SetCollidersToIgnore(gameObject);
}

function Start()
{
	scriptGO = GameObject.FindWithTag("ScriptGO");
	cursorCtrlScript = scriptGO.GetComponent(CursorCtrl) as CursorCtrl;
	
}

function Update ()
{
	var ray: Ray = Camera.main.ScreenPointToRay (cursorCtrlScript.cursorPos);
	var hit: RaycastHit;
	
	if(Physics.Raycast(ray, hit, 100.0))
	{
		if(hit.collider.gameObject.name == "Options" )
		{
			if(Input.GetMouseButtonUp(0))
			{
				//linkedGO.AddOptions();	
				print("Options");
			}
		}
		
		else if(hit.collider.gameObject.name == "Delete" )
		{
			if(Input.GetMouseButtonUp(0))
			{
				if(!linkedGO.isThereAlreadyConfirm)
				{
					var confirm: GameObject = InstantiateConfirm();
					linkedGO.AddingConfirm(confirm);
				}
			}
		}
		else if(hit.collider.gameObject.name == "X" )
		{
			if(Input.GetMouseButtonUp(0))
			{
				if(linkedGO.confirmGO != null) linkedGO.DestroyConfirm();
				linkedGO.DestroyOIMenu();
			}
		}
		else if(hit.collider.gameObject.name == "Y" && Input.GetMouseButtonUp(0))
		{
			linkedGO.DestroyAll();
		}
		else if(hit.collider.gameObject.name == "N" && Input.GetMouseButtonUp(0))
		{	
			linkedGO.DestroyConfirm();
		}
	}
}

function InstantiateConfirm(): GameObject
{
	var pos: Vector3 = transform.position + Vector3(0.7,-0.25,0);
	var obj = Instantiate(Resources.Load("ConfirmPrefab",Transform),pos,transform.rotation);
	var confirm: GameObject = obj.gameObject as GameObject;
	
	confirm.transform.parent = transform;
	SetCollidersToIgnore(confirm);
	return confirm;
}

function SetCollidersToIgnore(p: GameObject)
{
	for(var currCollider in p.GetComponentsInChildren(Collider))
	{
		Physics.IgnoreCollision(GameObject.FindWithTag("Player").collider,currCollider as Collider);
		
	}
}
