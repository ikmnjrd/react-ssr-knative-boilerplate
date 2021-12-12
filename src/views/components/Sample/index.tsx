import * as React from "react";
import * as ReactDOM from "react-dom";

import Sample from "./Sample";

ReactDOM.hydrate(
    <Sample hoge="TypeScript" framework="Express" library="React" />,
    document.getElementById("sample")
);