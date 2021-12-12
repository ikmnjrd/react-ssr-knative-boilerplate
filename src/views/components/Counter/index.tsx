import * as React from "react";
import * as ReactDOM from "react-dom";

import Counter from "./Counter";

ReactDOM.hydrate(
    <Counter />,
    document.getElementById("counter")
);