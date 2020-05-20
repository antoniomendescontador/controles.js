let valor = 1
const nums = []
for(valor; valor <= 10; valor++){
    nums.push(valor)
    //console.log(valor)
}

for (x in nums) {
    if (x == 5){
        break
    }
    console.log(`x = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//evitar o uso de rótulos externos
externo: for (a in nums){
    for (b in nums){
        if(a==2 && b==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
