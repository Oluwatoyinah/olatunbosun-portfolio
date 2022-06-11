import React from 'react';
import ToolsData from './ToolsData';
import Tool from './Tool';

const Tools = () => {
  return (
    <section className="container-fluid tools">
        <div className="container">
            <div className="row">
                <h1 className="right">.tools</h1>
            </div>
            <div className="row tech">
                { ToolsData.map((tool, i) => <Tool 
                key={i}
                imgUrl={tool.imgurl}
                toolname={tool.toolname}/> ) }
            </div>                              
        </div>
    </section>
  )
}

export default Tools