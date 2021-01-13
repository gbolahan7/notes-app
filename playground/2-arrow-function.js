// const square = function(x) {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(6));

const event = {
    name: 'Birthday Party',
    guestLists: ['Abass', 'john', 'Tope'],
    printGuestLists() {
        console.log('Guest list for ' + this.name)

        this.guestLists.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestLists(); 