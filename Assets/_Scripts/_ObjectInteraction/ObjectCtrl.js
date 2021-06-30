#pragma strict

private var scriptGO: GameObject;
private var cursorCtrlScript: CursorCtrl;
@HideInInspector
private var player: GameObject;
private var linkedGO: LinkedGameObject;

function Awake()
{
	linkedGO = gameObject.AddComponent(LinkedGameObject);//izveidojot objektu to pievienojam LinkedGO klasei, jo klase extends MonoBehaviour
	linkedGO.SetUpperGO(gameObject);
	//linkedGO.upperGO = gameObject;
}

function Start()
{
	scriptGO = GameObject.FindWithTag("ScriptGO");
	cursorCtrlScript = scriptGO.GetComponent(CursorCtrl) as CursorCtrl;
	player = GameObject.FindWithTag("Player");

}
function Update ()
{
	var ray: Ray = Camera.main.ScreenPointToRay (cursorCtrlScript.cursorPos);
	var hit: RaycastHit;
	
	if(collider.Raycast(ray, hit, 100.0))
	{
		if(Input.GetMouseButtonUp(1))
		{
			if(!linkedGO.isThereAlreadyOIMenu&&!GameObject.Find("OIMenu"))
			{
				var ioMenu: GameObject = InstantiateOIMenu();
				linkedGO.AddingOIMenu(ioMenu);//tell linkedGO that we are adding OIMenu and there will
			}
		}
	}
}

function InstantiateOIMenu(): GameObject
{
	var pos: Vector3 = Vector3(transform.position.x,transform.position.y+1,transform.position.z);
	var rot: Quaternion = Quaternion.Euler(0,player.transform.rotation.y,0);
	var obj = Instantiate(Resources.Load("OIMenu",Transform),pos,rot);
	var oiMenu: OIMenu = obj.GetComponent(OIMenu) as OIMenu;
	obj.gameObject.name = "OIMenu";
	
	oiMenu.linkedGO = linkedGO;
	return obj.gameObject;
}