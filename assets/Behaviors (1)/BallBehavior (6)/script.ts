class BallBehavior extends Sup.Behavior {
  
  private debuggerActors:Sup.Actor[] = Sup.getActor("Debugger").getChildren();
  private debuggerTextRenderers:Sup.TextRenderer[];
  private body:Sup.ArcadePhysics2D.Body = this.actor.arcadeBody2D;
  
  awake() {
    this.debuggerTextRenderers = this.debuggerActors.map(actor=>actor.textRenderer);
  }

  update() {
    let velocity = this.body.getVelocity();
    this.debuggerTextRenderers[0].setText(velocity.x +" "+velocity.y);
    velocity.y = velocity.y-0.1; 
    this.body.setVelocity(velocity);
  }
}
Sup.registerBehavior(BallBehavior);
