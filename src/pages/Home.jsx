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
        <h1 className={styles.titulo}>Lista de Produtos</h1>
        <ul className={styles.listaProdutos}>
            {produtos.map((produto) => (
                <li key={produto.id} className={styles.produto}>
                    <img src={produto.image} alt={produto.title} className={styles.imagemProduto} />
                    <h2 className={styles.tituloProduto}>{produto.title}</h2>
                    <p className={styles.descricaoProduto}>{produto.description}</p>
                    <p className={styles.precoProduto}>Preço: R${produto.price}</p>
                </li>
            ))}
        </ul>
    </>
  );
}