gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachIndex2 = 0;

gdjs.NewSceneCode.forEachObjects2 = [];

gdjs.NewSceneCode.forEachTemporary2 = null;

gdjs.NewSceneCode.forEachTotalCount2 = 0;

gdjs.NewSceneCode.GDBackground2Objects1= [];
gdjs.NewSceneCode.GDBackground2Objects2= [];
gdjs.NewSceneCode.GDBackground2Objects3= [];
gdjs.NewSceneCode.GDBackgroundObjects1= [];
gdjs.NewSceneCode.GDBackgroundObjects2= [];
gdjs.NewSceneCode.GDBackgroundObjects3= [];
gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects3= [];
gdjs.NewSceneCode.GDPlatforms2Objects1= [];
gdjs.NewSceneCode.GDPlatforms2Objects2= [];
gdjs.NewSceneCode.GDPlatforms2Objects3= [];
gdjs.NewSceneCode.GDPlatformsObjects1= [];
gdjs.NewSceneCode.GDPlatformsObjects2= [];
gdjs.NewSceneCode.GDPlatformsObjects3= [];
gdjs.NewSceneCode.GDcoinObjects1= [];
gdjs.NewSceneCode.GDcoinObjects2= [];
gdjs.NewSceneCode.GDcoinObjects3= [];
gdjs.NewSceneCode.GDJumpsObjects1= [];
gdjs.NewSceneCode.GDJumpsObjects2= [];
gdjs.NewSceneCode.GDJumpsObjects3= [];
gdjs.NewSceneCode.GDjumpPowerObjects1= [];
gdjs.NewSceneCode.GDjumpPowerObjects2= [];
gdjs.NewSceneCode.GDjumpPowerObjects3= [];
gdjs.NewSceneCode.GDMonster1Objects1= [];
gdjs.NewSceneCode.GDMonster1Objects2= [];
gdjs.NewSceneCode.GDMonster1Objects3= [];
gdjs.NewSceneCode.GDbossBulletObjects1= [];
gdjs.NewSceneCode.GDbossBulletObjects2= [];
gdjs.NewSceneCode.GDbossBulletObjects3= [];
gdjs.NewSceneCode.GDplayerBulletObjects1= [];
gdjs.NewSceneCode.GDplayerBulletObjects2= [];
gdjs.NewSceneCode.GDplayerBulletObjects3= [];
gdjs.NewSceneCode.GDBossObjects1= [];
gdjs.NewSceneCode.GDBossObjects2= [];
gdjs.NewSceneCode.GDBossObjects3= [];
gdjs.NewSceneCode.GDBossHealthObjects1= [];
gdjs.NewSceneCode.GDBossHealthObjects2= [];
gdjs.NewSceneCode.GDBossHealthObjects3= [];
gdjs.NewSceneCode.GDplayerHealthObjects1= [];
gdjs.NewSceneCode.GDplayerHealthObjects2= [];
gdjs.NewSceneCode.GDplayerHealthObjects3= [];
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1= [];
gdjs.NewSceneCode.GDplayerHealthUpdateObjects2= [];
gdjs.NewSceneCode.GDplayerHealthUpdateObjects3= [];
gdjs.NewSceneCode.GDGameOverObjects1= [];
gdjs.NewSceneCode.GDGameOverObjects2= [];
gdjs.NewSceneCode.GDGameOverObjects3= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObjectObjects3= [];
gdjs.NewSceneCode.GDNewObject2Objects1= [];
gdjs.NewSceneCode.GDNewObject2Objects2= [];
gdjs.NewSceneCode.GDNewObject2Objects3= [];
gdjs.NewSceneCode.GDEnemy1Objects1= [];
gdjs.NewSceneCode.GDEnemy1Objects2= [];
gdjs.NewSceneCode.GDEnemy1Objects3= [];
gdjs.NewSceneCode.GDScoreObjects1= [];
gdjs.NewSceneCode.GDScoreObjects2= [];
gdjs.NewSceneCode.GDScoreObjects3= [];
gdjs.NewSceneCode.GDscoreUpdateObjects1= [];
gdjs.NewSceneCode.GDscoreUpdateObjects2= [];
gdjs.NewSceneCode.GDscoreUpdateObjects3= [];
gdjs.NewSceneCode.GDFlyingObjects1= [];
gdjs.NewSceneCode.GDFlyingObjects2= [];
gdjs.NewSceneCode.GDFlyingObjects3= [];
gdjs.NewSceneCode.GDMultiplierObjects1= [];
gdjs.NewSceneCode.GDMultiplierObjects2= [];
gdjs.NewSceneCode.GDMultiplierObjects3= [];
gdjs.NewSceneCode.GDmultiUpdateObjects1= [];
gdjs.NewSceneCode.GDmultiUpdateObjects2= [];
gdjs.NewSceneCode.GDmultiUpdateObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_1 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects = Hashtable.newFrom({"playerBullet": gdjs.NewSceneCode.GDplayerBulletObjects1});gdjs.NewSceneCode.eventsList0x7f1fac = function(runtimeScene) {

{

/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(2))), "firerate");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDplayerBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].playAnimation();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects, (( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerBulletObjects1[i].addPolarForce((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getAngle()), 400, 1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerBulletObjects1[i].rotateTowardAngle((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getAngle()), 0, runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{gdjs.evtTools.sound.playSound(runtimeScene, "The Essential Retro Video Game Sound Effects Collection [512 sounds]\\The Essential Retro Video Game Sound Effects Collection [512 sounds] By Juhani Junkala\\Weapons\\Single Shot Sounds\\sfx_weapon_singleshot5.wav", false, 100, 1);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x7f1fac
gdjs.NewSceneCode.eventsList0x7f411c = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "footsteps");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "The Essential Retro Video Game Sound Effects Collection [512 sounds]\\The Essential Retro Video Game Sound Effects Collection [512 sounds] By Juhani Junkala\\Movement\\Footsteps\\sfx_movement_footstepsloop4_slow.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "footsteps");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x7f411c
gdjs.NewSceneCode.eventsList0x7f1e1c = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects2[k] = gdjs.NewSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimationName("Walk");
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x7f411c(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x7f1e1c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.NewSceneCode.GDEnemy1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.NewSceneCode.GDEnemy1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.NewSceneCode.GDEnemy1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects = Hashtable.newFrom({"Flying": gdjs.NewSceneCode.GDFlyingObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects = Hashtable.newFrom({"Flying": gdjs.NewSceneCode.GDFlyingObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects = Hashtable.newFrom({"playerBullet": gdjs.NewSceneCode.GDplayerBulletObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects = Hashtable.newFrom({"Flying": gdjs.NewSceneCode.GDFlyingObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects = Hashtable.newFrom({"Flying": gdjs.NewSceneCode.GDFlyingObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.NewSceneCode.GDEnemy1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects = Hashtable.newFrom({"Flying": gdjs.NewSceneCode.GDFlyingObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.NewSceneCode.GDEnemy1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects = Hashtable.newFrom({"Flying": gdjs.NewSceneCode.GDFlyingObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects = Hashtable.newFrom({"playerBullet": gdjs.NewSceneCode.GDplayerBulletObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBossObjects1Objects = Hashtable.newFrom({"Boss": gdjs.NewSceneCode.GDBossObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbossBulletObjects1Objects = Hashtable.newFrom({"bossBullet": gdjs.NewSceneCode.GDbossBulletObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.NewSceneCode.GDcoinObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects2Objects = Hashtable.newFrom({"coin": gdjs.NewSceneCode.GDcoinObjects2});gdjs.NewSceneCode.eventsList0x754bdc = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x754bdc
gdjs.NewSceneCode.eventsList0x825d24 = function(runtimeScene) {

{

/* Reuse gdjs.NewSceneCode.GDcoinObjects1 */

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDcoinObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDJumpsObjects2.createFrom(runtimeScene.getObjects("Jumps"));
gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);

gdjs.NewSceneCode.GDcoinObjects2.length = 0;


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDcoinObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDcoinObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).add(100);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDJumpsObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpsObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects2Objects, 1200, gdjs.randomInRange(0, 600), "");
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x825d24
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbossBulletObjects1Objects = Hashtable.newFrom({"bossBullet": gdjs.NewSceneCode.GDbossBulletObjects1});gdjs.NewSceneCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
gdjs.NewSceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.NewSceneCode.GDJumpsObjects1.createFrom(runtimeScene.getObjects("Jumps"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDmultiUpdateObjects1.createFrom(runtimeScene.getObjects("multiUpdate"));
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.createFrom(runtimeScene.getObjects("playerHealthUpdate"));
gdjs.NewSceneCode.GDscoreUpdateObjects1.createFrom(runtimeScene.getObjects("scoreUpdate"));
{runtimeScene.getVariables().get("state").setNumber(0);
}{runtimeScene.getGame().getVariables().get("jumps").setNumber(0);
}{runtimeScene.getGame().getVariables().get("BossTier").setNumber(1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDJumpsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpsObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDBossObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDBossObjects1[0].getVariables()).get("Health"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDmultiUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmultiUpdateObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("BossTier")));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerHealthUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDscoreUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDscoreUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3", true, 75, 1);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDJumpsObjects1.createFrom(runtimeScene.getObjects("Jumps"));
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDJumpsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpsObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(10000000000000000000000000000000);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("scene").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() < 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7123356);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(300), "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() < 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x7f1fac(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() > 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7038372);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, 300, "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAngle(0);
}
}}

}


{



}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x7f1e1c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scene")) == 1;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)) > 0 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDEnemy1Objects1.createFrom(runtimeScene.getObjects("Enemy1"));
gdjs.NewSceneCode.GDFlyingObjects1.createFrom(runtimeScene.getObjects("Flying"));
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy1Objects1[i].addPolarForce(180, 0.7 * (gdjs.RuntimeObject.getVariableNumber(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))), 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects1[i].addPolarForce(180, 150, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDFlyingObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFlyingObjects1[i].addForceTowardPosition((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))), 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDFlyingObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFlyingObjects1[i].rotateTowardPosition((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointY("")), 0, runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scene")) == 1;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)) > 0 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "Scorer");
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDscoreUpdateObjects1.createFrom(runtimeScene.getObjects("scoreUpdate"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).add(10 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("BossTier")));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDscoreUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDscoreUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(3))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scorer");
}}

}


{

gdjs.NewSceneCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDcoinObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDcoinObjects1[i].getX() <= -(100) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDcoinObjects1[k] = gdjs.NewSceneCode.GDcoinObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDcoinObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDcoinObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects1[i].setX(850);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects1[i].setY(gdjs.randomInRange(0, 600));
}
}}

}


{

gdjs.NewSceneCode.GDEnemy1Objects1.createFrom(runtimeScene.getObjects("Enemy1"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDEnemy1Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDEnemy1Objects1[i].getX() <= -(100) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDEnemy1Objects1[k] = gdjs.NewSceneCode.GDEnemy1Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDEnemy1Objects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemy1Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy1Objects1[i].setX(1200);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects, 860, 492, "");
}}

}


{



}


{

gdjs.NewSceneCode.GDEnemy1Objects1.createFrom(runtimeScene.getObjects("Enemy1"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemy1Objects1 */
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDscoreUpdateObjects1.createFrom(runtimeScene.getObjects("scoreUpdate"));
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy1Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects, gdjs.randomInRange(860, 1200), 492, "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).add(50 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("BossTier"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDscoreUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDscoreUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(3))));
}
}}

}


{

gdjs.NewSceneCode.GDFlyingObjects1.createFrom(runtimeScene.getObjects("Flying"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDFlyingObjects1 */
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDscoreUpdateObjects1.createFrom(runtimeScene.getObjects("scoreUpdate"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDFlyingObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFlyingObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects, gdjs.randomInRange(-(200), -(600)), 0, "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).add(50 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("BossTier"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDscoreUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDscoreUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(3))));
}
}}

}


{

gdjs.NewSceneCode.GDFlyingObjects1.createFrom(runtimeScene.getObjects("Flying"));
gdjs.NewSceneCode.GDplayerBulletObjects1.createFrom(runtimeScene.getObjects("playerBullet"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDFlyingObjects1 */
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDFlyingObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFlyingObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects, gdjs.randomInRange(-(200), -(600)), 0, "");
}}

}


{

gdjs.NewSceneCode.GDEnemy1Objects1.createFrom(runtimeScene.getObjects("Enemy1"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition2IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8434788);
}
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.createFrom(runtimeScene.getObjects("playerHealthUpdate"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).sub(10);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerHealthUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setColor("228;44;44");
}
}}

}


{

gdjs.NewSceneCode.GDFlyingObjects1.createFrom(runtimeScene.getObjects("Flying"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition2IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7192316);
}
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.createFrom(runtimeScene.getObjects("playerHealthUpdate"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).sub(10);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerHealthUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setColor("228;44;44");
}
}}

}


{

gdjs.NewSceneCode.GDEnemy1Objects1.createFrom(runtimeScene.getObjects("Enemy1"));
gdjs.NewSceneCode.GDFlyingObjects1.createFrom(runtimeScene.getObjects("Flying"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy1Objects1Objects, true, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDFlyingObjects1Objects, true, runtimeScene, false);
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{


{
gdjs.NewSceneCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
gdjs.NewSceneCode.GDBackground2Objects1.createFrom(runtimeScene.getObjects("Background2"));
{for(var i = 0, len = gdjs.NewSceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackgroundObjects1[i].addPolarForce(180, 50, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackground2Objects1[i].addPolarForce(180, 50, 0);
}
}}

}


{

gdjs.NewSceneCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBackgroundObjects1[i].getX() <= -(1600) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBackgroundObjects1[k] = gdjs.NewSceneCode.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBackgroundObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBackgroundObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackgroundObjects1[i].setX(1600);
}
}}

}


{

gdjs.NewSceneCode.GDBackground2Objects1.createFrom(runtimeScene.getObjects("Background2"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBackground2Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBackground2Objects1[i].getX() <= -(1600) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBackground2Objects1[k] = gdjs.NewSceneCode.GDBackground2Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBackground2Objects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBackground2Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackground2Objects1[i].setX(1600);
}
}}

}


{



}


{

gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.NewSceneCode.GDplayerBulletObjects1.createFrom(runtimeScene.getObjects("playerBullet"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBossObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7093180);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBossObjects1 */
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
/* Reuse gdjs.NewSceneCode.GDplayerBulletObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossObjects1[i].returnVariable(gdjs.NewSceneCode.GDBossObjects1[i].getVariables().get("Health")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))) * 10);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDBossObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDBossObjects1[0].getVariables()).get("Health"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDbossBulletObjects1.createFrom(runtimeScene.getObjects("bossBullet"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbossBulletObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7588732);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
/* Reuse gdjs.NewSceneCode.GDbossBulletObjects1 */
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.createFrom(runtimeScene.getObjects("playerHealthUpdate"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).sub(10 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerHealthUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDbossBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbossBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x825d24(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{


{
gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDbossBulletObjects1.createFrom(runtimeScene.getObjects("bossBullet"));
{for(var i = 0, len = gdjs.NewSceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossObjects1[i].getBehavior("FireBullet").Fire((gdjs.NewSceneCode.GDBossObjects1[i].getPointX("")), (gdjs.NewSceneCode.GDBossObjects1[i].getPointY("")), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbossBulletObjects1Objects, ((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getAngle())) + 180, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBossObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDBossObjects1[i].getVariables().get("Health")) < 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBossObjects1[k] = gdjs.NewSceneCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBossObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7590732);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBossObjects1 */
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).div(1.5);
}
}{runtimeScene.getVariables().getFromIndex(0).mul(2);
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossObjects1[i].returnVariable(gdjs.NewSceneCode.GDBossObjects1[i].getVariables().get("Health")).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDBossObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDBossObjects1[0].getVariables()).get("Health"))));
}
}{runtimeScene.getGame().getVariables().get("BossTier").add(1);
}}

}


{

gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBossObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBossObjects1[k] = gdjs.NewSceneCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBossObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8423964);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDbossBulletObjects1.createFrom(runtimeScene.getObjects("bossBullet"));
{for(var i = 0, len = gdjs.NewSceneCode.GDbossBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbossBulletObjects1[i].setAngle((gdjs.NewSceneCode.GDbossBulletObjects1[i].getAngle()));
}
}}

}


{



}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
gdjs.NewSceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].playAnimation();
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].resetTimer("GameOver");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].hide();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() > 650 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
gdjs.NewSceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].hide(false);
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, -(300), "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].hide();
}
}}

}


{


{
}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b70b8


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDBackground2Objects1.length = 0;
gdjs.NewSceneCode.GDBackground2Objects2.length = 0;
gdjs.NewSceneCode.GDBackground2Objects3.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects3.length = 0;
gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects3.length = 0;
gdjs.NewSceneCode.GDPlatforms2Objects1.length = 0;
gdjs.NewSceneCode.GDPlatforms2Objects2.length = 0;
gdjs.NewSceneCode.GDPlatforms2Objects3.length = 0;
gdjs.NewSceneCode.GDPlatformsObjects1.length = 0;
gdjs.NewSceneCode.GDPlatformsObjects2.length = 0;
gdjs.NewSceneCode.GDPlatformsObjects3.length = 0;
gdjs.NewSceneCode.GDcoinObjects1.length = 0;
gdjs.NewSceneCode.GDcoinObjects2.length = 0;
gdjs.NewSceneCode.GDcoinObjects3.length = 0;
gdjs.NewSceneCode.GDJumpsObjects1.length = 0;
gdjs.NewSceneCode.GDJumpsObjects2.length = 0;
gdjs.NewSceneCode.GDJumpsObjects3.length = 0;
gdjs.NewSceneCode.GDjumpPowerObjects1.length = 0;
gdjs.NewSceneCode.GDjumpPowerObjects2.length = 0;
gdjs.NewSceneCode.GDjumpPowerObjects3.length = 0;
gdjs.NewSceneCode.GDMonster1Objects1.length = 0;
gdjs.NewSceneCode.GDMonster1Objects2.length = 0;
gdjs.NewSceneCode.GDMonster1Objects3.length = 0;
gdjs.NewSceneCode.GDbossBulletObjects1.length = 0;
gdjs.NewSceneCode.GDbossBulletObjects2.length = 0;
gdjs.NewSceneCode.GDbossBulletObjects3.length = 0;
gdjs.NewSceneCode.GDplayerBulletObjects1.length = 0;
gdjs.NewSceneCode.GDplayerBulletObjects2.length = 0;
gdjs.NewSceneCode.GDplayerBulletObjects3.length = 0;
gdjs.NewSceneCode.GDBossObjects1.length = 0;
gdjs.NewSceneCode.GDBossObjects2.length = 0;
gdjs.NewSceneCode.GDBossObjects3.length = 0;
gdjs.NewSceneCode.GDBossHealthObjects1.length = 0;
gdjs.NewSceneCode.GDBossHealthObjects2.length = 0;
gdjs.NewSceneCode.GDBossHealthObjects3.length = 0;
gdjs.NewSceneCode.GDplayerHealthObjects1.length = 0;
gdjs.NewSceneCode.GDplayerHealthObjects2.length = 0;
gdjs.NewSceneCode.GDplayerHealthObjects3.length = 0;
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.length = 0;
gdjs.NewSceneCode.GDplayerHealthUpdateObjects2.length = 0;
gdjs.NewSceneCode.GDplayerHealthUpdateObjects3.length = 0;
gdjs.NewSceneCode.GDGameOverObjects1.length = 0;
gdjs.NewSceneCode.GDGameOverObjects2.length = 0;
gdjs.NewSceneCode.GDGameOverObjects3.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects3.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects2.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects3.length = 0;
gdjs.NewSceneCode.GDEnemy1Objects1.length = 0;
gdjs.NewSceneCode.GDEnemy1Objects2.length = 0;
gdjs.NewSceneCode.GDEnemy1Objects3.length = 0;
gdjs.NewSceneCode.GDScoreObjects1.length = 0;
gdjs.NewSceneCode.GDScoreObjects2.length = 0;
gdjs.NewSceneCode.GDScoreObjects3.length = 0;
gdjs.NewSceneCode.GDscoreUpdateObjects1.length = 0;
gdjs.NewSceneCode.GDscoreUpdateObjects2.length = 0;
gdjs.NewSceneCode.GDscoreUpdateObjects3.length = 0;
gdjs.NewSceneCode.GDFlyingObjects1.length = 0;
gdjs.NewSceneCode.GDFlyingObjects2.length = 0;
gdjs.NewSceneCode.GDFlyingObjects3.length = 0;
gdjs.NewSceneCode.GDMultiplierObjects1.length = 0;
gdjs.NewSceneCode.GDMultiplierObjects2.length = 0;
gdjs.NewSceneCode.GDMultiplierObjects3.length = 0;
gdjs.NewSceneCode.GDmultiUpdateObjects1.length = 0;
gdjs.NewSceneCode.GDmultiUpdateObjects2.length = 0;
gdjs.NewSceneCode.GDmultiUpdateObjects3.length = 0;

gdjs.NewSceneCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
