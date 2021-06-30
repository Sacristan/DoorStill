class LinkedGameObject extends MonoBehaviour //pievienojam MonoBehaviour klases objektus un metodes
{
	@HideInInspector
	var upperGO: GameObject;
	@HideInInspector
	var oiMenuGO: GameObject;
	@HideInInspector
	var isThereAlreadyOIMenu: boolean = false;

	@HideInInspector
	var confirmGO: GameObject;
	@HideInInspector
	var isThereAlreadyConfirm: boolean = false;
	
	@HideInInspector
	var optionsObject: ThreeDimOptionsGUI;
	
	function SetUpperGO(p : GameObject)
	{
		upperGO = p;
	}
	
	function DestroyAll() // izniicina visu
	{
		Destroy(oiMenuGO);
		oiMenuGO = null;
		Destroy(confirmGO);
		confirmGO = null;
		Destroy(upperGO);
		upperGO = null;
	}
	
	function AddingOIMenu(p: GameObject)//zino, ka ir pievienots OIMenu
	{
		oiMenuGO = p;
		isThereAlreadyOIMenu = true;
	}
	
	function DestroyOIMenu() //izniicina OIMenu (Options/Delete)
	{
		isThereAlreadyOIMenu = false;
		Destroy(oiMenuGO);
		oiMenuGO = null;
	}
	
	function AddingConfirm(p: GameObject)//zino, ka ir pievienots OIMenu
	{
		isThereAlreadyConfirm = true;
		confirmGO = p;
	}
		
	function DestroyConfirm() //izniicina confirm
	{
		isThereAlreadyConfirm = false;
		Destroy(confirmGO);
		confirmGO = null;
	}
		
}

class ThreeDimOptionsGUI
{
	var threeDimTextFields: ThreeDimTextField[] = new ThreeDimTextField[8];
	var addGO: GameObject;
	
	function RemoveGUIElemetAt(p: int)
	{
		addGO.transform.position.y+=0.25;
		if(p<8)
		{
			for(var i: int = p; i<8;i++)
			{
				threeDimTextFields[i].go.transform.position.y+=0.25;
				threeDimTextFields[i].idx--;
			}
		}
	}
}

class ThreeDimTextField
{
	var go: GameObject;
	var idx: int;
	
}
