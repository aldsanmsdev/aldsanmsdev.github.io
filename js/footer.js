document.write(
    '<div class="footer-container">'+
        '<div class="footer-section">'+
            '<h3>'+footer.i1[lan]+'</h3>'+
            '<ul class="social-media">'+
                '<li><a href="'+ReseauxSociaux.facebook+'" target="_blank">Facebook</a></li>'+
                '<li><a href="'+ReseauxSociaux.instagram+'" target="_blank">Instagram</a></li>'+
            '</ul>'+
        '</div>'+
        '<div class="footer-section">'+
            '<h3>'+footer.i2[lan]+'</h3>'+
            '<p>'+all.nom[lan]+'</p>'+
            '<p>'+all.adresse[lan]+'</p>'+
            '<p>'+all.ville[lan]+", "+all.pays[lan]+", "+all.cp[lan]+'</p>'+
            '<p>'+all.num[lan]+'</p>'+
            '<p>'+all.adresseEmail[lan]+'</p>'+
        '</div>'+
        '<div class="footer-section">'+
            '<h3>'+footer.i5[lan]+'</h3>'+
            '<ul class="navigation">'+
                '<li><a href="accueil.html#accueil">'+baniere.l1[lan]+'</a></li>'+
                '<li><a href="accueil.html#menu">'+baniere.l2[lan]+'</a></li>'+
                '<li><a href="accueil.html#info">'+baniere.l3[lan]+'</a></li>'+
                '<li><a href="accueil.html#contact">'+baniere.l4[lan]+'</a></li>'+
            '</ul>'+
        '</div>'+
    '</div>'+
    '<div class="credits">'+
    '<p>'+footer.i6[lan]+'</p>'+
    '<p>'+footer.i7[lan]+ '<a id="sign" href="https://www.linkedin.com/in/aldryck-sanchez-157312206/" target="_blank"> Sanchez Aldryck</a></p>'+
    '</div>'
);