import React from React

const events = props.events.event;

export const Event = props => (

    <div class="item" key={events.id}>
        <div class="image">
            <img src={events.image.medium.url}/>{props.children}
        </div>
        <div class="content">
            <h3 class="header">{events.title}</h3>
            <div class="meta">
                <span class="date">{events.start_time}</span>
                <span class="location">{events.city_name}, {events.region_name}</span>
            </div>

            <div class="description">
                <p>{events.description}</p>
            </div>
            <div class="extra">
                <a href={events.url} target="_blank">Additional Details</a>
                <div class="ui label category">Pending</div>
            </div>
        </div>
    </div>
);