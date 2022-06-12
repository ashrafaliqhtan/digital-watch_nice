adjust = 0
time = ""

def on_gesture_shake():
    global adjust, time
    minutes = 0
    ampm = 0
    hours = 0
    adjust = hours
    if ampm:
        if hours > 12:
            adjust = hours - 12
        else:
            if hours == 0:
                adjust = 12
    time = "" + str(adjust)
    time = "" + time + ":"
    if minutes < 10:
        time = "" + time + "0"
    time = "" + time + str(minutes)
    if ampm:
        if hours > 11:
            time = "" + time + "PM"
        else:
            time = "" + time + "AM"
    basic.show_string(time)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
