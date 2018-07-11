import React from React
/*here is where we can import other child components or mongo collections (database)*/
export default class Event  extends React.Component {

export const Event = props => (

    <div className="item">
        {props.children}

    </div>
);
