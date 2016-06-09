function flipperScaling(container, front, back, sec, persp) {
    var trans = kony.ui.makeAffineTransform();
    trans.rotate3D(180, 0, 1, 0);
    back.transform = trans;
    var side = 0,
        inprogress = 0,
        time = sec / 2;
    return function() {
        if (inprogress) return;
        if (!side) {
            var trans1 = kony.ui.makeAffineTransform();
            trans1.setPerspective(persp);
            trans1.scale3D(0.5, 0.5, 1);
            trans1.rotate3D(90, 0, 1, 0);
            var anim1 = kony.ui.createAnimation({
                100: {
                    transform: trans1
                }
            });
            container.animate(anim1, {
                duration: time,
                iterationCount: 1,
                fillMode: kony.anim.FILL_MODE_FORWARDS
            }, {
                animationStart: function() {
                    inprogress = 1;
                },
                animationEnd: function() {
                    front.isVisible = false;
                    var trans1 = kony.ui.makeAffineTransform();
                    trans1.setPerspective(persp);
                    trans1.scale3D(0.5, 0.5, 1);
                    trans1.rotate3D(90, 0, 1, 0);
                    var trans2 = kony.ui.makeAffineTransform();
                    trans2.setPerspective(persp);
                    trans1.scale3D(1, 1, 1);
                    trans2.rotate3D(180, 0, 1, 0);
                    container.animate(kony.ui.createAnimation({
                        0: {
                            transform: trans1
                        },
                        100: {
                            transform: trans2
                        }
                    }), {
                        duration: time,
                        iterationCount: 1,
                        fillMode: kony.anim.FILL_MODE_FORWARDS
                    }, {
                        animationEnd: function() {
                            side = 1;
                            inprogress = 0;
                            //cb && cb.call(this,side);
                        }
                    });
                }
            });
        } else {
            var trans1 = kony.ui.makeAffineTransform();
            trans1.setPerspective(persp);
            trans1.scale3D(1, 1, 1);
            trans1.rotate3D(180, 0, 1, 0);
            var trans2 = kony.ui.makeAffineTransform();
            trans2.setPerspective(persp);
            trans2.scale3D(0.5, 0.5, 1);
            trans2.rotate3D(90, 0, 1, 0);
            var anim1 = kony.ui.createAnimation({
                0: {
                    transform: trans1
                },
                100: {
                    transform: trans2
                }
            });
            container.animate(anim1, {
                duration: time,
                iterationCount: 1,
                fillMode: kony.anim.FILL_MODE_FORWARDS
            }, {
                animationStart: function() {
                    inprogress = 1;
                },
                animationEnd: function() {
                    front.isVisible = true;
                    var trans1 = kony.ui.makeAffineTransform();
                    trans1.setPerspective(persp);
                    trans1.scale3D(0.5, 0.5, 1);
                    trans1.rotate3D(90, 0, 1, 0);
                    var trans2 = kony.ui.makeAffineTransform();
                    trans2.setPerspective(persp);
                    trans1.scale3D(1, 1, 1);
                    trans2.rotate3D(0, 0, 1, 0);
                    container.animate(kony.ui.createAnimation({
                        0: {
                            transform: trans1
                        },
                        100: {
                            transform: trans2
                        }
                    }), {
                        duration: time,
                        iterationCount: 1,
                        fillMode: kony.anim.FILL_MODE_FORWARDS
                    }, {
                        animationEnd: function() {
                            side = 0;
                            inprogress = 0;
                            //cb && cb.call(this,side);
                        }
                    });
                }
            });
        }
    }
}