import React, { useEffect, useState } from "react";
import db from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

// Dados locais
import plantsData from "./plants_collection.json"
import detalesData from "./detales_collection.json";

import Plant from "../Interfaces/plant";
import Detales from "../Interfaces/detales";

const UploadData: React.FC = () => {
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const enviarDados = async () => {
      if (enviado) return;

      try {
        // Referências das coleções
        const plantsRef = collection(db, "plants");
        const detalesRef = collection(db, "detales");

        //  Upload das plantas
        console.log("🌿 Enviando plantas...");
        for (const plant of plantsData as Plant[]) {
          const docRef = doc(plantsRef, plant.id);
          await setDoc(docRef, plant, { merge: true });
        }
        console.log("✅ Todas as plantas foram enviadas!");

        //  Upload dos detalhes
        console.log("🍵 Enviando receitas (detales)...");
        for (const detale of detalesData as Detales[]) {
          const docRef = doc(detalesRef, detale.id);
          await setDoc(docRef, detale, { merge: true });
        }
        console.log("✅ Todas as receitas foram enviadas!");

        setEnviado(true);
      } catch (erro) {
        console.error("❌ Erro ao enviar dados:", erro);
      }
    };

    enviarDados();
  }, [enviado]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Upload de Dados para o Firebase</h2>
      {enviado ? (
        <p>✅ Upload concluído com sucesso!</p>
      ) : (
        <p>⏳ Enviando dados para o Firestore...</p>
      )}
    </div>
  );
};

export default UploadData;
