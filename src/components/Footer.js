import React from 'react';

const Footer = () => {
    return (
            <div className="footer">
                <div className='containerFooter'>
                    <div className='chocoPop'>
                        <h3>Choco Pap</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fugiat at quia consequatur reiciendis obcaecati, perspiciatis repellat. Officia, deserunt pariatur?</p>
                    </div>
                    <div className='contact'>
                        <h3>Contact</h3>
                        <p>Adresse : 51 rue du chocolat 75000 Paris</p>
                        <p>Téléphone : 01 23 42 67 89</p>
                        <p>Horaires : 9h00-17h00 du Lundi au Vendredi</p>
                    </div>
                    <div className='icone'>
                        <a href='www.google.com'><img src="/images/pngegg4.png" alt="logo instagram"></img></a>
                        <a href='www.google.com'><img src="/images/pngegg3.png" alt="logo facebook"></img></a>
                        <a href='www.google.com'><img src="/images/pngegg2.png" alt="logo twitter"></img></a>
                    </div>
                </div>
            </div>
    );
};

export default Footer;