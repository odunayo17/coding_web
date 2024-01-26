let a = prompt("Enter your bank code?")

switch (a) {
    case "*737#":
        let q = prompt("1. Transfer Money.\n 2. Buy Data. \n 3. Buy Airtime")
        if (q == "1") {
            let x = prompt("Enter Pin Number")
            let b = prompt("Enter Amount")
            alert(`"you have Successfully Transferred ${b}"`)
        }

        if (q == "2") {
            let x = prompt("Enter Phone Number")
            let b = prompt("1. 50# \n 2. 100# \n 3. 200# \n 4. 300# \n 5. 400# \n 6. 500#")
            if (b == "1") {
                alert("you have Successfully Bought Data Of 50#")
            }
            else if (b == "2") {
                alert("you have Successfully Bought Data Of 100#")
            }
            else if (b == "3") {
                alert("you have Successfully Bought Data Of 200#")
            }

            else if (b == "4") {
                alert("you have Successfully Bought Data Of 300#")
            }

            else if (b == "5") {
                alert("you have Successfully Bought Data Of 400#")
            }

            else if (b == "6") {
                alert("you have Successfully Bought Data Of 500#")
            }

        }

        if (q == "3") {
            let x = prompt("Enter Pin Number")
            let b = prompt("1. 50# \n 2. 100# \n 3. 200# \n 4. 300# \n 5. 400# \n 6. 500#")
            if (b == "1") {
                alert("you have Successfully Bought Airtime Of 50#")
            }
            else if (b == "2") {
                alert("you have Successfully Bought Airtime Of 100#")
            }
            else if (b == "3") {
                alert("you have Successfully Bought Airtime Of 200#")
            }

            else if (b == "4") {
                alert("you have Successfully Bought Airtime Of 300#")
            }

            else if (b == "5") {
                alert("you have Successfully Bought Airtime Of 400#")
            }

            else if (b == "6") {
                alert("you have Successfully Bought Airtime Of 500#")
            }
        }

        break;

    default:
        alert("not recognized")
        break;
}








// let wed = prompt("what's the weather lie")
// switch (wed) {
//     case "Rainy":
//         alert("wear a coat")
//         break;

//     default:
//         alert("not recognized")
//         break;
// }
