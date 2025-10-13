import React, { useEffect, useState } from "react";
import db from "../firebase";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import Detales from "../Interfaces/detales";
import Plant from "../Interfaces/plant";

const PopulateDetalesInPlants: React.FC = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const populate = async () => {
      try {
        console.log("🌿 Iniciando processo de vinculação de receitas às plantas...");

        // Busca todas as plantas
        const plantsSnap = await getDocs(collection(db, "plants"));

        for (const plantDoc of plantsSnap.docs) {
          const plantId = plantDoc.id;

          // Busca os detalhes (receitas) relacionados a essa planta
          const detalesSnap = await getDocs(
            query(collection(db, "detales"), where("plantId", "==", plantId))
          );

          const detalesList: Detales[] = detalesSnap.docs.map(
            (doc) => doc.data() as Detales
          );

          // Atualiza a planta adicionando o array de detalhes
          if (detalesList.length > 0) {
            await updateDoc(doc(db, "plants", plantId), {
              detales: detalesList,
            });

            console.log(
              `✅ Planta ${plantId} atualizada com ${detalesList.length} receitas.`
            );
          } else {
            console.log(`⚠️ Planta ${plantId} não possui receitas relacionadas.`);
          }
        }

        console.log("🎉 Processo concluído com sucesso!");
        setDone(true);
      } catch (error) {
        console.error("❌ Erro ao vincular detalhes às plantas:", error);
      }
    };

    if (!done) populate();
  }, [done]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Populando plantas com receitas (detales)</h2>
      {done ? (
        <p>✅ Processo concluído com sucesso!</p>
      ) : (
        <p>⏳ Atualizando dados no Firestore...</p>
      )}
    </div>
  );
};

export default PopulateDetalesInPlants;
