"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToTest = (path) => {
    router.push(path);
  };

  return (
    <div>
      <h1>Testes de perfomance</h1>
      <button onClick={() => goToTest("/loadRows")}>Carregar Linhas</button>
      <button onClick={() => goToTest("/updateRows")}>Atualizar Linhas</button>
      <button onClick={() => goToTest("/selectRow")}>Selecionar Linha</button>
      <button onClick={() => goToTest("/editRow")}>Editar Linha</button>
      <button onClick={() => goToTest("/createRows")}>Criar Linhas</button>
      <button onClick={() => goToTest("/deleteRows")}>Deletar Linhas</button>
    </div>
  );
}
