import { ACTIONS } from "./App"
import Button from "@material-ui/core/Button"

export default function DigitButton({ dispatch, digit }) {
    return (
        <Button color='primary' style={{borderRadius: 0}}
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </Button>
    )
}

