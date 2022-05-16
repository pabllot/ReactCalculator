import { ACTIONS } from "./App"
import Button from "@material-ui/core/Button"

export default function OperationButton({ dispatch, operation }) {
    return (
        <Button color='primary' style={{borderRadius: 0}}
          onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
        >
            {operation}
        </Button>
    )
}

