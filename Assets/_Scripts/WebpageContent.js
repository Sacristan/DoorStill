#pragma strict
var url = "http://www.unity3d.com";

function Start ()
{
    var www : WWW = new WWW (url);
    
    yield www;
    
    renderer.material.mainTexture = www.texture; 
}