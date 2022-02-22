for (let i = 100; i <= 200; i++) {
  let mod3 = !(i % 3);
  let mod4 = !(i % 4);

  if (!mod3 && !mod4) {
    console.log(i);
  } else {
    if (mod3 && mod4) {
      console.log("LoopyLighthouse");
    } else if (mod4) {
      console.log("Lighthouse");
    } else if (mod3) {
      console.log("Loopy");
    }
  }
}