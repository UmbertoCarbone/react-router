import jumbotronAbout from "../assets/jumbotronAbout.jpg"

export default function AboutPage() {
    return (
        <>
            <main style={{ paddingTop: "80px", position: "relative" }}>
                <h1 className="text-center text-white" style={{ marginTop: "380px" }}>Chi siamo</h1>
                <img
                    src={jumbotronAbout}
                    alt="Jumbotron"
                    className="position-absolute top-0 start-0 text-white"
                    style={{ width: "106%", height: "100vh", objectFit: "cover", zIndex: -1, transform: "translateX(-5%)" }} />
                <p className="text-white"  style={{ maxWidth: "700px", margin: "2rem auto", fontSize: "1.2rem" }}>
                    Benvenuti nel nostro negozio di abbigliamento! Da anni selezioniamo con cura capi di tendenza e di qualità per offrirvi uno stile unico e sempre attuale.
                    Nel nostro store troverete collezioni per uomo e donna, accessori e novità ogni stagione.
                    La nostra missione è farvi sentire a vostro agio in ogni occasione, con abiti che rispecchiano la vostra personalità.
                    Passione, attenzione al cliente e amore per la moda sono i nostri valori. Venite a trovarci e scoprite il piacere di vestirvi bene!
                </p>
            </main>
        </>
    )
}