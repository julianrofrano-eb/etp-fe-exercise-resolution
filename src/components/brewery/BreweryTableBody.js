import React from 'react';

import EditListItem from 'eventbrite_design_system/editListItem/EditListItem';
import Icon from 'eventbrite_design_system/icon/Icon';

import StatusDotChunkySvg from 'eventbrite_design_system/iconography/icons/StatusDotChunky';


const StatusLabel = ({ url }) => (
    <div
        className="eds-l-pad-right-2"
    >
        <span className="eds-text-color--grey-900">
            <Icon type={<StatusDotChunkySvg />} color="ui-green" />
            {url}
        </span>
    </div>
);

const Venue = ({ city, street }) => (
    <div
        className="eds-l-mar-vert-1"
    >
        <p>{city}</p>
        <p>{street}</p>
    </div>
);

const TertiaryContent = ({ websiteUrl }) => (
    <StatusLabel url={websiteUrl} />
);

const BreweryTableBody = ({ breweryList }) => {
    const items = breweryList.map(({
        id,
        name,
        websiteUrl,
        logoUrl,
        street,
        city,
    }) => (
        <EditListItem
            key={id}
            content={name}
            secondaryContent={<Venue city={city} street={street} />}
            tertiaryContent={
                <TertiaryContent websiteUrl={websiteUrl} />
            }
            imageUrl={logoUrl}
            isSquareImage={true}
            actionItems={[]}
            noWrap={true}
        />
    ));

    return (
        <section>
            {items}
        </section>
    );
};

export default BreweryTableBody;
