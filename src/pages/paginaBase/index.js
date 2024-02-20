import { Outlet } from "react-router-dom"
import Container from "../../components/Container"
import { CardProvider } from "../../context/CardContext"
import { Card } from "../../components/Cards"


const PaginaBase = () => {
    return (
        <main>
            <CardProvider>
                <Container>
                    <Card/>
                    <Outlet/>
                </Container>
            </CardProvider>
        </main>
    )
}

export default PaginaBase;