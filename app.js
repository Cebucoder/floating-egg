const tl = gsap.timeline({defaults: {duration: 0.75}})

// ball animation
tl.fromTo('.ball', {y: -30}, {y: 0, yoyo: true, repeat: -1})
tl.fromTo('.shadow', {scale: 1.2}, {scale: 1.5 ,yoyo: true, repeat: -1},'<')
