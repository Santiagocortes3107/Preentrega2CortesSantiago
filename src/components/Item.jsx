import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

export const Item = ({dep}) => {
    return(
        <Card
        style={{width:"18rem"}}
        key={dep.id}
        className="float-start"
         >
            <Card.Img variant="top" src= {dep.img} />
            <Card.Body>
                <Card.Title>{dep.dep_precio}</Card.Title>
                <Card.Text>Categoria: {dep.category}</Card.Text>
                <Link to= {`/item/${dep.id}`}>
                    <Button variant="primary">Ver detalle</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}