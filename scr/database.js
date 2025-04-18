import * as SQLite from 'expo-sqlite'
import React, {useEffect} from 'react';
import palavras from '/.scr/palavras';

const db = SQLite.openDatabaseAsync('braille.db');

const initDatabase = () => {
        db.transaction(tx=>{
            tx.executeSql (
                `CREATE TABLE IF NOT EXISTS palavras (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    texto TEXT NOT NULL,
                    letra TEXT NOT NULL,
                    posicao INTEGER NOT NULL,
                    dica TEXT,
                );`,
                [],
                ()=> console.log('Tabela Criada'),
                (__,error)=> console.log('Erro ao criar tabela:', error)
            );
        });
};

db.transaction(tx =>{
    palavras.forEach(palavra=>{
        tx.executeSql(
            `INSER INTO palavras(texto, letra, posicao, dica) VALUES(?,?,?,?)`, 
            [palavra.texto, palavra.letra, palavra.posiscao, palavra.dica],
            () => console.log(`Palavra $'{palavra.texto}' inserida com sucesso!`),
            (_,error) => console.log('Erro ao inserir palavra:', error)
        );
    });
});

const carregarPalavras = () => {
    db.transaction(tx=>{
        tx.executeSql(
            `SELECT * FROM palavras`,
            [],
            (_,{rows}) => {
                console.log('Palavras carregadas', rows._array);
            },
            (_,error)=> console.log('Erro ao carregar palavras:', error)
        );
    });
};


export default function App() {
    useEffect(() => {
      initDatabase(); 
    }, []);
}