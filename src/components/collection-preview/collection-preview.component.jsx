import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, match, history }) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((_, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
)
export default withRouter(CollectionPreview);