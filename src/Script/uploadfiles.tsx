import React, { useEffect, useState } from "react";
import db from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import plantsData from "./plants.json"
import Plant from "../Interfaces/plant"

const UploadPlants: React.FC = () => {
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const enviarPlantas = async () => {
      if (enviado) return;

      try {
        const colecaoRef = collection(db, "plants");

        for (const plant of plantsData as Plant[]) {
          const docRef = doc(colecaoRef, plant.id);

          // Adiciona ou atualiza parcialmente (merge)
          await setDoc(docRef, plant, { merge: true });
        }

        console.log("✅ Todas as plantas foram enviadas com merge!");
        setEnviado(true);
      } catch (erro) {
        console.error("❌ Erro ao enviar plantas:", erro);
      }
    };

    enviarPlantas();
  }, [enviado]);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      {enviado ? "✅ Plantas enviadas com sucesso (com merge)!" : "⏳ Enviando plantas..."}
    </div>
  );
};

export default UploadPlants;
