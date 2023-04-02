import './styles.css'

export default function Header() {
    return (
        <header>
            <section>
                <span
                    style={{
                        fontFamily: "monospace",
                        fontSize: "36px"
                    }}
                >L@StBlOckSc@n</span>
            </section>
            <section style={{
                paddingRight: "30px"
            }}>
                <h1 style={{
                    fontSize: "36px", 
                    textAlign: "center"}}
                >Showing data from last block in Ethereum BlockChain!</h1>
            </section>
        </header>
    )
}