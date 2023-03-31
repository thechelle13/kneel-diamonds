
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder} from "./database.js"



// At the top you will see a blank click event listener.
// Implement the correct code to check if the order button was clicked.


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "order") {
            addCustomOrder()
            //addCustomOrder(parseInt(event.target.value))
            //window.alert(`${event.target.value}`)
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                    ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="order">Create Custom Order</button>
            
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                
                ${Orders()}
        </article>
    `
}


