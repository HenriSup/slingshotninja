class BallBehavior extends Sup.Behavior {
  
  private debuggerActors:Sup.Actor[] = Sup.getActor("Debugger").getChildren();
  private debuggerTextRenderers:Sup.TextRenderer[];
  private cannonBody:CANNON.Body = this.actor.cannonBody.body;
  
  awake() {
    this.debuggerTextRenderers = this.debuggerActors.map(actor=>actor.textRenderer);
  }

  update() {
    let velocity = this.cannonBody.velocity;
    this.cannonBody.linearDamping = 0.5;
    let pushForce = 500;
    this.debuggerTextRenderers[0].setText(velocity.x +" "+(velocity.y.toFixed(2)));
    
    if(Sup.Input.wasKeyJustPressed('Z')){
      velocity.y = velocity.y + pushForce;
    }
    if(Sup.Input.wasKeyJustPressed('Q')){
      velocity.x = velocity.x - pushForce;
    }
    if(Sup.Input.wasKeyJustPressed('S')){
      velocity.y = velocity.y - pushForce;
    }
    if(Sup.Input.wasKeyJustPressed('D')){
      velocity.x = velocity.x + pushForce;
    }
    //this.body.setCustomGravity(0,-0.5);
     this.cannonBody.velocity=new CANNON.Vec3(velocity.x,velocity.y,0);
  }
}
Sup.registerBehavior(BallBehavior);
