let adjust = 0
let time = ""
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    let minutes = 0
    let ampm = 0
    let hours = 0
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else if (hours == 0) {
            adjust = 12
        }
        
    }
    
    time = "" + ("" + adjust)
    time = "" + time + ":"
    if (minutes < 10) {
        time = "" + time + "0"
    }
    
    time = "" + time + ("" + minutes)
    if (ampm) {
        if (hours > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
        
    }
    
    basic.showString(time)
})
