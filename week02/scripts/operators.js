// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function isHit() {
    hit = bool 
    randomNumber = Math.random();
    if (randomNumber > .5) {
        hit = false;
    }
    else if (randomNumber < .5) {
        hit = true;
    }
    return hit;
}

function shipCanFire() {
    if (shipHealth > 0 && shipAmmo > 0) {
        return true;
    }
    else {
        return false;
    }
}

function isDestroyed(health) {
    if (health <= 0) {
        return true;
    }
  }

function reloadShip() {
    // reduce ship health by 1 and increase ammo by 3
    shipHealth--;
    shipAmmo += 3;
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}