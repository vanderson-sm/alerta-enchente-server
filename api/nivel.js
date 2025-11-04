import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let nivelAtual = 0;

// Rota para receber dados do ESP32
app.post("/api/nivel", (req, res) => {
    nivelAtual = req.body.nivel;
    console.log("Nível recebido:", nivelAtual);
    res.json({ status: "ok", nivel: nivelAtual });

    if (nivelAtual > 30){
        res.json({ status: "ok", nivel: "alerta" });
    }




});

// Rota para o app consultar o nível
app.get("/api/nivel", (req, res) => {
    res.json({ nivel: nivelAtual });
});

// Exporta como handler para a Vercel
export default app;