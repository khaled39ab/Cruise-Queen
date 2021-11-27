document.getElementById ('firstClassIncrease').addEventListener ('click', function(){
    const firstClassInput = document.getElementById ('firstClassCount');
    const firstClassCount = parseInt (firstClassInput.value);
    const firstClassNewCount = firstClassCount + 1 ;
    firstClassInput.value = firstClassNewCount ;
});

document.getElementById ('firstClassDecrease').addEventListener ('click', function(){
    const firstClassInput = document.getElementById ('firstClassCount');
    const firstClassCount = parseInt (firstClassInput.value);
    let firstClassNewCount = firstClassCount;
    if (firstClassCount > 0){
        firstClassNewCount = firstClassCount - 1 ;
    }
    firstClassInput.value = firstClassNewCount ;
});

document.getElementById ('economyIncrease').addEventListener ('click', function(){
    const economyInput = document.getElementById ('economyCount');
    const economyCount = parseInt (economyInput.value);
    const economyNewCount = economyCount + 1 ;
    economyInput.value = economyNewCount;
});

document.getElementById ('economyDecrease').addEventListener ('click', function(){
    const economyInput = document.getElementById ('economyCount');
    const economyCount = parseInt (economyInput.value);
    let economyNewCount = economyCount ;
    if (economyCount > 0){
        economyNewCount = economyCount - 1 ;
    }
    economyInput.value = economyNewCount;
})