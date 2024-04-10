const magneto = document.querySelector('.home-img');
// const magnetoText = document.querySelector('.home-img img');

const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect();
    const magnetoStrenght = 220;
    // const magnetoTextStrenght = 80;
    const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
    const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrenght,
        y: newY * magnetoStrenght,
        ease: Power4.easeOut
    });
    // gsap.to(magnetoText, {
    //     duration: 1,
    //     x: newX * magnetoTextStrenght,
    //     y: newY * magnetoTextStrenght,
    //     ease: Power4.easeOut
    // });
};

const resetMagneto = (event) => {
    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });
    // gsap.to(magnetoText, {
    //     duration: 1,
    //     x: 0,
    //     y: 0,
    //     ease: Elastic.easeOut
    // });
};

magneto.addEventListener('mousemove', activateMagneto);
magneto.addEventListener('mouseleave', resetMagneto);
