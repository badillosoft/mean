const r_tel = /(\d[\n\s-]*){10}/g;

const text = "Tel. 5512345678 hola 551 23 45 678 mundo 55-123-45-678 peor caso 1     2    3    -  ---- - -- -   -- - -      4        5  67    8 9 0";

for (let tel of text.match(r_tel)) {
    console.log(tel.replace(/\s+/g, "").replace(/\-+/g, ""));
}

/^[aA]/;
/[sS]$/;