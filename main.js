//plus minus button event 
function handleTicket(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + 'Count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

    calculateTotal();
}
document.getElementById('firstClassIncrease').addEventListener('click', function () {
    handleTicket('firstClass', true);
    // const firstClassInput = document.getElementById ('firstClassCount');
    // const firstClassCount = parseInt (firstClassInput.value);
    // const firstClassNewCount = firstClassCount + 1 ;
    // firstClassInput.value = firstClassNewCount ;
});

document.getElementById('firstClassDecrease').addEventListener('click', function () {
    handleTicket('firstClass', false);
    // const firstClassInput = document.getElementById ('firstClassCount');
    // const firstClassCount = parseInt (firstClassInput.value);
    // let firstClassNewCount = firstClassCount;
    // if (firstClassCount > 0){
    //     firstClassNewCount = firstClassCount - 1 ;
    // }
    // firstClassInput.value = firstClassNewCount ;
});

document.getElementById('economyIncrease').addEventListener('click', function () {
    handleTicket('economy', true);
    // const economyInput = document.getElementById ('economyCount');
    // const economyCount = parseInt (economyInput.value);
    // const economyNewCount = economyCount + 1 ;
    // economyInput.value = economyNewCount;
});

document.getElementById('economyDecrease').addEventListener('click', function () {
    handleTicket('economy', false);
    // const economyInput = document.getElementById ('economyCount');
    // const economyCount = parseInt (economyInput.value);
    // let economyNewCount = economyCount ;
    // if (economyCount > 0){
    //     economyNewCount = economyCount - 1 ;
    // }
    // economyInput.value = economyNewCount;
});

//calculation
function calculateTotal() {
    const firstClassInput = document.getElementById('firstClassCount');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economyCount');
    const economyCount = parseInt(economyInput.value);

    const subtotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal').innerText = '$' + subtotal;

    const vat = Math.round(subtotal * 0.1);
    document.getElementById('vat').innerText = '$' + vat;

    const total = subtotal + vat;
    document.getElementById('total').innerText = '$' + total;

    document.getElementById('costShow').innerText = '$' + total;
};

//Book now button event handler

function booking() {
    const firstClassTicket = document.getElementById("firstClassCount").value;
    const economyTicket = document.getElementById("economyCount").value;
    if (firstClassTicket == 0 && economyTicket == 0) {
        return;
    }

    const confirmPage = document.getElementById('fontPage');
    confirmPage.style.display = 'none';

    const confirmMessage = document.getElementById('confirmArea');
    confirmMessage.style.display = 'block';

}
const bookNow = document.getElementById('bookNow').addEventListener('click', function () {
    booking();
});
