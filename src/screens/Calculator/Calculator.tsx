import React from "react";
import { DisplayCalc } from "../../components/display/Display";
import {Buttons} from "../../components/Buttons/Buttons";



export function Calculator() {
    const [value, setValue] = React.useState(0);
    const [memory, setMemory] = React.useState(0);
    const [operator, setOperator] = React.useState("");
    return (
        <div>
            <DisplayCalc value={value} setValue={setValue}/>
            <Buttons
                setMemory={setMemory}
                setOperator={setOperator}
                setValue={setValue}
                value={value}
                memory={memory}
                operator={operator}
            />
        </div>
    );
}
