import * as React from "react";

export interface SampleProps { hoge: string; framework: string; library: string; }

const Sample:React.VFC<SampleProps> = (props) => {

  return (<h1>{`Hello from ${props.hoge || "a"} and ${props.framework || ""} and ${props.library || ""}!`}</h1>);
}

export default Sample;