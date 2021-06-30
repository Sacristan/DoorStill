#pragma strict

var flashlightGO : GameObject;
private var isFlashLightEnabled: boolean = false;
private var isFlashLightFunctionEnabled: boolean = false;

function Update ()
{
	if(isFlashLightFunctionEnabled)
	{
		//print(isFlashLightFunctionEnabled);
		if(Input.GetKeyUp(KeyCode.F)) isFlashLightEnabled = !isFlashLightEnabled;
		
		if(isFlashLightEnabled)
		{
			flashlightGO.SetActiveRecursively(true);
			
		}
		
		else 
		{
			flashlightGO.SetActiveRecursively(false);		
			
		}
	}
	else
	{
		if(isFlashLightEnabled)
		{
			isFlashLightEnabled = false;
			flashlightGO.SetActiveRecursively(false);
		}
	}
}

function SetFlashLightEnabled(p: boolean)
{
	isFlashLightFunctionEnabled = p;
}