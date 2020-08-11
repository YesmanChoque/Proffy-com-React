import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://is.gd/HsrKqI" alt="Yesman Choque"/>
                <div>
                    <strong>Yesman Choque</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de matemática avançada.
                <br /><br />
                Apaixonado por resolver cálculos matématicos e por mudar a vida das pessoas através de experiências.      
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>


        </article>
    );
}

export default TeacherItem;