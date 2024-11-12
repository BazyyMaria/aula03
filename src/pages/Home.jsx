import {useEffect, useState} from "react";
import styles from "./Home.module.css";

export default function Home() {
    const [produtos, setProdutos] = useState([]);


useEffect(() => {
    const receberListaProdutos = async () => {
        try {
            const resposta = await fetch('https://fakestoreapi.com/products');
            const dados = await resposta.json();
            setProdutos(dados);
       } catch (erro) {
           console.error("Erro ao buscar produtos:", erro);
         }
      };

    receberListaProdutos();
}, []); 

return (
    <>

       <h1>Lista de Produtos</h1>
       <ul>
           {produtos.map((produto) => (
               <li key={produto.id}>
                   <h2>{produto.title}</h2>
                   <p>{produto.description}</p>
                   <p>Preço: R${produto.price}</p>
                   <img src={produto.image} alt={produto.title} width={100} />
               </li>
            ))}
       </ul>
    </>
  );
}