new fullpage('#fullpage', {
    sectionsColor: ['white', '#999', 'white', 'white'],
});

new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function (origin, destination, direction) {
        console.log("Leaving section" + origin.index);
    },
});
