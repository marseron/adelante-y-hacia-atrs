basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
})
