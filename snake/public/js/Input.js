export class Input {

    static init() {

        // Key Down Event
        document.addEventListener('keydown', event => {

            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            switch (event.code) {
                default: break;

                case 'Escape':          Input.Key.Escape = true;            break;
                case 'Insert':          Input.Key.Insert = true;            break;
                case 'Delete':          Input.Key.Delete = true;            break;
                case 'Backquote':       Input.Key.Backquote = true;         break;
                case 'Backspace':       Input.Key.Backspace = true;         break;
                case 'Enter':           Input.Key.Enter = true;             break;
                case 'Tab':             Input.Key.Tab = true;               break;
                case 'ShiftLeft':       Input.Key.ShiftLeft = true;         break;
                case 'ShiftRight':      Input.Key.ShiftRight = true;        break;
                case 'Minus':           Input.Key.Minus = true;             break;
                case 'Equal':           Input.Key.Equal = true;             break;
                case 'BracketLeft':     Input.Key.BracketLeft = true;       break;
                case 'BracketRight':    Input.Key.BracketRight = true;      break;
                case 'Backslash':       Input.Key.Backslash = true;         break;
                case 'IntlBackslash':   Input.Key.IntlBackslash = true;     break;
                case 'Comma':           Input.Key.Comma = true;             break;
                case 'Period':          Input.Key.Period = true;            break;
                case 'Slash':           Input.Key.Slash = true;             break;
                case 'ControlLeft':     Input.Key.ControlLeft = true;       break;
                case 'ControlRight':    Input.Key.ControlRight = true;      break;
                case 'AltRight':        Input.Key.AltRight = true;          break;
                case 'Space':           Input.Key.Space = true;             break;

                case 'ArrowLeft':       Input.Key.ArrowLeft = true;         break;
                case 'ArrowUp':         Input.Key.ArrowUp = true;           break;
                case 'ArrowRight':      Input.Key.ArrowRight = true;        break;
                case 'ArrowDown':       Input.Key.ArrowDown = true;         break;

                case 'Digit1':          Input.Key.Digit1 = true;            break;
                case 'Digit2':          Input.Key.Digit2 = true;            break;
                case 'Digit3':          Input.Key.Digit3 = true;            break;
                case 'Digit4':          Input.Key.Digit4 = true;            break;
                case 'Digit5':          Input.Key.Digit5 = true;            break;
                case 'Digit6':          Input.Key.Digit6 = true;            break;
                case 'Digit7':          Input.Key.Digit7 = true;            break;
                case 'Digit8':          Input.Key.Digit8 = true;            break;
                case 'Digit9':          Input.Key.Digit9 = true;            break;
                case 'Digit0':          Input.Key.Digit0 = true;            break;

                case 'KeyQ':            Input.Key.Q = true;                 break;
                case 'KeyW':            Input.Key.W = true;                 break;
                case 'KeyE':            Input.Key.E = true;                 break;
                case 'KeyR':            Input.Key.R = true;                 break;
                case 'KeyT':            Input.Key.T = true;                 break;
                case 'KeyY':            Input.Key.Y = true;                 break;
                case 'KeyU':            Input.Key.U = true;                 break;
                case 'KeyI':            Input.Key.I = true;                 break;
                case 'KeyO':            Input.Key.O = true;                 break;
                case 'KeyP':            Input.Key.P = true;                 break;

                case 'KeyA':            Input.Key.A = true;                 break;
                case 'KeyS':            Input.Key.S = true;                 break;
                case 'KeyD':            Input.Key.D = true;                 break;
                case 'KeyF':            Input.Key.F = true;                 break;
                case 'KeyG':            Input.Key.G = true;                 break;
                case 'KeyH':            Input.Key.H = true;                 break;
                case 'KeyJ':            Input.Key.J = true;                 break;
                case 'KeyK':            Input.Key.K = true;                 break;
                case 'KeyL':            Input.Key.L = true;                 break;

                case 'KeyZ':            Input.Key.Z = true;                 break;
                case 'KeyX':            Input.Key.X = true;                 break;
                case 'KeyC':            Input.Key.C = true;                 break;
                case 'KeyV':            Input.Key.V = true;                 break;
                case 'KeyB':            Input.Key.B = true;                 break;
                case 'KeyN':            Input.Key.N = true;                 break;
                case 'KeyM':            Input.Key.M = true;                 break;

            }

        });

        // Key Up Event
        document.addEventListener('keyup', event => {

            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            switch (event.code) {
                default: break;

                case 'Escape':          Input.Key.Escape = false;            break;
                case 'Insert':          Input.Key.Insert = false;            break;
                case 'Delete':          Input.Key.Delete = false;            break;
                case 'Backquote':       Input.Key.Backquote = false;         break;
                case 'Backspace':       Input.Key.Backspace = false;         break;
                case 'Enter':           Input.Key.Enter = false;             break;
                case 'Tab':             Input.Key.Tab = false;               break;
                case 'ShiftLeft':       Input.Key.ShiftLeft = false;         break;
                case 'ShiftRight':      Input.Key.ShiftRight = false;        break;
                case 'Minus':           Input.Key.Minus = false;             break;
                case 'Equal':           Input.Key.Equal = false;             break;
                case 'BracketLeft':     Input.Key.BracketLeft = false;       break;
                case 'BracketRight':    Input.Key.BracketRight = false;      break;
                case 'Backslash':       Input.Key.Backslash = false;         break;
                case 'IntlBackslash':   Input.Key.IntlBackslash = false;     break;
                case 'Comma':           Input.Key.Comma = false;             break;
                case 'Period':          Input.Key.Period = false;            break;
                case 'Slash':           Input.Key.Slash = false;             break;
                case 'ControlLeft':     Input.Key.ControlLeft = false;       break;
                case 'ControlRight':    Input.Key.ControlRight = false;      break;
                case 'AltRight':        Input.Key.AltRight = false;          break;
                case 'Space':           Input.Key.Space = false;             break;

                case 'ArrowLeft':       Input.Key.ArrowLeft = false;         break;
                case 'ArrowUp':         Input.Key.ArrowUp = false;           break;
                case 'ArrowRight':      Input.Key.ArrowRight = false;        break;
                case 'ArrowDown':       Input.Key.ArrowDown = false;         break;

                case 'Digit1':          Input.Key.Digit1 = false;            break;
                case 'Digit2':          Input.Key.Digit2 = false;            break;
                case 'Digit3':          Input.Key.Digit3 = false;            break;
                case 'Digit4':          Input.Key.Digit4 = false;            break;
                case 'Digit5':          Input.Key.Digit5 = false;            break;
                case 'Digit6':          Input.Key.Digit6 = false;            break;
                case 'Digit7':          Input.Key.Digit7 = false;            break;
                case 'Digit8':          Input.Key.Digit8 = false;            break;
                case 'Digit9':          Input.Key.Digit9 = false;            break;
                case 'Digit0':          Input.Key.Digit0 = false;            break;

                case 'KeyQ':            Input.Key.Q = false;                 break;
                case 'KeyW':            Input.Key.W = false;                 break;
                case 'KeyE':            Input.Key.E = false;                 break;
                case 'KeyR':            Input.Key.R = false;                 break;
                case 'KeyT':            Input.Key.T = false;                 break;
                case 'KeyY':            Input.Key.Y = false;                 break;
                case 'KeyU':            Input.Key.U = false;                 break;
                case 'KeyI':            Input.Key.I = false;                 break;
                case 'KeyO':            Input.Key.O = false;                 break;
                case 'KeyP':            Input.Key.P = false;                 break;

                case 'KeyA':            Input.Key.A = false;                 break;
                case 'KeyS':            Input.Key.S = false;                 break;
                case 'KeyD':            Input.Key.D = false;                 break;
                case 'KeyF':            Input.Key.F = false;                 break;
                case 'KeyG':            Input.Key.G = false;                 break;
                case 'KeyH':            Input.Key.H = false;                 break;
                case 'KeyJ':            Input.Key.J = false;                 break;
                case 'KeyK':            Input.Key.K = false;                 break;
                case 'KeyL':            Input.Key.L = false;                 break;

                case 'KeyZ':            Input.Key.Z = false;                 break;
                case 'KeyX':            Input.Key.X = false;                 break;
                case 'KeyC':            Input.Key.C = false;                 break;
                case 'KeyV':            Input.Key.V = false;                 break;
                case 'KeyB':            Input.Key.B = false;                 break;
                case 'KeyN':            Input.Key.N = false;                 break;
                case 'KeyM':            Input.Key.M = false;                 break;

            }

        });

    }

    static Key = {

        Escape: false,
        Insert: false,
        Delete: false,
        Backquote: false,
        Backspace: false,
        Enter: false,
        Tab: false,
        ShiftLeft: false,
        ShiftRight: false,
        Minus: false,
        Equal: false,
        BracketLeft: false,
        BracketRight: false,
        Backslash: false,
        IntlBackslash: false,
        Comma: false,
        Period: false,
        Slash: false,
        ControlLeft: false,
        ControlRight: false,
        AltRight: false,
        Space: false,

        ArrowLeft: false,
        ArrowUp: false,
        ArrowRight: false,
        ArrowDown: false,

        Digit1: false,
        Digit2: false,
        Digit3: false,
        Digit4: false,
        Digit5: false,
        Digit6: false,
        Digit7: false,
        Digit8: false,
        Digit9: false,
        Digit0: false,

        Q: false,
        W: false,
        E: false,
        R: false,
        T: false,
        Y: false,
        U: false,
        I: false,
        O: false,
        P: false,

        A: false,
        S: false,
        D: false,
        F: false,
        G: false,
        H: false,
        J: false,
        K: false,
        L: false,

        Z: false,
        X: false,
        C: false,
        V: false,
        B: false,
        N: false,
        M: false

    }

}