import { createResource } from "solid-js"
import Card from "../components/Card"

const fetchProducts = async() => {
    const res = await fetch('http://localhost:4000/products')
    return res.json()
}

export default function Home(){
    const [products] = createResource()
    return(
        <div class="grid grid-cols-4 gap-10 my-4">
            <Card title="Ninja Tee" rounded={true} flat={false}>
                <h2>Ninja Hatori</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="btn">View</button>
            </Card>
            <Card title="Ninja Tote Bag" rounded={false} flat={true}>
                <h2>Ninja Hatori</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price $10</p>
                <button class="btn">View</button>
            </Card>
        </div>
    )
}