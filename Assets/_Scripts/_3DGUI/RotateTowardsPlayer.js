#pragma strict

private var player: GameObject;
private var transformToLookAt: Transform;
private var speed: int = 2;
private var rotCorrection: Vector3 = Vector3(180,0,180);

function Start()
{
	player = GameObject.FindWithTag("Player");
	transformToLookAt = transform;
}

function Update ()
{	
	transform.LookAt(Vector3(player.transform.position.x,transform.position.y,player.transform.position.z));
	transform.eulerAngles+=rotCorrection;
	
}